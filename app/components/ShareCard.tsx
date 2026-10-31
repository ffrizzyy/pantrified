"use client";

import { useEffect, useRef, useState } from "react";
import type { StaticCanvas } from "fabric";
import { copy } from "@/lib/copy";
import { dateLabel, rp } from "@/lib/format";
import type { Plan } from "@/lib/types";
import { Icon } from "./Icon";

type Theme = "light" | "dark";

const W = 1080;
const H = 1350;

const PALETTES = {
  light: {
    bg: "#FFFFF0",
    panel: "#556B14",
    panelInk: "#FFFFF0",
    ink: "#20240F",
    muted: "#5F6650",
    line: "rgba(32, 36, 15, 0.18)",
    tint: "#DBE4C9",
    accent: "#8A4B00",
  },
  dark: {
    bg: "#20240F",
    panel: "#46580F",
    panelInk: "#FFFFF0",
    ink: "#FFFFF0",
    muted: "#B9C29F",
    line: "rgba(255, 255, 240, 0.2)",
    tint: "#2E3517",
    accent: "#FEA405",
  },
} as const;

async function drawCard(
  canvas: StaticCanvas,
  plan: Plan,
  theme: Theme,
  priceDate: string,
) {
  const fabric = await import("fabric");
  const palette = PALETTES[theme];
  const root = getComputedStyle(document.documentElement);
  const display = root.getPropertyValue("--font-display").trim() || "Georgia, serif";
  const sans = root.getPropertyValue("--font-sans").trim() || "system-ui, sans-serif";

  canvas.clear();
  canvas.backgroundColor = palette.bg;

  // header panel, square at the top, rounded at the bottom
  const header = new fabric.Path("M0 0 H1080 V420 Q1080 468 1032 468 H48 Q0 468 0 420 Z", {
    fill: palette.panel,
    originX: "left",
    originY: "top",
    selectable: false,
    evented: false,
  });
  canvas.add(header);

  // bowl mark
  const bowl = new fabric.Path("M 806 214 A 118 118 0 0 0 1042 214 Z", {
    fill: palette.panelInk,
    opacity: 0.94,
    originX: "left",
    originY: "top",
    selectable: false,
    evented: false,
  });
  canvas.add(bowl);
  canvas.add(
    new fabric.Rect({
      left: 792,
      top: 196,
      width: 264,
      height: 18,
      rx: 9,
      ry: 9,
      fill: palette.panelInk,
      opacity: 0.94,
      originX: "left",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );
  const steam = new fabric.Group(
    [
      new fabric.Circle({ left: 0, top: 0, radius: 9, fill: palette.panelInk, opacity: 0.55 }),
      new fabric.Circle({ left: 34, top: -14, radius: 11, fill: palette.panelInk, opacity: 0.55 }),
      new fabric.Circle({ left: 72, top: -2, radius: 8, fill: palette.panelInk, opacity: 0.55 }),
    ],
    { left: 842, top: 150, originX: "left", originY: "top", selectable: false, evented: false },
  );
  canvas.add(steam);

  canvas.add(
    new fabric.Text(copy.brand.name, {
      left: 72,
      top: 56,
      fontFamily: display,
      fontSize: 46,
      fontWeight: "700",
      fill: palette.panelInk,
      originX: "left",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );

  canvas.add(
    new fabric.Text(copy.share.cardTitle.toUpperCase(), {
      left: 74,
      top: 146,
      fontFamily: sans,
      fontSize: 24,
      fontWeight: "700",
      charSpacing: 220,
      fill: palette.panelInk,
      opacity: 0.72,
      originX: "left",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );

  canvas.add(
    new fabric.Textbox(plan.recipe.title, {
      left: 72,
      top: 196,
      width: 660,
      fontFamily: display,
      fontSize: plan.recipe.title.length > 26 ? 58 : plan.recipe.title.length > 20 ? 66 : 78,
      lineHeight: 1.04,
      fontWeight: "600",
      fill: palette.panelInk,
      originX: "left",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );

  canvas.add(
    new fabric.Text(
      `${copy.common.portions(plan.recipe.servings)}  ·  ${copy.common.minutes(plan.recipe.cookMin)}`,
      {
        left: 74,
        top: 388,
        fontFamily: sans,
        fontSize: 28,
        fill: palette.panelInk,
        opacity: 0.78,
        originX: "left",
        originY: "top",
        selectable: false,
        evented: false,
      },
    ),
  );

  // items
  const rows = plan.missing.filter((item) => item.cost > 0).slice(0, 6);
  const startY = 552;
  const rowH = 88;

  canvas.add(
    new fabric.Text(copy.share.cardItems.toUpperCase(), {
      left: 72,
      top: 512,
      fontFamily: sans,
      fontSize: 21,
      fontWeight: "700",
      charSpacing: 200,
      fill: palette.muted,
      originX: "left",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );

  if (rows.length === 0) {
    canvas.add(
      new fabric.Text(copy.share.emptyItems, {
        left: 72,
        top: startY + 8,
        fontFamily: sans,
        fontSize: 32,
        fill: palette.muted,
        originX: "left",
        originY: "top",
        selectable: false,
        evented: false,
      }),
    );
  }

  rows.forEach((item, index) => {
    const y = startY + index * rowH;
    canvas.add(
      new fabric.Textbox(item.name, {
        left: 72,
        top: y,
        width: 560,
        fontFamily: sans,
        fontSize: 33,
        fontWeight: "600",
        fill: palette.ink,
        originX: "left",
        originY: "top",
        selectable: false,
        evented: false,
      }),
    );
    canvas.add(
      new fabric.Text(`${item.missing} ${item.unit}`, {
        left: 72,
        top: y + 42,
        fontFamily: sans,
        fontSize: 22,
        fill: palette.muted,
        originX: "left",
        originY: "top",
        selectable: false,
        evented: false,
      }),
    );
    canvas.add(
      new fabric.Text(rp(item.cost), {
        left: 1008,
        top: y + 6,
        fontFamily: sans,
        fontSize: 32,
        fontWeight: "700",
        fill: palette.ink,
        originX: "right",
        originY: "top",
        selectable: false,
        evented: false,
      }),
    );
    canvas.add(
      new fabric.Line([72, y + rowH - 14, 1008, y + rowH - 14], {
        stroke: palette.line,
        strokeWidth: 2,
        strokeDashArray: [2, 9],
        selectable: false,
        evented: false,
      }),
    );
  });

  const extra = plan.missing.filter((item) => item.cost > 0).length - rows.length;
  if (extra > 0) {
    canvas.add(
      new fabric.Text(copy.share.more(extra), {
        left: 72,
        top: startY + rows.length * rowH + 4,
        fontFamily: sans,
        fontSize: 24,
        fill: palette.muted,
        originX: "left",
        originY: "top",
        selectable: false,
        evented: false,
      }),
    );
  }

  const haveCount = plan.missing.filter((item) => item.cost === 0).length;
  if (extra === 0 && haveCount > 0) {
    canvas.add(
      new fabric.Text(copy.share.haveNote(haveCount), {
        left: 72,
        top: startY + rows.length * rowH + 4,
        fontFamily: sans,
        fontSize: 24,
        fill: palette.muted,
        originX: "left",
        originY: "top",
        selectable: false,
        evented: false,
      }),
    );
  }

  // total
  const totalTop = 1078;
  canvas.add(
    new fabric.Rect({
      left: 72,
      top: totalTop,
      width: 936,
      height: 142,
      rx: 30,
      ry: 30,
      fill: palette.tint,
      originX: "left",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );
  canvas.add(
    new fabric.Text(copy.share.cardTotal, {
      left: 112,
      top: totalTop + 34,
      fontFamily: sans,
      fontSize: 24,
      fontWeight: "600",
      fill: palette.muted,
      originX: "left",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );
  canvas.add(
    new fabric.Text(rp(plan.cost), {
      left: 112,
      top: totalTop + 64,
      fontFamily: sans,
      fontSize: 56,
      fontWeight: "700",
      fill: palette.ink,
      originX: "left",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );
  canvas.add(
    new fabric.Circle({
      left: 948,
      top: totalTop + 48,
      radius: 22,
      fill: palette.accent,
      originX: "left",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );

  // footer
  canvas.add(
    new fabric.Text(`${copy.share.cardFooter} · ${dateLabel(priceDate)}`, {
      left: 72,
      top: 1272,
      fontFamily: sans,
      fontSize: 22,
      fill: palette.muted,
      originX: "left",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );
  canvas.add(
    new fabric.Text(copy.share.cardHandle, {
      left: 1008,
      top: 1272,
      fontFamily: sans,
      fontSize: 22,
      fontWeight: "600",
      fill: palette.muted,
      originX: "right",
      originY: "top",
      selectable: false,
      evented: false,
    }),
  );

  canvas.renderAll();
}

export function ShareCard({
  open,
  plan,
  priceDate,
  onClose,
  onDownloaded,
}: {
  open: boolean;
  plan: Plan | null;
  priceDate: string;
  onClose: () => void;
  onDownloaded: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<StaticCanvas | null>(null);
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!open || !plan) return;
    let cancelled = false;
    let canvas: StaticCanvas | null = null;

    const run = async () => {
      const fabric = await import("fabric");
      if (cancelled || !canvasRef.current) return;
      canvas = new fabric.StaticCanvas(canvasRef.current, {
        width: W,
        height: H,
        selection: false,
        renderOnAddRemove: false,
        enableRetinaScaling: false,
      });
      fabricRef.current = canvas;
      try {
        await document.fonts.ready;
      } catch {
        // Draw with the fallback family.
      }
      if (cancelled || !canvas) return;
      await drawCard(canvas, plan, theme, priceDate);
      setReady(true);
    };

    setReady(false);
    run();

    return () => {
      cancelled = true;
      setReady(false);
      canvas?.dispose();
      fabricRef.current = null;
    };
  }, [open, plan, theme, priceDate]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const download = () => {
    const canvas = fabricRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL({ format: "png", multiplier: 1 });
    link.download = "pantrified-belanja.png";
    link.click();
    onDownloaded();
  };

  if (!open) return null;

  return (
    <div className="share-overlay" role="presentation" onClick={onClose}>
      <div
        className="share-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={copy.share.title}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="share-head">
          <div>
            <h2>{copy.share.title}</h2>
            <p className="muted small">{copy.share.lead}</p>
          </div>
          <button type="button" className="icon-btn" onClick={onClose} aria-label={copy.common.close}>
            <Icon name="x" size={20} />
          </button>
        </header>

        <div className="share-preview" data-theme={theme}>
          <canvas ref={canvasRef} className="share-canvas" aria-label={copy.a11y.shareCanvas} role="img" />
          {!ready && <span className="share-loading">{copy.share.generating}</span>}
        </div>

        <div className="share-actions">
          <div className="share-theme" role="group" aria-label={copy.share.themeLabel}>
            <button
              type="button"
              className={`chip ${theme === "light" ? "chip-on" : ""}`}
              aria-pressed={theme === "light"}
              onClick={() => setTheme("light")}
            >
              {copy.share.themeLight}
            </button>
            <button
              type="button"
              className={`chip ${theme === "dark" ? "chip-on" : ""}`}
              aria-pressed={theme === "dark"}
              onClick={() => setTheme("dark")}
            >
              {copy.share.themeDark}
            </button>
          </div>
          <button type="button" className="btn btn-primary" onClick={download} disabled={!ready}>
            <Icon name="download" size={18} />
            {copy.share.download}
          </button>
        </div>
      </div>
    </div>
  );
}
