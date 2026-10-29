# Pantrified recipe and price data plan

How the knowledge base is built: 300 validated recipes, 50 ingredient classes, and a dated price table for Jakarta. This document expands section 10 of `PRD.md` and milestone M2.

| Field | Value |
|---|---|
| Version | 0.1 |
| Date | 2026-10-29 |
| Owner | Solo developer |
| Status | Draft, blocked on OQ-2 for the first price region |
| Related | `PRD.md` sections 6, 10, 19, and 20 |

## Targets

| Item | Target | Gate |
|---|---|---|
| Ingredient classes | 50, frozen at the end of week 1 | Every class appears in 8 or more recipes |
| Recipes | 300, validated against the schema | 280 or more pass the validator |
| Price rows | 150 ingredients, one region, one week | Every row has a date, a source, and a pack size |
| Coverage | Every recipe has cost, calories, time, and equipment | No null in a required field |

The knowledge base is the product's second risk after the detector. A wrong price is worse than a missing recipe, because the user acts on it at the till.

## Ingredient ontology

One table, one row per class, built before any recipe is written.

| Field | Rule |
|---|---|
| `id` | `ing_` plus a lowercase mnemonic, stable forever |
| `name_id` | Indonesian name as printed on a market label |
| `name_en` | English name for the toggle |
| `aliases` | At least 3 spellings, including regional words and common typos |
| `category` | Protein, vegetable, aromatic, fruit, dairy, pantry, packaged |
| `default_unit` | g, ml, or piece |
| `piece_grams` | Gram equivalent for a piece unit, with a source note |
| `shelf_life_days` | Typical fridge or pantry life, used for freshness ranking later |
| `halal` | Yes, no, or unknown. Unknown is shown as unknown, never guessed |
| `allergens` | From a fixed list: egg, milk, fish, shellfish, peanut, soy, wheat, tree nut |
| `assumed_available` | True for salt, oil, sugar, and soy sauce |
| `kcal_100g`, `protein_100g` | Per 100 g, nullable |
| `nutrition_source` | Source name and record id, or null |

Alias examples that matter in practice: `tempe` also appears as `tempeh`, `tahu` as `tofu`, `kangkung` as `kangkong` or `morning glory`, `labu siam` as `chayote` or `jipang`, `daun bawang` as `scallion` or `spring onion`. The normalizer is scored on a hand-labelled set of 200 free-text entries, target 95% mapped.

Units are a fixed whitelist: g, kg, ml, l, butir, buah, ikat, siung, lembar, batang, sachet, kaleng, potong, porsi. Anything else fails validation, which stops a recipe from shipping with "secukupnya" as a quantity.

## Recipe schema

| Field | Type | Required | Rule |
|---|---|---|---|
| `id` | string | Yes | `rcp_` plus a slug, stable |
| `title_id` | string | Yes | Indonesian title, 2 to 60 characters |
| `title_en` | string | No | English title, filled for the toggle |
| `servings` | integer | Yes | 1 to 8 |
| `prep_min`, `cook_min` | integer | Yes | Each 0 to 120, total 45 or less for the MVP |
| `equipment` | list | Yes | From: kompor, wajan, panci, kukusan, oven, blender, rice cooker |
| `steps` | list | Yes | 3 to 8 steps, each 1 or 2 sentences |
| `tags` | list | Yes | Meal, diet, protein, spice level |
| `diet` | list | Yes | halal, vegetarian, vegan, contains egg, contains dairy |
| `kcal_serving` | integer | Yes | 50 to 900, computed from ingredients |
| `protein_serving` | number | Yes | 0 to 80, computed from ingredients |
| `est_cost_idr` | integer | Yes | Computed from the price table, never typed by hand |
| `source_name` | string | Yes | Where the recipe came from |
| `source_url` | string | No | Link when one exists |
| `license` | string | Yes | One value from the licence register |
| `contributor` | string | No | Name for a family recipe, with permission |
| `reviewed_on` | date | Yes | Last time a human cooked or checked it |

Validation rules that catch real mistakes:

1. Every `recipe_ingredient` points to a known `ingredient.id`.
2. Every quantity is greater than zero and uses a whitelisted unit.
3. The sum of ingredient calories is within 15% of `kcal_serving`, or the row fails.
4. `est_cost_idr` equals the computed cost within Rp 500.
5. No recipe repeats an ingredient row.
6. No step is longer than 240 characters.
7. `halal` is false or unknown if any ingredient is unknown, and the UI says so.
8. A recipe with an allergen ingredient must list that allergen.
9. Titles are unique after lowercasing and stripping punctuation.
10. `license` is present and not "unknown" at publish time.

## Coverage matrix

The 300 recipes are planned, not collected at random, so no user segment hits an empty shelf.

| Dimension | Buckets | Target count |
|---|---|---|
| Meal | Sarapan | 60 |
| Meal | Makan siang | 90 |
| Meal | Makan malam | 90 |
| Meal | Camilan | 60 |
| Protein | Vegetarian | 90 |
| Protein | Egg | 60 |
| Protein | Chicken | 60 |
| Protein | Fish | 45 |
| Protein | Beef | 30 |
| Protein | Shrimp | 15 |
| Cost per serving | Up to Rp 10.000 | 90 |
| Cost per serving | Rp 10.001 to 20.000 | 120 |
| Cost per serving | Rp 20.001 to 35.000 | 75 |
| Cost per serving | Above Rp 35.000 | 15 |
| Cook time | 15 minutes or less | 75 |
| Cook time | 16 to 30 minutes | 120 |
| Cook time | 31 to 45 minutes | 105 |
| Equipment | No oven required | 285 |
| Equipment | Oven required | 15 |

The no-oven share is deliberate. A student kitchen has a stove and a rice cooker, not an oven.

## Recipe sourcing

| Option | Count | Licence position | Risk |
|---|---|---|---|
| Written from own cooking and tested | 150 | Own work, all rights held | Time, but no legal doubt |
| Family and friends, with written permission | 60 | Contributor licence, signed | Needs a consent form and a name field |
| Public domain and CC0 collections | 30 | Public domain or CC0 | Must verify each item, not the collection page |
| CC-BY sources | 40 | Attribution required | Attribution field must render in the app |
| Government or public nutrition publications | 20 | Check the terms per publication | Terms vary, so log the evidence |
| Generated drafts, then cooked and corrected | 0 to 20 | Own work after human correction | Nonsense quantities, wrong method, cultural mismatch |
| Scraped recipe sites | 0 | Not allowed | Copyright in the text and photos, and terms of use |

Rules:

- Never copy recipe text verbatim. Read, cook, then write the method in your own words.
- Photos are separate from text. A CC-BY recipe does not license its photo.
- Every source gets a row in the licence register with the URL, the licence name, the date checked, and where the evidence is stored.
- A generated recipe is only accepted after a human cooks it and rewrites the method. It is flagged `generated_draft` in the source field so the demo can be honest about it.

## Nutrition data

| Source | Use | Notes |
|---|---|---|
| TKPI, Tabel Komposisi Pangan Indonesia | Primary for Indonesian ingredients | Government publication, cite the edition and page |
| USDA FoodData Central | Gaps, especially imported items | Public domain, record the FDC id |
| Manufacturer label | Packaged items | Photograph the label and store the date |
| Recipe calculation | Per serving | Sum of ingredient values, divided by servings |

Rules:

- Store per 100 g, compute per serving. Never store only the per-serving value.
- A missing value stays null. The UI shows "unknown" and the macro ring says how many ingredients are missing.
- Sanity ranges: 50 to 900 kcal, 0 to 80 g protein, 0 to 150 g carbohydrate, 0 to 60 g fat per serving. A value outside the range fails the build.
- Calories are never estimated from cost, and cost is never estimated from calories.
- Cooking losses and oil absorption are ignored in the MVP, and the limits section says so.

## Price collection

Region: Jakarta first. OQ-2 may switch this to Bandung before collection starts, and the region field makes that a data change, not a code change.

| Step | Rule |
|---|---|
| Frequency | One collection week per month, same week each month |
| Sources per ingredient | Three: a traditional market, an online grocery, a supermarket |
| Unit recorded | The pack the price refers to, plus the normalized unit |
| Value recorded | Median of the three, converted to IDR per gram, ml, or piece |
| Date recorded | The collection date, shown in the app |
| Outliers | A price more than 3 times the median is rechecked, then dropped with a note |

| Field | Example |
|---|---|
| `ingredient_id` | ing_tempe |
| `region` | Jakarta |
| `unit` | g |
| `idr_per_unit` | 14.5 |
| `pack_size` | 250 g |
| `pack_price` | 3625 |
| `price_date` | 2026-11-10 |
| `source` | Pasar traditional, online grocery, supermarket |
| `source_url` | One link per source |
| `notes` | Branded or loose, grade, seasonal flag |

Pack rounding is part of the price model, not the recipe model:

- Packs needed equals the quantity divided by the pack size, rounded up.
- Cost equals packs times the pack price.
- The leftover quantity is shown, because a user who buys 250 g of tempe for a 150 g recipe should see the 100 g spare.
- A missing price shows "price unavailable" and excludes the item from the total, with a count of excluded items at the bottom.

Regional multipliers, used only until a region is measured:

| Region | Multiplier | Status |
|---|---|---|
| Jakarta | 1.00 | Measured |
| Bandung | 0.92 | Estimate |
| Surabaya | 0.95 | Estimate |
| Medan | 1.05 | Estimate |
| Outside Java | 1.10 | Estimate |

Every estimated row carries the word estimate in the app. A multiplier is replaced by a measured table as soon as that region is collected.

Staleness:

- 30 days: the app shows the price date and a soft warning.
- 90 days: the build fails, so a stale table cannot ship by accident.
- Seasonal items (chilli, tomato, shallot) also show a range, because a single number implies a precision the market does not have.

## Unit normalization

| Unit | Conversion | Source |
|---|---|---|
| kg to g | 1000 | Definition |
| l to ml | 1000 | Definition |
| butir (egg) | 50 g | Average market egg, note the assumption |
| siung (garlic) | 4 g | Average clove, note the assumption |
| ikat (leafy green) | 200 g | Average bunch, note the assumption |
| lembar (leaf) | 2 g | Average leaf, note the assumption |
| batang (stalk) | 30 g | Average stalk, note the assumption |
| sachet | Pack label | Read from the package |
| kaleng | Pack label | Read from the package |

Piece conversions are approximations and are labelled as such. The original text is stored next to the normalized value, so a later correction does not require rewriting the recipe.

## Build pipeline

```text
data/raw/          immutable downloads and photos, with a manifest and checksums
data/interim/      parsed JSON, not hand edited
data/processed/    validated JSON plus a SQLite file
data/price/        one CSV per collection week, append only
scripts/           ingest, validate, build_kb, check_prices
```

Rules:

- Raw data is append only. A correction creates a new file, never an edit in place.
- The processed knowledge base is built from raw by one command, so a rebuild is reproducible.
- Each build writes a version, a checksum, a row count, and the price date into the artifact.
- The app reads the built artifact only. It never reads raw files at runtime.

## Quality gates

| Check | Fails when | Level |
|---|---|---|
| Schema | A required field is null or the wrong type | Build fail |
| Foreign keys | A recipe or price points to an unknown ingredient | Build fail |
| Units | A unit is outside the whitelist | Build fail |
| Calories | Sum and stored value differ by more than 15% | Build fail |
| Cost | Computed and stored cost differ by more than Rp 500 | Build fail |
| Allergens | An allergen ingredient is not listed | Build fail |
| Price date | The newest price row is older than 90 days | Build fail |
| Price coverage | Under 90% of ingredients have a price | Build fail |
| Recipe count | Under 280 valid recipes | Build fail |
| Class coverage | A class appears in fewer than 8 recipes | Warning |
| Duplicate titles | Two titles match after normalization | Warning |
| Licence | A source has no licence row | Build fail |
| Step length | A step is over 240 characters | Warning |

## Licence register

| Source | Licence | Attribution | Evidence stored |
|---|---|---|---|
| Own recipes | All rights held | Not required | Date and author note in the repo |
| Family and friends | Written contributor licence | Name in `contributor` | Signed form, scanned |
| Public domain collections | Public domain | Not required | Source page and check date |
| CC0 collections | CC0 | Not required | Source page and check date |
| CC-BY sources | CC-BY 4.0 or stated version | Title, author, link, changes | Source page and check date |
| Government publications | Per publication | Publisher and edition | Terms page and check date |
| Nutrition, TKPI | Government publication | Edition and table | Copy of the table page |
| Nutrition, USDA FDC | Public domain | FDC id | API record |

Fonts and libraries have their own licences and are listed in the PRD appendix. This register covers data only.

## Schedule

| Week | Work | Output |
|---|---|---|
| 1 | Ontology, units, aliases, allergen list | 50 rows, validator passing |
| 1 | Recipe schema and validator | 10 sample recipes pass |
| 1 | Write and test 30 recipes | 30 rows |
| 2 | Write and test 120 recipes, including contributor recipes with signed permission | 150 rows, 60 forms |
| 2 | Price collection week, 150 ingredients | 450 source rows, 150 medians |
| 3 | Import 90 licensed recipes and rewrite the method | 240 rows with licence rows |
| 3 | Write 60 more own recipes | 300 rows |
| 4 | Nutrition join, calorie check, validator fixes | Every recipe computed |

The M2 gate at the end of week 2 is 150 recipes and a complete price table, not the full 300. The remainder closes in week 4, in parallel with the vision work.

## Effort

| Item | Hours |
|---|---|
| Ontology and aliases | 8 |
| Schema and validator | 6 |
| Own recipes, 150 at about 12 minutes each, written from meals already cooked | 30 |
| Contributor recipes, 60 at about 20 minutes each | 20 |
| Licensed import, 90 at about 25 minutes each, rewritten and spot-checked | 38 |
| Price collection | 12 |
| Nutrition join and fixes | 10 |
| Total | About 124 hours |

This is the largest single block of work in the project. It is also the block that decides whether the plans are believable, so it is scheduled before the recommender, not after.

At 25 hours a week it fills weeks 1 to 4. That overlaps the vision milestone on purpose: recipe writing and photo collection use different hours of the day and different attention, and the M2 gate only needs half the recipes.

Weeks 2 and 3 are the heaviest at about 30 hours each, because price collection and the licensed import land there. If 30 hour weeks are not realistic, cut the MVP to 150 recipes and keep 300 as the post-launch target. The optimizer works with 150; the coverage matrix halves with it. That trade is RQ-5.

## Risks and open questions

| ID | Risk | Effect | Mitigation |
|---|---|---|---|
| RD-1 | Licence turns out unclear after import | Rework or removal | Check the licence before writing, keep evidence |
| RD-2 | Prices drift or a region is unmeasured | Wrong totals | Date on screen, 90 day build fail, ranges for seasonal items |
| RD-3 | Nutrition gaps for local ingredients | Incomplete macros | TKPI first, null plus a visible unknown state |
| RD-4 | Generated recipes contain impossible steps | User distrust | Cook every one, rewrite the method, flag the source |
| RD-5 | Unit conversion error | Wrong quantity and cost | Store original text, label approximations, test conversions |
| RD-6 | Jakarta bias | Poor fit outside the city | Multipliers marked as estimates, region field in the schema |
| RD-7 | Recipe count target met with low-quality rows | Weak plans | Human cook test, coverage matrix, validator |
| RD-8 | The data block overruns and delays the recommender | Launch slips | M2 gate at 150 recipes, cut to 150 total if weeks run long |

| ID | Question | Decide by |
|---|---|---|
| RQ-1 | Jakarta or Bandung for the first price table | 2026-11-08, shared with OQ-2 |
| RQ-2 | Do branded packaged items get their own rows or share a generic class | 2026-11-08 |
| RQ-3 | Is halal status shown as a badge or only as a filter | 2026-11-15 |
| RQ-4 | Do we publish the recipe sources and licences in the demo | 2026-12-01 |
| RQ-5 | 300 recipes at launch, or 150 for the MVP and 300 after | 2026-11-08 |

## Changelog

- 0.1, 2026-10-29: first version, expanded from the PRD data model and costs sections.
