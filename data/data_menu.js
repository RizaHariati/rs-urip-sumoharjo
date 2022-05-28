const main_menu = [
  {
    id: "menu0",
    url: "dokter",
    title: "cari dokter",
    icon: "dokter",
    class: "dokter",
  },
  {
    id: "menu1",
    url: "daftarPasien",
    title: "daftar pasien",
    icon: "daftar",
    class: "daftar-pasien",
  },

  {
    id: "menu2",
    url: "rawatInap",
    title: "rawat inap",
    icon: "pasien",
    class: "rawat-inap",
  },
  {
    id: "menu3",
    url: "fasilitas",
    title: "fasilitas",
    icon: "fasilitas",
    class: "pelayanan",
  },
  {
    id: "menu4",
    url: "paketkesehatan",
    title: "paket kesehatan",
    icon: "discount",
    class: "paketkesehatan",
  },
  {
    id: "menu5",
    url: "dataPasien",
    title: "Data Pasien",
    icon: "data",
    class: "data-pasien",
  },
];

const nav_menu = [
  {
    index: "link01",
    link: "Tentang Urip Soemoharjo",
    path: "/about",
  },
  {
    index: "link02",
    link: "Hak dan Kewajiban Pasien",
    path: "/hakkewajiban",
  },
  {
    index: "link03",
    link: "Lowongan Kerja",
    path: "/lowongan",
  },
];

const home_slider = [
  {
    id: 1,
    index: "pro1",
    img: "urip1.jpg",
    title1: "RS Urip Sumoharjo",
    title2: "Bandarlampung",
    text: " Memberikan pelayanan kesehatan secara profesional dan prima kepada seluruh masyarakat.",
    color: "#fefefc",
  },
  {
    id: 2,
    index: "pro2",
    img: "pcr-test.jpg",
    title1: "Swab PCR",
    title2: "Hanya : Rp 525.000",
    harga: "Rp.620.000",
    text: "Mendukung keputusan Presiden RI Ir.H. Joko Widodo",
    color: "var(--dark1)",
  },
  {
    id: 3,
    index: "pro3",
    img: "VaksinasiCOVID.jpg",
    title1: "Jadwal pemberian",
    title2: "Vaksin Gratis",
    harga: "Rp.220.000",
    text: "Saat ini tersedia Vaksin Pfeizer dan Sinovac, setiap hari senin s/d jum'at jam 08.00-15.00. Hubungi (0721)700232 untuk melakukan penjadwalan",
    color: "var(--dark1)",
  },
  {
    id: 4,
    index: "pro4",
    img: "isoman.jpg",
    title1: "Paket Isolasi Mandiri",
    title2: "Harga mulai Rp. 6.000.000/14 hari",
    harga: "Rp.10.000.000",
    text: "Isolasi di rumah dengan perawatan dokter umum, spesialis lengkap dengan semua obat-obatan, didukung oleh pemeriksaan laboratorium ",
    color: "#fefefc",
  },
  {
    id: 5,
    index: "pro5",
    img: "ct-scan.jpg",
    title1: "Paket Pemeriksaan Kesehatan",
    title2: "Harga mulai dari Rp. 451.414",

    text: "Tubuh seperti Kendaraan, perlu pemeriksaan secara rutin",
    color: "black",
  },
  {
    id: 6,
    img: "home1.jpg",
    title1: "RS Urip Sumoharjo",
    title2: "Bandarlampung",
    text: " Memberikan pelayanan kesehatan secara profesional dan prima kepada seluruh masyarakat.",
    color: "var(--dark1)",
  },
];
export { main_menu, nav_menu, home_slider };
