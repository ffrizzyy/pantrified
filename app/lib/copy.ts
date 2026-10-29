/**
 * Every string the interface can show lives here.
 *
 * Change text in this file only. Recipe names, steps, ingredient names and
 * prices are content, not interface copy, and stay in `lib/data.ts`.
 *
 * Functions take already-formatted values (for example `Rp 30.000`) so this
 * file never has to know about number formatting.
 */

export const copy = {
  brand: {
    name: "Pantrified",
    tagline: "Foto kulkas, tiga rencana makan, satu daftar belanja.",
    version: "Pantrified 0.1",
  },

  nav: {
    label: "Navigasi utama",
    home: "Beranda",
    plans: "Rencana",
    list: "Daftar",
    listLong: "Daftar belanja",
    settings: "Akun",
    settingsLong: "Pengaturan",
    newPlan: "Rencana baru",
  },

  common: {
    back: "Kembali",
    close: "Tutup",
    done: "Selesai",
    choose: "Pilih",
    add: "Tambah",
    remove: "Hapus",
    decrease: "Kurangi",
    increase: "Tambah",
    perPortion: "per porsi",
    portions: (n: number) => `${n} porsi`,
    minutes: (n: number) => `${n} menit`,
    minutesShort: (n: number) => `${n} mnt`,
    kcal: (n: number) => `${n} kkal`,
    rupiahPrefix: "Rp",
  },

  home: {
    eyebrow: "Masak dari yang sudah ada",
    heroTitle: "Tiga menu dari isi kulkas, sesuai budget hari ini.",
    heroBody: "Unggah foto, cek bahannya, tentukan budget. Sisanya kami susun.",
    cta: "Mulai dari foto kulkas",
    heroArtLabel: "Ilustrasi masakan dari isi kulkas",
    resumeTitle: "Lanjutkan sesi terakhir",
    resumeBody: "Bahan dan rencana terakhir masih tersimpan.",
    samplesTitle: "Coba contoh kulkas",
    samplesNote: "Tanpa foto",
    howTitle: "Cara kerjanya",
    how: [
      {
        title: "Foto isi kulkas",
        body: "Satu foto sudah cukup. Bahan yang salah bisa kamu hapus.",
      },
      {
        title: "Atur budget",
        body: "Budget per hari, target kalori, dan waktu masak.",
      },
      {
        title: "Belanja yang kurang saja",
        body: "Daftar belanja berisi bahan yang belum ada, dengan harga.",
      },
    ],
    budgetNote: (budget: string) => `Budget awal ${budget} per hari. Bisa diubah di langkah berikutnya.`,
    stats: [
      { value: "3", label: "rencana per sesi" },
      { value: "23", label: "resep contoh" },
      { value: "37", label: "bahan terdaftar" },
    ],
    sceneCaption: "Ilustrasi 3D isi dapur",
  },

  review: {
    back: "Kembali",
    title: "Cek bahan",
    photoLabel: "foto",
    sub: (count: number, label: string) =>
      `${count} bahan siap dipakai dari ${label}. Hapus yang salah, tambah yang kurang.`,
    subLead: (count: number) => `${count} bahan siap dipakai dari `,
    subTail: ". Hapus yang salah, tambah yang kurang.",
    ignored: (n: number) => `${n} bahan keyakinan rendah tidak ditampilkan.`,
    empty: "Belum ada bahan. Tambah satu per satu.",
    add: "Tambah bahan",
    continue: "Lanjut atur budget",
    checkTag: "Perlu dicek",
    confidence: (pct: number) => `${pct}% yakin`,
    buy: "beli",
    have: "ada",
    railTitle: "Ringkasan bahan",
    railTotal: "dipakai",
    railChecked: "perlu dicek",
    railCategories: "Kategori",
    railHint: "Semua bahan bisa diubah jumlahnya sebelum menyusun rencana.",
  },

  constraints: {
    back: "Kembali",
    title: "Atur budget",
    sub: (n: number) => `${n} bahan siap dipakai. Tentukan batasnya, kami yang menyusun menu.`,
    budgetLabel: "Budget makan per hari",
    budgetNote: (meals: number, perMeal: string) =>
      `Untuk ${meals} kali makan, sekitar ${perMeal} per porsi.`,
    mealsLabel: "Berapa kali makan",
    meals: (n: number) => `${n} kali`,
    kcalLabel: "Target kalori per porsi",
    kcalOption: (n: number) => `${n} kkal`,
    dietLabel: "Pola makan",
    diets: {
      none: "Semua",
      vegetarian: "Vegetarian",
      vegan: "Vegan",
    },
    cookLabel: "Waktu masak maksimal",
    cookOption: (n: number) => `${n} menit`,
    equipmentTitle: "Alat masak",
    equipmentSummary: (count: number, list: string) => `${count} dipilih: ${list}`,
    staplesTitle: "Bumbu dasar sudah ada",
    staplesBody: "Garam, gula, minyak, dan kecap dianggap tersedia.",
    submit: "Buat 3 rencana",
    railTitle: "Ringkasan",
    railBudget: "Budget per hari",
    railPerMeal: "Per porsi",
    railMeals: "Jumlah makan",
    railCook: "Waktu masak",
    railEquipment: "Alat",
    railNote: "Rencana disusun dari bahan yang kamu centang, bukan dari seluruh isi kulkas.",
  },

  plans: {
    back: "Ubah budget",
    title: "Tiga rencana",
    sub: (perMeal: string, cook: number) =>
      `Dipilih dari bahanmu, budget ${perMeal} per porsi, dan waktu masak ${cook} menit.`,
    cheapest: "Rencana termurah",
    ofBudget: (perMeal: string) => `dari ${perMeal} per porsi`,
    tagOver: "Lewat budget",
    tagOk: "Masih di budget",
    tagStock: "Stok cukup",
    missing: (n: number) => `${n} bahan kurang`,
    have: (pct: string) => `${pct} bahan sudah ada`,
    shopping: "Belanja",
    emptyTitle: "Belum ada yang cocok",
    emptyBody: "Coba longgarkan waktu masak, tambah alat, atau naikkan budget sedikit.",
    emptyCta: "Ubah batasan",
    adjust: "Ubah batasan dan susun ulang",
    relaxed: {
      time: "Waktu masak dilonggarkan 10 menit",
      budget: "Melebihi budget per porsi",
    },
  },

  detail: {
    back: "Kembali",
    tabsLabel: "Detail resep",
    tabIngredients: "Bahan",
    tabSteps: "Langkah",
    priceNote: (servings: number) =>
      `Estimasi harga untuk ${servings} porsi. Bumbu dasar dianggap tersedia.`,
    cta: (cost: string | null) => (cost ? `Buat daftar belanja · ${cost}` : "Lihat daftar belanja"),
    meta: (servings: number, minutes: number, kcal: number) =>
      `${servings} porsi · ${minutes} menit · ${kcal} kkal`,
  },

  grocery: {
    back: "Kembali ke resep",
    title: "Daftar belanja",
    sub: (recipe: string, servings: number) => `${recipe} · ${servings} porsi`,
    total: "Total belanja",
    totalMeta: (count: number, date: string) => `${count} bahan · harga per ${date}`,
    allHave: "Semua bahan sudah ada. Tinggal masak.",
    haveTitle: "Sudah ada di kulkas",
    haveCount: (n: number) => `${n} bahan`,
    packs: (n: number) => `${n} bungkus`,
    leftover: (qty: string) => `sisa ${qty}`,
    copy: "Salin untuk WhatsApp",
    csv: "Unduh CSV",
    share: "Buat kartu belanja",
    disclaimer:
      "Harga adalah perkiraan dari tabel pasar, bukan harga toko hari ini. Bawa daftar ini sebagai patokan.",
    railTitle: "Ringkasan belanja",
    railItems: "Bahan dibeli",
    railHave: "Sudah ada",
    railDate: "Tanggal harga",
    railNote: "Kartu belanja dibuat di perangkat ini dan tidak diunggah.",
  },

  settings: {
    title: "Pengaturan",
    sub: "Data, izin, dan alat masak.",
    analyticsTitle: "Izinkan analitik",
    analyticsBody: "Mati secara bawaan. Tidak berisi foto atau teks bebas.",
    events: (n: number) => `${n} peristiwa tersimpan di perangkat ini.`,
    staplesTitle: "Bumbu dasar sudah ada",
    staplesBody: "Garam, gula, minyak, dan kecap tidak dihitung belanja.",
    equipmentTitle: "Alat masak",
    exportTitle: "Unduh data saya",
    exportBody: "JSON berisi profil, bahan, dan peristiwa.",
    deleteTitle: "Hapus semua data",
    deleteBody: "Sesi, bahan, dan peristiwa di perangkat ini.",
    aboutBody: (date: string) =>
      `Demo tugas akhir. Deteksi bahan masih simulasi, harga dari tabel contoh per ${date}.`,
    aboutFine: (recipes: number, ingredients: number) =>
      `${recipes} resep contoh, ${ingredients} bahan. Foto tidak dikirim ke mana pun dan tidak disimpan.`,
    confirmDelete: "Hapus semua data di perangkat ini?",
    sectionData: "Data",
    sectionApp: "Aplikasi",
    sectionAbout: "Tentang",
  },

  sheets: {
    startTitle: "Mulai rencana baru",
    startLead: "Ambil foto kulkas, atau coba salah satu contoh isi kulkas.",
    upload: "Ambil atau pilih foto",
    samplesLabel: "Contoh kulkas",
    demoNote: "Mode demo: deteksi disimulasikan, bukan dari isi foto.",
    addTitle: "Tambah bahan",
    searchLabel: "Cari bahan",
    searchPlaceholder: "Cari, misalnya tempe",
    noResults: "Tidak ada bahan yang cocok.",
    equipmentTitle: "Alat masak",
    equipmentLead: "Pilih alat yang ada di dapur. Resep di luar pilihan ini tidak akan muncul.",
  },

  toasts: {
    copied: "Daftar belanja disalin.",
    copyFailed: "Browser menolak menyalin. Pakai unduh CSV.",
    csvDone: "CSV diunduh.",
    exportDone: "Data diunduh.",
    cleared: "Data dihapus.",
    cardDone: "Kartu belanja diunduh.",
  },

  share: {
    title: "Kartu belanja",
    lead: "Kartu siap dibagikan ke WhatsApp atau story. Dibuat di perangkat ini.",
    download: "Unduh PNG",
    generating: "Menyiapkan kartu…",
    cardTitle: "Daftar belanja",
    cardTotal: "Total",
    cardItems: "Yang perlu dibeli",
    cardHave: "Sudah ada",
    cardFooter: "Harga perkiraan",
    cardHandle: "pantrified.app",
    emptyItems: "Semua bahan sudah ada.",
    haveNote: (n: number) => `${n} bahan sudah ada di kulkas.`,
    more: (n: number) => `+${n} bahan lain`,
    themeLight: "Terang",
    themeDark: "Gelap",
    themeLabel: "Warna kartu",
  },

  categories: {
    protein: "Protein",
    sayur: "Sayur",
    bumbu: "Bumbu",
    buah: "Buah",
    susu: "Susu",
    pokok: "Pokok",
    kemasan: "Kemasan",
  } as Record<string, string>,

  exportText: {
    listTitle: "Daftar belanja Pantrified",
    line: (name: string, qty: string, pack: string, cost: string) => `- ${name} ${qty} (${pack}) ${cost}`,
    pack: (n: number) => `${n} bungkus`,
    singlePack: "1 bungkus",
    total: (cost: string) => `Total ${cost}`,
    pricePer: (date: string) => `Harga per ${date}`,
    csvHeader: ["bahan", "jumlah", "satuan", "bungkus", "harga"],
  },

  a11y: {
    itemToggle: (name: string, used: boolean) => `${name} ${used ? "dipakai" : "tidak dipakai"}`,
    qty: (name: string) => `Jumlah ${name}`,
    remove: (name: string) => `Hapus ${name}`,
    budget: "Budget makan per hari",
    meals: "Jumlah makan",
    diet: "Pola makan",
    staples: "Bumbu dasar sudah ada",
    analytics: "Izinkan analitik",
    choosePlan: (name: string) => `Pilih ${name}`,
    cheapest: (cost: string, budget: string) => `Rencana termurah ${cost} dari ${budget}`,
    scene: "Ilustrasi 3D bahan makanan di atas piring",
    shareCanvas: "Pratinjau kartu belanja",
    recipeArt: (name: string) => `Ilustrasi ${name}`,
  },

  empty: {
    title: "Belum ada rencana",
    body: "Mulai dari foto kulkas atau salah satu contoh.",
    cta: "Mulai sekarang",
  },

  desktop: {
    sectionHome: "Beranda",
    sectionReview: "Cek bahan",
    sectionConstraints: "Atur budget",
    sectionPlans: "Rencana",
    sectionDetail: "Detail resep",
    sectionList: "Daftar belanja",
    sectionSettings: "Pengaturan",
    sessionTitle: "Sesi berjalan",
    sessionEmpty: "Belum ada bahan",
    sessionItems: (n: number) => `${n} bahan`,
    sessionBudget: "Budget",
    sessionResume: "Buka sesi",
    priceDate: "Harga",
    demo: "Mode demo",
    footer: "Deteksi masih simulasi. Tidak ada data yang dikirim.",
    breadcrumb: "Pantrified",
    statPlan: "rencana",
    statItems: "bahan",
    sceneHint: "Geser untuk melihat",
  },

  samples: {
    "sample-a": {
      label: "Kulkas anak kos",
      note: "Sisa belanja mingguan, ada telur dan sayur.",
    },
    "sample-b": {
      label: "Kulkas akhir bulan",
      note: "Isi tipis, banyak bahan pokok.",
    },
    "sample-c": {
      label: "Kulkas habis masak",
      note: "Banyak sisa sayur dan protein.",
    },
  },
} as const;

export type Copy = typeof copy;
