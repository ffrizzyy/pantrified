# Pantrified vision evaluation plan

How the ingredient detector is measured, what counts as good enough, and what gets reported. This document expands section 14 of `PRD.md` and the vision work in milestone M3.

| Field | Value |
|---|---|
| Version | 0.1 |
| Date | 2026-10-29 |
| Owner | Solo developer |
| Status | Draft, gates to confirm after the first test set |
| Related | `PRD.md` sections 6, 9, 14, and 18 |

## What this decides

The detector is the riskiest part of the product. This plan answers four questions with numbers:

1. Is the detector good enough to ship behind an edit screen at the end of week 4?
2. Which model earns its place: zero-shot, fine-tuned, or fine-tuned with a fallback?
3. Where does it fail, in a form a reader can check?
4. What does a wrong detection cost the user in taps?

The product metric is not mAP. A detector that finds eight of ten ingredients and invents two is worse for Pantrified than one that finds seven and invents none, because every false positive is a tap the user must spend removing it.

## Class vocabulary

Fifty classes, fixed at the end of week 1 and frozen for the MVP. The list is Indonesian staples that a student kitchen actually holds, chosen so that every class appears in at least eight recipes in the knowledge base.

| ID | Indonesian | English | Group | Hard cases |
|---|---|---|---|---|
| ing_tempe | Tempe | Tempeh | Protein | Block, sliced, fried, in paper |
| ing_tahu | Tahu | Tofu | Protein | White block, yellow fried, in water |
| ing_telur | Telur | Egg | Protein | Carton, loose, raw, cooked |
| ing_ayam | Ayam | Chicken | Protein | Raw pieces, cooked, frozen, in marinade |
| ing_daging | Daging sapi | Beef | Protein | Minced, steak, frozen block |
| ing_ikan | Ikan | Fish | Protein | Whole, fillet, salted, dried |
| ing_udang | Udang | Shrimp | Protein | Raw, cooked, frozen, peeled |
| ing_cumi | Cumi | Squid | Protein | Whole, rings, frozen |
| ing_bakso | Bakso | Meatball | Packaged | In a bag, in soup, on a stick |
| ing_sosis | Sosis | Sausage | Packaged | Pack, cooked, in a bun |
| ing_kangkung | Kangkung | Water spinach | Vegetable | Bunch, chopped, wilted |
| ing_bayam | Bayam | Spinach | Vegetable | Bunch, bagged, chopped |
| ing_sawi | Sawi | Choy sum | Vegetable | Bunch, bagged |
| ing_kol | Kol | Cabbage | Vegetable | Whole, half, shredded |
| ing_wortel | Wortel | Carrot | Vegetable | Loose, bagged, chopped |
| ing_tomat | Tomat | Tomato | Vegetable | Loose, on the vine, sliced |
| ing_timun | Timun | Cucumber | Vegetable | Whole, cut, in a salad |
| ing_terong | Terong | Eggplant | Vegetable | Whole, sliced, cooked |
| ing_buncis | Buncis | Green beans | Vegetable | Loose, bagged, chopped |
| ing_labusiam | Labu siam | Chayote | Vegetable | Whole, peeled, cut |
| ing_kentang | Kentang | Potato | Vegetable | Loose, bagged, cooked |
| ing_jagung | Jagung | Corn | Vegetable | Cob, kernel, canned |
| ing_jamur | Jamur | Mushroom | Vegetable | Loose, punnet, sliced |
| ing_brokoli | Brokoli | Broccoli | Vegetable | Head, florets, frozen |
| ing_bawangmerah | Bawang merah | Shallot | Aromatic | Loose, net, chopped |
| ing_bawangputih | Bawang putih | Garlic | Aromatic | Bulb, clove, peeled |
| ing_cabai | Cabai | Chilli | Aromatic | Loose, bagged, ground |
| ing_jahe | Jahe | Ginger | Aromatic | Root, sliced, ground |
| ing_daunbawang | Daun bawang | Spring onion | Aromatic | Bunch, chopped |
| ing_seledri | Seledri | Celery | Aromatic | Bunch, chopped |
| ing_pisang | Pisang | Banana | Fruit | Bunch, single, overripe |
| ing_apel | Apel | Apple | Fruit | Loose, bagged, cut |
| ing_jeruk | Jeruk | Orange | Fruit | Loose, net, cut |
| ing_semangka | Semangka | Watermelon | Fruit | Whole, half, sliced |
| ing_alpukat | Alpukat | Avocado | Fruit | Whole, half, cut |
| ing_susu | Susu | Milk | Dairy | Carton, bottle, powdered |
| ing_keju | Keju | Cheese | Dairy | Block, sliced, packaged |
| ing_yoghurt | Yoghurt | Yoghurt | Dairy | Cup, tub, bottle |
| ing_mentega | Mentega | Butter | Dairy | Block, tub, foil |
| ing_beras | Beras | Rice | Pantry | Sack, bag, cooked |
| ing_mie | Mie | Noodles | Pantry | Pack, block, cooked |
| ing_roti | Roti | Bread | Pantry | Loaf, sliced, bagged |
| ing_tepung | Tepung | Flour | Pantry | Bag, box, in a jar |
| ing_gula | Gula | Sugar | Pantry | Bag, jar, block |
| ing_minyak | Minyak | Cooking oil | Pantry | Bottle, pouch, jug |
| ing_kecap | Kecap | Soy sauce | Pantry | Bottle, sachet |
| ing_santan | Santan | Coconut milk | Packaged | Carton, sachet, fresh |
| ing_saus | Saus | Bottled sauce | Packaged | Bottle, sachet, jar |
| ing_ikankaleng | Ikan kaleng | Canned fish | Packaged | Can, opened, on a plate |
| ing_sayurbeku | Sayur beku | Frozen vegetables | Packaged | Bag, mixed, in a freezer |

Classes outside this list are out of scope for detection. The review screen lets the user add them by search, and those additions count as misses for the detector, not as errors.

## Test data

| Split | Photos | Households | Use |
|---|---|---|---|
| Train | 150 | 30 | Fine-tuning only |
| Validation | 50 | 10 | Threshold tuning and ablation picks |
| Test | 100 | 20 | Reporting only, never for any decision |

Collection rules:

- One photo per scene, portrait and landscape both, taken with a phone at 1 to 1.5 m.
- Each photo has a written ground-truth list of every visible class, with boxes.
- Three lighting conditions per household: daylight, kitchen tube light, and low evening light.
- At least 20 photos include a closed fridge door, a crowded shelf, or an item partly hidden, because those are the real conditions.
- No photo of a person, a document, or a medicine label. If one appears, it is deleted at collection, not at labelling.
- Consent is written, per household, with the right to withdraw and a deletion date.
- Public datasets may be used for pretraining only. They never enter any split, because their capture conditions leak into the test result.

Why 100 test photos: with 100 photos and about 6 true ingredients per photo, the recall estimate carries a 95% interval of roughly plus or minus 4 points at 0.80. That is enough to make a ship decision, and it is honest about its precision.

The test set is frozen at a checksum and version number. Any change creates a new version, and old results stay in the log.

## Labelling protocol

1. Auto-label with an open-vocabulary detector at a low threshold, so recall is high and the human only removes.
2. Human pass in Label Studio: fix boxes, remove false boxes, add misses, assign the canonical ID.
3. Twenty percent of photos are labelled twice by different passes. Disagreement is measured, then adjudicated by the owner.
4. Every ambiguous case gets a written rule in the labelling guide, so the next pass is consistent.

Matching rules for scoring:

- A detection is a true positive when it has the same class and IoU of at least 0.5 with an unmatched ground-truth box.
- Matches are assigned greedily in confidence order.
- Class-wise non-maximum suppression at IoU 0.6 runs before matching, so duplicates are not counted as separate hits.
- Two boxes on one object count once. A box on a plate or a shelf counts as a false positive, because the review screen would show it.

Inter-annotator agreement target: box F1 of 0.90 or higher on the double-labelled subset. Below that, the labels are the problem and the model result is not trustworthy.

## Metrics

| Metric | Definition | Target | Why it matters |
|---|---|---|---|
| Recall, macro | Mean of per-class recall at IoU 0.5 | 0.80 | The headline gate |
| Recall, micro | True positives over all ground truth | 0.80 | Stops a rare class from hiding |
| Precision | True positives over all detections | 0.75 | Every false box costs a tap |
| mAP@0.5 | Standard average precision at IoU 0.5 | 0.60 | Comparable with published work |
| Editable recall | Ground-truth items present after the review policy, described below | 0.80 | The product metric |
| Review burden | Expected taps to correct one photo | 3 or fewer | The cost the user pays |
| Latency | p95 end to end on 1 vCPU, warm instance | 3 s or less | Fits the free tier |
| Calibration | Expected calibration error of the confidence score | 0.10 or less | Makes the confidence threshold meaningful |

Editable recall is computed by simulating the review screen:

- Confidence 0.55 or higher: item is accepted and shown checked.
- Confidence 0.30 to 0.55: item is shown with a question mark and needs a tap.
- Below 0.30: item is dropped.

A ground-truth ingredient counts as recalled if it is accepted or flagged. This rewards a model that surfaces uncertain items instead of hiding them, which is what the screen is for.

Per-class results are reported with a count and an interval. A class with fewer than 10 test instances is pooled into a "rare" row and labelled low-confidence. Hiding that would make the table look better than the model is.

## Baseline ladder

Each rung is run on the frozen test set, and each result is logged with the commit hash and model checksum.

| ID | Model | Purpose | Expected outcome |
|---|---|---|---|
| B0 | Class prior, always predicts the five most common classes | Floor | Recall near 0.35, high precision |
| B1 | Zero-shot vision model on the full photo | General-model reference | Recall 0.55 to 0.70, weak on packaging |
| B2 | Open-vocabulary detector, zero-shot | Check whether fine-tuning is needed | Recall 0.50 to 0.65 |
| B3 | Fine-tuned YOLO nano, 416 px | The MVP candidate | Recall 0.78 to 0.85 |
| B4 | Fine-tuned YOLO nano, 640 px | Accuracy at a latency cost | Recall 2 to 4 points above B3 |
| B5 | B3 plus a vision model call when mean confidence is under 0.45 | The fallback path | Recall 0.85 or higher, cost per photo |
| B6 | Human annotator on a fresh pass | Ceiling | Agreement, not accuracy |

B5 is only adopted if it clears the latency budget and the monthly cost stays under $1 at the expected volume. Otherwise the fallback stays off and the edit screen carries the gap.

## Ablations

| Factor | Levels | What it answers |
|---|---|---|
| Input size | 416, 640 | Accuracy against the 3 second budget |
| Class count | 20, 50 | Whether a narrow list buys enough accuracy to be worth the lost coverage |
| Backbone | Frozen, full fine-tune | Whether 150 training photos can support a full fine-tune |
| Augmentation | None, lighting and blur, plus occlusion | Which augmentation survives a real kitchen |
| Confidence threshold | Sweep 0.2 to 0.8 | The operating point for editable recall |
| Test-time augmentation | Off, flip only | Whether the extra cost pays |
| Background bias | Plates masked, unmasked | Whether the model is reading the plate instead of the food |

Every ablation reports the metric, the interval, and the latency. An accuracy gain that doubles latency is not a gain on a 1 vCPU budget.

## Error taxonomy

Every false positive and false negative in the failure gallery gets one code.

| Code | Meaning | Example |
|---|---|---|
| E-OCC | Item occluded by another item | Tempe behind a milk carton |
| E-PACK | Packaging hides the food | Frozen chicken in a printed bag |
| E-MIX | Cooked dish with several ingredients | Rendang in a container |
| E-LIGHT | Too dark or too warm | Evening kitchen light |
| E-BLUR | Motion or focus blur | Photo taken while walking |
| E-PART | Only part of the item is visible | Half a cabbage at the frame edge |
| E-SCALE | Item too small or too far | Chilli in a crowded drawer |
| E-CLASS | Two similar classes confused | Shallot against red onion |
| E-NONFOOD | Box on a plate, shelf, or appliance | Detection on a jar lid |
| E-EMPTY | Nothing to detect | Empty shelf or closed door |

The gallery keeps the ten worst photos per code with the prediction overlay. It is published with the demo, because a limits section with pictures is more credible than a recall number alone.

## Gates

| Gate | When | Condition | If it fails |
|---|---|---|---|
| G-1 dataset | End of week 2 | 300 photos collected, 100 test photos labelled, agreement 0.90 | Narrow the class list to 30 and re-scope |
| G-2 baseline | End of week 3 | B2 scored and the failure gallery started | Ship B1 behind the edit screen and say so |
| G-3 model | End of week 4 | B3 hits recall 0.80 and precision 0.75 | Try B4, then B5, then narrow the classes |
| G-4 latency | End of week 4 | p95 at 3 seconds or less on 1 vCPU | Drop to 416 px or reduce the class count |
| G-5 report | End of week 10 | Tables, gallery, and limits section published | Delay the write-up, not the demo |

## Reporting template

The evaluation report carries these tables, filled from the frozen run:

1. Dataset table: photos, households, classes, instances, split sizes.
2. Headline table: recall macro and micro, precision, mAP@0.5, editable recall, review burden, latency.
3. Per-class table: class, instances, precision, recall, interval.
4. Baseline table: B0 to B5 with the same columns and the delta against B3.
5. Ablation table: factor, levels, metric, latency.
6. Failure gallery: ten images per error code.
7. Limits paragraph: what the model cannot see, in plain words.

## Cost and effort

| Item | Cost | Effort |
|---|---|---|
| Photo collection | Rp 0 | 8 hours |
| Labelling, first pass | Rp 0, Label Studio | 15 hours |
| Labelling, double pass | Rp 0 | 4 hours |
| Adjudication | Rp 0 | 3 hours |
| Training run | Rp 0 on a one-off Colab GPU | 2 hours of attention |
| Evaluation harness | Rp 0 | 6 hours |
| Total | Rp 0 | About 38 hours |

## Risks and open questions

| ID | Risk | Effect | Mitigation |
|---|---|---|---|
| VE-1 | Test set too easy because the owner took the photos | Inflated recall | Recruit two other households for the test split |
| VE-2 | Annotator drift across passes | Noisy labels | Written guide, double pass, agreement check |
| VE-3 | 150 training photos cannot support 50 classes | Weak per-class recall | Freeze the backbone, add public pretraining, narrow classes |
| VE-4 | Confidence is uncalibrated | The review policy misbehaves | Fit a calibration curve on validation only |
| VE-5 | Latency measured on a fast laptop | Fails on the free tier | Benchmark inside the container on 1 vCPU |

| ID | Question | Decide by |
|---|---|---|
| VQ-1 | Do we report per-class numbers for all 50 classes or pool the rare ones | 2026-11-15 |
| VQ-2 | Is a paid vision call acceptable for the fallback | 2026-11-15, shared with OQ-4 |
| VQ-3 | Do we publish the failure gallery with real photos | 2026-12-01 |

## Changelog

- 0.1, 2026-10-29: first version, expanded from the PRD testing section.
