const destinations = [
  {
    id: 1,
    name: "Pulau Derawan",
    city: "Berau",
    category: "Bahari",
    description:
      "Surga bahari dengan kejernihan air yang memukau. Derawan dikenal sebagai habitat penyu hijau dan penyu sisik, serta titik selam kelas dunia dengan keanekaragaman biota laut yang luar biasa.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXenegGNUHCFSBmga6ma2fyHIn9Oy1aQ_GrPqtDL-LYQ&s=10",
    lat: 2.2833,
    lng: 118.2333,
    ticket: "Rp 25.000",
    hours: "06.00 – 18.00 WITA",
    website: "https://www.indonesia.travel/gb/en/destinations/kalimantan/derawan-islands",
  },
  {
    id: 2,
    name: "Hutan Lindung Sungai Wain",
    city: "Balikpapan",
    category: "Margasatwa",
    description:
      "Kawasan konservasi dengan hutan tropis primer seluas 10.025 ha. Tempat rehabilitasi orang utan Kalimantan dan berbagai satwa endemik lainnya.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtglx9cT-Dr5lnzfvhdhC-xkTJW410Ug8ig42Zq39Hw&s=10",
    lat: -1.1556,
    lng: 116.8372,
    ticket: "Rp 15.000",
    hours: "08.00 – 16.00 WITA",
    website: "https://balikpapan.go.id",
  },
  {
    id: 3,
    name: "Danau Labuan Cermin",
    city: "Berau",
    category: "Alam",
    description:
      "Danau dua lapisan yang memikat: permukaan berair tawar, dasar berair asin. Kejernihan airnya menjadi cermin sempurna yang memantulkan kanopi hutan tropis di sekelilingnya.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzEyKg4U0n9tsnajiMgWJm396s7lNcj541_XCMndCpnA&s=10",
    lat: 2.4167,
    lng: 118.5333,
    ticket: "Rp 20.000",
    hours: "07.00 – 17.00 WITA",
    website: "https://www.indonesia.travel/gb/en/destinations/kalimantan/berau",
  },
  {
    id: 4,
    name: "Pantai Manggar Segara Sari",
    city: "Balikpapan",
    category: "Bahari",
    description:
      "Pantai berpasir putih kecokelatan dengan ombak tenang, diapit perkebunan kelapa. Spot favorit untuk piknik keluarga, bermain layang-layang, dan menikmati senja di pesisir Selat Makassar.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-chu5BpyG6mDskz4HVe4bdE5xRf7qSUmNg6-eEa6VEw&s=10",
    lat: -1.3025,
    lng: 116.9694,
    ticket: "Rp 10.000",
    hours: "06.00 – 18.00 WITA",
    website: "https://balikpapan.go.id",
  },
  {
    id: 5,
    name: "Bukit Bangkirai",
    city: "Balikpapan",
    category: "Ekowisata",
    description:
      "Destinasi ekowisata di tengah hutan dipterocarp dataran rendah. Nikmati sensasi canopy bridge setinggi 30 meter yang menghubungkan pucuk pohon-pohon bangkirai berusia ratusan tahun.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkJxnnFtC9s5VS-x_V29ei6eMO--Cxoob-AHMANB_rA&s=10",
    lat: -1.1667,
    lng: 117.1167,
    ticket: "Rp 35.000",
    hours: "08.00 – 17.00 WITA",
    website: "https://bukitbangkirai.com",
  },
  {
    id: 6,
    name: "Kepulauan Maratua",
    city: "Berau",
    category: "Bahari",
    description:
      "Atol berbentuk tapal kuda dengan laguna biru kehijauan yang tenang. Maratua adalah surga selam dengan visibilitas hingga 30 meter, dihuni hiu karang, barracuda, dan kawanan penyu.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMa2jFvdbaJa0wwwP7RqJKvabtgkrC_QYOl29hyL1DQ&s=10",
    lat: 2.1833,
    lng: 118.6167,
    ticket: "Rp 30.000",
    hours: "Sepanjang hari",
    website: "https://www.indonesia.travel/gb/en/destinations/kalimantan/maratua",
  },
  {
    id: 7,
    name: "Kebun Raya Unmul Samarinda",
    city: "Samarinda",
    category: "Ekowisata",
    description:
      "Kebun raya seluas 300 ha di jantung kota Samarinda. Koleksi ribuan spesies flora Kalimantan, danau buatan, dan pusat penelitian botani yang juga menjadi paru-paru kota.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPPcaPQK9v-95iFPfPZ8GVQXiAVfo-cpgC_rb5PmDmaw&s=10",
    lat: -0.4689,
    lng: 117.1114,
    ticket: "Rp 10.000",
    hours: "07.00 – 17.00 WITA",
    website: "https://samarinda.go.id",
  },
  {
    id: 8,
    name: "Museum Mulawarman",
    city: "Tenggarong",
    category: "Budaya",
    description:
      "Bekas istana Kesultanan Kutai Kartanegara yang kini menjadi museum. Menyimpan koleksi artefak kerajaan tertua di Nusantara, termasuk prasasti Yupa berusia 1.500 tahun.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4bTDmHJEzwK0rWuj43WZjFzrQB7uZOsqWWQDJEssOA&s=10",
    lat: -0.4461,
    lng: 117.1319,
    ticket: "Rp 15.000",
    hours: "08.00 – 16.00 WITA",
    website: "https://kukar.go.id",
  },
  {
    id: 9,
    name: "Sungai Mahakam",
    city: "Samarinda",
    category: "Budaya",
    description:
      "Arteri kehidupan Kalimantan Timur yang membelah Samarinda. Jelajahi kampung-kampung Dayak, pasar terapung, dan habitat pesut Mahakam—lumba-lumba air tawar yang langka dan endemik.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJp_5hE5JW0AyobAVTUwxIn1KF-SIN4r6t0eHdgNKyzA&s=10",
    lat: -0.5022,
    lng: 117.1536,
    ticket: "Gratis",
    hours: "Sepanjang hari",
    website: "https://samarinda.go.id",
  },
  {
    id: 10,
    name: "Air Terjun Tanah Merah",
    city: "Samarinda",
    category: "Alam",
    description:
      "Air terjun bertingkat di sela hutan hijau sekitar Samarinda. Dinamai dari tanah liat merah di sekitarnya yang menciptakan kontras warna dramatis dengan debit air yang deras.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREr9yvP4O6O_pP9hlgnDM2tcryDt3BXbI_T-nT7meJYw&s=10",
    lat: -0.5833,
    lng: 117.2167,
    ticket: "Rp 10.000",
    hours: "08.00 – 17.00 WITA",
    website: "https://samarinda.go.id",
  },
  {
    id: 11,
    name: "Gunung Beratus",
    city: "Kutai Barat",
    category: "Alam",
    description:
      "Puncak tertinggi di Kalimantan Timur yang menawarkan trekking menantang menembus hutan primer. Di puncak, hamparan awan dan lanskap Kalimantan yang tak terbatas menjadi hadiah perjalanan.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcr6MKtArWOti2kpESeFkoBuw4Z46UgD0UChEjXeRdgg&s=10",
    lat: -0.6333,
    lng: 115.9167,
    ticket: "Rp 20.000",
    hours: "24 jam (pendakian terencana)",
    website: "https://kutaibarat.go.id",
  },
  {
    id: 12,
    name: "Taman Nasional Kutai",
    city: "Kutai Timur",
    category: "Margasatwa",
    description:
      "Kawasan konservasi seluas 198.629 ha yang menjadi benteng terakhir hutan hujan tropis Borneo. Rumah bagi orang utan, bekantan, dan lebih dari 300 spesies burung.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDkkqtDFJjt9LWKVYJaU36PZq7oXZTItUnv9d6wAF59A&s=10",
    lat: 0.55,
    lng: 117.55,
    ticket: "Rp 25.000",
    hours: "08.00 – 16.00 WITA",
    website: "https://tnkutai.menlhk.go.id",
  },
];

const cities = ["Semua", "Balikpapan", "Samarinda", "Berau", "Tenggarong", "Kutai Barat", "Kutai Timur"];

const categories = ["Semua", "Bahari", "Alam", "Margasatwa", "Ekowisata", "Budaya"];

const translations = {
  id: {
    navDest: "Destinasi",
    navAbout: "Tentang",
    heroEyebrow: "Provinsi Kalimantan Timur",
    heroTitle: "Temukan Sisi Borneo yang Jarang Terlihat",
    heroSubtitle:
      "KaltimTrip merangkum destinasi terbaik di Kalimantan Timur — dari laut Derawan sampai rimba Bukit Bangkirai.",
    heroBtn: "Jelajahi Destinasi ↓",
    destTitle: "Destinasi Unggulan",
    destSubtitle:
      "Pilih destinasi yang sesuai dengan semangat petualanganmu — dari belantara hutan hingga keindahan bawah laut.",
    filterCity: "Filter Kota:",
    filterCat: "Kategori:",
    ticketLabel: "Tiket Masuk",
    hoursLabel: "Jam Operasional",
    websiteLabel: "Kunjungi Website",
    footerTagline:
      "Sebagai platform wisatawan, aku merekomendasikan tempat-tempat terbaik untuk menjelajahi destinasi di Kalimantan Timur.",
    footerContact: "Kontak Kami",
    footerConnect: "Koneksi",
    footerEmail: "Email",
    footerPhone: "Tlp",
    footerWhatsapp: "WA",
    footerCopyright: "© 2026 Hak Milik Mahasiswa Jurusan Sistem Informasi ITK. All rights reserved.",
    noResult: "Tidak ada destinasi yang ditemukan.",
    allCities: "Semua",
    allCats: "Semua",
  },
  en: {
    navDest: "Destinations",
    navAbout: "About",
    heroEyebrow: "East Kalimantan Province",
    heroTitle: "Discover the Side of Borneo Rarely Seen",
    heroSubtitle:
      "KaltimTrip curates the best destinations in East Kalimantan — from Derawan's seas to the jungles of Bukit Bangkirai.",
    heroBtn: "Explore Destinations ↓",
    destTitle: "Featured Destinations",
    destSubtitle:
      "Choose a destination that matches your adventurous spirit — from deep wilderness to spectacular underwater worlds.",
    filterCity: "Filter City:",
    filterCat: "Category:",
    ticketLabel: "Ticket Price",
    hoursLabel: "Opening Hours",
    websiteLabel: "Visit Website",
    footerTagline:
      "As a tourism platform, we recommend the best places to explore destinations across East Kalimantan.",
    footerContact: "Contact Us",
    footerConnect: "Connect",
    footerEmail: "Email",
    footerPhone: "Phone",
    footerWhatsapp: "WA",
    footerCopyright: "© 2026 Property of Information Systems Students ITK. All rights reserved.",
    noResult: "No destinations found.",
    allCities: "All",
    allCats: "All",
  },
};
