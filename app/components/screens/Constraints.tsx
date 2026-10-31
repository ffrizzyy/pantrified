"use client";

import { rp, toolLabel } from "@/lib/format";
import { useCopy } from "@/lib/ui";
import type { Profile } from "@/lib/types";
import { Icon } from "../Icon";

export function Constraints({
  profile,
  onChange,
  onSubmit,
  onBack,
  onOpenEquipment,
  itemCount,
}: {
  profile: Profile;
  onChange: (patch: Partial<Profile>) => void;
  onSubmit: () => void;
  onBack: () => void;
  onOpenEquipment: () => void;
  itemCount: number;
}) {
  const copy = useCopy();
  const perMeal = profile.budget / Math.max(1, profile.meals);

  return (
    <div className="screen-inner">
      <div className="screen-grid">
        <div className="screen-col">
          <button type="button" className="back" onClick={onBack}>
            <Icon name="back" size={18} />
            {copy.constraints.back}
          </button>
          <h1 className="screen-title">{copy.constraints.title}</h1>
          <p className="screen-sub">{copy.constraints.sub(itemCount)}</p>

          <div className="form-grid">
            <section className="card pad span-2">
              <label className="field-label" htmlFor="budget">
                {copy.constraints.budgetLabel}
              </label>
              <div className="money-input">
                <span>{copy.common.rupiahPrefix}</span>
                <input
                  id="budget"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  value={profile.budget.toLocaleString("id-ID")}
                  onChange={(e) => onChange({ budget: Number(e.target.value.replace(/\D/g, "")) || 0 })}
                  onBlur={() => {
                    if (profile.budget < 5000) onChange({ budget: 5000 });
                  }}
                />
              </div>
              <div className="chip-row">
                {[15000, 25000, 40000].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`chip ${profile.budget === value ? "chip-on" : ""}`}
                    onClick={() => onChange({ budget: value })}
                  >
                    {rp(value)}
                  </button>
                ))}
              </div>
              <p className="fine">{copy.constraints.budgetNote(profile.meals, rp(perMeal))}</p>
            </section>

            <section className="card pad">
              <span className="field-label">{copy.constraints.mealsLabel}</span>
              <div className="segmented" role="group" aria-label={copy.a11y.meals}>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={profile.meals === n ? "on" : ""}
                    aria-pressed={profile.meals === n}
                    onClick={() => onChange({ meals: n })}
                  >
                    {copy.constraints.meals(n)}
                  </button>
                ))}
              </div>
            </section>

            <section className="card pad">
              <span className="field-label">{copy.constraints.kcalLabel}</span>
              <div className="chip-row">
                {[450, 600, 750].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`chip ${profile.kcalTarget === value ? "chip-on" : ""}`}
                    onClick={() => onChange({ kcalTarget: value })}
                  >
                    {copy.constraints.kcalOption(value)}
                  </button>
                ))}
              </div>
            </section>

            <section className="card pad">
              <span className="field-label">{copy.constraints.dietLabel}</span>
              <div className="segmented" role="group" aria-label={copy.a11y.diet}>
                {(
                  [
                    ["none", copy.constraints.diets.none],
                    ["vegetarian", copy.constraints.diets.vegetarian],
                    ["vegan", copy.constraints.diets.vegan],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={profile.diet === value ? "on" : ""}
                    aria-pressed={profile.diet === value}
                    onClick={() => onChange({ diet: value })}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </section>

            <section className="card pad">
              <span className="field-label">{copy.constraints.cookLabel}</span>
              <div className="chip-row">
                {[15, 30, 45].map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`chip ${profile.maxCook === value ? "chip-on" : ""}`}
                    onClick={() => onChange({ maxCook: value })}
                  >
                    {copy.constraints.cookOption(value)}
                  </button>
                ))}
              </div>
            </section>

            <section className="card pad">
              <button type="button" className="row-button" onClick={onOpenEquipment}>
                <span>
                  <strong>{copy.constraints.equipmentTitle}</strong>
                  <span className="muted">
                    {copy.constraints.equipmentSummary(profile.equipment.length, toolLabel(profile.equipment, copy.common.equipment))}
                  </span>
                </span>
                <Icon name="chevron" size={18} />
              </button>
            </section>

            <section className="card pad">
              <div className="switch-row">
                <span>
                  <strong>{copy.constraints.staplesTitle}</strong>
                  <span className="muted">{copy.constraints.staplesBody}</span>
                </span>
                <button
                  type="button"
                  role="switch"
                  aria-checked={profile.staples}
                  aria-label={copy.a11y.staples}
                  className={`switch ${profile.staples ? "on" : ""}`}
                  onClick={() => onChange({ staples: !profile.staples })}
                >
                  <span />
                </button>
              </div>
            </section>
          </div>

          <div className="sticky-cta">
            <div className="cta-inner">
              <button type="button" className="btn btn-primary btn-block" onClick={onSubmit}>
                {copy.constraints.submit}
                <Icon name="chevron" size={18} />
              </button>
            </div>
          </div>
        </div>

        <aside className="rail desk" aria-label={copy.constraints.railTitle}>
          <h2 className="rail-title">{copy.constraints.railTitle}</h2>
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
              <dt>{copy.constraints.railMeals}</dt>
              <dd>{copy.constraints.meals(profile.meals)}</dd>
            </div>
            <div>
              <dt>{copy.constraints.railCook}</dt>
              <dd>{copy.constraints.cookOption(profile.maxCook)}</dd>
            </div>
            <div>
              <dt>{copy.constraints.railEquipment}</dt>
              <dd>{profile.equipment.length}</dd>
            </div>
          </dl>
          <p className="rail-note">{copy.constraints.railNote}</p>
        </aside>
      </div>
    </div>
  );
}
