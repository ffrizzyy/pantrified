"use client";

import { INGREDIENTS, RECIPES } from "@/lib/data";
import { dateLabel, toolLabel } from "@/lib/format";
import { useUi } from "@/lib/ui";
import type { Profile } from "@/lib/types";
import { Icon } from "../Icon";

export function Settings({
  profile,
  onChange,
  events,
  priceDate,
  onOpenEquipment,
  onExport,
  onClear,
}: {
  profile: Profile;
  onChange: (patch: Partial<Profile>) => void;
  events: number;
  priceDate: string;
  onOpenEquipment: () => void;
  onExport: () => void;
  onClear: () => void;
}) {
  const { copy, locale, theme, setTheme, setLocale } = useUi();

  return (
    <div className="screen-inner">
      <h1 className="screen-title">{copy.settings.title}</h1>

      <div className="settings-grid">
        <section className="settings-group">
          <h2 className="group-title desk">{copy.settings.sectionData}</h2>
          <section className="card pad">
            <div className="switch-row">
              <span>
                <strong>{copy.settings.analyticsTitle}</strong>
                <span className="muted">{copy.settings.analyticsBody}</span>
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={profile.consent}
                aria-label={copy.a11y.analytics}
                className={`switch ${profile.consent ? "on" : ""}`}
                onClick={() => onChange({ consent: !profile.consent })}
              >
                <span />
              </button>
            </div>
            <p className="fine">{copy.settings.events(events)}</p>
          </section>

          <section className="card pad">
            <div className="switch-row">
              <span>
                <strong>{copy.settings.staplesTitle}</strong>
                <span className="muted">{copy.settings.staplesBody}</span>
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

          <section className="card pad">
            <button type="button" className="row-button" onClick={onOpenEquipment}>
              <span>
                <strong>{copy.settings.equipmentTitle}</strong>
                <span className="muted">{toolLabel(profile.equipment, copy.common.equipment)}</span>
              </span>
              <Icon name="chevron" size={18} />
            </button>
          </section>
        </section>

        <section className="settings-group">
          <h2 className="group-title desk">{copy.settings.sectionApp}</h2>

          <section className="card pad">
            <div className="setting-stack">
              <span>
                <strong>{copy.settings.appearanceTitle}</strong>
                <span className="muted">{copy.settings.appearanceBody}</span>
              </span>
              <div className="segmented" role="group" aria-label={copy.a11y.appearance}>
                <button
                  type="button"
                  className={theme === "light" ? "on" : ""}
                  aria-pressed={theme === "light"}
                  onClick={() => setTheme("light")}
                >
                  {copy.settings.themeLight}
                </button>
                <button
                  type="button"
                  className={theme === "dark" ? "on" : ""}
                  aria-pressed={theme === "dark"}
                  onClick={() => setTheme("dark")}
                >
                  {copy.settings.themeDark}
                </button>
              </div>
            </div>
          </section>

          <section className="card pad">
            <div className="setting-stack">
              <span>
                <strong>{copy.settings.languageTitle}</strong>
                <span className="muted">{copy.settings.languageBody}</span>
              </span>
              <div className="segmented" role="group" aria-label={copy.a11y.language}>
                <button
                  type="button"
                  className={locale === "id" ? "on" : ""}
                  aria-pressed={locale === "id"}
                  onClick={() => setLocale("id")}
                >
                  {copy.settings.languageId}
                </button>
                <button
                  type="button"
                  className={locale === "en" ? "on" : ""}
                  aria-pressed={locale === "en"}
                  onClick={() => setLocale("en")}
                >
                  {copy.settings.languageEn}
                </button>
              </div>
            </div>
          </section>

          <section className="card pad">
            <button type="button" className="row-button" onClick={onExport}>
              <span>
                <strong>{copy.settings.exportTitle}</strong>
                <span className="muted">{copy.settings.exportBody}</span>
              </span>
              <Icon name="download" size={18} />
            </button>
            <button type="button" className="row-button danger" onClick={onClear}>
              <span>
                <strong>{copy.settings.deleteTitle}</strong>
                <span className="muted">{copy.settings.deleteBody}</span>
              </span>
              <Icon name="trash" size={18} />
            </button>
          </section>

          <section className="card pad about">
            <span className="group-title desk">{copy.settings.sectionAbout}</span>
            <strong>{copy.brand.version}</strong>
            <p className="muted small">{copy.settings.aboutBody(dateLabel(priceDate, locale))}</p>
            <p className="fine">{copy.settings.aboutFine(RECIPES.length, INGREDIENTS.length)}</p>
          </section>
        </section>
      </div>
    </div>
  );
}
