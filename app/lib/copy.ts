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
    tagline: "Foto kulkas, dapet 3 ide menu, langsung jadi daftar belanja.",
    version: "Pantrified 0.1",
  },

  nav: {
    label: "Navigasi utama",
    home: "Beranda",
    plans: "Menu",
    list: "Belanja",
    listLong: "Daftar belanja",
    settings: "Akun",
    settingsLong: "Pengaturan",
    newPlan: "Buat menu baru",
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
    eyebrow: "Masak enak dari bahan seadanya",
    heroTitle: "Bikin 3 menu dari isi kulkas yang pas di kantong.",
    heroBody: "Tinggal foto kulkasmu, cek bahannya, atur budget. Biar kami yang racik sisanya!",
    cta: "Mulai dari Foto Kulkas",
    heroArtLabel: "Ilustrasi masakan dari isi kulkas",
    resumeTitle: "Lanjutkan sesi sebelumnya",
    resumeBody: "Bahan dan rencana menu terakhirmu masih tersimpan rapi.",
    samplesTitle: "Atau coba kulkas contoh ini",
    samplesNote: "Tanpa perlu foto",
    howTitle: "Gampang banget, begini caranya:",
    how: [
      {
        title: "1. Foto isi kulkas",
        body: "Cukup satu foto saja. Kalau ada yang salah deteksi, tinggal hapus.",
      },
      {
        title: "2. Tentukan budget & waktu",
        body: "Atur budget harian, target kalori, sama batas waktu masaknya.",
      },
      {
        title: "3. Cukup beli kurangnya",
        body: "Daftar belanja otomatis dibuat hanya untuk bahan yang belum ada.",
      },
    ],
    budgetNote: (budget: string) => `Budget awal ${budget} per hari. Bisa kamu sesuaikan di langkah berikutnya, kok.`,
    stats: (recipes: number, ingredients: number) => [
      { value: "3", label: "pilihan menu per sesi" },
      { value: String(recipes), label: "resep andalan" },
      { value: String(ingredients), label: "pilihan bahan" },
    ],
    sceneCaption: "Ilustrasi 3D isi dapur",
  },

  review: {
    back: "Kembali",
    title: "Cek bahan dulu yuk",
    photoLabel: "foto",
    sub: (count: number, label: string) =>
      `${count} bahan siap pakai dari ${label}. Hapus kalau ada yang keliru, atau tambah kalau kurang ya.`,
    subLead: (count: number) => `${count} bahan siap pakai dari `,
    subCheck: (count: number) => `${count} bahan perlu dicek`,
    subTail: ". Hapus kalau ada yang keliru, atau tambah kalau kurang ya.",
    ignored: (n: number) => `${n} bahan dengan tingkat kecocokan rendah disembunyikan.`,
    empty: "Belum ada bahan nih. Yuk, tambah satu-satu.",
    add: "Tambah bahan",
    continue: "Lanjut Atur Budget",
    checkTag: "Cek dulu",
    confidence: (pct: number) => `${pct}% yakin`,
    buy: "beli",
    have: "ada",
    railTitle: "Ringkasan bahan",
    railTotal: "digunakan",
    railChecked: "perlu dicek",
    railCategories: "Kategori",
    railHint: "Jumlah semua bahan bisa kamu sesuaikan sebelum lanjut bikin menu.",
  },

  constraints: {
    back: "Kembali",
    title: "Atur budget & preferensi",
    sub: (n: number) => `${n} bahan siap diolah. Tentukan batasannya, biar kami yang susun menu terbaiknya!`,
    budgetLabel: "Budget makan per hari",
    budgetNote: (meals: number, perMeal: string) =>
      `Untuk ${meals} kali makan, sekitar ${perMeal} per porsi.`,
    mealsLabel: "Mau berapa kali makan?",
    meals: (n: number) => `${n} kali`,
    kcalLabel: "Target kalori per porsi",
    kcalOption: (n: number) => `${n} kkal`,
    dietLabel: "Preferensi pola makan",
    diets: {
      none: "Bebas / Apa saja",
      vegetarian: "Vegetarian",
      vegan: "Vegan",
    },
    cookLabel: "Batas waktu masak",
    cookOption: (n: number) => `Maks. ${n} menit`,
    equipmentTitle: "Alat masak yang tersedia",
    equipmentSummary: (count: number, list: string) => `${count} dipilih: ${list}`,
    staplesTitle: "Bumbu dasar andalan",
    staplesBody: "Garam, gula, minyak, dan kecap aman, dianggap sudah tersedia di dapur.",
    submit: "Buatkan 3 Pilihan Menu",
    railTitle: "Ringkasan",
    railBudget: "Budget / hari",
    railPerMeal: "Per porsi",
    railMeals: "Jumlah makan",
    railCook: "Waktu masak",
    railEquipment: "Alat masak",
    railNote: "Menu disusun berdasarkan bahan yang kamu centang, bukan seluruh isi kulkas.",
  },

  plans: {
    back: "Ubah budget",
    title: "Pilihan menu untukmu",
    sub: (perMeal: string, cook: number) =>
      `Diracik dari bahanmu, budget ${perMeal} per porsi, dan waktu masak maksimal ${cook} menit.`,
    cheapest: "Paling hemat",
    ofBudget: (perMeal: string) => `dari ${perMeal} per porsi`,
    tagOver: "Sedikit lewat budget",
    tagOk: "Pas di budget",
    tagStock: "Stok kulkas aman",
    missing: (n: number) => `Kurang ${n} bahan`,
    complete: "Bahan lengkap",
    have: (pct: string) => `${pct} bahan sudah ada`,
    shopping: "Belanja dulu",
    noShopping: "Tanpa belanja",
    emptyTitle: "Belum ketemu yang pas nih",
    emptyBody: "Coba longgarkan sedikit waktu masak, tambah alat dapur, atau naikkan budgetnya ya.",
    emptyCta: "Ubah Batasan",
    adjust: "Ubah batasan & susun ulang",
    relaxed: {
      time: "Waktu masak ditambah 10 menit",
      budget: "Melebihi target budget per porsi",
    },
  },

  detail: {
    back: "Kembali",
    tabsLabel: "Detail resep",
    tabIngredients: "Bahan-bahan",
    tabSteps: "Cara masak",
    priceNote: (servings: number) =>
      `Estimasi harga untuk ${servings} porsi. Bumbu dasar dianggap sudah ada ya.`,
    cta: (cost: string | null) => (cost ? `Bikin daftar belanja · ${cost}` : "Lihat daftar belanja"),
    meta: (servings: number, minutes: number, kcal: number) =>
      `${servings} porsi · ${minutes} mnt · ${kcal} kkal`,
  },

  grocery: {
    back: "Kembali ke resep",
    title: "Daftar belanja",
    sub: (recipe: string, servings: number) => `${recipe} · ${servings} porsi`,
    total: "Total estimasi belanja",
    totalMeta: (count: number, date: string) => `${count} bahan · patokan harga per ${date}`,
    allHave: "Asyik, semua bahan sudah lengkap di kulkas! Tinggal cuss masak.",
    haveTitle: "Sudah ada di kulkas",
    haveCount: (n: number) => `${n} bahan`,
    packs: (n: number) => `${n} bungkus`,
    leftover: (qty: string) => `sisa ${qty}`,
    noPrice: "Harga belum ada",
    copy: "Salin teks untuk WhatsApp",
    csv: "Unduh format CSV",
    share: "Bikin kartu belanja",
    disclaimer:
      "Harga di atas adalah estimasi pasaran dan bisa berbeda di toko terdekatmu. Jadikan patokan saja ya!",
    railTitle: "Ringkasan belanja",
    railItems: "Bahan dibeli",
    railHave: "Sudah ada",
    railDate: "Update harga",
    railNote: "Kartu belanja ini dibuat langsung di perangkatmu dan aman privasinya.",
  },

  settings: {
    title: "Pengaturan",
    sub: "Kelola data, izin aplikasi, dan alat masakmu.",
    analyticsTitle: "Bantu kembangkan aplikasi (Analitik)",
    analyticsBody: "Nonaktif secara default. Tidak ada foto atau data pribadi yang dikirim.",
    events: (n: number) => `${n} aktivitas tersimpan di perangkatmu.`,
    staplesTitle: "Bumbu dasar",
    staplesBody: "Garam, gula, minyak, dan kecap tidak akan masuk daftar belanja.",
    equipmentTitle: "Alat masak",
    exportTitle: "Unduh data saya",
    exportBody: "Dapatkan file JSON berisi profil, bahan, dan riwayat aktivitasmu.",
    deleteTitle: "Hapus semua data",
    deleteBody: "Bersihkan sesi, bahan tersimpan, dan riwayat di perangkat ini.",
    aboutBody: (date: string) =>
      `Proyek tugas akhir demo. Deteksi bahan menggunakan simulasi, dan patokan harga per ${date}.`,
    aboutFine: (recipes: number, ingredients: number) =>
      `Berisi ${recipes} resep contoh dan ${ingredients} bahan. Foto kamu aman dan tidak disimpan di server mana pun.`,
    confirmDelete: "Yakin ingin menghapus semua data di perangkat ini?",
    sectionData: "Data & Privasi",
    sectionApp: "Aplikasi",
    sectionAbout: "Tentang",
  },

  sheets: {
    startTitle: "Mau masak apa hari ini?",
    startLead: "Foto isi kulkasmu sekarang, atau pilih contoh kulkas siap pakai di bawah.",
    upload: "Ambil atau pilih foto kulkas",
    samplesLabel: "Contoh isi kulkas",
    demoNote: "Mode demo aktif: hasil deteksi disimulasikan secara instan.",
    addTitle: "Tambah bahan",
    searchLabel: "Cari bahan",
    searchPlaceholder: "Contoh: tempe, dada ayam, bayam...",
    noResults: "Duh, bahan yang dicari tidak ketemu.",
    equipmentTitle: "Pilih alat masak",
    equipmentLead: "Centang alat yang ada di dapurmu. Resep yang butuh alat lain otomatis disembunyikan.",
  },

  toasts: {
    copied: "Daftar belanja berhasil disalin!",
    copyFailed: "Gagal menyalin otomatis. Coba unduh file CSV saja ya.",
    csvDone: "File CSV berhasil diunduh.",
    exportDone: "Data berhasil diunduh.",
    cleared: "Semua data berhasil dibersihkan.",
    cardDone: "Kartu belanja berhasil diunduh.",
  },

  share: {
    title: "Kartu belanja",
    lead: "Siap dibagikan ke WhatsApp atau story media sosialmu.",
    download: "Unduh sebagai PNG",
    generating: "Sedang menyiapkan kartu...",
    cardTitle: "Daftar belanja",
    cardTotal: "Total Estimasi",
    cardItems: "Yang perlu dibeli",
    cardHave: "Sudah ada",
    cardFooter: "Estimasi harga pasaran",
    cardHandle: "pantrified.app",
    emptyItems: "Mantap, semua bahan sudah tersedia!",
    haveNote: (n: number) => `${n} bahan sudah lengkap di kulkas.`,
    more: (n: number) => `+${n} bahan lainnya`,
    themeLight: "Mode Terang",
    themeDark: "Mode Gelap",
    themeLabel: "Pilihan Tampilan",
  },

  categories: {
    protein: "Protein",
    sayur: "Sayur & Buah",
    bumbu: "Bumbu & Rempah",
    buah: "Buah",
    susu: "Susu & Olahan",
    pokok: "Bahan Pokok",
    kemasan: "Makanan Kemasan",
  } as Record<string, string>,

  exportText: {
    listTitle: "Daftar Belanja Pantrified",
    line: (name: string, qty: string, pack: string, cost: string) => `- ${name} ${qty} (${pack}) ${cost}`,
    pack: (n: number) => `${n} bungkus`,
    singlePack: "1 bungkus",
    total: (cost: string) => `Total ${cost}`,
    pricePer: (date: string) => `Patokan harga per ${date}`,
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
    cheapest: (cost: string, budget: string) => `Pilihan termurah ${cost} dari total budget ${budget}`,
    scene: "Ilustrasi 3D bahan makanan di atas piring",
    shareCanvas: "Pratinjau kartu belanja",
    recipeArt: (name: string) => `Ilustrasi ${name}`,
  },

  empty: {
    title: "Belum ada menu pilihan",
    body: "Mulai yuk dengan memotret isi kulkasmu atau pilih contoh yang tersedia.",
    cta: "Mulai Sekarang",
  },

  desktop: {
    sectionHome: "Beranda",
    sectionReview: "Cek bahan",
    sectionConstraints: "Atur budget",
    sectionPlans: "Pilihan menu",
    sectionDetail: "Detail resep",
    sectionList: "Daftar belanja",
    sectionSettings: "Pengaturan",
    sessionTitle: "Sesi aktif",
    sessionEmpty: "Belum ada bahan",
    sessionItems: (n: number) => `${n} bahan`,
    sessionBudget: "Budget",
    sessionResume: "Buka sesi",
    priceDate: "Info Harga",
    demo: "Mode Demo",
    footer: "Deteksi menggunakan simulasi. Data aman di perangkatmu.",
    breadcrumb: "Pantrified",
    statPlan: "pilihan menu",
    statItems: "bahan",
    sceneHint: "Geser untuk melihat detail",
  },

  samples: {
    "sample-a": {
      label: "Kulkas Anak Kos",
      note: "Sisa belanja mingguan, masih ada stok telur dan sayuran segar.",
    },
    "sample-b": {
      label: "Kulkas Tanggal Tua",
      note: "Isi kulkas minimalis, tapi banyak bahan pokok andalan.",
    },
    "sample-c": {
      label: "Kulkas Habis Masak",
      note: "Penuh sisa sayuran segar dan aneka protein.",
    },
  },
} as const;

export type Copy = typeof copy;
