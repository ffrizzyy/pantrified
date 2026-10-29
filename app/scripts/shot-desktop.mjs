import { chromium } from "@playwright/test";
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("shots", { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));

const shot = (name) => page.screenshot({ path: `shots/desk-${name}.png` });

await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);

const scene = await page.locator(".hero-scene canvas").count();
const sceneBox = await page.locator(".hero-scene").boundingBox();
console.log("3d canvas:", scene, sceneBox ? `${Math.round(sceneBox.width)}x${Math.round(sceneBox.height)}` : "none");
await shot("01-home");

await page.locator(".sample-card").first().click();
await page.waitForTimeout(600);
await shot("02-review");

await page.getByRole("button", { name: /lanjut atur budget/i }).click();
await page.waitForTimeout(400);
await shot("03-constraints");

await page.getByRole("button", { name: /buatkan 3 pilihan menu/i }).click();
await page.waitForTimeout(800);
await shot("04-plans");

await page.locator(".plan-card").nth(1).locator(".plan-foot .btn").click();
await page.waitForTimeout(500);
await shot("05-detail");

await page.locator(".sticky-cta .btn").click();
await page.waitForTimeout(700);
await shot("06-grocery");

await page.locator(".rail").getByRole("button", { name: /Bikin kartu belanja/ }).click();
await page.waitForTimeout(1400);
await shot("07-share");
const card = await page.locator(".share-canvas").boundingBox();
console.log("share canvas:", card ? `${Math.round(card.width)}x${Math.round(card.height)}` : "none");
await page.getByRole("button", { name: "Mode Gelap" }).click();
await page.waitForTimeout(900);
await shot("08-share-dark");
const exported = await page.evaluate(() => document.querySelector(".share-canvas").toDataURL("image/png"));
writeFileSync("shots/share-export.png", Buffer.from(exported.split(",")[1], "base64"));
await page.getByRole("button", { name: "Tutup" }).click();
await page.waitForTimeout(300);

await page.locator(".sidebar-link", { hasText: "Pengaturan" }).click();
await page.waitForTimeout(400);
await shot("09-settings");

console.log("console errors:", errors.length ? errors : "none");
await browser.close();
