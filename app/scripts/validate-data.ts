import { EQUIPMENT, INGREDIENTS, PRICES, PRICE_DATE, RECIPES } from "../lib/data";
import { normalizeIngredientText } from "../lib/ingredients";

const UNITS = new Set(["g", "ml", "butir", "ikat", "siung", "lembar", "batang", "buah"]);
const CATEGORIES = new Set(["protein", "sayur", "bumbu", "buah", "susu", "pokok", "kemasan"]);
const DIETS = new Set(["vegetarian", "vegan", "halal"]);
const ALLERGENS = new Set(["telur", "susu", "ikan", "udang", "kacang", "kedelai", "gluten"]);
const RECIPE_TARGET = 150;
const INGREDIENT_TARGET = 150;
const PRICE_TARGET = 150;
const COVERAGE_TARGET = 8;

const errors: string[] = [];
const warnings: string[] = [];
const fail = (message: string) => errors.push(message);
const warn = (message: string) => warnings.push(message);

function duplicates(values: string[]): string[] {
  const seen = new Set<string>();
  const repeated = new Set<string>();
  for (const value of values) {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }
  return [...repeated];
}

// ---------------------------------------------------------------- ingredients
const ingredientIds = new Set<string>();
const ingredientNames = new Set<string>();
const aliasOwner = new Map<string, string>();

for (const ingredient of INGREDIENTS) {
  const label = ingredient.id || "(missing id)";
  if (!/^ing_[a-z0-9]+$/.test(ingredient.id)) fail(`${label}: id must match ing_[a-z0-9]+`);
  if (ingredientIds.has(ingredient.id)) fail(`${label}: duplicate ingredient id`);
  ingredientIds.add(ingredient.id);

  const nameKey = normalizeIngredientText(ingredient.name);
  if (!nameKey) fail(`${label}: empty name`);
  if (ingredientNames.has(nameKey)) fail(`${label}: duplicate ingredient name "${ingredient.name}"`);
  ingredientNames.add(nameKey);

  if (!UNITS.has(ingredient.unit)) fail(`${label}: unknown unit "${ingredient.unit}"`);
  if (!CATEGORIES.has(ingredient.category)) fail(`${label}: unknown category "${ingredient.category}"`);
  if (ingredient.kcal100 !== null && (ingredient.kcal100 < 0 || ingredient.kcal100 > 900)) {
    fail(`${label}: kcal100 ${ingredient.kcal100} outside 0..900`);
  }
  for (const allergen of ingredient.allergens) {
    if (!ALLERGENS.has(allergen)) fail(`${label}: unknown allergen "${allergen}"`);
  }
  if (!Array.isArray(ingredient.aliases) || ingredient.aliases.length < 2) {
    fail(`${label}: needs at least 2 aliases`);
    continue;
  }

  let usefulAlias = false;
  for (const rawAlias of ingredient.aliases) {
    const alias = normalizeIngredientText(rawAlias);
    if (!alias) {
      fail(`${label}: empty alias`);
      continue;
    }
    if (alias === nameKey) {
      fail(`${label}: alias repeats the ingredient name`);
      continue;
    }
    usefulAlias = true;
    const owner = aliasOwner.get(alias);
    if (owner && owner !== ingredient.id) {
      fail(`${label}: alias "${rawAlias}" already belongs to ${owner}`);
    }
    if (!owner && ingredientNames.has(alias) && alias !== nameKey) {
      fail(`${label}: alias "${rawAlias}" collides with another ingredient name`);
    }
    aliasOwner.set(alias, ingredient.id);
  }
  if (!usefulAlias) fail(`${label}: no usable alias`);
}

if (INGREDIENTS.length < INGREDIENT_TARGET) {
  warn(`only ${INGREDIENTS.length} of ${INGREDIENT_TARGET} ingredient classes`);
}

// ---------------------------------------------------------------- prices
const priceIds = new Set<string>();
for (const price of PRICES) {
  const label = price.ingredientId || "(missing ingredient)";
  if (!ingredientIds.has(price.ingredientId)) fail(`${label}: price for an unknown ingredient`);
  if (priceIds.has(price.ingredientId)) fail(`${label}: duplicate price row`);
  priceIds.add(price.ingredientId);
  if (!(price.perUnit > 0)) fail(`${label}: perUnit must be positive`);
  if (!(price.packSize > 0)) fail(`${label}: packSize must be positive`);
  if (!(price.packPrice > 0)) fail(`${label}: packPrice must be positive`);
  if (Math.abs(price.packPrice - price.perUnit * price.packSize) > 1) {
    fail(`${label}: packPrice ${price.packPrice} does not match perUnit × packSize (${price.perUnit * price.packSize})`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(price.date) || Number.isNaN(Date.parse(price.date))) {
    fail(`${label}: invalid price date "${price.date}"`);
  } else if (price.date > new Date().toISOString().slice(0, 10)) {
    fail(`${label}: price date is in the future`);
  }
  if (price.date !== PRICE_DATE) fail(`${label}: price date ${price.date} differs from PRICE_DATE ${PRICE_DATE}`);
}
for (const ingredient of INGREDIENTS) {
  if (!priceIds.has(ingredient.id)) fail(`${ingredient.id}: missing price row`);
}
if (PRICES.length < PRICE_TARGET) warn(`only ${PRICES.length} of the ${PRICE_TARGET} price rows planned`);

// ---------------------------------------------------------------- recipes
const recipeIds = new Set<string>();
const recipeTitles = new Set<string>();
const usage = new Map<string, number>();

for (const recipe of RECIPES) {
  const label = recipe.id || "(missing recipe id)";
  if (!/^rcp_[a-z0-9_]+$/.test(recipe.id)) fail(`${label}: id must match rcp_[a-z0-9_]+`);
  if (recipeIds.has(recipe.id)) fail(`${label}: duplicate recipe id`);
  recipeIds.add(recipe.id);

  const titleKey = normalizeIngredientText(recipe.title);
  if (!titleKey) fail(`${label}: empty title`);
  if (recipeTitles.has(titleKey)) fail(`${label}: duplicate recipe title "${recipe.title}"`);
  recipeTitles.add(titleKey);

  if (!Number.isInteger(recipe.servings) || recipe.servings < 1 || recipe.servings > 8) {
    fail(`${label}: servings must be an integer from 1 to 8`);
  }
  if (!Number.isInteger(recipe.cookMin) || recipe.cookMin < 1 || recipe.cookMin > 45) {
    fail(`${label}: cookMin must be an integer from 1 to 45`);
  }
  if (!Array.isArray(recipe.equipment) || recipe.equipment.length === 0) {
    fail(`${label}: equipment is required`);
  } else {
    for (const tool of recipe.equipment) {
      if (!EQUIPMENT.includes(tool)) fail(`${label}: unknown equipment "${tool}"`);
    }
  }
  for (const diet of recipe.diet) {
    if (!DIETS.has(diet)) fail(`${label}: unknown diet tag "${diet}"`);
  }
  if (recipe.steps.length < 3 || recipe.steps.length > 8) {
    fail(`${label}: needs 3 to 8 steps, has ${recipe.steps.length}`);
  }
  for (const [index, step] of recipe.steps.entries()) {
    if (!step.trim()) fail(`${label}: step ${index + 1} is empty`);
    if (step.length > 240) fail(`${label}: step ${index + 1} is longer than 240 characters`);
  }
  if (!Number.isInteger(recipe.kcal) || recipe.kcal < 50 || recipe.kcal > 900) {
    fail(`${label}: kcal must be an integer from 50 to 900`);
  }
  if (!Number.isInteger(recipe.art) || recipe.art < 0 || recipe.art > 5) {
    fail(`${label}: art must be an integer from 0 to 5`);
  }
  if (recipe.ingredients.length < 3) fail(`${label}: needs at least 3 ingredients`);

  const seen = new Set<string>();
  let recipeCost = 0;
  for (const row of recipe.ingredients) {
    const ingredient = INGREDIENTS.find((item) => item.id === row.id);
    if (!ingredient) {
      fail(`${label}: unknown ingredient "${row.id}"`);
      continue;
    }
    if (seen.has(row.id)) fail(`${label}: ingredient "${row.id}" appears twice`);
    seen.add(row.id);
    usage.set(row.id, (usage.get(row.id) ?? 0) + 1);

    if (!UNITS.has(row.unit)) fail(`${label}: unknown unit "${row.unit}"`);
    if (row.unit !== ingredient.unit) {
      fail(`${label}: ${ingredient.name} uses ${row.unit}, but the ingredient unit is ${ingredient.unit}`);
    }
    if (!(row.qty > 0)) fail(`${label}: ${ingredient.name} needs a positive quantity`);
    if (row.optional !== undefined && typeof row.optional !== "boolean") {
      fail(`${label}: optional must be a boolean`);
    }
    const price = PRICES.find((item) => item.ingredientId === row.id);
    if (price) recipeCost += row.qty * price.perUnit;
  }
  if (recipeCost <= 0) fail(`${label}: computed cost is zero`);
}

if (RECIPES.length < RECIPE_TARGET) {
  warn(`only ${RECIPES.length} of the ${RECIPE_TARGET} recipes planned for M2`);
}

// ---------------------------------------------------------------- coverage
const unused: string[] = [];
const short: { id: string; count: number }[] = [];
for (const ingredient of INGREDIENTS) {
  const count = usage.get(ingredient.id) ?? 0;
  if (count === 0) {
    if (ingredient.assumed) warn(`${ingredient.id}: staple not referenced by a recipe`);
    else unused.push(ingredient.id);
  } else if (ingredient.core !== false && count < COVERAGE_TARGET) {
    short.push({ id: ingredient.id, count });
  }
}
for (const id of unused) fail(`${id}: ingredient is not used by any recipe`);

// ---------------------------------------------------------------- report
console.log(
  `data: ${INGREDIENTS.length} ingredients, ${PRICES.length} prices, ${RECIPES.length} recipes, price date ${PRICE_DATE}`,
);
if (short.length) {
  const sample = short
    .sort((a, b) => a.count - b.count)
    .slice(0, 12)
    .map((item) => `${item.id} (${item.count})`)
    .join(", ");
  warn(`${short.length} core ingredients appear in fewer than ${COVERAGE_TARGET} recipes: ${sample}`);
}

for (const message of warnings) console.warn(`WARN  ${message}`);
for (const message of errors) console.error(`FAIL  ${message}`);

if (errors.length) {
  console.error(`\n${errors.length} data error${errors.length === 1 ? "" : "s"} found.`);
  process.exit(1);
}

console.log(`PASS  data validation: ${warnings.length} warning${warnings.length === 1 ? "" : "s"}`);
