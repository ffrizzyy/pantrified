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
  { id: "ing_kecap", name: "Kecap", aliases: ["kecap manis", "sweet soy sauce", "kecap botol"], unit: "ml", category: "bumbu", assumed: true, kcal100: 60, allergens: ["kedelai"] },
  { id: "ing_minyak", name: "Minyak", aliases: ["minyak goreng", "cooking oil", "oil"], unit: "ml", category: "bumbu", assumed: true, kcal100: 884, allergens: [] },
  { id: "ing_gula", name: "Gula", aliases: ["sugar", "gula pasir", "gula halus"], unit: "g", category: "bumbu", assumed: true, kcal100: 387, allergens: [] },
  { id: "ing_garam", name: "Garam", aliases: ["salt", "garam dapur", "garam halus"], unit: "g", category: "bumbu", assumed: true, kcal100: 0, allergens: [] },
  { id: "ing_santan", name: "Santan", aliases: ["coconut milk", "santan kelapa", "santan instan"], unit: "ml", category: "kemasan", assumed: false, kcal100: 230, allergens: [] },
  { id: "ing_susu", name: "Susu", aliases: ["milk", "susu cair", "susu UHT"], unit: "ml", category: "susu", assumed: false, kcal100: 61, allergens: ["susu"] },
  { id: "ing_keju", name: "Keju", aliases: ["cheese", "keju cheddar", "keju parut"], unit: "g", category: "susu", assumed: false, kcal100: 402, allergens: ["susu"] },
  { id: "ing_pisang", name: "Pisang", aliases: ["banana", "pisang ambon", "pisang kepok"], unit: "g", category: "buah", assumed: false, kcal100: 89, allergens: [] },
  { id: "ing_jeruk", name: "Jeruk", aliases: ["jeruk nipis", "lime", "jeruk limau"], unit: "buah", category: "buah", assumed: false, kcal100: 47, allergens: [] },

  // ---------------------------------------------------------- pantry extras
  // Supporting ingredients. Detector classes stay core; these broaden search,
  // recipes, and the price table without changing the vision vocabulary.
  { id: "ing_ikantongkol", name: "Ikan tongkol", aliases: ["tuna", "tongkol segar", "ikan tuna"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 132, allergens: ["ikan"] },
  { id: "ing_ikannila", name: "Ikan nila", aliases: ["tilapia", "nila segar", "ikan nila merah"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 96, allergens: ["ikan"] },
  { id: "ing_ikanlele", name: "Ikan lele", aliases: ["catfish", "lele segar", "lele goreng"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 105, allergens: ["ikan"] },
  { id: "ing_ikangurame", name: "Ikan gurame", aliases: ["gurami", "ikan gurami", "gurame segar"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 110, allergens: ["ikan"] },
  { id: "ing_ikanteri", name: "Ikan teri", aliases: ["anchovy", "teri kering", "teri medan"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 170, allergens: ["ikan"] },
  { id: "ing_cumi", name: "Cumi", aliases: ["squid", "cumi-cumi", "cumi segar"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 92, allergens: ["udang"] },
  { id: "ing_kerang", name: "Kerang", aliases: ["clam", "kerang hijau", "shellfish"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 86, allergens: ["udang"] },
  { id: "ing_kepiting", name: "Kepiting", aliases: ["crab", "kepiting segar", "kepiting bakau"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 97, allergens: ["udang"] },
  { id: "ing_hatiayam", name: "Hati ayam", aliases: ["chicken liver", "hati", "hati ampela"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 135, allergens: [] },
  { id: "ing_ampela", name: "Ampela", aliases: ["gizzard", "ampela ayam", "ampela bersih"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 94, allergens: [] },
  { id: "ing_baksosapi", name: "Bakso sapi", aliases: ["meatball", "bakso", "bakso daging"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 250, allergens: ["gluten"] },
  { id: "ing_sosis", name: "Sosis", aliases: ["sausage", "sosis ayam", "sosis sapi"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 300, allergens: ["gluten"] },
  { id: "ing_kornet", name: "Kornet", aliases: ["corned beef", "kornet sapi", "daging kornet"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 250, allergens: [] },
  { id: "ing_tahupong", name: "Tahu pong", aliases: ["fried tofu", "tahu goreng", "tahu pong kosong"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 80, allergens: ["kedelai"] },
  { id: "ing_edamame", name: "Edamame", aliases: ["edamame bean", "kedelai muda", "edamame beku"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 121, allergens: ["kedelai"] },
  { id: "ing_kacangmerah", name: "Kacang merah", aliases: ["red kidney bean", "kidney bean", "kacang merah kering"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 127, allergens: [] },
  { id: "ing_kacangkedelai", name: "Kacang kedelai", aliases: ["soybean", "kedelai", "kedelai kering"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 446, allergens: ["kedelai"] },
  { id: "ing_telurpuyuh", name: "Telur puyuh", aliases: ["quail egg", "telur puyuh rebus", "puyuh"], unit: "butir", category: "protein", assumed: false, core: false, kcal100: 158, allergens: ["telur"] },
  { id: "ing_dagingkambing", name: "Daging kambing", aliases: ["goat", "kambing", "daging kambing muda"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 294, allergens: [] },
  { id: "ing_ayamfillet", name: "Ayam fillet", aliases: ["chicken breast", "dada ayam", "ayam tanpa tulang"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 165, allergens: [] },
  { id: "ing_ikansalmon", name: "Ikan salmon", aliases: ["salmon", "salmon fillet", "ikan salmon segar"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 208, allergens: ["ikan"] },
  { id: "ing_tunakaleng", name: "Tuna kaleng", aliases: ["canned tuna", "tuna tin", "tuna kaleng dalam air"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 116, allergens: ["ikan"] },
  { id: "ing_sardenkaleng", name: "Sarden kaleng", aliases: ["canned sardines", "ikan sarden", "sarden saus tomat"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 185, allergens: ["ikan"] },
  { id: "ing_udangkering", name: "Udang kering", aliases: ["dried shrimp", "ebi", "udang kering kecil"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 300, allergens: ["udang"] },
  { id: "ing_baksoikan", name: "Bakso ikan", aliases: ["fish ball", "bakso tenggiri", "bakso ikan tenggiri"], unit: "g", category: "protein", assumed: false, core: false, kcal100: 160, allergens: ["ikan"] },

  { id: "ing_brokoli", name: "Brokoli", aliases: ["broccoli", "brokoli hijau", "brokoli segar"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 34, allergens: [] },
  { id: "ing_kembangkol", name: "Kembang kol", aliases: ["cauliflower", "kol bunga", "kembang kol putih"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 25, allergens: [] },
  { id: "ing_selada", name: "Selada", aliases: ["lettuce", "selada keriting", "selada hijau"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 15, allergens: [] },
  { id: "ing_kale", name: "Kale", aliases: ["kale segar", "daun kale", "kale hijau"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 49, allergens: [] },
  { id: "ing_bit", name: "Bit", aliases: ["beetroot", "bit merah", "ubi bit"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 43, allergens: [] },
  { id: "ing_lobak", name: "Lobak", aliases: ["radish", "daikon", "lobak putih"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 18, allergens: [] },
  { id: "ing_pare", name: "Pare", aliases: ["bitter melon", "pare hijau", "peria"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 17, allergens: [] },
  { id: "ing_petai", name: "Petai", aliases: ["stink bean", "pete", "petai segar"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 92, allergens: [] },
  { id: "ing_jengkol", name: "Jengkol", aliases: ["jering", "jengkol segar", "jengkol tua"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 164, allergens: [] },
  { id: "ing_daunpepaya", name: "Daun pepaya", aliases: ["papaya leaves", "daun pepaya muda", "daun pepaya jepang"], unit: "ikat", category: "sayur", assumed: false, core: false, kcal100: 40, allergens: [] },
  { id: "ing_kemangi", name: "Kemangi", aliases: ["basil", "daun kemangi", "kemangi segar"], unit: "ikat", category: "sayur", assumed: false, core: false, kcal100: 23, allergens: [] },
  { id: "ing_oyong", name: "Oyong", aliases: ["gambas", "oyong muda", "gambas segar"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 20, allergens: [] },
  { id: "ing_labukuning", name: "Labu kuning", aliases: ["pumpkin", "labu parang", "labu kuning manis"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 26, allergens: [] },
  { id: "ing_ubijalar", name: "Ubi jalar", aliases: ["sweet potato", "ubi", "ubi jalar madu"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 86, allergens: [] },
  { id: "ing_singkong", name: "Singkong", aliases: ["cassava", "ubi kayu", "singkong segar"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 160, allergens: [] },
  { id: "ing_talas", name: "Talas", aliases: ["taro", "keladi", "talas bogor"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 112, allergens: [] },
  { id: "ing_babycorn", name: "Baby corn", aliases: ["jagung muda", "babycorn", "jagung semi"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 26, allergens: [] },
  { id: "ing_asparagus", name: "Asparagus", aliases: ["asparagus hijau", "asparagus segar", "sayur asparagus"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 20, allergens: [] },
  { id: "ing_paprika", name: "Paprika", aliases: ["bell pepper", "paprika merah", "paprika hijau"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 31, allergens: [] },
  { id: "ing_cabairawit", name: "Cabai rawit", aliases: ["bird's eye chili", "cabe rawit", "rawit"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 40, allergens: [] },
  { id: "ing_cabaimerah", name: "Cabai merah besar", aliases: ["red chili", "cabe merah", "cabai merah keriting"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 31, allergens: [] },
  { id: "ing_tomatceri", name: "Tomat ceri", aliases: ["cherry tomato", "tomat kecil", "tomat ceri merah"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 18, allergens: [] },
  { id: "ing_jamurshimeji", name: "Jamur shimeji", aliases: ["shimeji", "jamur putih", "shimeji putih"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 22, allergens: [] },
  { id: "ing_jamurkuping", name: "Jamur kuping", aliases: ["wood ear", "jamur hitam", "jamur kuping kering"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 25, allergens: [] },
  { id: "ing_sawiputih", name: "Sawi putih", aliases: ["napa cabbage", "sawi putih segar", "petsai"], unit: "g", category: "sayur", assumed: false, core: false, kcal100: 13, allergens: [] },

  { id: "ing_apel", name: "Apel", aliases: ["apple", "apel merah", "apel fuji"], unit: "g", category: "buah", assumed: false, core: false, kcal100: 52, allergens: [] },
  { id: "ing_alpukat", name: "Alpukat", aliases: ["avocado", "alpukat mentega", "alpukat matang"], unit: "g", category: "buah", assumed: false, core: false, kcal100: 160, allergens: [] },
  { id: "ing_mangga", name: "Mangga", aliases: ["mango", "mangga harum manis", "mangga muda"], unit: "g", category: "buah", assumed: false, core: false, kcal100: 60, allergens: [] },
  { id: "ing_pepaya", name: "Pepaya", aliases: ["papaya", "pepaya muda", "pepaya california"], unit: "g", category: "buah", assumed: false, core: false, kcal100: 43, allergens: [] },
  { id: "ing_semangka", name: "Semangka", aliases: ["watermelon", "semangka merah", "semangka tanpa biji"], unit: "g", category: "buah", assumed: false, core: false, kcal100: 30, allergens: [] },
  { id: "ing_melon", name: "Melon", aliases: ["cantaloupe", "melon hijau", "melon madu"], unit: "g", category: "buah", assumed: false, core: false, kcal100: 34, allergens: [] },
  { id: "ing_nanas", name: "Nanas", aliases: ["pineapple", "nanas madu", "nanas segar"], unit: "g", category: "buah", assumed: false, core: false, kcal100: 50, allergens: [] },
  { id: "ing_anggur", name: "Anggur", aliases: ["grape", "anggur merah", "anggur hijau"], unit: "g", category: "buah", assumed: false, core: false, kcal100: 69, allergens: [] },
  { id: "ing_stroberi", name: "Stroberi", aliases: ["strawberry", "stroberi segar", "stroberi beku"], unit: "g", category: "buah", assumed: false, core: false, kcal100: 32, allergens: [] },
  { id: "ing_kelapa", name: "Kelapa", aliases: ["coconut", "kelapa parut", "kelapa muda"], unit: "buah", category: "buah", assumed: false, core: false, kcal100: 354, allergens: [] },

  { id: "ing_miinstan", name: "Mi instan", aliases: ["instant noodles", "indomie", "mi instan goreng"], unit: "g", category: "pokok", assumed: false, core: false, kcal100: 470, allergens: ["gluten"] },
  { id: "ing_bihun", name: "Bihun", aliases: ["rice vermicelli", "vermicelli", "bihun jagung"], unit: "g", category: "pokok", assumed: false, core: false, kcal100: 350, allergens: [] },
  { id: "ing_kwetiau", name: "Kwetiau", aliases: ["rice noodles", "kway teow", "kwetiau basah"], unit: "g", category: "pokok", assumed: false, core: false, kcal100: 200, allergens: [] },
  { id: "ing_oatmeal", name: "Oatmeal", aliases: ["oats", "havermout", "oat instan"], unit: "g", category: "pokok", assumed: false, core: false, kcal100: 389, allergens: ["gluten"] },
  { id: "ing_sagu", name: "Sagu", aliases: ["sago", "tepung sagu", "sagu mutiara"], unit: "g", category: "pokok", assumed: false, core: false, kcal100: 355, allergens: [] },
  { id: "ing_tepungberas", name: "Tepung beras", aliases: ["rice flour", "tepung beras putih", "tepung ketan putih"], unit: "g", category: "pokok", assumed: false, core: false, kcal100: 366, allergens: [] },
  { id: "ing_maizena", name: "Maizena", aliases: ["cornstarch", "tepung maizena", "tepung jagung"], unit: "g", category: "pokok", assumed: false, core: false, kcal100: 381, allergens: [] },
  { id: "ing_miebasah", name: "Mie basah", aliases: ["fresh noodles", "mie kuning", "mie basah segar"], unit: "g", category: "pokok", assumed: false, core: false, kcal100: 250, allergens: ["gluten"] },
  { id: "ing_kerupuk", name: "Kerupuk", aliases: ["crackers", "krupuk", "kerupuk mentah"], unit: "g", category: "pokok", assumed: false, core: false, kcal100: 480, allergens: ["gluten"] },
  { id: "ing_biskuit", name: "Biskuit", aliases: ["biscuit", "biskuit gandum", "biskuit manis"], unit: "g", category: "pokok", assumed: false, core: false, kcal100: 450, allergens: ["gluten"] },

  { id: "ing_mentega", name: "Mentega", aliases: ["butter", "mentega tawar", "mentega cair"], unit: "g", category: "susu", assumed: false, core: false, kcal100: 717, allergens: ["susu"] },
  { id: "ing_margarin", name: "Margarin", aliases: ["margarine", "margarin serbaguna", "mentega nabati"], unit: "g", category: "susu", assumed: false, core: false, kcal100: 720, allergens: ["susu"] },
  { id: "ing_yoghurt", name: "Yoghurt", aliases: ["yogurt", "yoghurt plain", "yoghurt tawar"], unit: "ml", category: "susu", assumed: false, core: false, kcal100: 59, allergens: ["susu"] },
  { id: "ing_skm", name: "Susu kental manis", aliases: ["condensed milk", "skm", "susu kental"], unit: "ml", category: "susu", assumed: false, core: false, kcal100: 321, allergens: ["susu"] },

  { id: "ing_wijen", name: "Wijen", aliases: ["sesame", "biji wijen", "wijen sangrai"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 573, allergens: [] },
  { id: "ing_madu", name: "Madu", aliases: ["honey", "madu hutan", "madu murni"], unit: "g", category: "kemasan", assumed: false, core: false, kcal100: 304, allergens: [] },
  { id: "ing_mayones", name: "Mayones", aliases: ["mayonnaise", "mayo", "mayones botol"], unit: "g", category: "kemasan", assumed: false, core: false, kcal100: 680, allergens: ["telur"] },
  { id: "ing_saustomat", name: "Saus tomat", aliases: ["tomato sauce", "saus botol", "saus tomat manis"], unit: "g", category: "kemasan", assumed: false, core: false, kcal100: 82, allergens: [] },
  { id: "ing_sausti", name: "Saus tiram", aliases: ["oyster sauce", "tiram", "saus tiram botol"], unit: "ml", category: "kemasan", assumed: false, core: false, kcal100: 100, allergens: ["udang"] },
  { id: "ing_saussambal", name: "Saus sambal", aliases: ["chili sauce", "sambal botol", "saus sambal manis"], unit: "g", category: "kemasan", assumed: false, core: false, kcal100: 95, allergens: [] },
  { id: "ing_kecapasin", name: "Kecap asin", aliases: ["soy sauce", "kecap putih", "kecap asin botol"], unit: "ml", category: "bumbu", assumed: false, core: false, kcal100: 60, allergens: ["kedelai"] },
  { id: "ing_cuka", name: "Cuka", aliases: ["vinegar", "cuka makan", "cuka masak"], unit: "ml", category: "bumbu", assumed: false, core: false, kcal100: 21, allergens: [] },
  { id: "ing_kaldububuk", name: "Kaldu bubuk", aliases: ["bouillon", "kaldu ayam", "kaldu jamur bubuk"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 200, allergens: [] },
  { id: "ing_terasi", name: "Terasi", aliases: ["shrimp paste", "belacan", "terasi bakar"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 150, allergens: ["udang"] },

  { id: "ing_asamjawa", name: "Asam jawa", aliases: ["tamarind", "asam", "asam jawa matang"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 239, allergens: [] },
  { id: "ing_gulamerah", name: "Gula merah", aliases: ["palm sugar", "gula jawa", "gula aren"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 380, allergens: [] },
  { id: "ing_daunjeruk", name: "Daun jeruk", aliases: ["kaffir lime leaves", "daun jeruk purut", "jeruk purut"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 30, allergens: [] },
  { id: "ing_daunsalam", name: "Daun salam", aliases: ["bay leaf", "salam", "daun salam kering"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 40, allergens: [] },
  { id: "ing_lengkuas", name: "Lengkuas", aliases: ["galangal", "laos", "lengkuas muda"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 80, allergens: [] },
  { id: "ing_kencur", name: "Kencur", aliases: ["aromatic ginger", "cekur", "kencur segar"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 80, allergens: [] },
  { id: "ing_merica", name: "Merica", aliases: ["pepper", "lada", "merica bubuk"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 251, allergens: [] },
  { id: "ing_pala", name: "Pala", aliases: ["nutmeg", "biji pala", "pala bubuk"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 525, allergens: [] },
  { id: "ing_cengkeh", name: "Cengkeh", aliases: ["clove", "cengkeh kering", "bunga cengkeh"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 274, allergens: [] },
  { id: "ing_kayumanis", name: "Kayu manis", aliases: ["cinnamon", "kayu manis bubuk", "kayu manis batang"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 247, allergens: [] },
  { id: "ing_kapulaga", name: "Kapulaga", aliases: ["cardamom", "kapulaga hijau", "kapulaga bubuk"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 311, allergens: [] },
  { id: "ing_jintan", name: "Jintan", aliases: ["cumin", "jintan putih", "jintan bubuk"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 375, allergens: [] },
  { id: "ing_peterseli", name: "Peterseli", aliases: ["parsley", "peterseli segar", "daun peterseli"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 36, allergens: [] },
  { id: "ing_daunketumbar", name: "Daun ketumbar", aliases: ["cilantro", "coriander leaves", "daun ketumbar segar"], unit: "ikat", category: "bumbu", assumed: false, core: false, kcal100: 23, allergens: [] },
  { id: "ing_adas", name: "Adas", aliases: ["fennel", "adas manis", "biji adas"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 345, allergens: [] },
  { id: "ing_bungalawang", name: "Bunga lawang", aliases: ["star anise", "lawang", "bunga lawang kering"], unit: "g", category: "bumbu", assumed: false, core: false, kcal100: 337, allergens: [] },
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

  { ingredientId: "ing_ikantongkol", perUnit: 55, packSize: 500, packPrice: 27500, date: PRICE_DATE },
  { ingredientId: "ing_ikannila", perUnit: 42, packSize: 500, packPrice: 21000, date: PRICE_DATE },
  { ingredientId: "ing_ikanlele", perUnit: 38, packSize: 500, packPrice: 19000, date: PRICE_DATE },
  { ingredientId: "ing_ikangurame", perUnit: 65, packSize: 500, packPrice: 32500, date: PRICE_DATE },
  { ingredientId: "ing_ikanteri", perUnit: 90, packSize: 100, packPrice: 9000, date: PRICE_DATE },
  { ingredientId: "ing_cumi", perUnit: 85, packSize: 500, packPrice: 42500, date: PRICE_DATE },
  { ingredientId: "ing_kerang", perUnit: 35, packSize: 500, packPrice: 17500, date: PRICE_DATE },
  { ingredientId: "ing_kepiting", perUnit: 120, packSize: 500, packPrice: 60000, date: PRICE_DATE },
  { ingredientId: "ing_hatiayam", perUnit: 45, packSize: 250, packPrice: 11250, date: PRICE_DATE },
  { ingredientId: "ing_ampela", perUnit: 40, packSize: 250, packPrice: 10000, date: PRICE_DATE },
  { ingredientId: "ing_baksosapi", perUnit: 60, packSize: 500, packPrice: 30000, date: PRICE_DATE },
  { ingredientId: "ing_sosis", perUnit: 55, packSize: 500, packPrice: 27500, date: PRICE_DATE },
  { ingredientId: "ing_kornet", perUnit: 75, packSize: 200, packPrice: 15000, date: PRICE_DATE },
  { ingredientId: "ing_tahupong", perUnit: 18, packSize: 250, packPrice: 4500, date: PRICE_DATE },
  { ingredientId: "ing_edamame", perUnit: 30, packSize: 250, packPrice: 7500, date: PRICE_DATE },
  { ingredientId: "ing_kacangmerah", perUnit: 28, packSize: 500, packPrice: 14000, date: PRICE_DATE },
  { ingredientId: "ing_kacangkedelai", perUnit: 22, packSize: 500, packPrice: 11000, date: PRICE_DATE },
  { ingredientId: "ing_telurpuyuh", perUnit: 2500, packSize: 10, packPrice: 25000, date: PRICE_DATE },
  { ingredientId: "ing_dagingkambing", perUnit: 130, packSize: 500, packPrice: 65000, date: PRICE_DATE },
  { ingredientId: "ing_ayamfillet", perUnit: 48, packSize: 500, packPrice: 24000, date: PRICE_DATE },
  { ingredientId: "ing_ikansalmon", perUnit: 180, packSize: 250, packPrice: 45000, date: PRICE_DATE },
  { ingredientId: "ing_tunakaleng", perUnit: 55, packSize: 150, packPrice: 8250, date: PRICE_DATE },
  { ingredientId: "ing_sardenkaleng", perUnit: 30, packSize: 155, packPrice: 4650, date: PRICE_DATE },
  { ingredientId: "ing_udangkering", perUnit: 120, packSize: 100, packPrice: 12000, date: PRICE_DATE },
  { ingredientId: "ing_baksoikan", perUnit: 45, packSize: 500, packPrice: 22500, date: PRICE_DATE },

  { ingredientId: "ing_brokoli", perUnit: 28, packSize: 500, packPrice: 14000, date: PRICE_DATE },
  { ingredientId: "ing_kembangkol", perUnit: 22, packSize: 500, packPrice: 11000, date: PRICE_DATE },
  { ingredientId: "ing_selada", perUnit: 25, packSize: 250, packPrice: 6250, date: PRICE_DATE },
  { ingredientId: "ing_kale", perUnit: 45, packSize: 250, packPrice: 11250, date: PRICE_DATE },
  { ingredientId: "ing_bit", perUnit: 20, packSize: 500, packPrice: 10000, date: PRICE_DATE },
  { ingredientId: "ing_lobak", perUnit: 12, packSize: 500, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_pare", perUnit: 14, packSize: 500, packPrice: 7000, date: PRICE_DATE },
  { ingredientId: "ing_petai", perUnit: 60, packSize: 100, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_jengkol", perUnit: 25, packSize: 500, packPrice: 12500, date: PRICE_DATE },
  { ingredientId: "ing_daunpepaya", perUnit: 3000, packSize: 1, packPrice: 3000, date: PRICE_DATE },
  { ingredientId: "ing_kemangi", perUnit: 2500, packSize: 1, packPrice: 2500, date: PRICE_DATE },
  { ingredientId: "ing_oyong", perUnit: 10, packSize: 500, packPrice: 5000, date: PRICE_DATE },
  { ingredientId: "ing_labukuning", perUnit: 12, packSize: 1000, packPrice: 12000, date: PRICE_DATE },
  { ingredientId: "ing_ubijalar", perUnit: 14, packSize: 1000, packPrice: 14000, date: PRICE_DATE },
  { ingredientId: "ing_singkong", perUnit: 9, packSize: 1000, packPrice: 9000, date: PRICE_DATE },
  { ingredientId: "ing_talas", perUnit: 18, packSize: 1000, packPrice: 18000, date: PRICE_DATE },
  { ingredientId: "ing_babycorn", perUnit: 30, packSize: 250, packPrice: 7500, date: PRICE_DATE },
  { ingredientId: "ing_asparagus", perUnit: 60, packSize: 250, packPrice: 15000, date: PRICE_DATE },
  { ingredientId: "ing_paprika", perUnit: 45, packSize: 250, packPrice: 11250, date: PRICE_DATE },
  { ingredientId: "ing_cabairawit", perUnit: 70, packSize: 250, packPrice: 17500, date: PRICE_DATE },
  { ingredientId: "ing_cabaimerah", perUnit: 40, packSize: 250, packPrice: 10000, date: PRICE_DATE },
  { ingredientId: "ing_tomatceri", perUnit: 35, packSize: 250, packPrice: 8750, date: PRICE_DATE },
  { ingredientId: "ing_jamurshimeji", perUnit: 40, packSize: 200, packPrice: 8000, date: PRICE_DATE },
  { ingredientId: "ing_jamurkuping", perUnit: 35, packSize: 100, packPrice: 3500, date: PRICE_DATE },
  { ingredientId: "ing_sawiputih", perUnit: 10, packSize: 500, packPrice: 5000, date: PRICE_DATE },

  { ingredientId: "ing_apel", perUnit: 28, packSize: 1000, packPrice: 28000, date: PRICE_DATE },
  { ingredientId: "ing_alpukat", perUnit: 35, packSize: 1000, packPrice: 35000, date: PRICE_DATE },
  { ingredientId: "ing_mangga", perUnit: 25, packSize: 1000, packPrice: 25000, date: PRICE_DATE },
  { ingredientId: "ing_pepaya", perUnit: 10, packSize: 1000, packPrice: 10000, date: PRICE_DATE },
  { ingredientId: "ing_semangka", perUnit: 8, packSize: 1000, packPrice: 8000, date: PRICE_DATE },
  { ingredientId: "ing_melon", perUnit: 14, packSize: 1000, packPrice: 14000, date: PRICE_DATE },
  { ingredientId: "ing_nanas", perUnit: 12, packSize: 1000, packPrice: 12000, date: PRICE_DATE },
  { ingredientId: "ing_anggur", perUnit: 45, packSize: 500, packPrice: 22500, date: PRICE_DATE },
  { ingredientId: "ing_stroberi", perUnit: 60, packSize: 250, packPrice: 15000, date: PRICE_DATE },
  { ingredientId: "ing_kelapa", perUnit: 12000, packSize: 1, packPrice: 12000, date: PRICE_DATE },

  { ingredientId: "ing_miinstan", perUnit: 12, packSize: 400, packPrice: 4800, date: PRICE_DATE },
  { ingredientId: "ing_bihun", perUnit: 25, packSize: 250, packPrice: 6250, date: PRICE_DATE },
  { ingredientId: "ing_kwetiau", perUnit: 18, packSize: 500, packPrice: 9000, date: PRICE_DATE },
  { ingredientId: "ing_oatmeal", perUnit: 30, packSize: 500, packPrice: 15000, date: PRICE_DATE },
  { ingredientId: "ing_sagu", perUnit: 20, packSize: 500, packPrice: 10000, date: PRICE_DATE },
  { ingredientId: "ing_tepungberas", perUnit: 18, packSize: 500, packPrice: 9000, date: PRICE_DATE },
  { ingredientId: "ing_maizena", perUnit: 25, packSize: 250, packPrice: 6250, date: PRICE_DATE },
  { ingredientId: "ing_miebasah", perUnit: 12, packSize: 500, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_kerupuk", perUnit: 40, packSize: 250, packPrice: 10000, date: PRICE_DATE },
  { ingredientId: "ing_biskuit", perUnit: 35, packSize: 300, packPrice: 10500, date: PRICE_DATE },

  { ingredientId: "ing_mentega", perUnit: 90, packSize: 200, packPrice: 18000, date: PRICE_DATE },
  { ingredientId: "ing_margarin", perUnit: 55, packSize: 200, packPrice: 11000, date: PRICE_DATE },
  { ingredientId: "ing_yoghurt", perUnit: 30, packSize: 200, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_skm", perUnit: 45, packSize: 370, packPrice: 16650, date: PRICE_DATE },

  { ingredientId: "ing_wijen", perUnit: 50, packSize: 100, packPrice: 5000, date: PRICE_DATE },
  { ingredientId: "ing_madu", perUnit: 90, packSize: 250, packPrice: 22500, date: PRICE_DATE },
  { ingredientId: "ing_mayones", perUnit: 45, packSize: 200, packPrice: 9000, date: PRICE_DATE },
  { ingredientId: "ing_saustomat", perUnit: 30, packSize: 300, packPrice: 9000, date: PRICE_DATE },
  { ingredientId: "ing_sausti", perUnit: 40, packSize: 270, packPrice: 10800, date: PRICE_DATE },
  { ingredientId: "ing_saussambal", perUnit: 35, packSize: 300, packPrice: 10500, date: PRICE_DATE },
  { ingredientId: "ing_kecapasin", perUnit: 25, packSize: 275, packPrice: 6875, date: PRICE_DATE },
  { ingredientId: "ing_cuka", perUnit: 20, packSize: 300, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_kaldububuk", perUnit: 90, packSize: 100, packPrice: 9000, date: PRICE_DATE },
  { ingredientId: "ing_terasi", perUnit: 60, packSize: 100, packPrice: 6000, date: PRICE_DATE },

  { ingredientId: "ing_asamjawa", perUnit: 60, packSize: 100, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_gulamerah", perUnit: 18, packSize: 500, packPrice: 9000, date: PRICE_DATE },
  { ingredientId: "ing_daunjeruk", perUnit: 100, packSize: 50, packPrice: 5000, date: PRICE_DATE },
  { ingredientId: "ing_daunsalam", perUnit: 80, packSize: 50, packPrice: 4000, date: PRICE_DATE },
  { ingredientId: "ing_lengkuas", perUnit: 25, packSize: 250, packPrice: 6250, date: PRICE_DATE },
  { ingredientId: "ing_kencur", perUnit: 30, packSize: 250, packPrice: 7500, date: PRICE_DATE },
  { ingredientId: "ing_merica", perUnit: 120, packSize: 100, packPrice: 12000, date: PRICE_DATE },
  { ingredientId: "ing_pala", perUnit: 150, packSize: 50, packPrice: 7500, date: PRICE_DATE },
  { ingredientId: "ing_cengkeh", perUnit: 180, packSize: 50, packPrice: 9000, date: PRICE_DATE },
  { ingredientId: "ing_kayumanis", perUnit: 120, packSize: 50, packPrice: 6000, date: PRICE_DATE },
  { ingredientId: "ing_kapulaga", perUnit: 250, packSize: 50, packPrice: 12500, date: PRICE_DATE },
  { ingredientId: "ing_jintan", perUnit: 90, packSize: 50, packPrice: 4500, date: PRICE_DATE },
  { ingredientId: "ing_peterseli", perUnit: 80, packSize: 100, packPrice: 8000, date: PRICE_DATE },
  { ingredientId: "ing_daunketumbar", perUnit: 3000, packSize: 1, packPrice: 3000, date: PRICE_DATE },
  { ingredientId: "ing_adas", perUnit: 80, packSize: 50, packPrice: 4000, date: PRICE_DATE },
  { ingredientId: "ing_bungalawang", perUnit: 150, packSize: 50, packPrice: 7500, date: PRICE_DATE },
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

  r("rcp_sayur_campur_tumis", "Mie tumis sayur campur", 3, 20, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 260, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kangkung", qty: 1, unit: "ikat" }, { id: "ing_bayam", qty: 1, unit: "ikat" }, { id: "ing_sawi", qty: 1, unit: "ikat" }, { id: "ing_daunsingkong", qty: 1, unit: "ikat" }, { id: "ing_kol", qty: 150, unit: "g" }, { id: "ing_wortel", qty: 100, unit: "g" }, { id: "ing_buncis", qty: 100, unit: "g" }, { id: "ing_kacangpanjang", qty: 100, unit: "g" }, { id: "ing_labusiam", qty: 150, unit: "g" }, { id: "ing_tauge", qty: 100, unit: "g" }, { id: "ing_pakcoy", qty: 1, unit: "ikat" }, { id: "ing_jagung", qty: 100, unit: "g" }, { id: "ing_jamurshimeji", qty: 100, unit: "g" }, { id: "ing_jamurkuping", qty: 50, unit: "g" }, { id: "ing_brokoli", qty: 100, unit: "g" }, { id: "ing_kembangkol", qty: 100, unit: "g" }, { id: "ing_babycorn", qty: 100, unit: "g" }, { id: "ing_sawiputih", qty: 100, unit: "g" }, { id: "ing_paprika", qty: 50, unit: "g" }, { id: "ing_terong", qty: 100, unit: "g" }, { id: "ing_kentang", qty: 100, unit: "g" }, { id: "ing_jamur", qty: 100, unit: "g" }, { id: "ing_mie", qty: 100, unit: "g" }],
    ["Potong semua sayur menjadi ukuran sekali suap.", "Tumis bawang sampai wangi, lalu masukkan sayur yang paling keras lebih dulu.", "Tambahkan sayur daun, bumbui, dan masak sampai layu tetapi masih renyah."]),

  r("rcp_sayur_campur_bening", "Sayur bening campur", 3, 20, ["kompor", "panci"], ["vegetarian", "vegan"], "sayur", 180, 5,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kangkung", qty: 1, unit: "ikat" }, { id: "ing_bayam", qty: 1, unit: "ikat" }, { id: "ing_sawi", qty: 1, unit: "ikat" }, { id: "ing_daunsingkong", qty: 1, unit: "ikat" }, { id: "ing_labusiam", qty: 150, unit: "g" }, { id: "ing_jagung", qty: 150, unit: "g" }, { id: "ing_wortel", qty: 100, unit: "g" }, { id: "ing_kacangpanjang", qty: 100, unit: "g" }, { id: "ing_seledri", qty: 0.5, unit: "ikat" }, { id: "ing_tomat", qty: 80, unit: "g" }, { id: "ing_terong", qty: 100, unit: "g" }, { id: "ing_buncis", qty: 100, unit: "g" }, { id: "ing_kentang", qty: 100, unit: "g" }, { id: "ing_jamur", qty: 100, unit: "g" }, { id: "ing_pakcoy", qty: 1, unit: "ikat" }, { id: "ing_tempe", qty: 100, unit: "g" }],
    ["Didihkan air bersama bawang dan jagung.", "Masukkan wortel, labu siam, dan kacang panjang, masak sampai setengah empuk.", "Tambahkan sayur daun dan tomat, bumbui, lalu angkat sebelum terlalu layu."]),

  r("rcp_sayur_campur_santan", "Sayur campur kuah santan udang", 3, 25, ["kompor", "panci"], [], "sayur", 320, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kangkung", qty: 1, unit: "ikat" }, { id: "ing_bayam", qty: 1, unit: "ikat" }, { id: "ing_sawi", qty: 1, unit: "ikat" }, { id: "ing_daunsingkong", qty: 1, unit: "ikat" }, { id: "ing_terong", qty: 150, unit: "g" }, { id: "ing_labusiam", qty: 150, unit: "g" }, { id: "ing_kacangpanjang", qty: 100, unit: "g" }, { id: "ing_jagung", qty: 100, unit: "g" }, { id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_kencur", qty: 10, unit: "g" }, { id: "ing_serai", qty: 1, unit: "batang" }, { id: "ing_daunsalam", qty: 2, unit: "g" }, { id: "ing_buncis", qty: 100, unit: "g" }, { id: "ing_kentang", qty: 100, unit: "g" }, { id: "ing_jamur", qty: 100, unit: "g" }, { id: "ing_pakcoy", qty: 1, unit: "ikat" }, { id: "ing_udang", qty: 100, unit: "g" }, { id: "ing_kemiri", qty: 10, unit: "g" }],
    ["Didihkan santan bersama serai, daun salam, dan kencur yang dimemarkan.", "Masukkan terong, labu siam, kacang panjang, dan jagung.", "Tambahkan sayur daun, bumbui, dan masak sampai semua empuk."]),

  r("rcp_sayur_campur_terasi", "Tumis sayur campur terasi udang", 3, 18, ["kompor", "wajan"], [], "sayur", 240, 3,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kangkung", qty: 1, unit: "ikat" }, { id: "ing_bayam", qty: 1, unit: "ikat" }, { id: "ing_sawi", qty: 1, unit: "ikat" }, { id: "ing_daunsingkong", qty: 1, unit: "ikat" }, { id: "ing_terong", qty: 150, unit: "g" }, { id: "ing_buncis", qty: 100, unit: "g" }, { id: "ing_tauge", qty: 100, unit: "g" }, { id: "ing_terasi", qty: 8, unit: "g" }, { id: "ing_cabairawit", qty: 15, unit: "g" }, { id: "ing_tomat", qty: 80, unit: "g" }, { id: "ing_kentang", qty: 100, unit: "g" }, { id: "ing_jamur", qty: 100, unit: "g" }, { id: "ing_pakcoy", qty: 1, unit: "ikat" }, { id: "ing_labusiam", qty: 100, unit: "g" }, { id: "ing_tempe", qty: 100, unit: "g" }, { id: "ing_udang", qty: 100, unit: "g" }],
    ["Haluskan terasi, cabai rawit, dan bawang.", "Tumis bumbu sampai wangi, lalu masukkan terong dan buncis.", "Tambahkan sayur daun dan tauge, aduk cepat, lalu sajikan."]),

  r("rcp_sayur_campur_telur", "Sayur campur tumis telur udang", 3, 18, ["kompor", "wajan"], [], "telur", 300, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kangkung", qty: 1, unit: "ikat" }, { id: "ing_bayam", qty: 1, unit: "ikat" }, { id: "ing_sawi", qty: 1, unit: "ikat" }, { id: "ing_daunsingkong", qty: 1, unit: "ikat" }, { id: "ing_telur", qty: 2, unit: "butir" }, { id: "ing_tauge", qty: 100, unit: "g" }, { id: "ing_kol", qty: 100, unit: "g" }, { id: "ing_wortel", qty: 80, unit: "g" }, { id: "ing_terong", qty: 100, unit: "g" }, { id: "ing_buncis", qty: 100, unit: "g" }, { id: "ing_kentang", qty: 100, unit: "g" }, { id: "ing_jamur", qty: 100, unit: "g" }, { id: "ing_pakcoy", qty: 1, unit: "ikat" }, { id: "ing_labusiam", qty: 100, unit: "g" }, { id: "ing_tempe", qty: 100, unit: "g" }, { id: "ing_udang", qty: 100, unit: "g" }],
    ["Orak-arik telur di wajan, lalu sisihkan.", "Tumis bawang, masukkan wortel dan kol.", "Tambahkan sayur daun dan tauge, masukkan telur, bumbui, dan aduk rata."]),

  r("rcp_sayur_campur_udang", "Mie sayur tumis udang", 3, 20, ["kompor", "wajan"], [], "udang", 340, 4,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kangkung", qty: 1, unit: "ikat" }, { id: "ing_bayam", qty: 1, unit: "ikat" }, { id: "ing_sawi", qty: 1, unit: "ikat" }, { id: "ing_daunsingkong", qty: 1, unit: "ikat" }, { id: "ing_udang", qty: 200, unit: "g" }, { id: "ing_tauge", qty: 100, unit: "g" }, { id: "ing_babycorn", qty: 100, unit: "g" }, { id: "ing_paprika", qty: 50, unit: "g" }, { id: "ing_sausti", qty: 20, unit: "ml" }, { id: "ing_terong", qty: 100, unit: "g" }, { id: "ing_buncis", qty: 100, unit: "g" }, { id: "ing_kentang", qty: 100, unit: "g" }, { id: "ing_jamur", qty: 100, unit: "g" }, { id: "ing_pakcoy", qty: 1, unit: "ikat" }, { id: "ing_labusiam", qty: 100, unit: "g" }, { id: "ing_mie", qty: 100, unit: "g" }],
    ["Tumis bawang sampai wangi, lalu masukkan udang sampai berubah warna.", "Tambahkan baby corn dan paprika, aduk sebentar.", "Masukkan sayur daun dan tauge, beri saus tiram, lalu angkat."]),

  r("rcp_sayur_campur_tempe", "Mie sayur tumis tempe", 3, 20, ["kompor", "wajan"], ["vegetarian", "vegan"], "tempe", 360, 1,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kangkung", qty: 1, unit: "ikat" }, { id: "ing_bayam", qty: 1, unit: "ikat" }, { id: "ing_sawi", qty: 1, unit: "ikat" }, { id: "ing_daunsingkong", qty: 1, unit: "ikat" }, { id: "ing_tempe", qty: 200, unit: "g" }, { id: "ing_kacangpanjang", qty: 100, unit: "g" }, { id: "ing_labusiam", qty: 150, unit: "g" }, { id: "ing_wortel", qty: 80, unit: "g" }, { id: "ing_kecap", qty: 20, unit: "ml" }, { id: "ing_terong", qty: 100, unit: "g" }, { id: "ing_buncis", qty: 100, unit: "g" }, { id: "ing_kentang", qty: 100, unit: "g" }, { id: "ing_jamur", qty: 100, unit: "g" }, { id: "ing_pakcoy", qty: 1, unit: "ikat" }, { id: "ing_mie", qty: 100, unit: "g" }],
    ["Potong tempe kecil-kecil, goreng setengah matang.", "Tumis bawang, masukkan kacang panjang, labu siam, dan wortel.", "Tambahkan sayur daun dan tempe, beri kecap, lalu aduk rata."]),

  r("rcp_timun_tomat_salad", "Salad timun tomat", 2, 8, ["kompor"], ["vegetarian", "vegan"], "sayur", 120, 5,
    [{ id: "ing_timun", qty: 200, unit: "g" }, { id: "ing_tomat", qty: 150, unit: "g" }, { id: "ing_tomatceri", qty: 100, unit: "g" }, { id: "ing_selada", qty: 80, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_minyak", qty: 10, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }],
    ["Potong timun, tomat, dan tomat ceri, lalu cuci selada.", "Campur semua bahan di mangkuk.", "Beri perasan jeruk, minyak, dan garam, lalu aduk sebelum disajikan."]),

  r("rcp_timun_jeruk", "Timun jeruk segar", 2, 6, ["kompor"], ["vegetarian", "vegan"], "sayur", 80, 3,
    [{ id: "ing_timun", qty: 300, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_cabairawit", qty: 10, unit: "g" }, { id: "ing_gula", qty: 10, unit: "g" }, { id: "ing_garam", qty: 2, unit: "g" }],
    ["Iris timun tipis, lalu remas dengan garam sebentar.", "Campur perasan jeruk, gula, dan cabai rawit yang diiris.", "Tuang dressing ke timun, aduk, dan dinginkan sebelum disajikan."]),

  r("rcp_selada_apel_salad", "Salad selada apel", 2, 8, ["kompor"], ["vegetarian"], "susu", 210, 4,
    [{ id: "ing_selada", qty: 100, unit: "g" }, { id: "ing_apel", qty: 150, unit: "g" }, { id: "ing_timun", qty: 100, unit: "g" }, { id: "ing_yoghurt", qty: 100, unit: "ml" }, { id: "ing_mayones", qty: 30, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_peterseli", qty: 5, unit: "g" }],
    ["Potong apel dan timun, lalu sobek selada dengan tangan.", "Campur yoghurt, mayones, dan perasan jeruk menjadi dressing.", "Tuang dressing, taburi peterseli, dan sajikan dingin."]),

  r("rcp_salad_bit_jeruk", "Salad bit jeruk", 2, 15, ["kompor", "panci"], ["vegetarian", "vegan"], "sayur", 150, 1,
    [{ id: "ing_bit", qty: 200, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_madu", qty: 20, unit: "g" }, { id: "ing_minyak", qty: 10, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }],
    ["Rebus bit sampai empuk, lalu potong dadu.", "Campur perasan jeruk, madu, minyak, dan garam.", "Tuang dressing ke bit, aduk, dan sajikan hangat atau dingin."]),

  r("rcp_lalapan_ayam", "Ayam goreng lalapan", 3, 30, ["kompor", "wajan"], [], "ayam", 420, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ayam", qty: 500, unit: "g" }, { id: "ing_timun", qty: 150, unit: "g" }, { id: "ing_selada", qty: 80, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }, { id: "ing_cabairawit", qty: 20, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_kunyit", qty: 5, unit: "g" }, { id: "ing_beras", qty: 150, unit: "g" }],
    ["Lumuri ayam dengan kunyit dan garam, diamkan sepuluh menit.", "Goreng ayam sampai matang dan kulitnya renyah.", "Sajikan dengan timun, selada, tomat, dan sambal cabai rawit."]),

  r("rcp_pecel_sayur", "Pecel sayur", 3, 20, ["kompor", "panci"], ["vegetarian", "vegan"], "kacang", 380, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kacangtanah", qty: 150, unit: "g" }, { id: "ing_kangkung", qty: 1, unit: "ikat" }, { id: "ing_bayam", qty: 1, unit: "ikat" }, { id: "ing_tauge", qty: 150, unit: "g" }, { id: "ing_kacangpanjang", qty: 100, unit: "g" }, { id: "ing_timun", qty: 100, unit: "g" }, { id: "ing_gulamerah", qty: 30, unit: "g" }, { id: "ing_cabairawit", qty: 15, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_tahu", qty: 150, unit: "g" }, { id: "ing_tempe", qty: 100, unit: "g" }, { id: "ing_beras", qty: 150, unit: "g" }],
    ["Rebus kangkung, bayam, tauge, dan kacang panjang secara terpisah.", "Haluskan kacang tanah, gula merah, cabai, dan sedikit air.", "Tata sayur, timun, lalu siram bumbu kacang dan beri perasan jeruk."]),

  r("rcp_es_kacang_hijau", "Es kacang hijau", 4, 35, ["kompor", "panci"], ["vegetarian", "vegan"], "kacang", 220, 5,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_kacanghijau", qty: 150, unit: "g" }, { id: "ing_santan", qty: 200, unit: "ml" }, { id: "ing_kelapa", qty: 0.5, unit: "buah" }, { id: "ing_jahe", qty: 10, unit: "g" }, { id: "ing_sagu", qty: 30, unit: "g" }],
    ["Rebus kacang hijau dengan jahe sampai empuk.", "Masukkan gula dan santan, masak sebentar sambil diaduk.", "Tambahkan sagu, masak sampai mengental, lalu sajikan dingin dengan kelapa."]),

  r("rcp_kolak_kacang_hijau", "Kolak kacang hijau", 4, 40, ["kompor", "panci"], ["vegetarian", "vegan"], "kacang", 280, 3,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_kacanghijau", qty: 150, unit: "g" }, { id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_gulamerah", qty: 50, unit: "g" }, { id: "ing_labukuning", qty: 200, unit: "g" }, { id: "ing_daunsalam", qty: 2, unit: "g" }],
    ["Rebus kacang hijau sampai setengah empuk.", "Masukkan labu kuning, santan, gula merah, dan daun salam.", "Masak dengan api kecil sampai kacang dan labu empuk."]),

  r("rcp_bubur_kacang_hijau_jahe", "Bubur kacang hijau jahe", 4, 40, ["kompor", "panci"], ["vegetarian", "vegan"], "kacang", 250, 1,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_kacanghijau", qty: 200, unit: "g" }, { id: "ing_santan", qty: 200, unit: "ml" }, { id: "ing_jahe", qty: 15, unit: "g" }, { id: "ing_daunsalam", qty: 2, unit: "g" }],
    ["Rendam kacang hijau, lalu rebus bersama jahe dan daun salam.", "Masukkan gula dan santan setelah kacang empuk.", "Masak sampai bubur mengental, lalu sajikan hangat."]),

  r("rcp_gandasturi", "Gandasturi kacang hijau", 4, 35, ["kompor", "wajan"], ["vegetarian", "vegan"], "kacang", 300, 4,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_kacanghijau", qty: 200, unit: "g" }, { id: "ing_tepungberas", qty: 100, unit: "g" }, { id: "ing_tepung", qty: 50, unit: "g" }, { id: "ing_minyak", qty: 100, unit: "ml" }],
    ["Rebus kacang hijau, haluskan, lalu bentuk bulat pipih.", "Campur tepung beras, tepung, air, dan sedikit garam menjadi adonan.", "Celupkan kacang ke adonan, goreng sampai keemasan, lalu tiriskan."]),

  r("rcp_puding_kacang_hijau", "Puding kacang hijau", 4, 30, ["kompor", "panci"], ["vegetarian", "vegan"], "kacang", 240, 2,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_kacanghijau", qty: 150, unit: "g" }, { id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_maizena", qty: 40, unit: "g" }],
    ["Rebus kacang hijau sampai empuk, lalu haluskan.", "Campur kacang, santan, gula, dan maizena, masak sambil diaduk.", "Tuang ke cetakan dan dinginkan sampai mengeras."]),

  r("rcp_minuman_kacang_hijau", "Minuman kacang hijau", 3, 25, ["kompor", "blender"], ["vegetarian"], "kacang", 200, 5,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_kacanghijau", qty: 120, unit: "g" }, { id: "ing_susu", qty: 300, unit: "ml" }, { id: "ing_jahe", qty: 10, unit: "g" }],
    ["Rebus kacang hijau bersama jahe sampai empuk.", "Blender kacang, air rebusan, susu, dan gula sampai halus.", "Saring bila perlu, lalu sajikan dingin."]),

  r("rcp_kacang_hijau_santan", "Kacang hijau kuah santan", 4, 35, ["kompor", "panci"], ["vegetarian", "vegan"], "kacang", 270, 0,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_kacanghijau", qty: 200, unit: "g" }, { id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_gulamerah", qty: 40, unit: "g" }, { id: "ing_daunsalam", qty: 2, unit: "g" }],
    ["Rebus kacang hijau dengan daun salam sampai empuk.", "Masukkan gula merah dan santan.", "Masak dengan api kecil sampai kuah sedikit mengental."]),

  r("rcp_mie_kuah_sayur", "Mie kuah sayur", 2, 15, ["kompor", "panci"], [], "mie", 360, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_mie", qty: 200, unit: "g" }, { id: "ing_sawiputih", qty: 150, unit: "g" }, { id: "ing_wortel", qty: 100, unit: "g" }, { id: "ing_daunbawang", qty: 0.5, unit: "ikat" }, { id: "ing_seledri", qty: 0.5, unit: "ikat" }, { id: "ing_kaldububuk", qty: 5, unit: "g" }],
    ["Didihkan air, masukkan kaldu bubuk dan wortel.", "Tambahkan mie dan sawi putih, masak sampai mie matang.", "Beri daun bawang dan seledri, lalu sajikan panas."]),

  r("rcp_mie_goreng_sayur", "Mie goreng sayur kampung", 2, 15, ["kompor", "wajan"], [], "mie", 420, 5,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_mie", qty: 200, unit: "g" }, { id: "ing_sawi", qty: 1, unit: "ikat" }, { id: "ing_wortel", qty: 100, unit: "g" }, { id: "ing_kol", qty: 100, unit: "g" }, { id: "ing_daunbawang", qty: 0.5, unit: "ikat" }, { id: "ing_kecap", qty: 20, unit: "ml" }],
    ["Rebus mie sebentar, lalu tiriskan.", "Tumis bawang, masukkan wortel dan kol.", "Tambahkan mie, sawi, kecap, dan daun bawang, aduk rata."]),

  r("rcp_mie_goreng_jawa", "Mie goreng jawa", 2, 15, ["kompor", "wajan"], [], "telur", 480, 1,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_miebasah", qty: 300, unit: "g" }, { id: "ing_telur", qty: 2, unit: "butir" }, { id: "ing_ayam", qty: 150, unit: "g" }, { id: "ing_kol", qty: 100, unit: "g" }, { id: "ing_kecap", qty: 30, unit: "ml" }],
    ["Tumis bawang, lalu masukkan ayam dan telur.", "Tambahkan kol dan mie basah, aduk rata.", "Beri kecap dan sedikit air, masak sampai bumbu meresap."]),

  r("rcp_mie_ayam", "Mie ayam sederhana", 2, 25, ["kompor", "panci"], [], "ayam", 450, 3,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_mie", qty: 200, unit: "g" }, { id: "ing_ayam", qty: 200, unit: "g" }, { id: "ing_sawi", qty: 1, unit: "ikat" }, { id: "ing_daunbawang", qty: 0.5, unit: "ikat" }, { id: "ing_seledri", qty: 0.5, unit: "ikat" }, { id: "ing_kecap", qty: 20, unit: "ml" }, { id: "ing_kecapasin", qty: 10, unit: "ml" }],
    ["Rebus ayam sampai empuk, angkat dan suwir.", "Rebus mie dan sawi, lalu tata di mangkuk.", "Beri ayam, kecap, kuah kaldu, daun bawang, dan seledri."]),

  r("rcp_mie_bakso", "Mie bakso", 2, 15, ["kompor", "panci"], [], "daging", 430, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_mie", qty: 200, unit: "g" }, { id: "ing_baksosapi", qty: 200, unit: "g" }, { id: "ing_sawiputih", qty: 150, unit: "g" }, { id: "ing_daunbawang", qty: 0.5, unit: "ikat" }, { id: "ing_seledri", qty: 0.5, unit: "ikat" }, { id: "ing_kaldububuk", qty: 5, unit: "g" }],
    ["Didihkan air dan kaldu, masukkan bakso.", "Tambahkan mie dan sawi putih, masak sampai matang.", "Taburi daun bawang dan seledri sebelum disajikan."]),

  r("rcp_mie_goreng_pedas", "Mie goreng pedas", 2, 12, ["kompor", "wajan"], [], "telur", 500, 4,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_miinstan", qty: 200, unit: "g" }, { id: "ing_cabairawit", qty: 20, unit: "g" }, { id: "ing_telur", qty: 2, unit: "butir" }, { id: "ing_sosis", qty: 100, unit: "g" }, { id: "ing_kecap", qty: 20, unit: "ml" }],
    ["Rebus mi instan sebentar, lalu tiriskan.", "Tumis bawang dan cabai rawit, masukkan telur dan sosis.", "Tambahkan mi, kecap, dan bumbu instan, aduk rata."]),

  r("rcp_mie_kuah_telur", "Mie kuah telur", 2, 12, ["kompor", "panci"], [], "telur", 380, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_mie", qty: 200, unit: "g" }, { id: "ing_telur", qty: 2, unit: "butir" }, { id: "ing_daunbawang", qty: 0.5, unit: "ikat" }, { id: "ing_sawiputih", qty: 100, unit: "g" }, { id: "ing_kaldububuk", qty: 5, unit: "g" }],
    ["Didihkan air dan kaldu, masukkan sawi putih.", "Pecahkan telur ke kuah, masak sampai setengah matang.", "Tambahkan mie, masak sebentar, lalu taburi daun bawang."]),

  r("rcp_kwetiau_goreng_seafood", "Kwetiau goreng seafood", 2, 15, ["kompor", "wajan"], [], "udang", 470, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kwetiau", qty: 300, unit: "g" }, { id: "ing_udang", qty: 150, unit: "g" }, { id: "ing_cumi", qty: 100, unit: "g" }, { id: "ing_sawiputih", qty: 100, unit: "g" }, { id: "ing_sausti", qty: 20, unit: "ml" }, { id: "ing_kecapasin", qty: 10, unit: "ml" }],
    ["Tumis bawang, masukkan udang dan cumi sampai berubah warna.", "Tambahkan sawi putih dan kwetiau, aduk cepat.", "Beri saus tiram dan kecap asin, masak sampai bumbu merata."]),

  r("rcp_roti_bakar_madu", "Roti bakar madu", 2, 8, ["kompor", "wajan"], ["vegetarian"], "susu", 320, 1,
    [{ id: "ing_roti", qty: 150, unit: "g" }, { id: "ing_margarin", qty: 30, unit: "g" }, { id: "ing_madu", qty: 30, unit: "g" }, { id: "ing_susu", qty: 100, unit: "ml" }, { id: "ing_keju", qty: 30, unit: "g" }],
    ["Oles roti dengan margarin.", "Panggang di wajan sampai kedua sisi kecokelatan.", "Beri madu dan susu sebelum disajikan."]),

  r("rcp_roti_pisang_keju", "Roti pisang keju", 2, 10, ["kompor", "wajan"], ["vegetarian"], "susu", 420, 3,
    [{ id: "ing_roti", qty: 150, unit: "g" }, { id: "ing_pisang", qty: 150, unit: "g" }, { id: "ing_keju", qty: 50, unit: "g" }, { id: "ing_mentega", qty: 20, unit: "g" }, { id: "ing_susu", qty: 100, unit: "ml" }],
    ["Haluskan pisang, lalu campur dengan sedikit susu.", "Oles roti dengan mentega, isi pisang dan keju.", "Panggang sampai keju meleleh dan roti kecokelatan."]),

  r("rcp_roti_isi_tuna", "Roti isi tuna", 2, 8, ["kompor"], [], "ikan", 350, 4,
    [{ id: "ing_roti", qty: 150, unit: "g" }, { id: "ing_tunakaleng", qty: 150, unit: "g" }, { id: "ing_mayones", qty: 30, unit: "g" }, { id: "ing_selada", qty: 50, unit: "g" }, { id: "ing_timun", qty: 80, unit: "g" }],
    ["Campur tuna, mayones, dan sedikit merica.", "Tata selada dan timun di atas roti.", "Beri isian tuna, tutup dengan roti, lalu potong dua."]),

  r("rcp_roti_panggang_alpukat", "Roti panggang alpukat", 2, 8, ["kompor", "wajan"], ["vegetarian"], "telur", 330, 5,
    [{ id: "ing_roti", qty: 150, unit: "g" }, { id: "ing_alpukat", qty: 150, unit: "g" }, { id: "ing_telur", qty: 2, unit: "butir" }, { id: "ing_merica", qty: 2, unit: "g" }, { id: "ing_keju", qty: 30, unit: "g" }],
    ["Panggang roti sampai kering dan kecokelatan.", "Haluskan alpukat dengan merica dan sedikit garam.", "Oles alpukat di roti, lalu sajikan dengan telur rebus."]),

  r("rcp_roti_isi_sosis", "Roti isi sosis", 2, 10, ["kompor", "wajan"], [], "daging", 400, 0,
    [{ id: "ing_roti", qty: 150, unit: "g" }, { id: "ing_sosis", qty: 150, unit: "g" }, { id: "ing_mayones", qty: 20, unit: "g" }, { id: "ing_selada", qty: 50, unit: "g" }, { id: "ing_timun", qty: 80, unit: "g" }, { id: "ing_keju", qty: 30, unit: "g" }],
    ["Goreng atau panggang sosis sampai matang.", "Tata selada dan timun di atas roti.", "Letakkan sosis, beri mayones, lalu gulung atau tutup roti."]),

  r("rcp_roti_panggang_keju", "Roti panggang keju", 2, 8, ["kompor", "wajan"], ["vegetarian"], "susu", 360, 2,
    [{ id: "ing_roti", qty: 150, unit: "g" }, { id: "ing_keju", qty: 60, unit: "g" }, { id: "ing_mentega", qty: 20, unit: "g" }, { id: "ing_susu", qty: 80, unit: "ml" }],
    ["Oles roti dengan mentega.", "Taburi keju parut, lalu panggang sampai keju meleleh.", "Sajikan dengan susu hangat."]),

  r("rcp_oatmeal_pisang", "Oatmeal pisang", 1, 8, ["kompor", "panci"], ["vegetarian"], "susu", 340, 5,
    [{ id: "ing_oatmeal", qty: 80, unit: "g" }, { id: "ing_pisang", qty: 150, unit: "g" }, { id: "ing_susu", qty: 200, unit: "ml" }, { id: "ing_madu", qty: 20, unit: "g" }, { id: "ing_kayumanis", qty: 2, unit: "g" }],
    ["Masak oatmeal dengan susu sampai mengental.", "Iris pisang dan letakkan di atas oatmeal.", "Beri madu dan taburan kayumanis."]),

  r("rcp_pisang_molen", "Pisang molen", 4, 30, ["kompor", "wajan"], ["vegetarian"], "pisang", 380, 3,
    [{ id: "ing_pisang", qty: 300, unit: "g" }, { id: "ing_tepung", qty: 150, unit: "g" }, { id: "ing_margarin", qty: 40, unit: "g" }, { id: "ing_gula", qty: 30, unit: "g" }, { id: "ing_keju", qty: 30, unit: "g" }],
    ["Campur tepung, margarin, air, dan sedikit garam menjadi adonan.", "Isi adonan dengan pisang dan keju, lalu lipat rapat.", "Goreng sampai keemasan dan tiriskan."]),

  r("rcp_smoothie_pisang_stroberi", "Smoothie pisang stroberi", 2, 6, ["blender"], ["vegetarian"], "susu", 250, 1,
    [{ id: "ing_susu", qty: 300, unit: "ml" }, { id: "ing_pisang", qty: 150, unit: "g" }, { id: "ing_stroberi", qty: 100, unit: "g" }, { id: "ing_yoghurt", qty: 100, unit: "ml" }, { id: "ing_madu", qty: 20, unit: "g" }],
    ["Masukkan semua bahan ke blender.", "Blender sampai halus dan creamy.", "Tuang ke gelas dan sajikan dingin."]),

  r("rcp_pisang_bakar_madu", "Pisang bakar madu", 2, 12, ["kompor", "wajan"], ["vegetarian"], "pisang", 260, 4,
    [{ id: "ing_pisang", qty: 300, unit: "g" }, { id: "ing_madu", qty: 30, unit: "g" }, { id: "ing_mentega", qty: 20, unit: "g" }, { id: "ing_kayumanis", qty: 2, unit: "g" }],
    ["Kupas pisang dan belah memanjang.", "Panggang dengan mentega sampai kedua sisi kecokelatan.", "Beri madu dan taburan kayumanis."]),

  r("rcp_pisang_nugget", "Nugget pisang", 4, 30, ["kompor", "wajan"], ["vegetarian"], "pisang", 350, 2,
    [{ id: "ing_pisang", qty: 300, unit: "g" }, { id: "ing_tepung", qty: 100, unit: "g" }, { id: "ing_biskuit", qty: 80, unit: "g" }, { id: "ing_gula", qty: 20, unit: "g" }, { id: "ing_minyak", qty: 80, unit: "ml" }],
    ["Haluskan pisang, campur dengan tepung dan gula.", "Bentuk adonan, celup ke air, lalu balur dengan biskuit yang dihancurkan.", "Goreng sampai keemasan dan tiriskan."]),

  r("rcp_kolak_pisang", "Kolak pisang", 4, 25, ["kompor", "panci"], ["vegetarian", "vegan"], "pisang", 280, 0,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_pisang", qty: 300, unit: "g" }, { id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_gulamerah", qty: 50, unit: "g" }, { id: "ing_labukuning", qty: 200, unit: "g" }, { id: "ing_daunsalam", qty: 2, unit: "g" }],
    ["Didihkan santan bersama gula merah dan daun salam.", "Masukkan labu kuning, masak sampai empuk.", "Tambahkan pisang, masak sebentar, lalu angkat."]),

  r("rcp_pisang_susu", "Pisang susu", 2, 8, ["kompor"], ["vegetarian"], "susu", 300, 5,
    [{ id: "ing_pisang", qty: 200, unit: "g" }, { id: "ing_susu", qty: 200, unit: "ml" }, { id: "ing_gula", qty: 20, unit: "g" }, { id: "ing_skm", qty: 40, unit: "ml" }],
    ["Potong pisang dan letakkan di mangkuk.", "Tuang susu dan susu kental manis.", "Beri sedikit gula bila suka, lalu sajikan dingin."]),

  r("rcp_ikan_goreng_tepung", "Ikan goreng tepung", 3, 25, ["kompor", "wajan"], [], "ikan", 420, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ikan", qty: 500, unit: "g" }, { id: "ing_tepung", qty: 100, unit: "g" }, { id: "ing_ketumbar", qty: 5, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }],
    ["Lumuri ikan dengan jeruk, ketumbar, dan garam.", "Celup ke adonan tepung yang diberi air.", "Goreng sampai keemasan dan tiriskan."]),

  r("rcp_ikan_bakar_kecap", "Ikan bakar kecap", 3, 25, ["kompor", "wajan"], [], "ikan", 380, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ikan", qty: 500, unit: "g" }, { id: "ing_kecap", qty: 40, unit: "ml" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_cabai", qty: 15, unit: "g" }, { id: "ing_beras", qty: 150, unit: "g" }],
    ["Lumuri ikan dengan jeruk dan garam.", "Campur kecap, cabai, dan bawang untuk olesan.", "Bakar atau panggang ikan sambil diolesi bumbu sampai matang."]),

  r("rcp_ikan_kuah_santan", "Ikan kuah santan", 3, 30, ["kompor", "panci"], [], "ikan", 400, 1,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ikan", qty: 500, unit: "g" }, { id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_kunyit", qty: 8, unit: "g" }, { id: "ing_serai", qty: 1, unit: "batang" }, { id: "ing_daunsalam", qty: 2, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }],
    ["Lumuri ikan dengan jeruk dan garam.", "Didihkan santan bersama kunyit, serai, dan daun salam.", "Masukkan ikan, masak dengan api kecil sampai matang."]),

  r("rcp_ikan_tumis_jahe", "Ikan tumis jahe", 3, 20, ["kompor", "wajan"], [], "ikan", 350, 3,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ikan", qty: 400, unit: "g" }, { id: "ing_jahe", qty: 15, unit: "g" }, { id: "ing_bawangbombai", qty: 50, unit: "g" }, { id: "ing_cabai", qty: 10, unit: "g" }, { id: "ing_sausti", qty: 20, unit: "ml" }],
    ["Potong ikan, lumuri garam, lalu goreng sebentar.", "Tumis jahe, bawang bombai, dan cabai sampai wangi.", "Masukkan ikan dan saus tiram, aduk perlahan sampai meresap."]),

  r("rcp_semur_daging", "Semur daging", 3, 40, ["kompor", "panci"], [], "daging", 450, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_daging", qty: 500, unit: "g" }, { id: "ing_kecap", qty: 50, unit: "ml" }, { id: "ing_pala", qty: 2, unit: "g" }, { id: "ing_cengkeh", qty: 2, unit: "g" }, { id: "ing_kayumanis", qty: 2, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }, { id: "ing_beras", qty: 150, unit: "g" }, { id: "ing_ketumbar", qty: 4, unit: "g" }, { id: "ing_kemiri", qty: 10, unit: "g" }],
    ["Rebus daging sampai empuk, simpan kaldunya.", "Tumis bawang, masukkan daging, kecap, dan rempah.", "Tuang sedikit kaldu, masak sampai bumbu meresap dan kuah menyusut."]),

  r("rcp_daging_lada_hitam", "Daging lada hitam", 3, 20, ["kompor", "wajan"], [], "daging", 430, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_daging", qty: 400, unit: "g" }, { id: "ing_merica", qty: 6, unit: "g" }, { id: "ing_bawangbombai", qty: 60, unit: "g" }, { id: "ing_paprika", qty: 80, unit: "g" }, { id: "ing_sausti", qty: 30, unit: "ml" }, { id: "ing_beras", qty: 150, unit: "g" }, { id: "ing_ketumbar", qty: 4, unit: "g" }],
    ["Iris daging tipis dan lumuri merica.", "Tumis bawang bombai, lalu masukkan daging.", "Tambahkan paprika dan saus tiram, masak sampai daging matang."]),

  r("rcp_daging_tumis_paprika", "Daging tumis paprika", 3, 18, ["kompor", "wajan"], [], "daging", 400, 4,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_daging", qty: 400, unit: "g" }, { id: "ing_paprika", qty: 150, unit: "g" }, { id: "ing_bawangbombai", qty: 60, unit: "g" }, { id: "ing_sausti", qty: 20, unit: "ml" }],
    ["Iris daging dan paprika.", "Tumis bawang bombai sampai wangi, lalu masukkan daging.", "Tambahkan paprika dan saus tiram, aduk sampai matang."]),

  r("rcp_daging_kecap", "Daging kecap", 3, 30, ["kompor", "wajan"], [], "daging", 440, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_daging", qty: 400, unit: "g" }, { id: "ing_kecap", qty: 40, unit: "ml" }, { id: "ing_bawangbombai", qty: 50, unit: "g" }, { id: "ing_cabai", qty: 10, unit: "g" }, { id: "ing_ketumbar", qty: 4, unit: "g" }],
    ["Iris daging dan tumis sampai berubah warna.", "Masukkan bawang bombai dan cabai.", "Beri kecap dan sedikit air, masak sampai bumbu meresap."]),

  r("rcp_daging_sambal", "Daging sambal", 3, 25, ["kompor", "wajan"], [], "daging", 420, 5,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_daging", qty: 400, unit: "g" }, { id: "ing_cabaimerah", qty: 40, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }, { id: "ing_gula", qty: 10, unit: "g" }],
    ["Rebus daging sebentar, lalu iris tipis.", "Haluskan cabai dan tomat, tumis sampai wangi.", "Masukkan daging dan gula, masak sampai sambal menempel."]),

  r("rcp_daging_jahe", "Daging tumis jahe", 3, 20, ["kompor", "wajan"], [], "daging", 390, 1,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_daging", qty: 400, unit: "g" }, { id: "ing_jahe", qty: 20, unit: "g" }, { id: "ing_bawangbombai", qty: 50, unit: "g" }, { id: "ing_kecapasin", qty: 20, unit: "ml" }],
    ["Iris daging tipis dan jahe memanjang.", "Tumis jahe dan bawang bombai sampai wangi.", "Masukkan daging, beri kecap asin, dan masak sampai matang."]),

  r("rcp_kacang_tanah_goreng", "Kacang tanah goreng", 4, 15, ["kompor", "wajan"], ["vegetarian", "vegan"], "kacang", 280, 3,
    [{ id: "ing_kacangtanah", qty: 250, unit: "g" }, { id: "ing_gula", qty: 20, unit: "g" }, { id: "ing_garam", qty: 3, unit: "g" }, { id: "ing_minyak", qty: 80, unit: "ml" }],
    ["Rendam kacang tanah sebentar, lalu tiriskan.", "Goreng dengan api sedang sampai keemasan.", "Taburi garam dan gula selagi hangat, lalu aduk rata."]),

  r("rcp_teri_kacang", "Teri kacang", 4, 20, ["kompor", "wajan"], [], "ikan", 350, 4,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ikanteri", qty: 100, unit: "g" }, { id: "ing_kacangtanah", qty: 150, unit: "g" }, { id: "ing_cabairawit", qty: 20, unit: "g" }, { id: "ing_gula", qty: 10, unit: "g" }],
    ["Goreng teri dan kacang tanah secara terpisah sampai kering.", "Tumis cabai dan bawang sampai wangi.", "Masukkan teri, kacang, dan gula, aduk cepat lalu angkat."]),

  r("rcp_rujak_buah", "Rujak buah", 3, 10, ["kompor"], ["vegetarian", "vegan"], "buah", 220, 5,
    [{ id: "ing_kacangtanah", qty: 100, unit: "g" }, { id: "ing_apel", qty: 150, unit: "g" }, { id: "ing_mangga", qty: 150, unit: "g" }, { id: "ing_pepaya", qty: 150, unit: "g" }, { id: "ing_nanas", qty: 150, unit: "g" }, { id: "ing_timun", qty: 100, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_gulamerah", qty: 30, unit: "g" }, { id: "ing_cabairawit", qty: 10, unit: "g" }],
    ["Potong semua buah dan timun.", "Haluskan kacang tanah, gula merah, cabai, dan perasan jeruk.", "Campur buah dengan bumbu rujak, lalu sajikan."]),

  r("rcp_salad_buah_yoghurt", "Salad buah yoghurt", 3, 10, ["kompor"], ["vegetarian"], "buah", 210, 2,
    [{ id: "ing_apel", qty: 150, unit: "g" }, { id: "ing_mangga", qty: 150, unit: "g" }, { id: "ing_pepaya", qty: 150, unit: "g" }, { id: "ing_semangka", qty: 150, unit: "g" }, { id: "ing_melon", qty: 150, unit: "g" }, { id: "ing_anggur", qty: 100, unit: "g" }, { id: "ing_stroberi", qty: 100, unit: "g" }, { id: "ing_nanas", qty: 100, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_yoghurt", qty: 150, unit: "ml" }, { id: "ing_madu", qty: 20, unit: "g" }],
    ["Potong semua buah menjadi dadu.", "Campur yoghurt, madu, dan perasan jeruk.", "Tuang dressing ke buah, aduk perlahan, dan dinginkan."]),

  r("rcp_gado_gado_sederhana", "Gado-gado sayur lengkap", 3, 25, ["kompor", "panci"], ["vegetarian", "vegan"], "kacang", 400, 1,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kacangtanah", qty: 150, unit: "g" }, { id: "ing_kangkung", qty: 1, unit: "ikat" }, { id: "ing_bayam", qty: 1, unit: "ikat" }, { id: "ing_tauge", qty: 150, unit: "g" }, { id: "ing_kol", qty: 100, unit: "g" }, { id: "ing_wortel", qty: 100, unit: "g" }, { id: "ing_tahu", qty: 200, unit: "g" }, { id: "ing_tempe", qty: 150, unit: "g" }, { id: "ing_kecap", qty: 20, unit: "ml" }, { id: "ing_beras", qty: 150, unit: "g" }],
    ["Rebus sayur dan goreng tahu serta tempe.", "Haluskan kacang tanah dengan sedikit air dan kecap.", "Tata sayur dan protein, lalu siram bumbu kacang."]),

  r("rcp_sate_ayam_kacang", "Sate ayam bumbu kacang", 3, 35, ["kompor", "wajan"], [], "ayam", 450, 4,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kacangtanah", qty: 150, unit: "g" }, { id: "ing_ayam", qty: 400, unit: "g" }, { id: "ing_kecap", qty: 30, unit: "ml" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_gula", qty: 10, unit: "g" }, { id: "ing_beras", qty: 150, unit: "g" }],
    ["Potong ayam, lumuri kecap dan jeruk, lalu tusuk.", "Bakar atau panggang sate sampai matang.", "Haluskan kacang tanah dengan kecap dan gula, sajikan sebagai saus."]),

  r("rcp_tongkol_balado", "Tongkol balado", 3, 25, ["kompor", "wajan"], [], "ikan", 380, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ikantongkol", qty: 400, unit: "g" }, { id: "ing_cabaimerah", qty: 40, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }, { id: "ing_gula", qty: 10, unit: "g" }],
    ["Goreng tongkol sebentar, lalu tiriskan.", "Haluskan cabai dan tomat, tumis sampai wangi.", "Masukkan tongkol dan gula, aduk sampai bumbu merata."]),

  r("rcp_nila_bakar_kunyit", "Nila bakar kunyit", 3, 30, ["kompor", "wajan"], [], "ikan", 360, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ikannila", qty: 500, unit: "g" }, { id: "ing_kunyit", qty: 8, unit: "g" }, { id: "ing_jahe", qty: 10, unit: "g" }, { id: "ing_serai", qty: 1, unit: "batang" }, { id: "ing_jeruk", qty: 1, unit: "buah" }],
    ["Haluskan kunyit, jahe, serai, dan bawang.", "Lumuri ikan dengan bumbu dan perasan jeruk.", "Bakar sambil dibalik sampai ikan matang."]),

  r("rcp_pecel_lele", "Pecel lele", 3, 25, ["kompor", "wajan"], [], "ikan", 400, 3,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ikanlele", qty: 500, unit: "g" }, { id: "ing_timun", qty: 150, unit: "g" }, { id: "ing_selada", qty: 80, unit: "g" }, { id: "ing_cabairawit", qty: 20, unit: "g" }, { id: "ing_kerupuk", qty: 50, unit: "g" }, { id: "ing_beras", qty: 150, unit: "g" }],
    ["Lumuri lele dengan garam, lalu goreng sampai kering.", "Haluskan cabai dan bawang untuk sambal.", "Sajikan lele dengan timun, selada, sambal, dan kerupuk."]),

  r("rcp_gurame_asam_manis", "Gurame asam manis", 3, 30, ["kompor", "wajan"], [], "ikan", 480, 5,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ikangurame", qty: 500, unit: "g" }, { id: "ing_nanas", qty: 150, unit: "g" }, { id: "ing_paprika", qty: 80, unit: "g" }, { id: "ing_saustomat", qty: 60, unit: "g" }, { id: "ing_maizena", qty: 20, unit: "g" }, { id: "ing_tepung", qty: 50, unit: "g" }, { id: "ing_daunketumbar", qty: 1, unit: "ikat" }],
    ["Lumuri gurame dengan garam dan tepung, goreng sampai keemasan.", "Tumis bawang, masukkan paprika dan nanas.", "Tambahkan saus tomat dan maizena, masak sampai mengental, lalu siram ke ikan."]),

  r("rcp_cumi_goreng_tepung", "Cumi goreng tepung", 3, 20, ["kompor", "wajan"], [], "seafood", 380, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_cumi", qty: 400, unit: "g" }, { id: "ing_tepung", qty: 100, unit: "g" }, { id: "ing_maizena", qty: 30, unit: "g" }, { id: "ing_merica", qty: 3, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }],
    ["Bersihkan cumi, lumuri jeruk dan garam.", "Campur tepung, maizena, dan merica.", "Balur cumi, goreng sampai keemasan, lalu tiriskan."]),

  r("rcp_kerang_saus_tiram", "Kerang saus tiram", 3, 20, ["kompor", "wajan"], [], "seafood", 300, 1,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kerang", qty: 500, unit: "g" }, { id: "ing_sausti", qty: 40, unit: "ml" }, { id: "ing_jahe", qty: 10, unit: "g" }, { id: "ing_cabairawit", qty: 15, unit: "g" }],
    ["Bersihkan kerang dan rebus sebentar sampai terbuka.", "Tumis jahe, bawang, dan cabai rawit.", "Masukkan kerang dan saus tiram, aduk sampai bumbu merata."]),

  r("rcp_kepiting_saus_padang", "Kepiting saus padang", 3, 35, ["kompor", "wajan"], [], "seafood", 420, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kepiting", qty: 500, unit: "g" }, { id: "ing_saustomat", qty: 50, unit: "g" }, { id: "ing_saussambal", qty: 50, unit: "g" }, { id: "ing_bawangbombai", qty: 50, unit: "g" }, { id: "ing_jahe", qty: 10, unit: "g" }],
    ["Bersihkan kepiting dan rebus sebentar.", "Tumis bawang bombai dan jahe, masukkan saus tomat dan saus sambal.", "Masukkan kepiting, masak sampai bumbu meresap."]),

  r("rcp_hati_ayam_kecap", "Hati ayam kecap", 3, 20, ["kompor", "wajan"], [], "ayam", 320, 4,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_hatiayam", qty: 300, unit: "g" }, { id: "ing_kecap", qty: 40, unit: "ml" }, { id: "ing_jahe", qty: 10, unit: "g" }, { id: "ing_cabai", qty: 10, unit: "g" }],
    ["Rebus hati ayam sebentar, lalu potong.", "Tumis bawang, jahe, dan cabai sampai wangi.", "Masukkan hati dan kecap, masak sampai bumbu meresap."]),

  r("rcp_ampela_goreng_lengkuas", "Ampela goreng lengkuas", 3, 25, ["kompor", "wajan"], [], "ayam", 300, 5,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ampela", qty: 300, unit: "g" }, { id: "ing_lengkuas", qty: 20, unit: "g" }, { id: "ing_kunyit", qty: 5, unit: "g" }],
    ["Rebus ampela dengan kunyit dan garam sampai empuk.", "Haluskan lengkuas dan bawang, lumuri ampela.", "Goreng sampai kering dan renyah."]),

  r("rcp_bakso_sapi_kuah", "Bakso sapi kuah", 3, 20, ["kompor", "panci"], [], "daging", 350, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_baksosapi", qty: 300, unit: "g" }, { id: "ing_sawiputih", qty: 150, unit: "g" }, { id: "ing_seledri", qty: 0.5, unit: "ikat" }, { id: "ing_kaldububuk", qty: 5, unit: "g" }, { id: "ing_bihun", qty: 50, unit: "g" }, { id: "ing_merica", qty: 2, unit: "g" }],
    ["Didihkan air dan kaldu bubuk, masukkan bakso.", "Tambahkan sawi putih dan bihun, masak sebentar.", "Beri merica dan seledri sebelum disajikan."]),

  r("rcp_sosis_goreng_kecap", "Sosis goreng kecap", 2, 12, ["kompor", "wajan"], [], "daging", 320, 1,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_sosis", qty: 200, unit: "g" }, { id: "ing_kecap", qty: 20, unit: "ml" }, { id: "ing_bawangbombai", qty: 50, unit: "g" }, { id: "ing_cabai", qty: 10, unit: "g" }],
    ["Iris sosis dan bawang bombai.", "Tumis bawang bombai dan cabai sampai wangi.", "Masukkan sosis dan kecap, aduk sampai merata."]),

  r("rcp_kornet_oseng", "Kornet oseng kentang", 2, 15, ["kompor", "wajan"], [], "daging", 380, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kornet", qty: 150, unit: "g" }, { id: "ing_kentang", qty: 200, unit: "g" }, { id: "ing_bawangbombai", qty: 50, unit: "g" }, { id: "ing_cabai", qty: 10, unit: "g" }],
    ["Potong kentang dadu dan goreng sebentar.", "Tumis bawang bombai dan cabai, masukkan kornet.", "Tambahkan kentang, aduk sampai rata dan sedikit kering."]),

  r("rcp_tahu_pong_gejrot", "Tahu pong gejrot", 3, 15, ["kompor", "wajan"], ["vegetarian", "vegan"], "tahu", 280, 3,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_tahupong", qty: 250, unit: "g" }, { id: "ing_cabairawit", qty: 20, unit: "g" }, { id: "ing_cuka", qty: 15, unit: "ml" }, { id: "ing_gula", qty: 10, unit: "g" }],
    ["Goreng tahu pong sampai kering, lalu belah.", "Haluskan cabai rawit, bawang, cuka, dan gula.", "Siram bumbu ke tahu atau sajikan sebagai cocolan."]),

  r("rcp_edamame_rebus", "Edamame rebus", 2, 8, ["kompor", "panci"], ["vegetarian", "vegan"], "kedelai", 160, 4,
    [{ id: "ing_edamame", qty: 250, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_garam", qty: 4, unit: "g" }],
    ["Didihkan air bersama bawang putih dan garam.", "Masukkan edamame, rebus sampai empuk.", "Tiriskan dan sajikan hangat."]),

  r("rcp_kacang_merah_santan", "Kacang merah kuah santan", 4, 40, ["kompor", "panci"], ["vegetarian", "vegan"], "kacang", 300, 5,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_kacangmerah", qty: 200, unit: "g" }, { id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_serai", qty: 1, unit: "batang" }, { id: "ing_daunsalam", qty: 2, unit: "g" }],
    ["Rebus kacang merah sampai empuk.", "Masukkan santan, serai, dan daun salam.", "Bumbui gula dan garam, masak sampai kuah sedikit mengental."]),

  r("rcp_susu_kedelai", "Susu kedelai", 4, 25, ["kompor", "blender"], ["vegetarian", "vegan"], "kedelai", 180, 0,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_kacangkedelai", qty: 150, unit: "g" }, { id: "ing_jahe", qty: 10, unit: "g" }],
    ["Rendam kedelai semalaman, lalu tiriskan.", "Blender kedelai dengan air dan jahe, lalu saring.", "Rebus sari kedelai dengan gula sampai mendidih."]),

  r("rcp_telur_puyuh_balado", "Telur puyuh balado", 3, 20, ["kompor", "wajan"], [], "telur", 300, 1,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_telurpuyuh", qty: 10, unit: "butir" }, { id: "ing_cabaimerah", qty: 40, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }, { id: "ing_gula", qty: 10, unit: "g" }],
    ["Rebus telur puyuh, kupas, lalu goreng sebentar.", "Haluskan cabai dan tomat, tumis sampai wangi.", "Masukkan telur puyuh dan gula, aduk sampai bumbu merata."]),

  r("rcp_kambing_gulai", "Gulai kambing rempah", 4, 45, ["kompor", "panci"], [], "daging", 520, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_dagingkambing", qty: 500, unit: "g" }, { id: "ing_santan", qty: 400, unit: "ml" }, { id: "ing_lengkuas", qty: 15, unit: "g" }, { id: "ing_serai", qty: 1, unit: "batang" }, { id: "ing_daunsalam", qty: 2, unit: "g" }, { id: "ing_ketumbar", qty: 5, unit: "g" }, { id: "ing_kapulaga", qty: 2, unit: "g" }, { id: "ing_jintan", qty: 2, unit: "g" }, { id: "ing_adas", qty: 2, unit: "g" }, { id: "ing_bungalawang", qty: 2, unit: "g" }, { id: "ing_cengkeh", qty: 2, unit: "g" }, { id: "ing_pala", qty: 2, unit: "g" }, { id: "ing_kayumanis", qty: 2, unit: "g" }, { id: "ing_daunjeruk", qty: 3, unit: "g" }, { id: "ing_beras", qty: 150, unit: "g" }, { id: "ing_kemiri", qty: 10, unit: "g" }],
    ["Haluskan bawang, ketumbar, dan rempah kering.", "Tumis bumbu bersama lengkuas, serai, daun salam, dan daun jeruk.", "Masukkan kambing, tuang santan, lalu masak dengan api kecil sampai empuk."]),

  r("rcp_ayam_fillet_mentega", "Ayam fillet saus mentega", 3, 20, ["kompor", "wajan"], [], "ayam", 420, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ayamfillet", qty: 400, unit: "g" }, { id: "ing_mentega", qty: 30, unit: "g" }, { id: "ing_bawangbombai", qty: 60, unit: "g" }, { id: "ing_kecapasin", qty: 20, unit: "ml" }, { id: "ing_wijen", qty: 10, unit: "g" }, { id: "ing_merica", qty: 2, unit: "g" }],
    ["Potong ayam fillet dan lumuri merica.", "Tumis bawang bombai dengan mentega, masukkan ayam.", "Beri kecap asin, masak sampai matang, lalu taburi wijen."]),

  r("rcp_salmon_panggang_jeruk", "Salmon panggang jeruk", 2, 18, ["kompor", "oven"], [], "ikan", 380, 1,
    [{ id: "ing_ikansalmon", qty: 300, unit: "g" }, { id: "ing_jeruk", qty: 1, unit: "buah" }, { id: "ing_madu", qty: 20, unit: "g" }, { id: "ing_merica", qty: 2, unit: "g" }, { id: "ing_garam", qty: 2, unit: "g" }],
    ["Lumuri salmon dengan jeruk, madu, merica, dan garam.", "Diamkan sepuluh menit.", "Panggang sampai matang dan permukaannya sedikit karamel."]),

  r("rcp_tuna_kaleng_tumis", "Tuna kaleng tumis", 2, 12, ["kompor", "wajan"], [], "ikan", 280, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_tunakaleng", qty: 200, unit: "g" }, { id: "ing_cabai", qty: 10, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }],
    ["Tumis bawang dan cabai sampai wangi.", "Masukkan tomat, masak sampai layu.", "Tambahkan tuna kaleng, aduk dan masak sebentar."]),

  r("rcp_sarden_sambal", "Sarden sambal", 2, 12, ["kompor", "wajan"], [], "ikan", 300, 3,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_sardenkaleng", qty: 300, unit: "g" }, { id: "ing_cabairawit", qty: 15, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }],
    ["Tumis bawang dan cabai rawit.", "Masukkan tomat sampai layu.", "Tambahkan sarden, masak sebentar dan sajikan."]),

  r("rcp_udang_kering_sambal", "Sambal udang kering", 3, 15, ["kompor", "wajan"], [], "udang", 260, 4,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_udangkering", qty: 80, unit: "g" }, { id: "ing_cabairawit", qty: 30, unit: "g" }, { id: "ing_terasi", qty: 8, unit: "g" }, { id: "ing_gula", qty: 10, unit: "g" }],
    ["Rendam udang kering sebentar, lalu tiriskan.", "Haluskan cabai, terasi, dan bawang, tumis sampai wangi.", "Masukkan udang kering dan gula, aduk sampai kering."]),

  r("rcp_bakso_ikan_kuah", "Bakso ikan kuah", 3, 15, ["kompor", "panci"], [], "ikan", 300, 5,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_baksoikan", qty: 300, unit: "g" }, { id: "ing_sawiputih", qty: 150, unit: "g" }, { id: "ing_daunbawang", qty: 0.5, unit: "ikat" }, { id: "ing_kaldububuk", qty: 5, unit: "g" }],
    ["Didihkan air dan kaldu, masukkan bakso ikan.", "Tambahkan sawi putih, masak sampai layu.", "Taburi daun bawang dan sajikan panas."]),

  r("rcp_cumi_asam_jawa", "Cumi asam jawa", 3, 20, ["kompor", "wajan"], [], "seafood", 320, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_cumi", qty: 400, unit: "g" }, { id: "ing_asamjawa", qty: 20, unit: "g" }, { id: "ing_gulamerah", qty: 20, unit: "g" }, { id: "ing_cabai", qty: 15, unit: "g" }],
    ["Bersihkan cumi dan lumuri asam jawa.", "Tumis bawang, cabai, dan gula merah.", "Masukkan cumi, masak cepat sampai matang."]),

  r("rcp_lele_kemangi", "Lele bumbu kemangi", 3, 25, ["kompor", "wajan"], [], "ikan", 360, 1,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ikanlele", qty: 500, unit: "g" }, { id: "ing_kemangi", qty: 1, unit: "ikat" }, { id: "ing_kunyit", qty: 5, unit: "g" }],
    ["Lumuri lele dengan kunyit dan garam, goreng sampai matang.", "Tumis bawang dan cabai, beri sedikit air.", "Masukkan lele dan kemangi, aduk sebentar lalu angkat."]),

  r("rcp_udang_brokoli", "Udang brokoli", 3, 15, ["kompor", "wajan"], [], "udang", 280, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_udang", qty: 300, unit: "g" }, { id: "ing_brokoli", qty: 250, unit: "g" }, { id: "ing_sausti", qty: 20, unit: "ml" }],
    ["Tumis bawang sampai wangi, masukkan udang.", "Tambahkan brokoli dan sedikit air.", "Beri saus tiram, masak sampai brokoli empuk tetapi masih hijau."]),

  r("rcp_brokoli_saus_tiram", "Brokoli saus tiram", 2, 12, ["kompor", "wajan"], [], "sayur", 180, 3,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_brokoli", qty: 300, unit: "g" }, { id: "ing_sausti", qty: 30, unit: "ml" }, { id: "ing_maizena", qty: 10, unit: "g" }],
    ["Rebus brokoli sebentar, lalu tiriskan.", "Tumis bawang, masukkan brokoli.", "Beri saus tiram dan maizena yang dilarutkan, aduk sampai mengental."]),

  r("rcp_kembang_kol_krispi", "Kembang kol krispi", 3, 20, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 300, 4,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kembangkol", qty: 300, unit: "g" }, { id: "ing_tepung", qty: 100, unit: "g" }, { id: "ing_maizena", qty: 30, unit: "g" }, { id: "ing_merica", qty: 2, unit: "g" }],
    ["Potong kembang kol, celup ke adonan tepung dan maizena.", "Goreng sampai keemasan.", "Taburi merica dan sajikan dengan saus."]),

  r("rcp_kale_tumis_bawang", "Kale tumis bawang", 2, 10, ["kompor", "wajan"], ["vegetarian", "vegan"], "sayur", 150, 5,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_kale", qty: 200, unit: "g" }],
    ["Cuci dan potong kale.", "Tumis bawang sampai wangi.", "Masukkan kale, bumbui, dan masak sampai layu."]),

  r("rcp_lobak_kuah_bening", "Lobak kuah bening", 3, 20, ["kompor", "panci"], ["vegetarian", "vegan"], "sayur", 160, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_lobak", qty: 300, unit: "g" }, { id: "ing_wortel", qty: 100, unit: "g" }, { id: "ing_seledri", qty: 0.5, unit: "ikat" }, { id: "ing_merica", qty: 2, unit: "g" }, { id: "ing_daunbawang", qty: 0.5, unit: "ikat" }],
    ["Potong lobak dan wortel.", "Didihkan air bersama bawang, masukkan lobak dan wortel.", "Bumbui, tambahkan seledri, dan masak sampai empuk."]),

  r("rcp_pare_tumis_telur", "Pare tumis telur", 2, 15, ["kompor", "wajan"], ["vegetarian"], "telur", 260, 1,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_pare", qty: 300, unit: "g" }, { id: "ing_telur", qty: 2, unit: "butir" }],
    ["Iris pare dan remas dengan garam, lalu bilas.", "Tumis bawang, masukkan pare.", "Tambahkan telur, orak-arik sampai matang."]),

  r("rcp_petai_tumis_udang", "Petai tumis udang", 2, 15, ["kompor", "wajan"], [], "udang", 300, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_petai", qty: 100, unit: "g" }, { id: "ing_udang", qty: 200, unit: "g" }, { id: "ing_cabairawit", qty: 15, unit: "g" }],
    ["Tumis bawang dan cabai rawit sampai wangi.", "Masukkan udang, masak sampai berubah warna.", "Tambahkan petai, aduk sebentar, lalu angkat."]),

  r("rcp_jengkol_balado", "Jengkol balado", 3, 30, ["kompor", "wajan"], [], "sayur", 340, 3,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_jengkol", qty: 300, unit: "g" }, { id: "ing_cabaimerah", qty: 40, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }],
    ["Rebus jengkol sampai empuk, lalu goreng sebentar.", "Haluskan cabai dan tomat, tumis sampai wangi.", "Masukkan jengkol, aduk sampai bumbu merata."]),

  r("rcp_daun_pepaya_tumis", "Daun pepaya tumis", 2, 15, ["kompor", "wajan"], [], "sayur", 180, 4,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_daunpepaya", qty: 1, unit: "ikat" }, { id: "ing_terasi", qty: 8, unit: "g" }],
    ["Rebus daun pepaya sebentar, lalu tiriskan.", "Tumis bawang dan terasi sampai wangi.", "Masukkan daun pepaya, aduk dan masak sebentar."]),

  r("rcp_pepes_tahu_kemangi", "Pepes tahu kemangi", 3, 25, ["kompor", "kukusan"], ["vegetarian", "vegan"], "tahu", 260, 5,
    [{ id: "ing_tahu", qty: 300, unit: "g" }, { id: "ing_kemangi", qty: 1, unit: "ikat" }, { id: "ing_kemiri", qty: 20, unit: "g" }, { id: "ing_daunsalam", qty: 2, unit: "g" }, { id: "ing_garam", qty: 3, unit: "g" }],
    ["Haluskan tahu, campur dengan kemiri dan garam.", "Bungkus dengan daun salam dan kemangi.", "Kukus sampai matang, lalu sajikan."]),

  r("rcp_oyong_tumis_telur", "Oyong tumis telur", 2, 12, ["kompor", "wajan"], ["vegetarian"], "telur", 240, 0,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_oyong", qty: 300, unit: "g" }, { id: "ing_telur", qty: 2, unit: "butir" }],
    ["Kupas dan potong oyong.", "Tumis bawang, masukkan oyong.", "Tambahkan telur, orak-arik sampai matang."]),

  r("rcp_kolak_labu_kuning", "Kolak labu kuning", 4, 25, ["kompor", "panci"], ["vegetarian", "vegan"], "sayur", 260, 1,
    [{ id: "ing_gula", qty: 40, unit: "g" }, { id: "ing_garam", qty: 1, unit: "g" }, { id: "ing_labukuning", qty: 400, unit: "g" }, { id: "ing_santan", qty: 300, unit: "ml" }, { id: "ing_gulamerah", qty: 50, unit: "g" }, { id: "ing_kayumanis", qty: 2, unit: "g" }],
    ["Potong labu kuning.", "Didihkan santan bersama gula merah dan kayumanis.", "Masukkan labu, masak sampai empuk."]),

  r("rcp_ubi_jalar_goreng", "Ubi jalar goreng", 3, 20, ["kompor", "wajan"], ["vegetarian", "vegan"], "ubi", 320, 2,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_ubijalar", qty: 400, unit: "g" }, { id: "ing_tepung", qty: 80, unit: "g" }, { id: "ing_gula", qty: 20, unit: "g" }],
    ["Potong ubi jalar sesuai selera.", "Celup ke adonan tepung yang diberi garam.", "Goreng sampai keemasan dan tiriskan."]),

  r("rcp_singkong_goreng", "Singkong goreng", 3, 25, ["kompor", "wajan"], ["vegetarian", "vegan"], "singkong", 340, 3,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_singkong", qty: 500, unit: "g" }],
    ["Kupas singkong, potong, dan rebus sampai empuk.", "Haluskan bawang putih dan garam, lumuri singkong.", "Goreng sampai keemasan."]),

  r("rcp_talas_balado", "Talas balado", 3, 30, ["kompor", "wajan"], ["vegetarian", "vegan"], "talas", 330, 4,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_talas", qty: 400, unit: "g" }, { id: "ing_cabaimerah", qty: 40, unit: "g" }, { id: "ing_tomat", qty: 100, unit: "g" }],
    ["Kupas talas, potong, dan goreng sampai matang.", "Haluskan cabai dan tomat, tumis sampai wangi.", "Masukkan talas, aduk sampai bumbu merata."]),

  r("rcp_baby_corn_tumis", "Baby corn tumis", 2, 12, ["kompor", "wajan"], [], "sayur", 200, 5,
    [{ id: "ing_minyak", qty: 15, unit: "ml" }, { id: "ing_garam", qty: 2, unit: "g" }, { id: "ing_bawangmerah", qty: 20, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_babycorn", qty: 250, unit: "g" }, { id: "ing_wortel", qty: 100, unit: "g" }, { id: "ing_buncis", qty: 100, unit: "g" }, { id: "ing_sausti", qty: 20, unit: "ml" }],
    ["Potong baby corn, wortel, dan buncis.", "Tumis bawang, masukkan sayur yang lebih keras.", "Tambahkan saus tiram dan sedikit air, masak sampai matang."]),

  r("rcp_asparagus_panggang", "Asparagus panggang", 2, 15, ["kompor", "oven"], ["vegetarian"], "sayur", 160, 0,
    [{ id: "ing_asparagus", qty: 300, unit: "g" }, { id: "ing_mentega", qty: 30, unit: "g" }, { id: "ing_bawangputih", qty: 10, unit: "g" }, { id: "ing_merica", qty: 2, unit: "g" }, { id: "ing_garam", qty: 2, unit: "g" }],
    ["Bersihkan asparagus dan letakkan di loyang.", "Olesi mentega, bawang putih, merica, dan garam.", "Panggang sampai asparagus empuk dan sedikit kecokelatan."]),
];

export const EQUIPMENT = ["kompor", "wajan", "panci", "kukusan", "rice cooker", "oven", "blender"];

export const SAMPLES: {
  id: "sample-a" | "sample-b" | "sample-c";
  items: { id: string; qty: number; confidence: number }[];
}[] = [
  {
    id: "sample-a",
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

