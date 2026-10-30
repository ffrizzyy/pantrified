import { copy } from "./copy";
import type { Ingredient, Price, Recipe } from "./types";

export const PRICE_DATE = "2026-10-27";

export const INGREDIENTS: Ingredient[] = [
  { id: "ing_tempe", name: "Tempe", aliases: ["tempeh", "tempe kedelai"], unit: "g", category: "protein", assumed: false, kcal100: 193, allergens: ["kedelai"] },
  { id: "ing_tahu", name: "Tahu", aliases: ["tofu", "tahu putih", "tahu cina"], unit: "g", category: "protein", assumed: false, kcal100: 76, allergens: ["kedelai"] },
  { id: "ing_telur", name: "Telur", aliases: ["egg", "telor", "telur ayam"], unit: "butir", category: "protein", assumed: false, kcal100: 143, allergens: ["telur"] },
  { id: "ing_ayam", name: "Ayam", aliases: ["chicken", "ayam broiler", "daging ayam"], unit: "g", category: "protein", assumed: false, kcal100: 165, allergens: [] },
  { id: "ing_ikan", name: "Ikan", aliases: ["fish", "ikan segar", "ikan kembung"], unit: "g", category: "protein", assumed: false, kcal100: 96, allergens: ["ikan"] },
  { id: "ing_udang", name: "Udang", aliases: ["shrimp", "prawn", "udang segar"], unit: "g", category: "protein", assumed: false, kcal100: 99, allergens: ["udang"] },
  { id: "ing_daging", name: "Daging sapi", aliases: ["beef", "sapi", "daging"], unit: "g", category: "protein", assumed: false, kcal100: 250, allergens: [] },
  { id: "ing_kacangtanah", name: "Kacang tanah", aliases: ["peanut", "peanuts", "kacang tanah sangrai"], unit: "g", category: "protein", assumed: false, kcal100: 567, allergens: ["kacang"] },
  { id: "ing_kangkung", name: "Kangkung", aliases: ["kangkong", "morning glory", "sayur kangkung"], unit: "ikat", category: "sayur", assumed: false, kcal100: 19, allergens: [] },
  { id: "ing_bayam", name: "Bayam", aliases: ["spinach", "bayam hijau", "sayur bayam"], unit: "ikat", category: "sayur", assumed: false, kcal100: 23, allergens: [] },
  { id: "ing_sawi", name: "Sawi", aliases: ["sawi hijau", "caisim", "mustard greens"], unit: "ikat", category: "sayur", assumed: false, kcal100: 13, allergens: [] },
  { id: "ing_kol", name: "Kol", aliases: ["kubis", "cabbage", "kol putih"], unit: "g", category: "sayur", assumed: false, kcal100: 25, allergens: [] },
  { id: "ing_wortel", name: "Wortel", aliases: ["carrot", "wortel lokal"], unit: "g", category: "sayur", assumed: false, kcal100: 41, allergens: [] },
  { id: "ing_tomat", name: "Tomat", aliases: ["tomato", "tomat merah"], unit: "g", category: "sayur", assumed: false, kcal100: 18, allergens: [] },
  { id: "ing_timun", name: "Timun", aliases: ["mentimun", "cucumber", "timun lokal"], unit: "g", category: "sayur", assumed: false, kcal100: 15, allergens: [] },
  { id: "ing_terong", name: "Terong", aliases: ["terung", "eggplant", "aubergine"], unit: "g", category: "sayur", assumed: false, kcal100: 25, allergens: [] },
  { id: "ing_buncis", name: "Buncis", aliases: ["green beans", "kacang buncis", "snap beans"], unit: "g", category: "sayur", assumed: false, kcal100: 31, allergens: [] },
  { id: "ing_kentang", name: "Kentang", aliases: ["potato", "kentang lokal"], unit: "g", category: "sayur", assumed: false, kcal100: 77, allergens: [] },
  { id: "ing_jamur", name: "Jamur", aliases: ["mushroom", "jamur tiram", "jamur champignon"], unit: "g", category: "sayur", assumed: false, kcal100: 22, allergens: [] },
  { id: "ing_kacangpanjang", name: "Kacang panjang", aliases: ["long beans", "kacang botor", "snake beans"], unit: "g", category: "sayur", assumed: false, kcal100: 31, allergens: [] },
  { id: "ing_labusiam", name: "Labu siam", aliases: ["chayote", "jipang", "labu jipang"], unit: "g", category: "sayur", assumed: false, kcal100: 19, allergens: [] },
  { id: "ing_daunsingkong", name: "Daun singkong", aliases: ["cassava leaves", "daun ubi", "singkong"], unit: "ikat", category: "sayur", assumed: false, kcal100: 37, allergens: [] },
  { id: "ing_tauge", name: "Tauge", aliases: ["toge", "bean sprouts", "sprouts"], unit: "g", category: "sayur", assumed: false, kcal100: 30, allergens: [] },
  { id: "ing_pakcoy", name: "Pakcoy", aliases: ["pak choi", "bok choy", "pokcoy"], unit: "ikat", category: "sayur", assumed: false, kcal100: 13, allergens: [] },
  { id: "ing_jagung", name: "Jagung", aliases: ["corn", "jagung manis", "jagung pipil"], unit: "g", category: "sayur", assumed: false, kcal100: 86, allergens: [] },
  { id: "ing_bawangmerah", name: "Bawang merah", aliases: ["shallot", "red onion", "bawang merah lokal"], unit: "g", category: "bumbu", assumed: false, kcal100: 40, allergens: [] },
  { id: "ing_bawangputih", name: "Bawang putih", aliases: ["garlic", "bawang putih kupas"], unit: "g", category: "bumbu", assumed: false, kcal100: 149, allergens: [] },
  { id: "ing_bawangbombai", name: "Bawang bombai", aliases: ["bawang bombay", "onion", "yellow onion"], unit: "g", category: "bumbu", assumed: false, kcal100: 40, allergens: [] },
  { id: "ing_cabai", name: "Cabai", aliases: ["cabe", "chili", "chilli", "lombok"], unit: "g", category: "bumbu", assumed: false, kcal100: 40, allergens: [] },
  { id: "ing_jahe", name: "Jahe", aliases: ["ginger", "jahe merah"], unit: "g", category: "bumbu", assumed: false, kcal100: 80, allergens: [] },
  { id: "ing_kunyit", name: "Kunyit", aliases: ["turmeric", "kunir", "kunyit bubuk"], unit: "g", category: "bumbu", assumed: false, kcal100: 39, allergens: [] },
  { id: "ing_daunbawang", name: "Daun bawang", aliases: ["scallion", "spring onion", "daun bawang iris"], unit: "ikat", category: "bumbu", assumed: false, kcal100: 32, allergens: [] },
  { id: "ing_seledri", name: "Seledri", aliases: ["celery", "daun seledri", "seledri lokal"], unit: "ikat", category: "bumbu", assumed: false, kcal100: 16, allergens: [] },
  { id: "ing_ketumbar", name: "Ketumbar", aliases: ["coriander", "ketumbar bubuk", "biji ketumbar"], unit: "g", category: "bumbu", assumed: false, kcal100: 298, allergens: [] },
  { id: "ing_kemiri", name: "Kemiri", aliases: ["candlenut", "candle nut", "kemiri sangrai"], unit: "g", category: "bumbu", assumed: false, kcal100: 618, allergens: ["kacang"] },
  { id: "ing_serai", name: "Serai", aliases: ["sereh", "lemongrass", "lemon grass"], unit: "batang", category: "bumbu", assumed: false, kcal100: 99, allergens: [] },
  { id: "ing_beras", name: "Beras", aliases: ["rice", "beras putih", "beras pandan wangi"], unit: "g", category: "pokok", assumed: false, kcal100: 360, allergens: [] },
  { id: "ing_mie", name: "Mie", aliases: ["mi", "noodle", "noodles", "mie kering"], unit: "g", category: "pokok", assumed: false, kcal100: 350, allergens: ["gluten"] },
  { id: "ing_roti", name: "Roti", aliases: ["bread", "roti tawar", "roti gandum"], unit: "g", category: "pokok", assumed: false, kcal100: 265, allergens: ["gluten"] },
  { id: "ing_tepung", name: "Tepung", aliases: ["flour", "tepung terigu", "tepung serbaguna"], unit: "g", category: "pokok", assumed: false, kcal100: 364, allergens: ["gluten"] },
  { id: "ing_kacanghijau", name: "Kacang hijau", aliases: ["mung bean", "mung beans", "kacang ijo"], unit: "g", category: "pokok", assumed: false, kcal100: 347, allergens: [] },
  { id: "ing_kecap", name: "Kecap", aliases: ["kecap manis", "sweet soy sauce", "soy sauce"], unit: "ml", category: "bumbu", assumed: true, kcal100: 60, allergens: ["kedelai"] },
  { id: "ing_minyak", name: "Minyak", aliases: ["minyak goreng", "cooking oil", "oil"], unit: "ml", category: "bumbu", assumed: true, kcal100: 884, allergens: [] },
  { id: "ing_gula", name: "Gula", aliases: ["sugar", "gula pasir", "gula merah"], unit: "g", category: "bumbu", assumed: true, kcal100: 387, allergens: [] },
  { id: "ing_garam", name: "Garam", aliases: ["salt", "garam dapur", "garam halus"], unit: "g", category: "bumbu", assumed: true, kcal100: 0, allergens: [] },
  { id: "ing_santan", name: "Santan", aliases: ["coconut milk", "santan kelapa", "santan instan"], unit: "ml", category: "kemasan", assumed: false, kcal100: 230, allergens: [] },
  { id: "ing_susu", name: "Susu", aliases: ["milk", "susu cair", "susu UHT"], unit: "ml", category: "susu", assumed: false, kcal100: 61, allergens: ["susu"] },
  { id: "ing_keju", name: "Keju", aliases: ["cheese", "keju cheddar", "keju parut"], unit: "g", category: "susu", assumed: false, kcal100: 402, allergens: ["susu"] },
  { id: "ing_pisang", name: "Pisang", aliases: ["banana", "pisang ambon", "pisang kepok"], unit: "g", category: "buah", assumed: false, kcal100: 89, allergens: [] },
  { id: "ing_jeruk", name: "Jeruk", aliases: ["jeruk nipis", "lime", "jeruk limau"], unit: "buah", category: "buah", assumed: false, kcal100: 47, allergens: [] },
];

export const PRICES: Price[] = [
  { ingredientId: "ing_tempe", perUnit: 14.5, packSize: 250, packPrice: 3625, date: PRICE_DATE },
  { ingredientId: "ing_tahu", perUnit: 12, packSize: 300, packPrice: 3600, date: PRICE_DATE },
  { ingredientId: "ing_telur", perUnit: 2300, packSize: 10, packPrice: 23000, date: PRICE_DATE },
  { ingredientId: "ing_ayam", perUnit: 38, packSize: 500, packPrice: 19000, date: PRICE_DATE },
  { ingredientId: "ing_ikan", perUnit: 45, packSize: 500, packPrice: 22500, date: PRICE_DATE },
  { ingredientId: "ing_udang", perUnit: 80, packSize: 250, packPrice: 20000, date: PRICE_DATE },
  { ingredientId: "ing_daging", perUnit: 130, packSize: 250, packPrice: 32500, date: PRICE_DATE },
  { ingredientId: "ing_kangkung", perUnit: 3000, packSize: 1, packPrice: 3000, date: PRICE_DATE },
  { ingredientId: "ing_bayam", perUnit: 2500, packSize: 1, packPrice: 2500, date: PRICE_DATE },
  { ingredientId: "ing_sawi", perUnit: 3000, packSize: 1, packPrice: 3000, date: PRICE_DATE },
  { ingredientId: "ing_kol", perUnit: 8, packSize: 500, packPrice: 4000, date: PRICE_DATE },
  { ingredientId: "ing_wortel", perUnit: 12, packSize: 500, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_tomat", perUnit: 14, packSize: 500, packPrice: 7000, date: PRICE_DATE },
  { ingredientId: "ing_timun", perUnit: 10, packSize: 500, packPrice: 5000, date: PRICE_DATE },
  { ingredientId: "ing_terong", perUnit: 12, packSize: 500, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_buncis", perUnit: 18, packSize: 250, packPrice: 4500, date: PRICE_DATE },
  { ingredientId: "ing_kentang", perUnit: 14, packSize: 1000, packPrice: 14000, date: PRICE_DATE },
  { ingredientId: "ing_jamur", perUnit: 30, packSize: 250, packPrice: 7500, date: PRICE_DATE },
  { ingredientId: "ing_bawangmerah", perUnit: 25, packSize: 250, packPrice: 6250, date: PRICE_DATE },
  { ingredientId: "ing_bawangputih", perUnit: 30, packSize: 250, packPrice: 7500, date: PRICE_DATE },
  { ingredientId: "ing_cabai", perUnit: 45, packSize: 250, packPrice: 11250, date: PRICE_DATE },
  { ingredientId: "ing_jahe", perUnit: 25, packSize: 250, packPrice: 6250, date: PRICE_DATE },
  { ingredientId: "ing_kunyit", perUnit: 30, packSize: 250, packPrice: 7500, date: PRICE_DATE },
  { ingredientId: "ing_daunbawang", perUnit: 3000, packSize: 1, packPrice: 3000, date: PRICE_DATE },
  { ingredientId: "ing_seledri", perUnit: 2500, packSize: 1, packPrice: 2500, date: PRICE_DATE },
  { ingredientId: "ing_beras", perUnit: 13, packSize: 5000, packPrice: 65000, date: PRICE_DATE },
  { ingredientId: "ing_mie", perUnit: 15, packSize: 200, packPrice: 3000, date: PRICE_DATE },
  { ingredientId: "ing_roti", perUnit: 25, packSize: 400, packPrice: 10000, date: PRICE_DATE },
  { ingredientId: "ing_tepung", perUnit: 12, packSize: 1000, packPrice: 12000, date: PRICE_DATE },
  { ingredientId: "ing_kecap", perUnit: 20, packSize: 275, packPrice: 5500, date: PRICE_DATE },
  { ingredientId: "ing_minyak", perUnit: 18, packSize: 1000, packPrice: 18000, date: PRICE_DATE },
  { ingredientId: "ing_gula", perUnit: 16, packSize: 1000, packPrice: 16000, date: PRICE_DATE },
  { ingredientId: "ing_garam", perUnit: 8, packSize: 500, packPrice: 4000, date: PRICE_DATE },
  { ingredientId: "ing_santan", perUnit: 18, packSize: 200, packPrice: 3600, date: PRICE_DATE },
  { ingredientId: "ing_susu", perUnit: 20, packSize: 1000, packPrice: 20000, date: PRICE_DATE },
  { ingredientId: "ing_keju", perUnit: 120, packSize: 170, packPrice: 20400, date: PRICE_DATE },
  { ingredientId: "ing_pisang", perUnit: 15, packSize: 1000, packPrice: 15000, date: PRICE_DATE },
  { ingredientId: "ing_kacangtanah", perUnit: 40, packSize: 250, packPrice: 10000, date: PRICE_DATE },
  { ingredientId: "ing_kacangpanjang", perUnit: 16, packSize: 500, packPrice: 8000, date: PRICE_DATE },
  { ingredientId: "ing_labusiam", perUnit: 10, packSize: 500, packPrice: 5000, date: PRICE_DATE },
  { ingredientId: "ing_daunsingkong", perUnit: 2500, packSize: 1, packPrice: 2500, date: PRICE_DATE },
  { ingredientId: "ing_tauge", perUnit: 12, packSize: 250, packPrice: 3000, date: PRICE_DATE },
  { ingredientId: "ing_pakcoy", perUnit: 3500, packSize: 1, packPrice: 3500, date: PRICE_DATE },
  { ingredientId: "ing_jagung", perUnit: 20, packSize: 500, packPrice: 10000, date: PRICE_DATE },
  { ingredientId: "ing_kacanghijau", perUnit: 28, packSize: 500, packPrice: 14000, date: PRICE_DATE },
  { ingredientId: "ing_jeruk", perUnit: 1500, packSize: 4, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_bawangbombai", perUnit: 30, packSize: 500, packPrice: 15000, date: PRICE_DATE },
  { ingredientId: "ing_ketumbar", perUnit: 60, packSize: 100, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_kemiri", perUnit: 70, packSize: 100, packPrice: 7000, date: PRICE_DATE },
  { ingredientId: "ing_serai", perUnit: 1000, packSize: 3, packPrice: 3000, date: PRICE_DATE },
];

const r = (
  id: string,
  title: string,
  servings: number,
  cookMin: number,
  equipment: string[],
  diet: string[],
  protein: string,
  kcal: number,
  art: number,
  ingredients: Recipe["ingredients"],
  steps: string[],
): Recipe => ({ id, title, servings, cookMin, equipment, diet, protein, kcal, art, ingredients, steps });

export const RECIPES: Recipe[] = [
  r("rcp_nasi_goreng", "Nasi goreng telur", 1, 20, ["kompor", "wajan"], [], "telur", 520, 0,
    [{ id: "ing_beras", qty: 150, unit: "g" }, { id: "ing_telur", qty: 2, unit: "butir" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_cabai", qty: 10, unit: "g" }, { id: "ing_kecap", qty: 15, unit: "ml" }, { id: "ing_daunbawang", qty: 0.5, unit: "ikat" }],
    ["Masak nasi sehari sebelumnya, atau pakai nasi sisa yang didinginkan.", "Tumis bawang merah, bawang putih, dan cabai sampai wangi.", "Masukkan telur, orak-arik, lalu tambahkan nasi.", "Beri kecap dan daun bawang, aduk rata, sajikan panas."]),

  r("rcp_tempe_orek", "Tempe orek", 2, 20, ["kompor", "wajan"], ["vegetarian", "vegan"], "tempe", 380, 1,
    [{ id: "ing_tempe", qty: 250, unit: "g" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_cabai", qty: 20, unit: "g" }, { id: "ing_kecap", qty: 30, unit: "ml" }, { id: "ing_gula", qty: 10, unit: "g" }],
    ["Potong tempe memanjang tipis.", "Goreng tempe setengah kering, angkat.", "Tumis bumbu iris sampai wangi.", "Masukkan tempe, kecap, dan gula, aduk sampai meresap."]),

  r("rcp_tumis_kangkung", "Tumis kangkung", 2, 15, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 120, 2,
    [{ id: "ing_kangkung", qty: 1, unit: "ikat" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_cabai", qty: 15, unit: "g" }],
    ["Petik kangkung, cuci bersih.", "Tumis bawang dan cabai sampai wangi.", "Masukkan kangkung, aduk cepat dengan api besar.", "Beri garam, angkat sebelum layu."]),

  r("rcp_telur_balado", "Telur balado", 2, 25, ["kompor", "wajan"], ["vegetarian"], "telur", 290, 3,
    [{ id: "ing_telur", qty: 4, unit: "butir" }, { id: "ing_cabai", qty: 50, unit: "g" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }],
    ["Rebus telur, kupas, goreng sebentar.", "Haluskan cabai, bawang, dan tomat.", "Tumis sambal sampai matang dan minyaknya keluar.", "Masukkan telur, aduk sampai terbalut."]),

  r("rcp_ayam_kecap", "Ayam kecap", 2, 30, ["kompor", "wajan"], [], "ayam", 420, 4,
    [{ id: "ing_ayam", qty: 400, unit: "g" }, { id: "ing_kecap", qty: 40, unit: "ml" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_jahe", qty: 10, unit: "g" }],
    ["Potong ayam, lumuri garam dan jahe.", "Tumis bawang sampai wangi, masukkan ayam.", "Tuang kecap dan sedikit air, tutup.", "Masak sampai kuah menyusut dan ayam matang."]),

  r("rcp_soto_ayam", "Soto ayam", 3, 40, ["kompor", "panci"], [], "ayam", 350, 5,
    [{ id: "ing_ayam", qty: 500, unit: "g" }, { id: "ing_bawangmerah", qty: 50, unit: "g" }, { id: "ing_bawangputih", qty: 25, unit: "g" }, { id: "ing_jahe", qty: 15, unit: "g" }, { id: "ing_seledri", qty: 1, unit: "ikat" }, { id: "ing_kol", qty: 100, unit: "g" }, { id: "ing_telur", qty: 3, unit: "butir" }],
    ["Rebus ayam dengan jahe sampai empuk, angkat dan suwir.", "Tumis bawang, masukkan ke kaldu.", "Rebus telur dan iris kol.", "Susun suwiran, kol, dan telur, siram kuah panas."]),

  r("rcp_mie_goreng", "Mie goreng sayur", 2, 20, ["kompor", "wajan"], ["vegetarian"], "mie", 430, 0,
    [{ id: "ing_mie", qty: 200, unit: "g" }, { id: "ing_wortel", qty: 80, unit: "g" }, { id: "ing_kol", qty: 100, unit: "g" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_kecap", qty: 25, unit: "ml" }],
    ["Rebus mie sampai lunak, tiriskan.", "Tumis bawang, masukkan wortel dan kol.", "Masukkan mie dan kecap, aduk rata.", "Beri sedikit air bila terlalu kering."]),

  r("rcp_perkedel", "Perkedel kentang", 3, 30, ["kompor", "wajan"], ["vegetarian"], "kentang", 260, 2,
    [{ id: "ing_kentang", qty: 500, unit: "g" }, { id: "ing_telur", qty: 2, unit: "butir" }, { id: "ing_seledri", qty: 0.5, unit: "ikat" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }],
    ["Kukus kentang sampai lunak, haluskan.", "Tumis bawang, campur ke kentang dengan seledri.", "Bentuk bulat pipih, celup ke telur kocok.", "Goreng sampai keemasan."]),

  r("rcp_bacem", "Tahu tempe bacem", 3, 35, ["kompor", "wajan"], ["vegetarian", "vegan"], "tahu", 310, 1,
    [{ id: "ing_tahu", qty: 300, unit: "g" }, { id: "ing_tempe", qty: 250, unit: "g" }, { id: "ing_kecap", qty: 40, unit: "ml" }, { id: "ing_gula", qty: 25, unit: "g" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }],
    ["Haluskan bawang, campur dengan kecap dan gula.", "Lumuri tahu dan tempe, diamkan sepuluh menit.", "Ungkep dengan sedikit air sampai meresap.", "Goreng sebentar sebelum disajikan."]),

  r("rcp_sayur_sop", "Sayur sop", 3, 30, ["kompor", "panci"], ["vegetarian", "vegan"], "sayur", 180, 2,
    [{ id: "ing_wortel", qty: 150, unit: "g" }, { id: "ing_kentang", qty: 200, unit: "g" }, { id: "ing_kol", qty: 150, unit: "g" }, { id: "ing_seledri", qty: 0.5, unit: "ikat" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }],
    ["Potong wortel, kentang, dan kol.", "Tumis bawang, masukkan ke air mendidih.", "Rebus sayur sampai empuk.", "Beri garam dan seledri, angkat."]),

  r("rcp_ikan_kunyit", "Ikan goreng kunyit", 2, 25, ["kompor", "wajan"], [], "ikan", 320, 3,
    [{ id: "ing_ikan", qty: 400, unit: "g" }, { id: "ing_kunyit", qty: 15, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_jahe", qty: 10, unit: "g" }],
    ["Haluskan kunyit, bawang putih, dan jahe.", "Lumuri ikan dengan bumbu dan garam.", "Diamkan sepuluh menit.", "Goreng sampai kering dan keemasan."]),

  r("rcp_udang_cabai", "Udang tumis cabai", 2, 20, ["kompor", "wajan"], [], "udang", 240, 4,
    [{ id: "ing_udang", qty: 300, unit: "g" }, { id: "ing_cabai", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_bawangmerah", qty: 25, unit: "g" }],
    ["Bersihkan udang, lumuri garam.", "Tumis bawang dan cabai sampai wangi.", "Masukkan udang, masak dengan api besar.", "Angkat begitu udang berubah warna."]),

  r("rcp_capcay", "Capcay sayur", 3, 25, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 160, 5,
    [{ id: "ing_wortel", qty: 100, unit: "g" }, { id: "ing_kol", qty: 150, unit: "g" }, { id: "ing_jamur", qty: 150, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_kecap", qty: 15, unit: "ml" }],
    ["Potong semua sayur dengan ukuran sama.", "Tumis bawang sampai wangi.", "Masukkan sayur keras lebih dulu, lalu jamur.", "Beri kecap dan sedikit air, masak sebentar."]),

  r("rcp_nasi_uduk", "Nasi uduk", 3, 40, ["kompor", "rice cooker"], ["vegetarian", "vegan"], "beras", 480, 0,
    [{ id: "ing_beras", qty: 400, unit: "g" }, { id: "ing_santan", qty: 200, unit: "ml" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_jahe", qty: 10, unit: "g" }],
    ["Cuci beras, tiriskan.", "Tumis bawang dan jahe, masukkan ke beras.", "Masak dengan santan dan air seperti biasa.", "Diamkan sepuluh menit sebelum dibuka."]),

  r("rcp_opor_ayam", "Opor ayam", 4, 45, ["kompor", "panci"], [], "ayam", 450, 4,
    [{ id: "ing_ayam", qty: 600, unit: "g" }, { id: "ing_santan", qty: 400, unit: "ml" }, { id: "ing_bawangmerah", qty: 50, unit: "g" }, { id: "ing_bawangputih", qty: 25, unit: "g" }, { id: "ing_jahe", qty: 15, unit: "g" }],
    ["Tumis bawang dan jahe sampai wangi.", "Masukkan ayam, masak sampai berubah warna.", "Tuang santan, kecilkan api.", "Masak sampai ayam empuk dan kuah mengental."]),

  r("rcp_pepes_tahu", "Pepes tahu", 2, 30, ["kompor", "kukusan"], ["vegetarian"], "tahu", 220, 1,
    [{ id: "ing_tahu", qty: 400, unit: "g" }, { id: "ing_daunbawang", qty: 1, unit: "ikat" }, { id: "ing_cabai", qty: 20, unit: "g" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }],
    ["Hancurkan tahu, campur bumbu iris.", "Bungkus dengan daun atau kertas baking.", "Kukus dua puluh menit.", "Sajikan hangat."]),

  r("rcp_buncis_tempe", "Tumis buncis tempe", 2, 20, ["kompor", "wajan"], ["vegetarian", "vegan"], "tempe", 300, 5,
    [{ id: "ing_buncis", qty: 250, unit: "g" }, { id: "ing_tempe", qty: 200, unit: "g" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_cabai", qty: 15, unit: "g" }],
    ["Potong buncis dan tempe.", "Goreng tempe setengah matang.", "Tumis bawang dan cabai.", "Masukkan buncis dan tempe, masak sampai matang."]),

  r("rcp_telur_dadar", "Telur dadar sayur", 2, 15, ["kompor", "wajan"], ["vegetarian"], "telur", 280, 3,
    [{ id: "ing_telur", qty: 4, unit: "butir" }, { id: "ing_wortel", qty: 80, unit: "g" }, { id: "ing_kol", qty: 100, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }],
    ["Iris tipis wortel dan kol.", "Kocok telur dengan garam.", "Campur sayur ke telur.", "Goreng dengan api sedang sampai matang."]),

  r("rcp_pisang_goreng", "Pisang goreng", 4, 20, ["kompor", "wajan"], ["vegetarian"], "buah", 240, 5,
    [{ id: "ing_pisang", qty: 400, unit: "g" }, { id: "ing_tepung", qty: 150, unit: "g" }, { id: "ing_gula", qty: 20, unit: "g" }],
    ["Kupas pisang, potong sesuai selera.", "Campur tepung, gula, dan air sampai kental.", "Celup pisang ke adonan.", "Goreng sampai keemasan."]),

  r("rcp_roti_telur", "Roti telur keju", 1, 10, ["kompor", "wajan"], ["vegetarian"], "telur", 480, 0,
    [{ id: "ing_roti", qty: 100, unit: "g" }, { id: "ing_telur", qty: 2, unit: "butir" }, { id: "ing_keju", qty: 40, unit: "g" }, { id: "ing_susu", qty: 50, unit: "ml" }],
    ["Kocok telur dengan susu.", "Celup roti ke kocokan telur.", "Panggang di wajan sampai kecokelatan.", "Beri keju di atasnya."]),

  r("rcp_sambal_kentang", "Sambal goreng kentang", 3, 30, ["kompor", "wajan"], ["vegetarian"], "kentang", 320, 1,
    [{ id: "ing_kentang", qty: 500, unit: "g" }, { id: "ing_cabai", qty: 40, unit: "g" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_santan", qty: 100, unit: "ml" }],
    ["Potong kentang dadu, goreng.", "Haluskan cabai dan bawang.", "Tumis sambal sampai matang.", "Masukkan kentang dan santan, aduk rata."]),

  r("rcp_sayur_lodeh", "Sayur lodeh", 3, 35, ["kompor", "panci"], ["vegetarian", "vegan"], "sayur", 260, 2,
    [{ id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_terong", qty: 250, unit: "g" }, { id: "ing_buncis", qty: 150, unit: "g" }, { id: "ing_kol", qty: 100, unit: "g" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }],
    ["Potong terong, buncis, dan kol.", "Tumis bawang sampai wangi.", "Tuang santan dan air, didihkan.", "Masukkan sayur, masak sampai empuk."]),

  r("rcp_tumis_jamur", "Tumis jamur", 2, 15, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 150, 5,
    [{ id: "ing_jamur", qty: 300, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_kecap", qty: 20, unit: "ml" }],
    ["Bersihkan jamur, potong.", "Tumis bawang sampai wangi.", "Masukkan jamur, masak dengan api besar.", "Beri kecap, angkat."]),

  r("rcp_sayur_asem", "Sayur asem", 4, 35, ["kompor", "panci"], ["vegetarian", "vegan"], "sayur", 180, 2,
    [{ id: "ing_kacangpanjang", qty: 200, unit: "g" }, { id: "ing_labusiam", qty: 200, unit: "g" }, { id: "ing_jagung", qty: 200, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_cabai", qty: 15, unit: "g" }],
    ["Potong kacang panjang, labu siam, dan jagung.", "Didihkan air, masukkan jagung dan bumbu iris.", "Tambahkan labu siam dan kacang panjang, masak sampai empuk.", "Masukkan tomat, beri garam dan gula, koreksi rasa."]),

  r("rcp_tumis_kacang_panjang", "Tumis kacang panjang", 2, 15, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 140, 5,
    [{ id: "ing_kacangpanjang", qty: 250, unit: "g" }, { id: "ing_bawangmerah", qty: 25, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_cabai", qty: 10, unit: "g" }, { id: "ing_kecap", qty: 15, unit: "ml" }],
    ["Potong kacang panjang sepanjang kira-kira 4 cm.", "Tumis bawang dan cabai sampai wangi.", "Masukkan kacang panjang, aduk dengan api besar.", "Beri kecap dan sedikit air, masak sampai matang tapi masih renyah."]),

  r("rcp_tumis_labu_siam", "Tumis labu siam", 2, 15, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 120, 2,
    [{ id: "ing_labusiam", qty: 300, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_cabai", qty: 10, unit: "g" }],
    ["Kupas labu siam, potong korek api, remas dengan sedikit garam.", "Tumis bawang dan cabai sampai wangi.", "Masukkan labu siam, aduk rata.", "Tambahkan sedikit air, masak sampai labu empuk."]),

  r("rcp_tumis_daun_singkong", "Tumis daun singkong", 2, 25, ["kompor", "panci", "wajan"], ["vegetarian", "vegan"], "sayur", 190, 1,
    [{ id: "ing_daunsingkong", qty: 1, unit: "ikat" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_cabai", qty: 15, unit: "g" }, { id: "ing_santan", qty: 100, unit: "ml" }],
    ["Petik daun singkong, cuci bersih.", "Rebus sampai lunak, lalu tiriskan.", "Tumis bawang dan cabai sampai wangi.", "Masukkan daun singkong dan santan, masak sampai kuah menyusut."]),

  r("rcp_tauge_goreng_tahu", "Tauge goreng tahu", 2, 20, ["kompor", "wajan"], ["vegetarian", "vegan"], "tahu", 230, 0,
    [{ id: "ing_tauge", qty: 200, unit: "g" }, { id: "ing_tahu", qty: 150, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_kecap", qty: 20, unit: "ml" }, { id: "ing_cabai", qty: 10, unit: "g" }],
    ["Potong tahu kecil-kecil, goreng setengah kering.", "Tumis bawang putih dan cabai sampai wangi.", "Masukkan tauge, aduk cepat.", "Tambahkan tahu dan kecap, angkat sebelum tauge layu."]),

  r("rcp_pakcoy_bawang_putih", "Pakcoy bawang putih", 2, 12, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 90, 5,
    [{ id: "ing_pakcoy", qty: 1, unit: "ikat" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_minyak", qty: 10, unit: "ml" }],
    ["Belah pakcoy, cuci bersih.", "Cincang bawang putih, tumis sampai harum.", "Masukkan pakcoy, aduk dengan api besar.", "Beri garam dan sedikit air, angkat saat daun mulai layu."]),

  r("rcp_jagung_bakar_kecap", "Jagung bakar kecap", 2, 20, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 190, 2,
    [{ id: "ing_jagung", qty: 400, unit: "g" }, { id: "ing_kecap", qty: 20, unit: "ml" }, { id: "ing_cabai", qty: 10, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }],
    ["Rebus jagung sampai setengah matang.", "Campur kecap, cabai halus, dan perasan jeruk.", "Oles jagung dengan bumbu.", "Bakar atau panggang di wajan sampai kecokelatan."]),

  r("rcp_perkedel_jagung", "Perkedel jagung", 3, 25, ["kompor", "wajan"], ["vegetarian"], "sayur", 260, 3,
    [{ id: "ing_jagung", qty: 300, unit: "g" }, { id: "ing_tepung", qty: 100, unit: "g" }, { id: "ing_telur", qty: 1, unit: "butir" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }],
    ["Pipil jagung, haluskan sebagian.", "Campur jagung, tepung, telur, dan bumbu halus.", "Bentuk adonan menjadi bulatan pipih.", "Goreng sampai keemasan di kedua sisi."]),

  r("rcp_sambal_kacang", "Sambal kacang", 4, 15, ["kompor", "wajan"], ["vegetarian", "vegan"], "kacang", 180, 0,
    [{ id: "ing_kacangtanah", qty: 150, unit: "g" }, { id: "ing_cabai", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_gula", qty: 15, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }],
    ["Sangrai kacang tanah, lalu haluskan.", "Haluskan cabai, bawang putih, dan gula.", "Campur kacang dengan bumbu, beri air hangat.", "Tambahkan perasan jeruk dan garam, aduk rata."]),

  r("rcp_gado_gado", "Gado-gado sederhana", 3, 30, ["kompor", "panci", "wajan"], ["vegetarian"], "telur", 380, 5,
    [{ id: "ing_kentang", qty: 250, unit: "g" }, { id: "ing_kacangpanjang", qty: 150, unit: "g" }, { id: "ing_tauge", qty: 150, unit: "g" }, { id: "ing_kol", qty: 150, unit: "g" }, { id: "ing_timun", qty: 100, unit: "g" }, { id: "ing_telur", qty: 3, unit: "butir" }, { id: "ing_kacangtanah", qty: 100, unit: "g" }],
    ["Rebus kentang, kacang panjang, tauge, dan kol secara bergantian.", "Rebus telur, kupas, potong.", "Haluskan kacang tanah sangrai dengan cabai dan bawang.", "Tata sayur dan telur, siram sambal kacang, beri irisan timun."]),

  r("rcp_bubur_kacang_hijau", "Bubur kacang hijau", 4, 40, ["kompor", "panci"], ["vegetarian", "vegan"], "kacang", 280, 1,
    [{ id: "ing_kacanghijau", qty: 250, unit: "g" }, { id: "ing_santan", qty: 200, unit: "ml" }, { id: "ing_gula", qty: 60, unit: "g" }, { id: "ing_jahe", qty: 10, unit: "g" }],
    ["Rendam kacang hijau selama 30 menit.", "Rebus dengan jahe sampai kacang pecah.", "Masukkan gula dan santan.", "Masak dengan api kecil sampai mengental, aduk supaya tidak pecah."]),

  r("rcp_ikan_bakar_jeruk", "Ikan bakar jeruk", 2, 25, ["kompor", "wajan"], [], "ikan", 300, 4,
    [{ id: "ing_ikan", qty: 400, unit: "g" }, { id: "ing_jeruk", qty: 2, unit: "buah" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_kecap", qty: 20, unit: "ml" }, { id: "ing_cabai", qty: 10, unit: "g" }],
    ["Lumuri ikan dengan perasan jeruk dan garam.", "Haluskan bawang putih dan cabai, campur dengan kecap.", "Oles ikan dengan bumbu.", "Bakar atau panggang sampai matang, sajikan dengan jeruk."]),

  r("rcp_ayam_bawang_bombai", "Ayam bawang bombai", 2, 30, ["kompor", "wajan"], [], "ayam", 380, 4,
    [{ id: "ing_ayam", qty: 400, unit: "g" }, { id: "ing_bawangbombai", qty: 150, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_kecap", qty: 30, unit: "ml" }, { id: "ing_jahe", qty: 10, unit: "g" }],
    ["Potong ayam, lumuri dengan jahe dan garam.", "Iris bawang bombai dan bawang putih.", "Tumis bawang sampai wangi, masukkan ayam.", "Tuang kecap dan sedikit air, masak sampai ayam matang dan kuah menyusut."]),

  r("rcp_semur_tahu", "Semur tahu", 3, 30, ["kompor", "wajan"], ["vegetarian", "vegan"], "tahu", 270, 0,
    [{ id: "ing_tahu", qty: 400, unit: "g" }, { id: "ing_bawangbombai", qty: 100, unit: "g" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 15, unit: "g" }, { id: "ing_kecap", qty: 50, unit: "ml" }, { id: "ing_ketumbar", qty: 3, unit: "g" }, { id: "ing_kemiri", qty: 20, unit: "g" }],
    ["Goreng tahu sebentar, tiriskan.", "Haluskan bawang merah, bawang putih, ketumbar, dan kemiri.", "Tumis bumbu bersama bawang bombai sampai wangi.", "Masukkan tahu, kecap, dan air, masak sampai kuah meresap."]),

  r("rcp_ayam_ketumbar", "Ayam ketumbar", 2, 35, ["kompor", "wajan"], [], "ayam", 360, 4,
    [{ id: "ing_ayam", qty: 400, unit: "g" }, { id: "ing_ketumbar", qty: 8, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_kunyit", qty: 5, unit: "g" }, { id: "ing_serai", qty: 1, unit: "batang" }],
    ["Haluskan ketumbar, bawang putih, dan kunyit.", "Lumuri ayam dengan bumbu dan garam.", "Tumis ayam bersama serai yang dimemarkan.", "Tambahkan air, masak sampai ayam matang dan bumbu meresap."]),

  r("rcp_pepes_ikan_kemiri", "Pepes ikan kemiri", 2, 30, ["kompor", "kukusan"], [], "ikan", 280, 3,
    [{ id: "ing_ikan", qty: 400, unit: "g" }, { id: "ing_kemiri", qty: 30, unit: "g" }, { id: "ing_serai", qty: 1, unit: "batang" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_cabai", qty: 15, unit: "g" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }],
    ["Lumuri ikan dengan perasan jeruk dan garam.", "Haluskan kemiri, cabai, dan bawang merah.", "Bungkus ikan dengan bumbu dan serai di atas daun.", "Kukus selama 20 menit sampai matang."]),

  r("rcp_soto_betawi", "Soto betawi", 4, 45, ["kompor", "panci"], [], "daging", 430, 4,
    [{ id: "ing_daging", qty: 400, unit: "g" }, { id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_serai", qty: 1, unit: "batang" }, { id: "ing_kemiri", qty: 25, unit: "g" }, { id: "ing_ketumbar", qty: 5, unit: "g" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_kentang", qty: 200, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }],
    ["Rebus daging sampai empuk, potong sesuai selera.", "Haluskan bawang, kemiri, dan ketumbar.", "Tumis bumbu bersama serai, masukkan ke kaldu.", "Tambahkan santan, kentang, dan tomat, masak sampai matang."]),

  r("rcp_rendang_sederhana", "Rendang sederhana", 4, 45, ["kompor", "panci"], [], "daging", 480, 3,
    [{ id: "ing_daging", qty: 500, unit: "g" }, { id: "ing_santan", qty: 400, unit: "ml" }, { id: "ing_serai", qty: 2, unit: "batang" }, { id: "ing_jeruk", qty: 2, unit: "buah" }, { id: "ing_kemiri", qty: 30, unit: "g" }, { id: "ing_bawangmerah", qty: 60, unit: "g" }, { id: "ing_bawangputih", qty: 30, unit: "g" }, { id: "ing_cabai", qty: 40, unit: "g" }],
    ["Haluskan bawang, cabai, kemiri, dan perasan jeruk.", "Tumis bumbu bersama serai sampai wangi.", "Masukkan daging dan santan.", "Masak dengan api kecil sampai kuah menyusut dan daging empuk."]),

  r("rcp_ayam_serai", "Ayam serai", 2, 30, ["kompor", "wajan"], [], "ayam", 350, 4,
    [{ id: "ing_ayam", qty: 400, unit: "g" }, { id: "ing_serai", qty: 2, unit: "batang" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_kecap", qty: 25, unit: "ml" }, { id: "ing_cabai", qty: 15, unit: "g" }],
    ["Memarkan serai, cincang bawang putih dan cabai.", "Tumis bumbu sampai wangi.", "Masukkan ayam, aduk sampai berubah warna.", "Tuang kecap dan air, masak sampai kuah menyusut."]),

  r("rcp_nasi_jagung", "Nasi jagung", 3, 30, ["kompor", "rice cooker"], ["vegetarian", "vegan"], "beras", 370, 2,
    [{ id: "ing_beras", qty: 200, unit: "g" }, { id: "ing_jagung", qty: 200, unit: "g" }, { id: "ing_santan", qty: 100, unit: "ml" }, { id: "ing_serai", qty: 1, unit: "batang" }],
    ["Cuci beras, tiriskan.", "Pipil jagung dan memarkan serai.", "Masukkan semua bahan ke rice cooker dengan air secukupnya.", "Masak sampai matang, aduk sebelum disajikan."]),

  r("rcp_tumis_pakcoy_tahu", "Tumis pakcoy tahu", 2, 20, ["kompor", "wajan"], ["vegetarian", "vegan"], "tahu", 230, 5,
    [{ id: "ing_pakcoy", qty: 1, unit: "ikat" }, { id: "ing_tahu", qty: 200, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_kecap", qty: 15, unit: "ml" }],
    ["Potong tahu, goreng setengah kering.", "Tumis bawang putih sampai wangi.", "Masukkan pakcoy dan tahu.", "Beri kecap dan sedikit air, masak sebentar lalu angkat."]),

  r("rcp_sayur_lodeh_labu_siam", "Sayur lodeh labu siam", 3, 35, ["kompor", "panci"], ["vegetarian", "vegan"], "sayur", 250, 1,
    [{ id: "ing_labusiam", qty: 300, unit: "g" }, { id: "ing_kacangpanjang", qty: 150, unit: "g" }, { id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_bawangmerah", qty: 35, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_cabai", qty: 15, unit: "g" }],
    ["Potong labu siam dan kacang panjang.", "Tumis bawang dan cabai sampai wangi.", "Tuang santan dan air, didihkan.", "Masukkan sayur, masak sampai empuk dan kuah sedikit menyusut."]),

  r("rcp_sambal_terong", "Sambal terong", 3, 25, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 160, 2,
    [{ id: "ing_terong", qty: 400, unit: "g" }, { id: "ing_cabai", qty: 40, unit: "g" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }, { id: "ing_gula", qty: 10, unit: "g" }],
    ["Potong terong, goreng sebentar, tiriskan.", "Haluskan cabai, bawang merah, dan tomat.", "Tumis sambal sampai matang dan wangi.", "Masukkan terong dan gula, aduk sampai terbalut rata."]),

  r("rcp_ikan_kuah_kuning", "Ikan kuah kuning", 3, 35, ["kompor", "panci"], [], "ikan", 290, 3,
    [{ id: "ing_ikan", qty: 400, unit: "g" }, { id: "ing_kunyit", qty: 8, unit: "g" }, { id: "ing_serai", qty: 1, unit: "batang" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_cabai", qty: 20, unit: "g" }, { id: "ing_bawangmerah", qty: 40, unit: "g" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }],
    ["Lumuri ikan dengan perasan jeruk dan garam.", "Haluskan kunyit, bawang, dan cabai.", "Didihkan air, masukkan bumbu dan serai.", "Masukkan ikan dan tomat, masak sampai ikan matang."]),

  r("rcp_sayur_bening_bayam", "Sayur bening bayam", 3, 20, ["kompor", "panci"], ["vegetarian", "vegan"], "sayur", 110, 5,
    [{ id: "ing_bayam", qty: 1, unit: "ikat" }, { id: "ing_jagung", qty: 150, unit: "g" }, { id: "ing_bawangmerah", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }],
    ["Petik bayam, cuci bersih.", "Didihkan air dengan bawang iris dan jagung.", "Masukkan bayam, masak sebentar.", "Beri garam dan sedikit gula, angkat."]),

  r("rcp_tumis_sawi", "Tumis sawi bawang putih", 2, 12, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 100, 5,
    [{ id: "ing_sawi", qty: 1, unit: "ikat" }, { id: "ing_bawangputih", qty: 20, unit: "g" }, { id: "ing_minyak", qty: 10, unit: "ml" }],
    ["Potong sawi, cuci bersih.", "Tumis bawang putih sampai wangi.", "Masukkan sawi, aduk dengan api besar.", "Beri garam, angkat sebelum terlalu layu."]),

  r("rcp_roti_bakar_susu", "Roti bakar susu", 2, 10, ["kompor", "wajan"], ["vegetarian"], "roti", 320, 0,
    [{ id: "ing_roti", qty: 150, unit: "g" }, { id: "ing_susu", qty: 150, unit: "ml" }, { id: "ing_gula", qty: 20, unit: "g" }, { id: "ing_keju", qty: 30, unit: "g" }],
    ["Panggang roti di wajan sampai kecokelatan.", "Panaskan susu dengan gula, jangan sampai mendidih.", "Susun roti di piring, tuang susu.", "Taburi keju parut di atasnya."]),
];

export const EQUIPMENT = ["kompor", "wajan", "panci", "kukusan", "rice cooker", "oven", "blender"];

export const SAMPLES: { id: string; label: string; note: string; items: { id: string; qty: number; confidence: number }[] }[] = [
  {
    id: "sample-a",
    label: copy.samples["sample-a"].label,
    note: copy.samples["sample-a"].note,
    items: [
      { id: "ing_telur", qty: 4, confidence: 0.93 },
      { id: "ing_tempe", qty: 200, confidence: 0.88 },
      { id: "ing_kangkung", qty: 1, confidence: 0.82 },
      { id: "ing_bawangmerah", qty: 30, confidence: 0.71 },
      { id: "ing_bawangputih", qty: 15, confidence: 0.66 },
      { id: "ing_cabai", qty: 20, confidence: 0.48 },
      { id: "ing_tomat", qty: 100, confidence: 0.34 },
    ],
  },
  {
    id: "sample-b",
    label: copy.samples["sample-b"].label,
    note: copy.samples["sample-b"].note,
    items: [
      { id: "ing_ayam", qty: 300, confidence: 0.9 },
      { id: "ing_kol", qty: 200, confidence: 0.84 },
      { id: "ing_wortel", qty: 100, confidence: 0.79 },
      { id: "ing_mie", qty: 200, confidence: 0.74 },
      { id: "ing_bawangputih", qty: 20, confidence: 0.6 },
      { id: "ing_seledri", qty: 0.5, confidence: 0.42 },
    ],
  },
  {
    id: "sample-c",
    label: copy.samples["sample-c"].label,
    note: copy.samples["sample-c"].note,
    items: [
      { id: "ing_tahu", qty: 300, confidence: 0.91 },
      { id: "ing_buncis", qty: 200, confidence: 0.86 },
      { id: "ing_kentang", qty: 400, confidence: 0.8 },
      { id: "ing_telur", qty: 3, confidence: 0.76 },
      { id: "ing_jamur", qty: 150, confidence: 0.63 },
      { id: "ing_daunbawang", qty: 1, confidence: 0.55 },
      { id: "ing_cabai", qty: 15, confidence: 0.39 },
    ],
  },
];

export const ingredientById = new Map(INGREDIENTS.map((i) => [i.id, i]));
export const priceById = new Map(PRICES.map((p) => [p.ingredientId, p]));
export const recipeById = new Map(RECIPES.map((x) => [x.id, x]));

