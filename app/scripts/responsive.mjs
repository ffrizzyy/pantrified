import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

mkdirSync("shots", { recursive: true });

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:4173/";
const WIDTHS = [320, 360, 768, 1024, 1200];
const problems = [];

const browser = await chromium.launch();

for (const width of WIDTHS) {
  const page = await browser.newPage({
    viewport: { width, height: 900 },
    deviceScaleFactor: 1,
  });
  const errors = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));

  const audit = async (label) => {
    const state = await page.evaluate(() => {
      const visible = (el) => el.getClientRects().length > 0;
      const controls = [...document.querySelectorAll("button, a[href]")].filter(visible);
      const unnamed = controls
        .filter((el) => !(el.getAttribute("aria-label") || el.textContent.trim() || el.querySelector("img[alt]")?.alt))
        .map((el) => el.outerHTML.slice(0, 90));
      const small = controls
        .map((el) => {
          const r = el.getBoundingClientRect();
          return {
            name: (el.getAttribute("aria-label") || el.textContent).trim().replace(/\s+/g, " ").slice(0, 40),
            w: Math.round(r.width),
            h: Math.round(r.height),
          };
        })
        .filter((x) => x.w > 0 && x.h > 0 && (x.w < 24 || x.h < 24));
      return {
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
        unnamed,
        small,
      };
    });

    if (state.scrollWidth > state.innerWidth + 1) {
      problems.push(`${width}px ${label}: horizontal overflow (${state.scrollWidth} > ${state.innerWidth})`);
    }
    if (state.unnamed.length) {
      problems.push(`${width}px ${label}: control without an accessible name ${state.unnamed.join(" | ")}`);
    }
    if (state.small.length) {
      problems.push(
        `${width}px ${label}: target under 24px ${state.small
          .map((x) => `${x.name} ${x.w}x${x.h}`)
          .join(" | ")}`,
      );
    }

    // Fixed calls to action would sit mid-page in a full-page capture.
    if (width < 1024) {
      await page.evaluate(() => {
        document.querySelectorAll(".sticky-cta, .tabbar").forEach((el) => {
          el.style.visibility = "hidden";
        });
      });
    }
    await page.screenshot({ path: `shots/resp-${width}-${label}.png`, fullPage: true });
    if (width < 1024) {
      await page.evaluate(() => {
        document.querySelectorAll(".sticky-cta, .tabbar").forEach((el) => {
          el.style.visibility = "";
        });
      });
    }
  };

  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(700);
  await page.addStyleTag({
    content: `.toast { display: none !important; }
      .screen-inner, .item-row, .plan-card, .grocery-row { animation: none !important; }`,
  });
  await audit("home");

  await page.locator(".sample-card").first().click();
  await page.waitForTimeout(400);
  await audit("review");

  await page.getByRole("button", { name: /lanjut atur budget/i }).click();
  await page.waitForTimeout(300);
  await audit("constraints");

  await page.getByRole("button", { name: /buatkan 3 pilihan menu/i }).click();
  await page.waitForTimeout(500);
  await audit("plans");

  await page.locator(".plan-card").nth(1).locator(".plan-foot .btn").click();
  await page.waitForTimeout(400);
  await audit("detail");

  const listButton = page.getByRole("button", { name: /daftar belanja/i }).last();
  await listButton.click();
  await page.waitForTimeout(400);
  await audit("list");

  if (width >= 1024) {
    await page.locator(".sidebar-link", { hasText: "Pengaturan" }).click();
  } else {
    await page.locator(".tabbar .tab", { hasText: "Akun" }).click();
  }
  await page.waitForTimeout(300);
  await audit("settings");

  if (errors.length) {
    problems.push(`${width}px console errors: ${errors.join(" | ")}`);
  }

  console.log(`${width}px done`);
  await page.close();
}

await browser.close();

if (problems.length) {
  console.log("PROBLEMS");
  for (const problem of problems) console.log(`- ${problem}`);
  process.exitCode = 1;
} else {
  console.log(`No layout or target-size problems at ${WIDTHS.join(", ")}px.`);
}
