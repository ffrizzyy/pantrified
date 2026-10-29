# Pantrified: AI Meal Planner from a Fridge Photo

> Project spec and build plan, written to be read by Claude Code.
> Drop this in the repo root (optionally rename to `CLAUDE.md`) and work through the phases in order.

---

## 0. How Claude Code should use this file

1. Read the whole file once before writing code.
2. Work **one phase at a time** (Section 9). Do not start a phase until the previous phase's *Definition of Done* is met.
3. Before any major decision (model choice, data source, paid API, schema change), propose options with trade-offs and ask the owner. Log the decision in `docs/decisions.md`.
4. Keep commits small. Every module gets tests. Never commit raw data, images of people, API keys, or model weights (use `.gitignore`, DVC, or release assets).
5. Hardware rule: **everything must run on a regular CPU-only laptop** (see Section 3). If something needs a GPU, flag it and offer a CPU or free-cloud alternative.
6. Licenses and dataset availability in this file come from memory. **Verify the license and current availability of every dataset and library before using it**, and record the result in `docs/data_sources.md`.
7. Prefer simple, measurable baselines first. Add complexity only when a metric shows the baseline is not enough.

---

## 1. Project summary

**Name:** Pantrified
**Type:** AI-powered computer vision and recommendation project (portfolio first, possible startup later)
**Owner profile:** strong machine learning background, CPU-only laptop for development, based in Indonesia (design for Indonesian food, prices, and language).

### 1.1 Problem

> *"Saya suka bingung mau makan apa hari ini."* (I'm often confused about what to eat today.)

- **Decision fatigue:** mental exhaustion from making too many small decisions every day.
- Made worse by **no references that fit the user's real situation**: wallet, what is actually in the fridge, calorie target.
- Consequences:
  - Wasted time and energy.
  - Impulsive choices that end in unhealthy or expensive food.
  - More leftover ingredients at home that rot because they are never used.

### 1.2 Proposed solution

A **meal planner that takes over the cognitive load** of deciding the daily menu.

| Stage | What it does |
|---|---|
| **Input** | Photo of the fridge (and/or pantry) + that day's budget (optionally calorie target, diet, time to cook) |
| **Personalized recommendation** | Menu suggestions that use what the user already has, fit the budget and nutrition goals, and match their taste |
| **Auto grocery cart** | A shopping list for only the missing ingredients, with estimated cost, ready to order or export |

### 1.3 Expected impact

- Less daily mental load.
- Better control over spending and nutrition.
- Time saved that would otherwise be spent scrolling food-delivery apps.
- Less food waste.

### 1.4 Computer vision core

The CV problem is **ingredient recognition from cluttered fridge photos**: multi-object detection (and optionally quantity and freshness estimation) with Indonesian groceries. This is the technical centerpiece for the portfolio. The recommender and grocery modules turn it into a complete product.

---

## 2. Goals, non-goals, success criteria

### 2.1 Goals
- G1. Detect and name common Indonesian household ingredients from a phone photo, with a **human-in-the-loop confirm/edit step** (detection will never be perfect).
- G2. Recommend 1 to 3 meals/day that satisfy budget, calorie/protein targets, diet restrictions, and cooking time, while **maximizing use of existing ingredients**.
- G3. Generate a grocery list with per-item price estimates and total cost.
- G4. Learn user preferences from feedback (like/dislike/cooked).
- G5. Ship a public demo, a reproducible repo, and a short write-up with honest evaluation.

### 2.2 Non-goals (for now)
- Medical-grade nutrition advice or disease management.
- Fully automatic checkout with real grocery vendors (depends on partner APIs; see Section 5.7).
- Training large models from scratch.
- Native mobile app (web/PWA is enough).

### 2.3 Target metrics (initial, adjust after baseline)

| Area | Metric | Target |
|---|---|---|
| Ingredient detection | mAP@0.5 on held-out *real fridge photos* | ≥ 0.60 (≥ 0.75 stretch) |
| Ingredient detection | Per-photo ingredient **recall** after dedupe | ≥ 0.80 |
| Ingredient detection | Per-photo ingredient **precision** | ≥ 0.75 |
| Latency | Photo to ingredient list on CPU | ≤ 3 s |
| Recommendation | Budget constraint satisfied | ≥ 98 % of requests |
| Recommendation | Calorie within ±15 % of target | ≥ 85 % of requests |
| Recommendation | Fridge ingredient utilization vs. baseline | +25 % relative |
| User study (n ≥ 10) | Decision time to pick a meal | −40 % vs. user's usual |
| User study | SUS usability score | ≥ 70 |

---

## 3. Constraints

- **Dev hardware:** regular laptop, CPU only. (A gaming laptop's NVIDIA GPU can be an optional speedup, but nothing may *require* it.)
- **Training strategy under CPU limits:**
  - Use **pretrained** models and fine-tune small ones (nano/small variants).
  - Use lower image sizes (416 to 512) and fewer epochs; freeze the backbone for the first epochs.
  - Optional: use free **Google Colab / Kaggle Notebooks** GPU for a *one-off training run only*. Inference and the app must stay CPU-friendly.
  - Export to **ONNX** and run with **ONNX Runtime** for fast CPU inference.
- **Budget:** near zero for MVP. Free tiers where possible. Any paid API (e.g., an LLM or vision API) must be optional behind a feature flag and have a cheap fallback.
- **Time:** about 8 to 10 weeks part-time.

---

## 4. System architecture

```
 ┌──────────────┐   ┌─────────────────────┐   ┌──────────────────────┐
 │ Fridge photo │──▶│ 1. Vision pipeline   │──▶│ 2. Ingredient         │
 │ + budget etc │   │  detector (+VLM      │   │    normalizer         │
 └──────────────┘   │  fallback)           │   │  (ID names → canonical│
                    └─────────────────────┘   │   ingredient IDs)     │
                                               └──────────┬───────────┘
                                                          ▼
                     ┌───────────────────────────────────────────────┐
                     │ 3. User confirm/edit screen (human-in-the-loop)│
                     └──────────────────────────┬────────────────────┘
                                                ▼
 ┌──────────────────┐   ┌───────────────────────────────────────────┐
 │ Knowledge base    │──▶│ 4. Recommendation engine                   │
 │ recipes, nutrition│   │  retrieve → hard filter → score → optimize │
 │ prices            │   └──────────────────────┬────────────────────┘
 └──────────────────┘                          ▼
        ▲                       ┌────────────────────────────┐
        │ feedback              │ 5. Grocery list / cart      │
 ┌──────┴────────┐              │  missing items + price est. │
 │ 6. Preference  │◀────────────┴────────────────────────────┘
 │    learning    │
 └───────────────┘
        LLM layer (optional): explanations, recipe adaptation, Indonesian text
```

---

## 5. Modules and methods

### 5.1 Ingredient recognition (the CV core)

Build in this order. Each step is a baseline for the next.

| Step | Method | Why |
|---|---|---|
| **B0** | Zero-shot **vision-language model** (cloud API or open VLM) prompted to list ingredients as JSON | Fast baseline, no training; also useful as a fallback and as an *auto-labeler* |
| **B1** | **Open-vocabulary detector** (e.g., YOLO-World, OWLv2, Grounding DINO) with an Indonesian ingredient vocabulary | Zero-shot boxes; use it to **bootstrap labels** that you then correct manually |
| **M1** | **Fine-tuned small detector** (YOLO nano/small, or a permissively licensed alternative, see licensing note) on your labeled fridge/kitchen dataset | The main trained model; CPU-friendly after ONNX export |
| **M2** *(optional)* | **Two-stage:** class-agnostic detector/segmenter (e.g., SAM-style) → crop → classifier (fine-tuned EfficientNet/MobileNet/ViT-small, or CLIP embedding + kNN) | Easier to add new ingredient classes without retraining the detector; good for look-alike items |
| **M3** *(optional)* | **Freshness classifier** (fresh / aging / spoiled) on produce crops | Powers "use these first" ranking |
| **M4** *(optional)* | **Quantity estimation**: count instances from detections; treat bulk items (rice, flour) as "present/absent" | Quantity from a single photo is unreliable; keep it coarse |

Practical rules:
- Many fridge items are **occluded, packaged, or in containers**. Accept this limit. The confirm/edit UI plus a "add missing items" search box is a core feature, not a fallback.
- Report **precision/recall per ingredient class**, not only overall mAP, and show the confusion matrix for look-alikes (e.g., bawang merah vs. bawang bombay, daun bawang vs. seledri, cabai types).
- Use **test-time confidence thresholds per class** tuned on validation data.
- Combine detector + VLM: if detector confidence is low or the image has many unknown objects, call the VLM and merge results (union with conflict rules). Evaluate whether the combo actually beats the detector alone before keeping it.
- Augmentations (Albumentations): brightness/contrast (fridge lighting), blur, perspective, random crop, mosaic, cutout/occlusion. Avoid augmentations that destroy color cues for produce.

**Licensing note (matters for a startup):** the popular Ultralytics YOLO code and weights are under **AGPL-3.0** (commercial license available). For a portfolio this is fine. If the project becomes a closed-source product, either buy a license or switch to a permissively licensed detector (e.g., torchvision detectors, RT-DETR/RF-DETR implementations, YOLOX). **Verify current licenses** and keep the detector behind an interface so it can be swapped.

### 5.2 Ingredient normalization
- Maintain a **canonical ingredient ontology**: `ingredient_id`, Indonesian name, English name, synonyms/aliases (e.g., "bawang merah" / "shallot" / "brambang"), category, default unit, typical shelf life, halal flag, allergen tags.
- Map detector labels, VLM free text, and recipe ingredient strings to canonical IDs using: exact/alias match → fuzzy match (rapidfuzz) → multilingual embedding similarity (fallback).
- Treat pantry staples (salt, oil, sugar, soy sauce, common spices) as an **"assumed available" list** the user can edit, so recipes aren't penalized for them.

### 5.3 User constraints and profile
- Required: daily budget (IDR).
- Optional: calorie target (or compute from age/sex/height/weight/activity with Mifflin-St Jeor, shown as an estimate, not medical advice), protein target, number of meals, max cooking time, cooking equipment, servings.
- Restrictions: halal (default on), vegetarian/vegan, allergies, disliked ingredients, spice tolerance.
- Store locally/with consent; see privacy (Section 14).

### 5.4 Knowledge base (recipes, nutrition, prices)
- **Recipes:** structured JSON (see Appendix B). Needs Indonesian-style home cooking: tumisan, sayur bening/sop, pepes, goreng, lauk-pauk, telur/tempe/tahu dishes, one-pot meals. Include estimated cooking time and steps.
- **Nutrition:** per-ingredient nutrition (per 100 g), then compute per-recipe nutrition by summing ingredient quantities. Prefer Indonesian food composition tables (TKPI) and supplement with USDA FoodData Central / Open Food Facts.
- **Prices:** per-ingredient price per unit in IDR with a region and date. Start with public food-price sources (e.g., national strategic food price information, BPS) plus a manual seed table; later add scraped/partner prices if legally allowed.
- Version every table. Prices go stale, so store `price_date` and show it in the UI.

### 5.5 Recommendation engine
Hybrid, in four stages:

1. **Retrieve** candidate recipes: multilingual sentence embeddings (CPU-friendly small model) of recipe text + ingredient overlap with fridge contents. Keep top ~200 candidates.
2. **Hard filter:** diet/halal, allergens, disliked ingredients, max cook time, equipment.
3. **Score** each candidate:
   `score = w1·fridge_utilization + w2·preference + w3·nutrition_fit − w4·missing_cost_ratio − w5·repetition − w6·effort`
4. **Optimize the day plan** (1 to N meals) with a small constraint solver (OR-Tools CP-SAT or PuLP):
   - **Hard constraint:** cost of *missing* ingredients ≤ daily budget.
   - Soft objectives: calories within ±X % of target, protein ≥ target, **use items about to expire first**, avoid repeating the same main ingredient twice in a day, reuse purchased ingredients across meals (shared grocery items lower total cost).
   - Return top-3 alternative plans so the user *chooses* instead of deciding from scratch, which keeps the decision burden low.

**Baselines to beat (for evaluation):** (a) random feasible recipe, (b) popularity, (c) keyword/ingredient-overlap only.

Always return an **explanation** ("uses your tempe and kangkung, Rp 12.000 to buy, ~650 kcal, 20 min").

### 5.6 Personalization
- Cold start: 5 to 8 quick onboarding choices (taste, spice, cuisine, dislikes).
- Online learning from feedback events (`shown`, `selected`, `cooked`, `rejected`, rating): start with a simple per-feature preference model (logistic regression or a contextual bandit with Thompson sampling), then consider embeddings-based user vectors only if data justifies it.
- Keep exploration small (e.g., 1 of 3 options is "something new").
- Without real users, create a **simulated user** generator for offline testing, and label results clearly as simulation.

### 5.7 Grocery list and "auto cart"
- Compute missing ingredients across the chosen plan, merge duplicates, round to purchasable pack sizes (e.g., 1 ikat kangkung, ½ kg ayam), estimate prices.
- **MVP:** shareable/exportable list (copy, WhatsApp text, CSV) with total estimate.
- **Later:** connect to a grocery/delivery vendor. Indonesian grocery apps generally have **no open public ordering APIs**; this needs a partnership, an affiliate/deep-link approach, or an official API if one exists. Treat as a **business risk**, not an engineering task, and validate early (Section 13).
- Never place an order without explicit user confirmation.

### 5.8 LLM layer (optional, behind a flag)
- Uses: natural-language explanations, adapting a recipe to substitutions, Indonesian/English chat ("yang murah dan cepat dong"), parsing free-text preferences.
- Rules: the LLM **never** invents prices, nutrition values, or ingredients. It only rewrites/explains structured outputs. Validate outputs against the schema. Provide a non-LLM template fallback so the app works offline and at zero cost.

---

## 6. Data needed

### 6.1 Overview

| Purpose | What | Source options (verify license/availability) | Notes |
|---|---|---|---|
| Ingredient detection (train) | Photos of raw ingredients, groceries, kitchen scenes with boxes | Your own photos; Open Images (food/vegetable/fruit classes); public produce datasets (e.g., Fruits-360, vegetable image datasets on Kaggle); Roboflow Universe public fridge/grocery datasets; Freiburg Groceries | Public sets are mostly **clean, white-background or Western** items. They help pretraining but do **not** match real Indonesian fridges. |
| Ingredient detection (test) | **Real fridge/pantry photos**, never used in training | Your own + friends/family (with consent) | **This is the dataset that matters.** Keep it frozen and separate. Target ≥ 150 to 200 photos from ≥ 15 different kitchens. |
| Food/dish context (optional) | Dish images for later "cooked meal" features | Food-101, UEC-Food256, Indonesian food image datasets on Kaggle | Not needed for MVP. |
| Recipes | Indonesian recipes with ingredients, steps, time | Kaggle Indonesian recipe datasets (often scraped from recipe sites), RecipeNLG / Recipe1M+ (for English/general), your own curated set | **Check scraping/licensing terms.** For a startup, plan to curate or license your own recipes. Start with 300 to 1,000 well-structured recipes rather than 50,000 messy ones. |
| Nutrition | Per-100 g nutrition for ingredients | TKPI (Indonesian food composition table), USDA FoodData Central, Open Food Facts (packaged items) | Map each canonical ingredient to a nutrition entry; record the source. |
| Prices | IDR per unit, by region/date | National food price info portals (PIHPS), BPS, manual survey of local market/supermarket/online grocer prices | Seed table for 150 to 300 common ingredients. Re-survey periodically. |
| Freshness (optional) | Fresh vs. rotten produce | Kaggle fresh/rotten fruit and vegetable datasets | Check domain match. |
| Users (later) | Feedback events, preferences | App usage; user study | Only with consent. |

### 6.2 Data collection protocol for your own photos
- Phone camera, normal use: different lighting, angles, fridge doors open, shelves, counters, baskets.
- Vary: number of items (3 to 40), occlusion, packaging (plastic bag, container, loose), cluttered backgrounds.
- Include Indonesian staples: tempe, tahu, telur, ayam, ikan, bawang merah/putih, cabai (merah/rawit/hijau), tomat, kangkung, bayam, wortel, kentang, kol, buncis, sawi, jeruk nipis, jahe, kecap, saos, santan, dll.
- **Split by kitchen/household, not by photo** (avoid leakage: photos from the same fridge must not appear in both train and test).
- Suggested size for MVP: **1,500 to 3,000 labeled images** mixing public + own, with **~300+ own real-world photos**; ≥ 30 box instances per class where possible.
- Remove or blur faces, documents, and anything personal. Record consent.
- Faster labeling: auto-label with the open-vocabulary detector (B1), then correct in **Label Studio / CVAT / Roboflow**. Budget ~10 to 20 hours of correction for the MVP set.

### 6.3 Dataset documentation (required)
For each dataset: name, URL, license, date accessed, what was used, preprocessing, known biases. Keep in `docs/data_sources.md`. Include a "datasheet" for your own collected set.

---

## 7. Tech stack and requirements

**Language/tooling:** Python 3.11+, `uv` or `venv`, `ruff` (lint/format), `pytest`, `pre-commit`, Git, optional Docker.

| Area | Libraries/tools |
|---|---|
| Core ML | PyTorch (CPU build), torchvision, timm, scikit-learn, NumPy, pandas |
| Vision | OpenCV, Pillow, Albumentations, Ultralytics (see license note) or alternative detector, ONNX, ONNX Runtime |
| Open-vocab / auto-label | YOLO-World, OWLv2 or Grounding DINO via Hugging Face `transformers`; optional SAM-style segmenter |
| Labeling | Label Studio or CVAT (self-hosted) or Roboflow |
| NLP / retrieval | `sentence-transformers` (small multilingual model), `rapidfuzz`, FAISS (CPU) or plain NumPy |
| Optimization | OR-Tools (CP-SAT) or PuLP |
| Personalization | scikit-learn, simple bandit code |
| Backend | FastAPI, Pydantic, SQLite (MVP) → PostgreSQL (later), SQLAlchemy |
| Frontend | Streamlit or Gradio for the MVP; later a simple React/Next.js PWA for mobile-friendly camera upload |
| Experiment tracking | Weights & Biases (free tier) or MLflow or TensorBoard |
| Data versioning | DVC or plain release assets + checksum file |
| LLM/VLM (optional) | Anthropic/other API with an env-var configured model name; open-weight small VLM as a local alternative if RAM allows |
| Deployment | Hugging Face Spaces (free CPU) or Render/Fly.io/Railway; Docker |
| CI | GitHub Actions: lint + tests + small smoke inference |

**Minimum machine:** 16 GB RAM recommended (8 GB workable), ~30 GB free disk, no GPU required.

**Config via environment variables** (never hard-code): `LLM_ENABLED`, `LLM_API_KEY`, `LLM_MODEL`, `DETECTOR_BACKEND`, `PRICE_TABLE_PATH`, `DB_URL`.

---

## 8. Suggested repository structure

```
pantrified/
├── README.md                  # portfolio-grade overview, demo GIF, results
├── CLAUDE.md / PANTRIFIED_SPEC.md
├── pyproject.toml
├── .env.example
├── data/                      # git-ignored (use DVC or download scripts)
│   ├── raw/  interim/  processed/
├── docs/
│   ├── decisions.md           # decision log
│   ├── data_sources.md        # licenses, datasheets
│   ├── evaluation.md          # results and error analysis
│   └── privacy_and_ethics.md
├── notebooks/                 # EDA and error analysis only
├── src/pantrified/
│   ├── vision/                # detector, vlm_fallback, postprocess, export_onnx
│   ├── ontology/              # ingredient ids, aliases, normalizer
│   ├── kb/                    # recipes, nutrition, prices loaders
│   ├── recommend/             # retrieve, filter, score, optimize, explain
│   ├── personalization/       # feedback store, preference model, simulator
│   ├── grocery/               # list builder, pack-size rounding, exporters
│   ├── api/                   # FastAPI app, schemas
│   └── app/                   # Streamlit/Gradio UI
├── scripts/                   # train, evaluate, autolabel, build_kb
├── configs/                   # YAML for training, weights, thresholds
├── tests/
├── docker/
└── .github/workflows/
```

---

## 9. Phased roadmap (about 8 to 10 weeks)

### Phase 0: Problem validation and setup (Week 1)
**Tasks**
- Interview 5 to 8 people (students/young professionals): how they decide meals, what they spend, what apps they use, what they throw away. Record findings.
- Brief competitor scan (ingredient-based recipe apps, meal planners, food-delivery apps). Note gaps in Indonesian context.
- Repo, environment, lint/test/CI skeleton, `docs/decisions.md`.
- Finalize the **ingredient class list v1** (40 to 60 classes, Appendix A) and the **metrics** (Section 2.3).

**Definition of Done:** interview summary written; repo runs `pytest` green; class list and metrics agreed.

### Phase 1: Knowledge base (Weeks 1 to 2)
**Tasks**
- Build the canonical ontology + aliases (Indonesian/English).
- Collect/curate 300 to 1,000 recipes into the schema (Appendix B); normalize ingredient strings to canonical IDs; compute nutrition and cost per recipe.
- Build the seed price table (150 to 300 ingredients) and nutrition mapping; document sources.
- Unit tests: normalizer accuracy on a hand-labeled set; schema validation for every recipe.

**DoD:** ≥ 300 valid recipes; ≥ 95 % of recipe ingredients mapped to canonical IDs; nutrition and price coverage reported.

### Phase 2: Vision (Weeks 2 to 4)
**Tasks**
1. Collect own photos; set up train/val/test **split by household**; freeze the real-photo test set.
2. **B0:** VLM zero-shot baseline; evaluate on the test set.
3. **B1:** open-vocabulary detector baseline; auto-label the training set; correct labels.
4. **M1:** fine-tune the small detector (CPU or one-off free cloud GPU), track experiments, export ONNX, benchmark CPU latency.
5. Error analysis: per-class PR, confusion pairs, failure gallery (occlusion, packaging, lighting).
6. Decide on detector + VLM fusion rule based on measured results.
7. *(Optional)* M2 crop-classifier and M3 freshness model if time allows.

**DoD:** pipeline function `photo → [(ingredient_id, confidence, box)]` with tests; metrics table vs. baselines in `docs/evaluation.md`; ≤ 3 s on CPU for a 1280 px image.

### Phase 3: Recommendation engine (Weeks 4 to 5)
**Tasks**
- Implement retrieve → filter → score → optimize (Section 5.5) with a clean interface `recommend(fridge, constraints, profile) → [Plan]`.
- Implement baselines (random, popularity, overlap-only).
- Offline evaluation on **synthetic scenarios** (e.g., 500 random fridge/budget/calorie combinations): constraint satisfaction, utilization, cost, diversity, runtime.
- Explanation generator (template-based first).

**DoD:** engine beats all baselines on utilization at equal constraint satisfaction; < 1 s per request on CPU; tests for edge cases (tiny budget, empty fridge, conflicting restrictions → graceful message).

### Phase 4: MVP app (Weeks 5 to 6)
**Tasks**
- Streamlit/Gradio flow: upload photo → review/edit detected ingredients → enter budget (+ options) → see 3 plans with explanations → grocery list → copy/export.
- FastAPI endpoints mirroring the flow; Pydantic schemas.
- Logging (privacy-safe), error handling, loading states, Indonesian UI strings (i18n-ready).

**DoD:** a new user completes the full flow in under 2 minutes without help; works on a phone browser.

### Phase 5: Personalization and grocery (Weeks 6 to 7)
**Tasks**
- Feedback capture + preference model + onboarding.
- Grocery list builder with pack-size rounding and price date display.
- Simulated-user evaluation of personalization (clearly labeled as simulation).

**DoD:** preference model improves simulated-user acceptance over non-personalized ranking; grocery totals match recipe cost calculations in tests.

### Phase 6: User study and final evaluation (Weeks 7 to 8)
**Tasks**
- 10 to 20 participants, 3 to 5 days of use or task-based sessions. Measure decision time, perceived mental load, plan acceptance rate, SUS, and free-text feedback.
- Final model/engine evaluation on frozen test sets; ablation table (VLM on/off, personalization on/off, optimizer vs. greedy).
- Write honest limitations.

**DoD:** results and error analysis in `docs/evaluation.md`; every claim in the README backed by a number.

### Phase 7: Deployment and portfolio packaging (Weeks 8 to 10)
**Tasks**
- Dockerize; deploy a public demo (CPU hosting); add sample photos for visitors who don't want to upload their own.
- README: problem, demo GIF/video, architecture diagram, results table, failure cases, ethics, how to run.
- Short blog post/case study and a 2-minute demo video.

**DoD:** public URL works; fresh clone → running app in ≤ 10 minutes using the README.

### Phase 8 (optional): Startup validation (after Week 10)
See Section 13.

---

## 10. Evaluation plan

### 10.1 Vision
- Metrics: mAP@0.5, mAP@0.5:0.95, per-class precision/recall/F1, per-photo set-level precision/recall (what the user actually experiences), confusion matrix, latency (p50/p95) on CPU.
- Slices: single vs. cluttered fridge, loose vs. packaged, lighting conditions, own-photos vs. public-data images.
- Baselines/ablations: VLM-only, open-vocab-only, fine-tuned detector, detector + VLM fusion, with/without augmentation, nano vs. small model.
- Report confidence intervals (bootstrap over photos).

### 10.2 Recommendation
- Constraint satisfaction rate (budget, calories, restrictions, time).
- Fridge utilization % and "about-to-expire used" rate.
- Cost per meal, nutrition fit, diversity/repetition.
- Offline simulated users and a real user study (Phase 6).

### 10.3 Product
- Time to first plan, edit rate (how many detected items the user corrects), plan acceptance rate, "cooked it" rate, SUS, qualitative feedback.

### 10.4 Reproducibility
- Fixed seeds, config files committed, results tables generated by scripts (`scripts/evaluate.py`), not by hand.

---

## 11. Deployment notes
- **Inference path:** ONNX Runtime on CPU; resize images to the model's size; limit upload size; strip EXIF location data.
- **Hosting (MVP):** Hugging Face Spaces or similar free CPU tier; cold starts are acceptable.
- **Storage:** don't keep uploaded photos by default. Process in memory and discard, or store only with explicit opt-in (e.g., to improve the model).
- **Monitoring:** log latency, error rates, and aggregate edit rates only.
- **Secrets:** environment variables only.

---

## 12. Portfolio packaging checklist
- [ ] Clear one-sentence problem and a demo GIF at the top of the README
- [ ] Architecture diagram and a "why these choices" section
- [ ] Results table with baselines and ablations, honest failure gallery
- [ ] Dataset datasheet and license table
- [ ] Reproducible commands (`make setup`, `make train`, `make eval`, `make app`)
- [ ] Live demo link and a short video
- [ ] Limitations and ethics section
- [ ] Case-study write-up that tells the story: problem → user research → technical decisions → results → what you'd do next

---

## 13. Startup considerations (keep in mind, don't build prematurely)

**Validate before scaling**
- Is "what to eat" painful enough that people would use or pay for it *weekly*? Measure retention in the user study, not just praise.
- Who is the first niche? Candidates: students/anak kos on tight budgets, young professionals with decision fatigue, health-goal users, busy parents.
- Does the fridge photo add enough value over typing 5 ingredients? Test with a "type ingredients" mode as a control. If users don't prefer the photo flow, rethink.

**Possible business models**
- Affiliate/commission from grocery or delivery partners (requires partnerships).
- Freemium subscription (advanced nutrition, family plans, weekly planning).
- B2B: grocery/retail integrations, corporate wellness.

**Key risks**
- Grocery vendor integration (no public APIs; partner dependence).
- Price data freshness and regional variance.
- Recipe content licensing.
- Detector accuracy in real, messy fridges.
- Competition from existing recipe and food-delivery apps; the moat is the **combination** (fridge-aware + budget-aware + auto-cart + personalization), the data flywheel from user feedback, and local-market depth.

**Legal/compliance (Indonesia)**
- Personal-data protection law (UU PDP): consent, purpose limitation, deletion on request. Get proper legal advice before launch.
- Halal handling and clear labeling; allergen disclaimers.
- Health disclaimer: nutrition estimates are informational, not medical advice.
- Model/library licenses (see AGPL note in 5.1) and dataset/recipe licenses.

---

## 14. Ethics, privacy, and safety
- Fridge photos can reveal personal info (people, mail, medications, lifestyle). Process minimally, delete by default, state this in the UI.
- Get consent for any photo contributed to the dataset; anonymize.
- Dataset bias: if the data is mostly one region's or income group's kitchens, accuracy will be worse for others. Report slices.
- Nutrition guidance: avoid encouraging extreme restriction. Add sensible lower bounds on calories and a clear disclaimer; do not give disease-specific advice.
- Allergen safety: if an allergen *might* be present (low-confidence detection or unknown packaged items), say so rather than silently ignoring it. The app must never claim a meal is "allergen-free" based on a photo.
- Transparency: show confidence, let users correct everything, explain recommendations.

---

## 15. Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Low detection accuracy on real fridges | High | High | Real-photo test set early; human-in-the-loop edit UI; VLM fallback; narrow class list first |
| CPU-only training too slow | Medium | Medium | Nano model, small image size, freeze layers, one-off free cloud GPU run, crop-classifier approach |
| Not enough Indonesian recipe/price data | Medium | High | Curate a smaller high-quality set; manual seed prices; document sources |
| Scope creep | High | High | Phase gates; freeze MVP scope; optional items are labeled optional |
| Licensing problems (AGPL, scraped data) | Medium | High (startup) | Detector behind an interface; license log; plan own content |
| No real users to evaluate personalization | Medium | Medium | Simulated users (clearly labeled) + small real study |
| Price staleness | High | Medium | Show price date; periodic refresh; ranges instead of exact values |

---

## 16. Open questions (resolve and log in `docs/decisions.md`)
1. Primary demo language: Indonesian, English, or bilingual?
2. Which city/region for the initial price table?
3. Single-user personal tool first, or family/household mode from the start?
4. Is a paid LLM/VLM API acceptable for the MVP (even at a few dollars), or must everything be local/free?
5. Is the portfolio audience mainly ML roles, product/startup, or both? (This shifts the balance between vision depth and product polish.)
6. Will the owner collect photos from friends/family, and is there a consent process they are comfortable with?

---

## Appendix A: Starter ingredient class list v1 (edit freely)

Start with ~50 high-frequency classes; add more only after the first model trains.

- **Protein:** telur ayam, ayam (potong/utuh), daging sapi, ikan (lele/nila/kembung/salmon), udang, tempe, tahu, sosis, bakso, ikan teri/asin (pantry)
- **Vegetables:** kangkung, bayam, sawi hijau, sawi putih/pakcoy, kol, wortel, buncis, kacang panjang, tomat, timun, terong, kentang, brokoli, jagung, labu siam, daun singkong, tauge, jamur
- **Aromatics:** bawang merah, bawang putih, bawang bombay, daun bawang, cabai merah, cabai rawit, cabai hijau, jahe, lengkuas, kunyit, serai, jeruk nipis
- **Fruits (common):** pisang, jeruk, apel, pepaya, semangka
- **Staples/pantry (often "assumed available" or presence-only):** beras, mie instan, roti tawar, santan, kecap manis, saos sambal/tomat, minyak goreng, tepung, susu, keju, mentega/margarin

**Look-alike pairs to monitor:** bawang merah/bawang bombay, daun bawang/seledri, cabai merah/tomat kecil, kangkung/bayam, sawi hijau/pakcoy, jahe/lengkuas/kunyit.

---

## Appendix B: Data schemas (starting point)

**Ingredient (canonical)**
```json
{
  "ingredient_id": "ing_tempe",
  "name_id": "tempe",
  "name_en": "tempeh",
  "aliases": ["tempe kedelai", "tempeh"],
  "category": "protein",
  "default_unit": "g",
  "shelf_life_days": {"fridge": 5, "room": 2},
  "halal": true,
  "allergens": ["soy"],
  "assumed_available": false,
  "nutrition_per_100g": {"kcal": 0, "protein_g": 0, "fat_g": 0, "carb_g": 0, "source": "TKPI"},
  "price": {"idr_per_unit": 0, "unit": "100g", "region": "Jakarta", "price_date": "YYYY-MM-DD", "source": ""}
}
```
*(Zero values above are placeholders. Fill from verified sources, never from memory.)*

**Recipe**
```json
{
  "recipe_id": "rcp_0001",
  "title": "Tumis kangkung tempe",
  "servings": 2,
  "cook_time_min": 20,
  "equipment": ["stove", "pan"],
  "ingredients": [
    {"ingredient_id": "ing_kangkung", "qty": 200, "unit": "g", "optional": false},
    {"ingredient_id": "ing_tempe", "qty": 150, "unit": "g", "optional": false}
  ],
  "steps": ["..."],
  "tags": ["halal", "murah", "cepat"],
  "diet": {"vegetarian": true, "vegan": true},
  "computed": {"kcal_per_serving": 0, "protein_g": 0, "est_cost_idr": 0},
  "source": {"name": "", "url": "", "license": ""}
}
```

**Detection output**
```json
{
  "image_id": "img_123",
  "detections": [
    {"ingredient_id": "ing_tempe", "confidence": 0.87, "box": [x1, y1, x2, y2], "source": "detector"}
  ],
  "latency_ms": 1800
}
```

**Feedback event**
```json
{"user_id": "u_1", "plan_id": "p_9", "recipe_id": "rcp_0001", "event": "selected", "ts": "ISO-8601"}
```

---

## Appendix C: Recommendation objective (reference formulation)

For a candidate set of meals `M` in a day plan:

- **Hard constraints:** `Σ cost(missing_ingredients(M)) ≤ budget`; diet/allergen/halal filters satisfied; total time ≤ limit.
- **Minimize:**
  `w_cal·|kcal(M) − target|/target + w_pro·max(0, protein_target − protein(M)) + w_waste·(1 − utilization(M)) + w_exp·unused_expiring(M) + w_rep·repetition(M) − w_pref·preference(M)`
- Where `utilization(M)` = share of (weighted) fridge items used, with weights higher for perishable/expiring items.
- Tune weights on synthetic scenarios, then sanity-check with human review of 50 outputs.

---

## Appendix D: Definition of "done" for the whole MVP
- Upload a fridge photo → editable ingredient list in ≤ 3 s on CPU.
- Enter budget → 3 plan options that respect budget/diet and use existing ingredients.
- Grocery list with total estimate and export.
- Tests green, CI green, public demo live, README with honest results, user-study summary in `docs/evaluation.md`.
