import { chromium } from "@playwright/test";

const BASE = "http://127.0.0.1:4173/";
const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  permissions: ["clipboard-read", "clipboard-write"],
});
const page = await context.newPage();
const errors = [];
page.on("console", (m) => {
  if (m.type() === "error") errors.push(m.text());
});
page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));

const check = (label, ok, extra = "") =>
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${extra ? ` â€” ${extra}` : ""}`);

await page.goto(BASE, { waitUntil: "networkidle" });

// manifest + icons
const manifestHref = await page.getAttribute('link[rel="manifest"]', "href");
const manifest = await page.evaluate(async (href) => (await fetch(href)).json(), manifestHref);
check("manifest linked", Boolean(manifestHref), manifestHref);
check("manifest name", manifest.name === "Pantrified", manifest.name);
check("manifest display standalone", manifest.display === "standalone");
const iconStatuses = await page.evaluate(async (icons) => {
  const out = [];
  for (const icon of icons) {
    const res = await fetch(icon.src);
    out.push(`${icon.src}:${res.status}`);
  }
  return out;
}, manifest.icons);
check("manifest icons reachable", iconStatuses.every((s) => s.endsWith(":200")), iconStatuses.join(", "));

// service worker
const swReady = await page.evaluate(async () => {
  if (!("serviceWorker" in navigator)) return "unsupported";
  const reg = await navigator.serviceWorker.ready;
  return reg.active ? "active" : "pending";
});
check("service worker active", swReady === "active", swReady);

// offline reload
await context.setOffline(true);
await page.reload({ waitUntil: "domcontentloaded" });
const offlineTitle = await page.locator(".wordmark").textContent().catch(() => null);
check("offline reload renders shell", offlineTitle === "Pantrified", String(offlineTitle));
await context.setOffline(false);

// upload path
const buffer = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64",
);
await page.reload({ waitUntil: "networkidle" });
await page.getByRole("button", { name: /Mulai dari foto kulkas/ }).click();
await page.locator('input[type="file"]').setInputFiles({
  name: "kulkas.png",
  mimeType: "image/png",
  buffer,
});
await page.waitForTimeout(500);
const reviewTitle = await page.locator(".screen-title").textContent();
check("upload opens review", reviewTitle === "Cek bahan", String(reviewTitle));
const itemCount = await page.locator(".item-row").count();
check("detector returns items", itemCount > 0, `${itemCount} items`);
const label = await page.locator(".screen-sub strong").textContent();
check("upload label is file name", label === "kulkas.png", String(label));

// edit, toggle, add
await page.locator(".item-row").first().locator(".stepper button").last().click();
await page.locator(".item-row").nth(1).locator(".check").click();
const offCount = await page.locator(".item-row.is-off").count();
check("toggle excludes item", offCount === 1, `${offCount} off`);
await page.getByRole("button", { name: /Tambah bahan/ }).click();
await page.waitForTimeout(300);
await page.locator(".add-row").first().click();
await page.waitForTimeout(300);
const afterAdd = await page.locator(".item-row").count();
check("add ingredient works", afterAdd === itemCount + 1, `${afterAdd} items`);

// equipment sheet
await page.getByRole("button", { name: /Lanjut atur budget/ }).click();
await page.waitForTimeout(300);
await page.getByRole("button", { name: /Alat masak/ }).click();
await page.waitForTimeout(300);
const sheetTitle = await page.locator(".sheet h2").textContent();
check("equipment sheet opens", sheetTitle === "Alat masak", String(sheetTitle));
await page.locator(".chip-grid .chip", { hasText: "oven" }).click();
await page.getByRole("button", { name: "Selesai" }).click();
await page.waitForTimeout(300);

// budget formatting
const budget = page.locator("#budget");
await budget.fill("");
await budget.type("45000");
const budgetValue = await budget.inputValue();
check("budget formats with dots", budgetValue === "45.000", budgetValue);

// generate plans
await page.getByRole("button", { name: /Buat 3 rencana/ }).click();
await page.waitForTimeout(500);
const plans = await page.locator(".plan-card").count();
check("three plans", plans === 3, `${plans} plans`);

// detail + steps
await page.locator(".plan-card").nth(1).locator(".plan-foot .btn").click();
await page.waitForTimeout(400);
await page.getByRole("tab", { name: "Langkah" }).click();
const steps = await page.locator(".method li").count();
check("steps render", steps > 0, `${steps} steps`);
const priceNote = await page.locator(".detail-body .fine").count();
check("price note hidden on steps tab", priceNote === 0, `${priceNote} notes`);

// grocery + clipboard + csv
await page.getByRole("button", { name: /daftar belanja/ }).click();
await page.waitForTimeout(400);
await page.getByRole("button", { name: /Salin untuk WhatsApp/ }).click();
await page.waitForTimeout(500);
const clip = await page.evaluate(() => navigator.clipboard.readText());
check("clipboard has list", clip.includes("Daftar belanja Pantrified"), `${clip.split("\n").length} lines`);

const download = page.waitForEvent("download");
await page.getByRole("button", { name: /Unduh CSV/ }).click();
const file = await download;
const csv = await (await file.createReadStream()).toArray();
check("csv download", file.suggestedFilename().endsWith(".csv"), file.suggestedFilename());
check("csv has header", Buffer.concat(csv).toString().startsWith('"bahan"'), "");

// persistence
await page.reload({ waitUntil: "networkidle" });
await page.waitForTimeout(400);
const resume = await page.locator(".resume").count();
check("session resumes after reload", resume === 1, `${resume} resume card`);

// clear data
await page.locator(".tabbar .tab", { hasText: "Akun" }).click();
await page.waitForTimeout(300);
page.once("dialog", (d) => d.accept());
await page.getByRole("button", { name: /Hapus semua data/ }).click();
await page.waitForTimeout(400);
const cleared = await page.locator(".wordmark").count();
check("clear data returns home", cleared === 1);

// ---------------------------------------------------------------- desktop
const deskContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const desk = await deskContext.newPage();
desk.on("console", (m) => {
  if (m.type() === "error") errors.push(`desktop: ${m.text()}`);
});
desk.on("pageerror", (e) => errors.push(`desktop pageerror: ${e.message}`));

await desk.goto(BASE, { waitUntil: "networkidle" });
await desk.waitForTimeout(500);

check("desktop sidebar visible", await desk.locator(".sidebar").isVisible());
check("desktop tab bar hidden", !(await desk.locator(".tabbar").isVisible()));
const scene = await desk.locator(".hero-scene canvas").boundingBox();
check("desktop 3d scene renders", Boolean(scene && scene.width > 200 && scene.height > 200), scene ? `${Math.round(scene.width)}x${Math.round(scene.height)}` : "none");

await desk.locator(".sample-card").first().click();
await desk.waitForTimeout(400);
await desk.getByRole("button", { name: /Lanjut atur budget/ }).click();
await desk.waitForTimeout(300);
await desk.getByRole("button", { name: /Buat 3 rencana/ }).click();
await desk.waitForTimeout(600);
check("desktop plans grid", (await desk.locator(".plan-card").count()) === 3);

await desk.locator(".plan-card").first().locator(".plan-foot .btn").click();
await desk.waitForTimeout(400);
check("desktop rail visible", await desk.locator(".rail").isVisible());
await desk.locator(".sticky-cta .btn").click();
await desk.waitForTimeout(400);
await desk.locator(".rail").getByRole("button", { name: /Buat kartu belanja/ }).click();
await desk.waitForTimeout(1400);

check("desktop share dialog opens", await desk.locator(".share-dialog").isVisible());
const shareCanvas = await desk.locator(".share-canvas").evaluate((el) => ({ w: el.width, h: el.height }));
check("share card is 1080x1350", shareCanvas.w === 1080 && shareCanvas.h === 1350, `${shareCanvas.w}x${shareCanvas.h}`);

const pngDownload = desk.waitForEvent("download");
await desk.getByRole("button", { name: /Unduh PNG/ }).click();
const png = await pngDownload;
check("share card downloads", png.suggestedFilename().endsWith(".png"), png.suggestedFilename());

await desk.keyboard.press("Escape");
await desk.waitForTimeout(300);
check("escape closes share dialog", (await desk.locator(".share-dialog").count()) === 0);

await deskContext.close();

console.log("console errors:", errors.length ? errors : "none");
await browser.close();

