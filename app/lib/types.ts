export type Unit = "g" | "ml" | "butir" | "ikat" | "siung" | "lembar" | "batang" | "buah";

export type Category = "protein" | "sayur" | "bumbu" | "buah" | "susu" | "pokok" | "kemasan";

export interface Ingredient {
  id: string;
  name: string;
  aliases: string[];
  unit: Unit;
  category: Category;
  assumed: boolean;
  kcal100: number | null;
  allergens: string[];
}

export interface Price {
  ingredientId: string;
  perUnit: number;
  packSize: number;
  packPrice: number;
  date: string;
}

export interface RecipeIngredient {
  id: string;
  qty: number;
  unit: Unit;
  optional?: boolean;
}

export interface Recipe {
  id: string;
  title: string;
  servings: number;
  cookMin: number;
  equipment: string[];
  diet: string[];
  steps: string[];
  ingredients: RecipeIngredient[];
  kcal: number;
  art: number;
  protein: string;
}

export interface DetectedItem {
  id: string;
  qty: number;
  unit: Unit;
  confidence: number;
}

export interface DetectionResult {
  items: DetectedItem[];
  ignored: number;
  source: "sample" | "upload";
  label: string;
}

export interface GroceryItem {
  ingredientId: string;
  name: string;
  qty: number;
  unit: Unit;
  packs: number;
  packSize: number;
  packPrice: number;
  cost: number;
  leftover: number;
  available: number;
  missing: number;
}

export interface Plan {
  recipe: Recipe;
  cost: number;
  missingCost: number;
  utilization: number;
  missing: GroceryItem[];
  relaxed: string | null;
}

export interface Profile {
  budget: number;
  meals: number;
  kcalTarget: number;
  diet: "none" | "vegetarian" | "vegan";
  maxCook: number;
  equipment: string[];
  staples: boolean;
  consent: boolean;
}

export interface FeedbackEvent {
  id: string;
  type: "session_start" | "photo_uploaded" | "detection_shown" | "ingredient_edited" | "plan_shown" | "plan_selected" | "grocery_exported";
  recipeId?: string;
  at: string;
}

export interface Session {
  items: DetectedItem[];
  profile: Profile;
  plans: Plan[];
  selected: string | null;
  detectionLabel: string;
}
