"use client";

import { copy } from "@/lib/copy";
import { dateLabel, qty as fmtQty, rp } from "@/lib/format";
import { groceryTotal } from "@/lib/plan";
import { useCountUp } from "@/lib/useMedia";
import type { Plan } from "@/lib/types";
import { Icon } from "../Icon";

export function Grocery({
  plan,
  priceDate,
  onBack,
  onCopy,
  onCsv,
  onShare,
}: {
  plan: Plan;
  priceDate: string;
  onBack: () => void;
  onCopy: () => void;
  onCsv: () => void;
  onShare: () => void;
}) {
  const buy = plan.missing.filter((item) => item.cost > 0);
  const have = plan.missing.filter((item) => item.cost === 0);
  const total = groceryTotal(plan);
  const shown = useCountUp(total);

  return (
    <div className="screen-inner">
      <div className="screen-grid">
        <div className="screen-col">
          <button type="button" className="back" onClick={onBack}>
            <Icon name="back" size={18} />
            {copy.grocery.back}
          </button>
          <h1 className="screen-title">{copy.grocery.title}</h1>
          <p className="screen-sub">{copy.grocery.sub(plan.recipe.title, plan.recipe.servings)}</p>

          <section className="card total-card">
            <span className="muted small">{copy.grocery.total}</span>
            <strong className="total-money" aria-live="polite">
              {rp(shown)}
            </strong>
            <span className="muted small">{copy.grocery.totalMeta(buy.length, dateLabel(priceDate))}</span>
          </section>

          <div className="card list-card">
            {buy.length === 0 ? (
              <p className="muted pad">{copy.grocery.allHave}</p>
            ) : (
              buy.map((item, index) => (
                <div
                  key={item.ingredientId}
                  className="grocery-row"
                  style={{ animationDelay: `${Math.min(index * 24, 240)}ms` }}
                >
                  <div className="grocery-main">
                    <span className="grocery-name">{item.name}</span>
                    <span className="muted small">
                      {fmtQty(item.missing, item.unit)} · {copy.grocery.packs(item.packs)}
                      {item.leftover > 0 ? ` · ${copy.grocery.leftover(fmtQty(item.leftover, item.unit))}` : ""}
                    </span>
                  </div>
                  <span className="grocery-cost">{rp(item.cost)}</span>
                </div>
              ))
            )}
          </div>

          {have.length > 0 && (
            <details className="card have-card">
              <summary>
                <span>{copy.grocery.haveTitle}</span>
                <span className="muted small">{copy.grocery.haveCount(have.length)}</span>
              </summary>
              <ul>
                {have.map((item) => (
                  <li key={item.ingredientId}>
                    <Icon name="check" size={14} />
                    {item.name}
                    <span className="muted small">{fmtQty(item.qty, item.unit)}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}

          <div className="action-row">
            <button type="button" className="btn btn-primary btn-block" onClick={onCopy}>
              <Icon name="share" size={18} />
              {copy.grocery.copy}
            </button>
            <button type="button" className="btn btn-ghost btn-block" onClick={onCsv}>
              <Icon name="download" size={18} />
              {copy.grocery.csv}
            </button>
            <button type="button" className="btn btn-ghost btn-block" onClick={onShare}>
              <Icon name="plan" size={18} />
              {copy.grocery.share}
            </button>
          </div>

          <p className="fine">{copy.grocery.disclaimer}</p>
        </div>

        <aside className="rail desk" aria-label={copy.grocery.railTitle}>
          <h2 className="rail-title">{copy.grocery.railTitle}</h2>
          <div className="rail-stats">
            <div className="rail-stat">
              <strong>{buy.length}</strong>
              <span>{copy.grocery.railItems}</span>
            </div>
            <div className="rail-stat">
              <strong>{have.length}</strong>
              <span>{copy.grocery.railHave}</span>
            </div>
          </div>
          <dl className="rail-list">
            <div>
              <dt>{copy.grocery.total}</dt>
              <dd>{rp(total)}</dd>
            </div>
            <div>
              <dt>{copy.grocery.railDate}</dt>
              <dd>{dateLabel(priceDate)}</dd>
            </div>
          </dl>
          <button type="button" className="btn btn-primary btn-block" onClick={onShare}>
            <Icon name="plan" size={18} />
            {copy.grocery.share}
          </button>
          <p className="rail-note">{copy.grocery.railNote}</p>
        </aside>
      </div>
    </div>
  );
}
