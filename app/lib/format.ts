import type { Unit } from "./types";

const nf = new Intl.NumberFormat("id-ID");

export function rp(value: number): string {
  return `Rp ${nf.format(Math.round(value))}`;
}

export function num(value: number): string {
  return nf.format(value);
}

/**
 * Units are content words, so the active dictionary supplies their labels.
 * Numbers always use Indonesian grouping because prices are in rupiah.
 */
export function qty(
  value: number,
  unit: Unit,
  units?: Partial<Record<Unit, string>>,
): string {
  const rounded = Math.round(value * 100) / 100;
  const text = Number.isInteger(rounded) ? nf.format(rounded) : rounded.toFixed(1).replace(".", ",");
  return `${text} ${units?.[unit] ?? unit}`;
}

export function dateLabel(iso: string, locale: "id" | "en" = "id"): string {
  const d = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export function pct(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function toolLabel(tools: string[], labels?: Record<string, string>): string {
  return tools.map((tool) => labels?.[tool] ?? tool.charAt(0).toUpperCase() + tool.slice(1)).join(", ");
}

export function unitStep(unit: Unit): number {
  switch (unit) {
    case "g":
    case "ml":
      return 50;
    case "butir":
    case "lembar":
    case "buah":
      return 1;
    case "ikat":
    case "batang":
      return 0.5;
    case "siung":
      return 1;
  }
}
