"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { PRICE_DATE, ingredientById } from "@/lib/data";
import { detectSample, detectUpload } from "@/lib/detect";
import { copyText, csvText, buildPlans } from "@/lib/plan";
import { dateLabel } from "@/lib/format";
import { DEFAULT_PROFILE, clear as clearStore, event as makeEvent, load, save } from "@/lib/store";
import { useCopy, useUi } from "@/lib/ui";
import type { DetectionResult, DetectedItem, FeedbackEvent, Plan, Profile } from "@/lib/types";
import { AddItemSheet, EquipmentSheet, StartSheet, itemDefaults } from "./Sheet";
import { DesktopSidebar, type Screen } from "./DesktopSidebar";
import { Icon, type IconName } from "./Icon";
import { ShareCard } from "./ShareCard";
import { Constraints } from "./screens/Constraints";
import { Detail } from "./screens/Detail";
import { Grocery } from "./screens/Grocery";
import { Home } from "./screens/Home";
import { Plans } from "./screens/Plans";
import { Review } from "./screens/Review";
import { Settings } from "./screens/Settings";

type SheetName = "start" | "add" | "equipment" | null;

export default function App() {
  const { copy, locale } = useUi();
  const [screen, setScreen] = useState<Screen>("home");
  const [items, setItems] = useState<DetectedItem[]>([]);
  const [excluded, setExcluded] = useState<string[]>([]);
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [detectionLabel, setDetectionLabel] = useState("");
  const [ignored, setIgnored] = useState(0);
  const [events, setEvents] = useState<FeedbackEvent[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [sheet, setSheet] = useState<SheetName>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [shareOpen, setShareOpen] = useState(false);

  const TABS: { id: Screen; label: string; icon: IconName }[] = [
    { id: "home", label: copy.nav.home, icon: "home" },
    { id: "plans", label: copy.nav.plans, icon: "plan" },
    { id: "list", label: copy.nav.list, icon: "list" },
    { id: "settings", label: copy.nav.settings, icon: "user" },
  ];

  const SECTION_LABEL: Record<Screen, string> = {
    home: copy.desktop.sectionHome,
    review: copy.desktop.sectionReview,
    constraints: copy.desktop.sectionConstraints,
    plans: copy.desktop.sectionPlans,
    detail: copy.desktop.sectionDetail,
    list: copy.desktop.sectionList,
    settings: copy.desktop.sectionSettings,
  };

  useEffect(() => {
    const stored = load();
    setProfile(stored.profile);
    setEvents(stored.events);
    setItems(stored.items);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    save({ profile, events, items });
  }, [hydrated, profile, events, items]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen]);

  const log = useCallback((type: FeedbackEvent["type"], recipeId?: string) => {
    setEvents((prev) => [...prev, makeEvent(type, recipeId)].slice(-500));
  }, []);

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.recipe.id === selectedId) ?? null,
    [plans, selectedId],
  );

  const startDetection = useCallback(
    (result: DetectionResult) => {
      const kept = result.items.filter((item) => item.confidence >= 0.3);
      setItems(kept);
      setExcluded([]);
      setPlans([]);
      setSelectedId(null);
      setDetectionLabel(result.label);
      setIgnored(result.ignored + (result.items.length - kept.length));
      setSheet(null);
      setScreen("review");
      log("detection_shown");
    },
    [log],
  );

  const onUpload = useCallback(
    (file: File) => {
      log("photo_uploaded");
      startDetection(detectUpload(file));
    },
    [log, startDetection],
  );

  const startSample = useCallback(
    (id: string) => {
      const label = copy.samples[id as keyof typeof copy.samples]?.label ?? id;
      startDetection(detectSample(id, label));
    },
    [copy, startDetection],
  );

  const activeItems = useMemo(() => items.filter((item) => !excluded.includes(item.id)), [items, excluded]);

  const generate = useCallback(() => {
    const next = buildPlans(activeItems, profile);
    setPlans(next);
    setSelectedId(next[0]?.recipe.id ?? null);
    setScreen("plans");
    log("plan_shown");
  }, [activeItems, log, profile]);

  const toggle = (id: string) => {
    setExcluded((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
    log("ingredient_edited");
  };

  const changeQty = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const ing = ingredientById.get(id);
        const step = ing?.unit === "g" || ing?.unit === "ml" ? 50 : 1;
        return { ...item, qty: Math.max(step, Math.round((item.qty + delta * step) * 10) / 10) };
      }),
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setExcluded((prev) => prev.filter((x) => x !== id));
    log("ingredient_edited");
  };

  const addItem = (id: string) => {
    const ing = ingredientById.get(id);
    if (!ing) return;
    const { qty } = itemDefaults(id);
    setItems((prev) => [...prev, { id, qty, unit: ing.unit, confidence: 1 }]);
    setExcluded((prev) => prev.filter((x) => x !== id));
    setSheet(null);
    log("ingredient_edited");
  };

  const copyList = async () => {
    if (!selectedPlan) return;
    const text = copyText(selectedPlan, PRICE_DATE, copy);
    try {
      await navigator.clipboard.writeText(text);
      setToast(copy.toasts.copied);
    } catch {
      setToast(copy.toasts.copyFailed);
    }
    log("grocery_exported", selectedPlan.recipe.id);
  };

  const download = (filename: string, content: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const csv = () => {
    if (!selectedPlan) return;
    download("daftar-belanja-pantrified.csv", csvText(selectedPlan, copy), "text/csv;charset=utf-8");
    setToast(copy.toasts.csvDone);
    log("grocery_exported", selectedPlan.recipe.id);
  };

  const exportData = () => {
    download(
      "pantrified-data.json",
      JSON.stringify({ exportedAt: new Date().toISOString(), profile, items, plans: plans.map((p) => p.recipe.id), events }, null, 2),
      "application/json",
    );
    setToast(copy.toasts.exportDone);
  };

  const wipe = () => {
    if (!window.confirm(copy.settings.confirmDelete)) return;
    clearStore();
    setItems([]);
    setExcluded([]);
    setPlans([]);
    setSelectedId(null);
    setEvents([]);
    setProfile(DEFAULT_PROFILE);
    setScreen("home");
    setToast(copy.toasts.cleared);
  };

  const resume = () => setScreen(plans.length ? "plans" : items.length ? "review" : "home");

  const showTabs = screen === "home" || screen === "plans" || screen === "list" || screen === "settings";
  const tab: Screen =
    screen === "detail" ? "plans" : screen === "review" || screen === "constraints" ? "home" : screen;

  return (
    <div className={`app ${showTabs ? "with-tabs" : ""}`}>
      <DesktopSidebar
        screen={screen}
        onNavigate={setScreen}
        onNew={() => setSheet("start")}
        itemCount={activeItems.length}
        planCount={plans.length}
        listCount={selectedPlan ? selectedPlan.missing.filter((item) => item.missing > 0).length : 0}
        budget={profile.budget}
        onResume={resume}
      />

      <div className="shell-main">
        <header className="topbar desk">
          <div className="crumbs">
            <span>{copy.desktop.breadcrumb}</span>
            <span className="crumb-sep" aria-hidden="true">
              /
            </span>
            <strong>{SECTION_LABEL[screen]}</strong>
          </div>
          <div className="topbar-right">
            <span className="topbar-date">
              {copy.desktop.priceDate} {dateLabel(PRICE_DATE, locale)}
            </span>
            <span className="tag tag-ok">{copy.desktop.demo}</span>
          </div>
        </header>

        <main className="main">
          {screen === "home" && (
            <Home
              onStart={() => setSheet("start")}
              onSample={startSample}
              hasSession={items.length > 0}
              onResume={resume}
              budget={profile.budget}
            />
          )}

          {screen === "review" && (
            <Review
              items={items}
              excluded={excluded}
              detectionLabel={detectionLabel || copy.review.photoLabel}
              ignored={ignored}
              onToggle={toggle}
              onQty={changeQty}
              onRemove={removeItem}
              onAdd={() => setSheet("add")}
              onContinue={() => setScreen("constraints")}
              onBack={() => setScreen("home")}
            />
          )}

          {screen === "constraints" && (
            <Constraints
              profile={profile}
              onChange={(patch) => setProfile((prev) => ({ ...prev, ...patch }))}
              onSubmit={generate}
              onBack={() => setScreen("review")}
              onOpenEquipment={() => setSheet("equipment")}
              itemCount={activeItems.length}
            />
          )}

          {screen === "plans" && (
            <Plans
              plans={plans}
              profile={profile}
              onSelect={(id) => {
                setSelectedId(id);
                setScreen("detail");
                log("plan_selected", id);
              }}
              onBack={() => setScreen("constraints")}
              onAdjust={() => setScreen("constraints")}
            />
          )}

          {screen === "detail" &&
            (selectedPlan ? (
              <Detail plan={selectedPlan} onBack={() => setScreen("plans")} onList={() => setScreen("list")} />
            ) : (
              <EmptyState onStart={() => setScreen("home")} />
            ))}

          {screen === "list" &&
            (selectedPlan ? (
              <Grocery
                plan={selectedPlan}
                priceDate={PRICE_DATE}
                onBack={() => setScreen("detail")}
                onCopy={copyList}
                onCsv={csv}
                onShare={() => setShareOpen(true)}
              />
            ) : (
              <EmptyState onStart={() => setScreen("home")} />
            ))}

          {screen === "settings" && (
            <Settings
              profile={profile}
              onChange={(patch) => setProfile((prev) => ({ ...prev, ...patch }))}
              events={events.length}
              priceDate={PRICE_DATE}
              onOpenEquipment={() => setSheet("equipment")}
              onExport={exportData}
              onClear={wipe}
            />
          )}
        </main>
      </div>

      {showTabs && (
        <nav className="tabbar mob" aria-label={copy.nav.label}>
          {TABS.slice(0, 2).map((item) => (
            <TabButton key={item.id} item={item} active={tab === item.id} onClick={() => setScreen(item.id)} />
          ))}
          <button type="button" className="fab" onClick={() => setSheet("start")} aria-label={copy.nav.newPlan}>
            <Icon name="plus" size={26} />
          </button>
          {TABS.slice(2).map((item) => (
            <TabButton key={item.id} item={item} active={tab === item.id} onClick={() => setScreen(item.id)} />
          ))}
        </nav>
      )}

      <StartSheet open={sheet === "start"} onClose={() => setSheet(null)} onDetect={startDetection} onUpload={onUpload} />
      <AddItemSheet
        open={sheet === "add"}
        onClose={() => setSheet(null)}
        onAdd={addItem}
        existing={items.map((item) => item.id)}
      />
      <EquipmentSheet
        open={sheet === "equipment"}
        onClose={() => setSheet(null)}
        value={profile.equipment}
        onChange={(equipment) => setProfile((prev) => ({ ...prev, equipment }))}
      />

      <ShareCard
        open={shareOpen}
        plan={selectedPlan}
        priceDate={PRICE_DATE}
        onClose={() => setShareOpen(false)}
        onDownloaded={() => setToast(copy.toasts.cardDone)}
      />

      {toast && (
        <div className="toast" role="status">
          {toast}
        </div>
      )}
    </div>
  );
}

function TabButton({
  item,
  active,
  onClick,
}: {
  item: { id: Screen; label: string; icon: IconName };
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`tab ${active ? "on" : ""}`}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      <Icon name={item.icon} size={22} />
      <span>{item.label}</span>
    </button>
  );
}

function EmptyState({ onStart }: { onStart: () => void }) {
  const copy = useCopy();
  return (
    <div className="screen-inner">
      <div className="card empty">
        <span className="empty-icon">
          <Icon name="basket" size={28} />
        </span>
        <h2>{copy.empty.title}</h2>
        <p className="muted">{copy.empty.body}</p>
        <button type="button" className="btn btn-primary" onClick={onStart}>
          {copy.empty.cta}
        </button>
      </div>
    </div>
  );
}
