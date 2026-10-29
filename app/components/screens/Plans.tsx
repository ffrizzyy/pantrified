"use client";

import { copy } from "@/lib/copy";
import { pct, rp } from "@/lib/format";
import type { Plan, Profile } from "@/lib/types";
import { FoodArt } from "../FoodArt";
import { Icon } from "../Icon";
import { Ring } from "../Ring";

export function Plans({
  plans,
  profile,
  onSelect,
  onBack,
  onAdjust,
}: {
  plans: Plan[];
  profile: Profile;
  onSelect: (recipeId: string) => void;
  onBack: () => void;
  onAdjust: () => void;
}) {
  const perMeal = profile.budget / Math.max(1, profile.meals);
  const cheapest = plans.length ? Math.min(...plans.map((p) => p.cost)) : 0;
  const over = cheapest > perMeal;
  const status = over ? copy.plans.tagOver : cheapest === 0 ? copy.plans.tagStock : copy.plans.tagOk;

  return (
    <div className="screen-inner">
      <div className="screen-grid">
        <div className="screen-col">
          <button type="button" className="back" onClick={onBack}>
            <Icon name="back" size={18} />
            {copy.plans.back}
          </button>
          <h1 className="screen-title">{copy.plans.title}</h1>
          <p className="screen-sub">{copy.plans.sub(rp(perMeal), profile.maxCook)}</p>

          {plans.length === 0 ? (
            <div className="card empty">
              <span className="empty-icon">
                <Icon name="basket" size={28} />
              </span>
              <h2>{copy.plans.emptyTitle}</h2>
              <p className="muted">{copy.plans.emptyBody}</p>
              <button type="button" className="btn btn-primary" onClick={onAdjust}>
                {copy.plans.emptyCta}
              </button>
            </div>
          ) : (
            <>
              {cheapest > 0 && (
                <section className="card budget-card">
                  <Ring
                    value={cheapest}
                    max={perMeal}
                    over={over}
                    label={copy.a11y.cheapest(rp(cheapest), rp(perMeal))}
                  />
                  <div>
                    <span className="muted small">{copy.plans.cheapest}</span>
                    <strong className="big-money">{rp(cheapest)}</strong>
                    <span className="muted small">{copy.plans.ofBudget(rp(perMeal))}</span>
                  </div>
                  <span className={`tag ${over ? "tag-danger" : "tag-ok"}`}>{status}</span>
                </section>
              )}

              <div className="plan-list">
                {plans.map((plan, index) => (
                  <article
                    key={plan.recipe.id}
                    className="plan-card"
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <button
                      type="button"
                      className="plan-art-btn"
                      onClick={() => onSelect(plan.recipe.id)}
                      aria-label={copy.a11y.choosePlan(plan.recipe.title)}
                    >
                      <FoodArt art={plan.recipe.art} className="plan-art" />
                      <span className="plan-scrim" aria-hidden="true" />
                      <span className="plan-art-copy">
                        <strong>{plan.recipe.title}</strong>
                        <span>
                          {copy.common.portions(plan.recipe.servings)} · {copy.common.minutes(plan.recipe.cookMin)}
                        </span>
                      </span>
                    </button>
                    <div className="plan-body">
                      <div className="pill-row">
                        <span className="pill">
                          <Icon name="flame" size={14} />
                          {copy.common.kcal(plan.recipe.kcal)}
                        </span>
                        <span className="pill">
                          <Icon name="clock" size={14} />
                          {copy.common.minutesShort(plan.recipe.cookMin)}
                        </span>
                        <span className="pill">
                          <Icon name="basket" size={14} />
                          {copy.plans.missing(plan.missing.filter((m) => m.cost > 0).length)}
                        </span>
                      </div>
                      <div className="use-row">
                        <span className="bar" aria-hidden="true">
                          <span style={{ width: pct(plan.utilization) }} />
                        </span>
                        <span className="muted small">{copy.plans.have(pct(plan.utilization))}</span>
                      </div>
                      <div className="plan-foot">
                        <div>
                          <span className="muted small">{copy.plans.shopping}</span>
                          <strong className="money">{rp(plan.cost)}</strong>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => onSelect(plan.recipe.id)}>
                          {copy.common.choose}
                        </button>
                      </div>
                      {plan.relaxed && (
                        <p className="fine">
                          <Icon name="info" size={14} /> {plan.relaxed}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <button type="button" className="btn btn-ghost btn-block" onClick={onAdjust}>
                {copy.plans.adjust}
              </button>
            </>
          )}
        </div>

        <aside className="rail desk" aria-label={copy.constraints.railTitle}>
          <h2 className="rail-title">{copy.constraints.railTitle}</h2>
          <div className="rail-stats">
            <div className="rail-stat">
              <strong>{plans.length}</strong>
              <span>{copy.desktop.statPlan}</span>
            </div>
            <div className="rail-stat">
              <strong>{rp(cheapest)}</strong>
              <span>{copy.plans.cheapest}</span>
            </div>
          </div>
          <dl className="rail-list">
            <div>
              <dt>{copy.constraints.railBudget}</dt>
              <dd>{rp(profile.budget)}</dd>
            </div>
            <div>
              <dt>{copy.constraints.railPerMeal}</dt>
              <dd>{rp(perMeal)}</dd>
            </div>
            <div>
              <dt>{copy.constraints.railCook}</dt>
              <dd>{copy.constraints.cookOption(profile.maxCook)}</dd>
            </div>
          </dl>
          <button type="button" className="btn btn-ghost btn-block" onClick={onAdjust}>
            {copy.plans.adjust}
          </button>
          <p className="rail-note">{copy.constraints.railNote}</p>
        </aside>
      </div>
    </div>
  );
}
