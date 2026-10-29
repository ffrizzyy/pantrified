"use client";

import { ingredientById } from "@/lib/data";
import { copy } from "@/lib/copy";
import { qty as fmtQty } from "@/lib/format";
import { reviewState } from "@/lib/detect";
import type { DetectedItem } from "@/lib/types";
import { Icon } from "../Icon";

export function Review({
  items,
  excluded,
  detectionLabel,
  ignored,
  onToggle,
  onQty,
  onRemove,
  onAdd,
  onContinue,
  onBack,
}: {
  items: DetectedItem[];
  excluded: string[];
  detectionLabel: string;
  ignored: number;
  onToggle: (id: string) => void;
  onQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onAdd: () => void;
  onContinue: () => void;
  onBack: () => void;
}) {
  const active = items.filter((item) => !excluded.includes(item.id));
  const checkCount = active.filter((item) => reviewState(item.confidence) === "check").length;
  const categories = active.reduce<Record<string, number>>((acc, item) => {
    const category = ingredientById.get(item.id)?.category ?? "kemasan";
    acc[category] = (acc[category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="screen-inner">
      <div className="screen-grid">
        <div className="screen-col">
          <button type="button" className="back" onClick={onBack}>
            <Icon name="back" size={18} />
            {copy.review.back}
          </button>
          <h1 className="screen-title">{copy.review.title}</h1>
          <p className="screen-sub">
            {copy.review.subLead(active.length)}
            <strong>{detectionLabel}</strong>
            {copy.review.subTail}
          </p>

          {ignored > 0 && (
            <p className="notice">
              <Icon name="info" size={16} />
              {copy.review.ignored(ignored)}
            </p>
          )}

          <div className="card list-card">
            {items.length === 0 ? (
              <p className="muted pad">{copy.review.empty}</p>
            ) : (
              items.map((item, index) => {
                const ing = ingredientById.get(item.id);
                const state = reviewState(item.confidence);
                const off = excluded.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className={`item-row ${off ? "is-off" : ""}`}
                    style={{ animationDelay: `${Math.min(index * 24, 240)}ms` }}
                  >
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={!off}
                      aria-label={copy.a11y.itemToggle(ing?.name ?? item.id, !off)}
                      className="check"
                      onClick={() => onToggle(item.id)}
                    >
                      {!off && <Icon name="check" size={14} />}
                    </button>
                    <div className="item-main">
                      <span className="item-name">
                        {ing?.name ?? item.id}
                        {state === "check" && !off && <span className="tag tag-warn">{copy.review.checkTag}</span>}
                      </span>
                      <span className="item-meta">
                        <span className="item-cat">{copy.categories[ing?.category ?? ""] ?? ""}</span> ·{" "}
                        {copy.review.confidence(Math.round(item.confidence * 100))}
                      </span>
                    </div>
                    <div className="stepper" aria-label={copy.a11y.qty(ing?.name ?? item.id)}>
                      <button type="button" onClick={() => onQty(item.id, -1)} aria-label={copy.common.decrease}>
                        −
                      </button>
                      <span>{fmtQty(item.qty, item.unit)}</span>
                      <button type="button" onClick={() => onQty(item.id, 1)} aria-label={copy.common.increase}>
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="icon-btn subtle"
                      onClick={() => onRemove(item.id)}
                      aria-label={copy.a11y.remove(ing?.name ?? item.id)}
                    >
                      <Icon name="x" size={16} />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          <button type="button" className="btn btn-ghost btn-block" onClick={onAdd}>
            <Icon name="plus" size={18} />
            {copy.review.add}
          </button>

          <div className="sticky-cta">
            <div className="cta-inner">
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={onContinue}
                disabled={active.length === 0}
              >
                {copy.review.continue}
                <Icon name="chevron" size={18} />
              </button>
            </div>
          </div>
        </div>

        <aside className="rail desk" aria-label={copy.review.railTitle}>
          <h2 className="rail-title">{copy.review.railTitle}</h2>
          <div className="rail-stats">
            <div className="rail-stat">
              <strong>{active.length}</strong>
              <span>{copy.review.railTotal}</span>
            </div>
            <div className="rail-stat">
              <strong>{checkCount}</strong>
              <span>{copy.review.railChecked}</span>
            </div>
          </div>
          <div className="rail-block">
            <span className="rail-label">{copy.review.railCategories}</span>
            <div className="rail-chips">
              {Object.entries(categories).map(([category, count]) => (
                <span key={category} className="chip chip-static">
                  {copy.categories[category] ?? category}
                  <span className="chip-count">{count}</span>
                </span>
              ))}
            </div>
          </div>
          <p className="rail-note">{copy.review.railHint}</p>
        </aside>
      </div>
    </div>
  );
}
