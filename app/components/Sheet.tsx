"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { EQUIPMENT, SAMPLES, ingredientById } from "@/lib/data";
import { copy } from "@/lib/copy";
import { detectSample } from "@/lib/detect";
import { searchIngredients } from "@/lib/ingredients";
import type { DetectionResult } from "@/lib/types";
import { FoodArt } from "./FoodArt";
import { Icon } from "./Icon";

export function Sheet({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    ref.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="sheet-backdrop" onClick={onClose} role="presentation">
      <div
        className="sheet"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sheet-handle" aria-hidden="true" />
        <div className="sheet-head">
          <h2>{title}</h2>
          <button type="button" className="icon-btn" onClick={onClose} aria-label={copy.common.close}>
            <Icon name="x" size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function StartSheet({
  open,
  onClose,
  onDetect,
  onUpload,
}: {
  open: boolean;
  onClose: () => void;
  onDetect: (result: DetectionResult) => void;
  onUpload: (file: File) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Sheet open={open} title={copy.sheets.startTitle} onClose={onClose}>
      <p className="sheet-lead">{copy.sheets.startLead}</p>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        capture="environment"
        className="sr-only"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onUpload(file);
          e.target.value = "";
        }}
      />
      <button type="button" className="btn btn-primary btn-block" onClick={() => inputRef.current?.click()}>
        <Icon name="camera" size={20} />
        {copy.sheets.upload}
      </button>
      <p className="sheet-label">{copy.sheets.samplesLabel}</p>
      <div className="start-list">
        {SAMPLES.map((sample, index) => (
          <button
            key={sample.id}
            type="button"
            className="start-row"
            onClick={() => onDetect(detectSample(sample.id))}
          >
            <span className="start-art">
              <FoodArt art={index + 1} />
            </span>
            <span className="start-text">
              <strong>{sample.label}</strong>
              <span>{sample.note}</span>
            </span>
            <Icon name="chevron" size={18} />
          </button>
        ))}
      </div>
      <p className="fine">{copy.sheets.demoNote}</p>
    </Sheet>
  );
}

export function AddItemSheet({
  open,
  onClose,
  onAdd,
  existing,
}: {
  open: boolean;
  onClose: () => void;
  onAdd: (id: string) => void;
  existing: string[];
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    return searchIngredients(query, 12, existing);
  }, [query, existing]);

  return (
    <Sheet open={open} title={copy.sheets.addTitle} onClose={onClose}>
      <label className="field">
        <span className="sr-only">{copy.sheets.searchLabel}</span>
        <span className="input-wrap">
          <Icon name="search" size={18} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={copy.sheets.searchPlaceholder}
            autoFocus
          />
        </span>
      </label>
      <div className="add-list">
        {results.length === 0 ? (
          <p className="muted">{copy.sheets.noResults}</p>
        ) : (
          results.map((ing) => (
            <button
              key={ing.id}
              type="button"
              className="add-row"
              onClick={() => {
                onAdd(ing.id);
                setQuery("");
              }}
            >
              <span className="add-name">
                <strong>{ing.name}</strong>
                <span className="muted small item-cat">{copy.categories[ing.category] ?? ing.category}</span>
              </span>
              <Icon name="plus" size={18} />
            </button>
          ))
        )}
      </div>
    </Sheet>
  );
}

export function EquipmentSheet({
  open,
  onClose,
  value,
  onChange,
}: {
  open: boolean;
  onClose: () => void;
  value: string[];
  onChange: (next: string[]) => void;
}) {
  return (
    <Sheet open={open} title={copy.sheets.equipmentTitle} onClose={onClose}>
      <p className="sheet-lead">{copy.sheets.equipmentLead}</p>
      <div className="chip-grid">
        {EQUIPMENT.map((tool) => {
          const on = value.includes(tool);
          return (
            <button
              key={tool}
              type="button"
              className={`chip chip-tool ${on ? "chip-on" : ""}`}
              aria-pressed={on}
              onClick={() => onChange(on ? value.filter((t) => t !== tool) : [...value, tool])}
            >
              {on && <Icon name="check" size={14} />}
              {tool}
            </button>
          );
        })}
      </div>
      <button type="button" className="btn btn-primary btn-block" onClick={onClose}>
        {copy.common.done}
      </button>
    </Sheet>
  );
}

export function itemDefaults(id: string) {
  const ing = ingredientById.get(id);
  const qty = ing?.unit === "g" || ing?.unit === "ml" ? 100 : 1;
  return { qty };
}
