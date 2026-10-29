"use client";

import { copy } from "@/lib/copy";
import { rp } from "@/lib/format";
import type { IconName } from "./Icon";
import { Icon } from "./Icon";

export type Screen = "home" | "review" | "constraints" | "plans" | "detail" | "list" | "settings";

const NAV: { id: Screen; label: string; icon: IconName }[] = [
  { id: "home", label: copy.nav.home, icon: "home" },
  { id: "plans", label: copy.nav.plans, icon: "plan" },
  { id: "list", label: copy.nav.listLong, icon: "list" },
  { id: "settings", label: copy.nav.settingsLong, icon: "user" },
];

export function DesktopSidebar({
  screen,
  onNavigate,
  onNew,
  itemCount,
  planCount,
  listCount,
  budget,
  onResume,
}: {
  screen: Screen;
  onNavigate: (screen: Screen) => void;
  onNew: () => void;
  itemCount: number;
  planCount: number;
  listCount: number;
  budget: number;
  onResume: () => void;
}) {
  const active = screen === "detail" ? "plans" : screen === "review" || screen === "constraints" ? "home" : screen;

  return (
    <aside className="sidebar desk">
      <div className="sidebar-top">
        <button type="button" className="sidebar-brand" onClick={() => onNavigate("home")}>
          <span className="brand-mark" aria-hidden="true">
            <Icon name="leaf" size={18} />
          </span>
          <span className="brand-text">
            <strong>{copy.brand.name}</strong>
            <span>{copy.brand.tagline}</span>
          </span>
        </button>

        <button type="button" className="btn btn-primary btn-block sidebar-new" onClick={onNew}>
          <Icon name="plus" size={18} />
          {copy.nav.newPlan}
        </button>

        <nav className="sidebar-nav" aria-label={copy.nav.label}>
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`sidebar-link ${active === item.id ? "on" : ""}`}
              aria-current={active === item.id ? "page" : undefined}
              onClick={() => onNavigate(item.id)}
            >
              <Icon name={item.icon} size={19} />
              <span>{item.label}</span>
              {item.id === "plans" && planCount > 0 && <span className="sidebar-count">{planCount}</span>}
              {item.id === "list" && listCount > 0 && <span className="sidebar-count">{listCount}</span>}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="session-card">
          <span className="session-label">{copy.desktop.sessionTitle}</span>
          {itemCount > 0 ? (
            <>
              <strong>{copy.desktop.sessionItems(itemCount)}</strong>
              <span className="session-meta">
                {copy.desktop.sessionBudget} · {rp(budget)}
              </span>
              <button type="button" className="btn btn-ghost btn-block" onClick={onResume}>
                {copy.desktop.sessionResume}
                <Icon name="chevron" size={16} />
              </button>
            </>
          ) : (
            <>
              <strong>{copy.desktop.sessionEmpty}</strong>
              <span className="session-meta">{copy.brand.tagline}</span>
            </>
          )}
        </div>

        <div className="sidebar-foot">
          <span className="tag tag-ok">{copy.desktop.demo}</span>
          <p className="fine">{copy.desktop.footer}</p>
        </div>
      </div>
    </aside>
  );
}
