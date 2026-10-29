import { copy } from "./copy";
import type { Ingredient, Price, Recipe } from "./types";

export const PRICE_DATE = "2026-10-27";

export const INGREDIENTS: Ingredient[] = [
  { id: "ing_tempe", name: "Tempe", unit: "g", category: "protein", assumed: false, kcal100: 193, allergens: ["kedelai"] },
  { id: "ing_tahu", name: "Tahu", unit: "g", category: "protein", assumed: false, kcal100: 76, allergens: ["kedelai"] },
  { id: "ing_telur", name: "Telur", unit: "butir", category: "protein", assumed: false, kcal100: 143, allergens: ["telur"] },
  { id: "ing_ayam", name: "Ayam", unit: "g", category: "protein", assumed: false, kcal100: 165, allergens: [] },
  { id: "ing_ikan", name: "Ikan", unit: "g", category: "protein", assumed: false, kcal100: 96, allergens: ["ikan"] },
  { id: "ing_udang", name: "Udang", unit: "g", category: "protein", assumed: false, kcal100: 99, allergens: ["udang"] },
  { id: "ing_daging", name: "Daging sapi", unit: "g", category: "protein", assumed: false, kcal100: 250, allergens: [] },
  { id: "ing_kangkung", name: "Kangkung", unit: "ikat", category: "sayur", assumed: false, kcal100: 19, allergens: [] },
  { id: "ing_bayam", name: "Bayam", unit: "ikat", category: "sayur", assumed: false, kcal100: 23, allergens: [] },
  { id: "ing_sawi", name: "Sawi", unit: "ikat", category: "sayur", assumed: false, kcal100: 13, allergens: [] },
  { id: "ing_kol", name: "Kol", unit: "g", category: "sayur", assumed: false, kcal100: 25, allergens: [] },
  { id: "ing_wortel", name: "Wortel", unit: "g", category: "sayur", assumed: false, kcal100: 41, allergens: [] },
  { id: "ing_tomat", name: "Tomat", unit: "g", category: "sayur", assumed: false, kcal100: 18, allergens: [] },
  { id: "ing_timun", name: "Timun", unit: "g", category: "sayur", assumed: false, kcal100: 15, allergens: [] },
  { id: "ing_terong", name: "Terong", unit: "g", category: "sayur", assumed: false, kcal100: 25, allergens: [] },
  { id: "ing_buncis", name: "Buncis", unit: "g", category: "sayur", assumed: false, kcal100: 31, allergens: [] },
  { id: "ing_kentang", name: "Kentang", unit: "g", category: "sayur", assumed: false, kcal100: 77, allergens: [] },
  { id: "ing_jamur", name: "Jamur", unit: "g", category: "sayur", assumed: false, kcal100: 22, allergens: [] },
  { id: "ing_bawangmerah", name: "Bawang merah", unit: "g", category: "bumbu", assumed: false, kcal100: 40, allergens: [] },
  { id: "ing_bawangputih", name: "Bawang putih", unit: "g", category: "bumbu", assumed: false, kcal100: 149, allergens: [] },
  { id: "ing_cabai", name: "Cabai", unit: "g", category: "bumbu", assumed: false, kcal100: 40, allergens: [] },
  { id: "ing_jahe", name: "Jahe", unit: "g", category: "bumbu", assumed: false, kcal100: 80, allergens: [] },
  { id: "ing_kunyit", name: "Kunyit", unit: "g", category: "bumbu", assumed: false, kcal100: 39, allergens: [] },
  { id: "ing_daunbawang", name: "Daun bawang", unit: "ikat", category: "bumbu", assumed: false, kcal100: 32, allergens: [] },
  { id: "ing_seledri", name: "Seledri", unit: "ikat", category: "bumbu", assumed: false, kcal100: 16, allergens: [] },
  { id: "ing_beras", name: "Beras", unit: "g", category: "pokok", assumed: false, kcal100: 360, allergens: [] },
  { id: "ing_mie", name: "Mie", unit: "g", category: "pokok", assumed: false, kcal100: 350, allergens: ["gluten"] },
  { id: "ing_roti", name: "Roti", unit: "g", category: "pokok", assumed: false, kcal100: 265, allergens: ["gluten"] },
  { id: "ing_tepung", name: "Tepung", unit: "g", category: "pokok", assumed: false, kcal100: 364, allergens: ["gluten"] },
  { id: "ing_kecap", name: "Kecap", unit: "ml", category: "bumbu", assumed: true, kcal100: 60, allergens: ["kedelai"] },
  { id: "ing_minyak", name: "Minyak", unit: "ml", category: "bumbu", assumed: true, kcal100: 884, allergens: [] },
  { id: "ing_gula", name: "Gula", unit: "g", category: "bumbu", assumed: true, kcal100: 387, allergens: [] },
  { id: "ing_garam", name: "Garam", unit: "g", category: "bumbu", assumed: true, kcal100: 0, allergens: [] },
  { id: "ing_santan", name: "Santan", unit: "ml", category: "kemasan", assumed: false, kcal100: 230, allergens: [] },
  { id: "ing_susu", name: "Susu", unit: "ml", category: "susu", assumed: false, kcal100: 61, allergens: ["susu"] },
  { id: "ing_keju", name: "Keju", unit: "g", category: "susu", assumed: false, kcal100: 402, allergens: ["susu"] },
  { id: "ing_pisang", name: "Pisang", unit: "g", category: "buah", assumed: false, kcal100: 89, allergens: [] },
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

