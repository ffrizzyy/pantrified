import type { DetectedItem, FeedbackEvent, Profile } from "./types";

const KEY = "pantrified.v1";

export const DEFAULT_PROFILE: Profile = {
  budget: 30000,
  meals: 1,
  kcalTarget: 600,
  diet: "none",
  maxCook: 30,
  equipment: ["kompor", "wajan", "panci", "rice cooker"],
  staples: true,
  consent: false,
};

export interface Stored {
  profile: Profile;
  events: FeedbackEvent[];
  items: DetectedItem[];
}

export function load(): Stored {
  if (typeof window === "undefined") {
    return { profile: DEFAULT_PROFILE, events: [], items: [] };
  }
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return { profile: DEFAULT_PROFILE, events: [], items: [] };
    const parsed = JSON.parse(raw) as Partial<Stored>;
    return {
      profile: { ...DEFAULT_PROFILE, ...(parsed.profile ?? {}) },
      events: Array.isArray(parsed.events) ? parsed.events : [],
      items: Array.isArray(parsed.items) ? parsed.items : [],
    };
  } catch {
    return { profile: DEFAULT_PROFILE, events: [], items: [] };
  }
}

export function save(data: Stored): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ ...data, events: data.events.slice(-500) }));
  } catch {
    // Storage can be full or blocked. The app keeps working in memory.
  }
}

export function clear(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}

export function event(type: FeedbackEvent["type"], recipeId?: string): FeedbackEvent {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    recipeId,
    at: new Date().toISOString(),
  };
}
