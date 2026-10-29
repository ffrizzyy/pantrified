import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

mkdirSync("shots", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));

// Full-page captures keep fixed chrome out of the way so the whole screen is readable.
// The -vp captures show what a phone actually shows, fixed tab bar and CTA included.
async function shot(name) {
  await page.screenshot({ path: `shots/${name}-vp.png` });
  await page.addStyleTag({
    content: `.tabbar, .sticky-cta, .toast { display: none !important; } .screen-inner { animation: none !important; }`,
  });
  await page.screenshot({ path: `shots/${name}.png`, fullPage: true });
  await page.evaluate(() => {
    document.querySelectorAll("style").forEach((el) => {
      if (el.textContent?.includes("sticky-cta")) el.remove();
    });
  });
}

await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
await page.waitForTimeout(700);
await shot("01-home");

await page.locator(".sample-card").first().click();
await page.waitForTimeout(500);
await shot("02-review");

await page.getByRole("button", { name: /Lanjut atur budget/ }).click();
await page.waitForTimeout(400);
await shot("03-constraints");

await page.getByRole("button", { name: /Buat 3 rencana/ }).click();
await page.waitForTimeout(700);
await shot("04-plans");

const planCount = await page.locator(".plan-card").count();
await page.locator(".plan-card").nth(1).locator(".plan-foot .btn").click();
await page.waitForTimeout(500);
await shot("05-detail");

await page.getByRole("button", { name: /daftar belanja/ }).click();
await page.waitForTimeout(500);
await shot("06-grocery");

await page.getByRole("button", { name: /Buat kartu belanja/ }).click();
await page.waitForTimeout(1300);
await page.screenshot({ path: "shots/06b-share.png" });
const shareDialog = await page.locator(".share-dialog").boundingBox();
console.log(
  "share dialog:",
  shareDialog ? `${Math.round(shareDialog.width)}x${Math.round(shareDialog.height)}` : "none",
  "viewport:",
  `${page.viewportSize().width}x${page.viewportSize().height}`,
);
await page.getByRole("button", { name: "Tutup" }).click();
await page.waitForTimeout(300);

await page.getByRole("button", { name: /Akun/ }).click();
await page.waitForTimeout(400);
await shot("07-settings");

await page.locator(".tabbar .tab", { hasText: "Rencana" }).click();
await page.waitForTimeout(400);
await page.locator(".plan-card").nth(1).locator(".plan-foot .btn").click();
await page.waitForTimeout(400);
await page.getByRole("tab", { name: "Langkah" }).click();
await page.waitForTimeout(300);
await shot("08-detail-steps");

console.log("plan cards:", planCount);
console.log("console errors:", errors.length ? errors : "none");

// sheets
await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
await page.waitForTimeout(500);
await page.getByRole("button", { name: /Mulai dari foto kulkas/ }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: "shots/09-start-sheet.png" });
await page.getByRole("button", { name: "Tutup" }).click();
await page.waitForTimeout(300);

await page.locator(".sample-card").first().click();
await page.waitForTimeout(400);
await page.getByRole("button", { name: /Tambah bahan/ }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: "shots/10-add-sheet.png" });
await page.getByRole("button", { name: "Tutup" }).click();
await page.waitForTimeout(300);

const ctaBox = await page.locator(".sticky-cta").boundingBox();
console.log("sticky cta bottom:", ctaBox ? Math.round(ctaBox.y + ctaBox.height) : "none", "viewport:", page.viewportSize().height);

await browser.close();

