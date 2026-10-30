import { INGREDIENTS } from "./data";
import type { Ingredient } from "./types";

/** Lowercase, strip punctuation, and collapse spaces so aliases match what people type. */
export function normalizeIngredientText(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function ingredientMatches(ingredient: Ingredient, query: string): boolean {
  const needle = normalizeIngredientText(query);
  if (!needle) return true;
  return [ingredient.name, ...ingredient.aliases].some((term) =>
    normalizeIngredientText(term).includes(needle),
  );
}

export function searchIngredients(query: string, limit = 12, exclude: string[] = []): Ingredient[] {
  const needle = normalizeIngredientText(query);
  const matches = INGREDIENTS.filter(
    (ingredient) => !exclude.includes(ingredient.id) && ingredientMatches(ingredient, needle),
  );
  if (!needle) return matches.slice(0, limit);
  const ranked = matches.sort((a, b) => {
    const aExact = [a.name, ...a.aliases].some((term) => normalizeIngredientText(term) === needle);
    const bExact = [b.name, ...b.aliases].some((term) => normalizeIngredientText(term) === needle);
    if (aExact !== bExact) return aExact ? -1 : 1;
    return a.name.localeCompare(b.name, "id");
  });
  return ranked.slice(0, limit);
}
