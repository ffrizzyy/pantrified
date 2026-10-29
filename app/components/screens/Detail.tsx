"use client";

import { useState } from "react";
import { copy } from "@/lib/copy";
import { qty as fmtQty, rp } from "@/lib/format";
import type { Plan } from "@/lib/types";
import { FoodArt } from "../FoodArt";
import { Icon } from "../Icon";

export function Detail({
  plan,
  onBack,
  onList,
}: {
  plan: Plan;
  onBack: () => void;
  onList: () => void;
}) {
  const [tab, setTab] = useState<"bahan" | "langkah">("bahan");
  const { recipe } = plan;
  const buyCount = plan.missing.filter((m) => m.cost > 0).length;

  return (
    <div className="screen-inner detail">
      <div className="screen-grid">
        <div className="screen-col">
          <div className="detail-hero">
            <FoodArt art={recipe.art} className="detail-art" label={copy.a11y.recipeArt(recipe.title)} />
            <div className="detail-scrim" aria-hidden="true" />
            <button type="button" className="icon-btn on-photo" onClick={onBack} aria-label={copy.common.back}>
              <Icon name="back" size={20} />
            </button>
            <div className="detail-title">
              <h1>{recipe.title}</h1>
              <span>{copy.detail.meta(recipe.servings, recipe.cookMin, recipe.kcal)}</span>
            </div>
          </div>

          <div className="detail-body">
            <div className="pill-row">
              <span className="pill">
                <Icon name="flame" size={14} />
                {copy.common.kcal(recipe.kcal)}
              </span>
              <span className="pill">
                <Icon name="clock" size={14} />
                {copy.common.minutesShort(recipe.cookMin)}
              </span>
              <span className="pill">
                <Icon name="basket" size={14} />
                {copy.plans.missing(buyCount)}
              </span>
            </div>

            <div className="segmented tabs" role="tablist" aria-label={copy.detail.tabsLabel}>
              <button
                type="button"
                role="tab"
                aria-selected={tab === "bahan"}
                className={tab === "bahan" ? "on" : ""}
                onClick={() => setTab("bahan")}
              >
                {copy.detail.tabIngredients}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === "langkah"}
                className={tab === "langkah" ? "on" : ""}
                onClick={() => setTab("langkah")}
              >
                {copy.detail.tabSteps}
              </button>
            </div>

            {tab === "bahan" ? (
              <>
                <ul className="ing-list">
                  {plan.missing.map((item) => (
                    <li key={item.ingredientId} className={item.cost > 0 ? "need" : "have"}>
                      <span className="ing-mark">
                        <Icon name={item.cost > 0 ? "plus" : "check"} size={14} />
                      </span>
                      <span className="ing-name">{item.name}</span>
                      <span className="ing-qty">{fmtQty(item.qty, item.unit)}</span>
                      <span className="ing-state muted small">
                        {item.cost > 0 ? copy.review.buy : copy.review.have}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="fine">{copy.detail.priceNote(recipe.servings)}</p>
              </>
            ) : (
              <ol className="method">
                {recipe.steps.map((step, index) => (
                  <li key={step}>
                    <span className="method-num">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            )}
          </div>

          <div className="sticky-cta">
            <div className="cta-inner">
              <button type="button" className="btn btn-primary btn-block" onClick={onList}>
                {copy.detail.cta(plan.cost > 0 ? rp(plan.cost) : null)}
                <Icon name="chevron" size={18} />
              </button>
            </div>
          </div>
        </div>

        <aside className="rail desk" aria-label={copy.detail.tabsLabel}>
          <h2 className="rail-title">{copy.desktop.sectionDetail}</h2>
          <dl className="rail-list">
            <div>
              <dt>{copy.constraints.railMeals}</dt>
              <dd>{copy.common.portions(recipe.servings)}</dd>
            </div>
            <div>
              <dt>{copy.constraints.railCook}</dt>
              <dd>{copy.common.minutes(recipe.cookMin)}</dd>
            </div>
            <div>
              <dt>{copy.constraints.kcalLabel}</dt>
              <dd>{copy.common.kcal(recipe.kcal)}</dd>
            </div>
            <div>
              <dt>{copy.grocery.total}</dt>
              <dd>{rp(plan.cost)}</dd>
            </div>
          </dl>
          <p className="rail-note">{copy.detail.priceNote(recipe.servings)}</p>
        </aside>
      </div>
    </div>
  );
}
