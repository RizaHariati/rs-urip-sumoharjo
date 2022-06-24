import {
  faBed,
  faCalendarCheck,
  faFileLines,
  faGifts,
  faSyringe,
  faUserDoctor,
  faBars,
  faBriefcase,
  faHomeAlt,
  faMosque,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";
export const data_menu = [
  {
    id: "1",
    title: "Cari Dokter",
    href: "/main/find-doctor",
    icon: faUserDoctor,
    info: "Dapatkan informasi jadwal dokter anda",
  },

  {
    id: "2",
    title: "Daftar Online",
    href: "/main/schedule-appointment",
    icon: faCalendarCheck,
    info: "Buat janji temu dengan dokter/ mendaftar kefasilitas kami secara online",
  },
  {
    id: "3",
    title: "Fasilitas dan Klinik",
    href: "/main/services",
    icon: faSyringe,
    info: " Temukan jadwal fasilitas dan klinik yang anda butuhkan",
  },
  {
    id: "4",
    title: "Rawat Inap",
    href: "/main/inpatient",
    icon: faBed,
    info: "Kelas rawat inap beserta fasilitas penunjang",
  },
  {
    id: "5",
    title: "Paket Kesehatan",
    href: "/main/special-package",
    icon: faGifts,
    info: "Berbagai paket kesehatan sesuai kebutuhan anda",
  },
  {
    id: "6",
    title: "Informasi Pasien",
    href: "/main/patient-data",
    icon: faFileLines,
    info: "Akses info medis pasien secara online",
  },
];

export const menu_item = [
  {
    id: "1",
    title: "Tentang RS Urip Sumoharjo",
    href: "/hospital/about",
    icon: faMosque,
  },
  {
    id: "2",
    title: "Hak dan Kewajiban Pasien",
    href: "/hospital/termandconditions",
    icon: faFileLines,
  },
  {
    id: "3",
    title: "Lowongan Kerja",
    href: "/hospital/jobs",
    icon: faBriefcase,
  },
  {
    id: "4",
    title: "Hubungi Kami",
    href: "/hospital/contactus",
    icon: faEnvelopesBulk,
  },
];
