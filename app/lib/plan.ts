import type { Copy } from "./copy";
import { RECIPES, ingredientById, priceById } from "./data";
import { qty, rp } from "./format";
import type { DetectedItem, GroceryItem, Plan, Profile, Recipe } from "./types";

export function availableMap(items: DetectedItem[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const item of items) {
    map.set(item.id, (map.get(item.id) ?? 0) + item.qty);
  }
  return map;
}

export function groceryFor(recipe: Recipe, items: DetectedItem[], profile: Profile): GroceryItem[] {
  const avail = availableMap(items);
  return recipe.ingredients.map((ri) => {
    const ing = ingredientById.get(ri.id);
    const price = priceById.get(ri.id);
    const have = avail.get(ri.id) ?? 0;
    const staple = profile.staples && (ing?.assumed ?? false);
    const missing = staple ? 0 : Math.max(0, ri.qty - have);
    const packSize = price?.packSize ?? 1;
    const packPrice = price?.packPrice ?? 0;
    const packs = missing > 0 && packSize > 0 ? Math.ceil(missing / packSize) : 0;
    return {
      ingredientId: ri.id,
      name: ing?.name ?? ri.id,
      qty: ri.qty,
      unit: ri.unit,
      packs,
      packSize,
      packPrice,
      cost: packs * packPrice,
      leftover: Math.max(0, packs * packSize - missing),
      available: Math.min(have, ri.qty),
      missing,
    };
  });
}

function dietOk(recipe: Recipe, profile: Profile): boolean {
  if (profile.diet === "none") return true;
  if (profile.diet === "vegetarian") return recipe.diet.includes("vegetarian") || recipe.diet.includes("vegan");
  return recipe.diet.includes("vegan");
}

function equipmentOk(recipe: Recipe, profile: Profile): boolean {
  return recipe.equipment.every((tool) => profile.equipment.includes(tool));
}

function makePlan(recipe: Recipe, items: DetectedItem[], profile: Profile, relaxed: Plan["relaxed"]): Plan {
  const missing = groceryFor(recipe, items, profile);
  const cost = missing.reduce((sum, item) => sum + item.cost, 0);
  const countable = missing.filter((item) => !(profile.staples && (ingredientById.get(item.ingredientId)?.assumed ?? false)));
  const used = countable.filter((item) => item.missing === 0).length;
  return {
    recipe,
    cost,
    missingCost: cost,
    utilization: countable.length === 0 ? 1 : used / countable.length,
    missing,
    relaxed,
  };
}

function rank(plan: Plan, profile: Profile): number {
  const kcalGap = Math.abs(plan.recipe.kcal - profile.kcalTarget) / Math.max(1, profile.kcalTarget);
  return plan.utilization * 3 - kcalGap - plan.cost / 100000;
}

function pick(pool: Plan[], profile: Profile): Plan[] {
  const sorted = [...pool].sort((a, b) => rank(b, profile) - rank(a, profile));
  const chosen: Plan[] = [];
  const proteins = new Set<string>();
  for (const plan of sorted) {
    if (chosen.length === 3) break;
    if (proteins.has(plan.recipe.protein)) continue;
    proteins.add(plan.recipe.protein);
    chosen.push(plan);
  }
  for (const plan of sorted) {
    if (chosen.length === 3) break;
    if (!chosen.includes(plan)) chosen.push(plan);
  }
  return chosen;
}

export function buildPlans(items: DetectedItem[], profile: Profile): Plan[] {
  const perMeal = profile.budget / Math.max(1, profile.meals);
  const eligible = (maxCook: number, relaxed: Plan["relaxed"]): Plan[] =>
    RECIPES.filter((r) => dietOk(r, profile) && equipmentOk(r, profile) && r.cookMin <= maxCook)
      .map((r) => makePlan(r, items, profile, relaxed));

  const strict = eligible(profile.maxCook, null).filter((p) => p.cost <= perMeal);
  if (strict.length >= 3) return pick(strict, profile);

  const longer = eligible(Math.min(profile.maxCook + 10, 90), "time")
    .filter((p) => p.cost <= perMeal);
  const pool = strict.length >= longer.length ? strict : longer;
  if (pool.length >= 3) return pick(pool, profile);

  const over = eligible(Math.min(profile.maxCook + 10, 90), "budget")
    .sort((a, b) => a.cost - b.cost);
  const merged = [...pool];
  for (const plan of over) {
    if (merged.length >= 3) break;
    if (!merged.some((p) => p.recipe.id === plan.recipe.id)) merged.push(plan);
  }
  return pick(merged, profile).slice(0, 3);
}

export function groceryTotal(plan: Plan): number {
  return plan.missing.reduce((sum, item) => sum + item.cost, 0);
}

export function copyText(plan: Plan, priceDate: string, copy: Copy): string {
  const lines = [copy.exportText.listTitle, ""];
  for (const item of plan.missing) {
    if (item.cost === 0) continue;
    const pack = item.packs > 1 ? copy.exportText.pack(item.packs) : copy.exportText.singlePack;
    lines.push(copy.exportText.line(item.name, qty(item.missing, item.unit, copy.common.units), pack, rp(item.cost)));
  }
  lines.push(
    "",
    copy.exportText.total(rp(groceryTotal(plan))),
    copy.exportText.pricePer(priceDate),
  );
  return lines.join("\n");
}

export function csvText(plan: Plan, copy: Copy): string {
  const rows: string[][] = [[...copy.exportText.csvHeader]];
  for (const item of plan.missing) {
    rows.push([
      item.name,
      String(item.missing),
      copy.common.units[item.unit] ?? item.unit,
      String(item.packs),
      String(Math.round(item.cost)),
    ]);
  }
  return rows.map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",")).join("\n");
}
