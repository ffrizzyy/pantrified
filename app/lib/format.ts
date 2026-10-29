import type { Unit } from "./types";

const nf = new Intl.NumberFormat("id-ID");

export function rp(value: number): string {
  return `Rp ${nf.format(Math.round(value))}`;
}

export function num(value: number): string {
  return nf.format(value);
}

export function qty(value: number, unit: Unit): string {
  const rounded = Math.round(value * 100) / 100;
  const text = Number.isInteger(rounded) ? nf.format(rounded) : rounded.toFixed(1).replace(".", ",");
  return `${text} ${unit}`;
}

export function dateLabel(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(d);
}

export function pct(value: number): string {
  return `${Math.round(value * 100)}%`;
}

export function toolLabel(tools: string[]): string {
  return tools.map((tool) => tool.charAt(0).toUpperCase() + tool.slice(1)).join(", ");
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
