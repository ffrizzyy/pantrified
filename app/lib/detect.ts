import { SAMPLES, ingredientById } from "./data";
import type { DetectionResult, DetectedItem, Unit } from "./types";

function hash(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

function unitFor(id: string): Unit {
  return ingredientById.get(id)?.unit ?? "g";
}

/**
 * Demo detector. It never reads the image. An upload picks one of the seeded
 * fridge scenes from a hash of the file, so the same photo gives the same result
 * and different photos vary. Replaced by the ONNX model in M3.
 */
export function detectUpload(file: File): DetectionResult {
  const seed = hash(`${file.name}:${file.size}:${file.lastModified}`);
  const sample = SAMPLES[seed % SAMPLES.length];
  const items: DetectedItem[] = sample.items.map((item, index) => {
    const jitter = ((seed >> (index * 3)) % 13) / 100;
    return {
      id: item.id,
      qty: item.qty,
      confidence: Math.max(0.25, Math.min(0.98, item.confidence + jitter - 0.06)),
      unit: unitFor(item.id),
    };
  });
  return {
    items,
    ignored: items.filter((item) => item.confidence < 0.3).length,
    source: "upload",
    label: file.name,
  };
}

export function detectSample(sampleId: string, label: string): DetectionResult {
  const sample = SAMPLES.find((s) => s.id === sampleId) ?? SAMPLES[0];
  const items: DetectedItem[] = sample.items.map((item) => ({
    id: item.id,
    qty: item.qty,
    confidence: item.confidence,
    unit: unitFor(item.id),
  }));
  return {
    items,
    ignored: items.filter((item) => item.confidence < 0.3).length,
    source: "sample",
    label,
  };
}

export function reviewState(confidence: number): "accept" | "check" | "drop" {
  if (confidence >= 0.55) return "accept";
  if (confidence >= 0.3) return "check";
  return "drop";
}
