const data_pelayanan = [
  {
    id: "lay1",
    title: "Poliklinik",
    img: "admin",
    hari: "Senin s/d Sabtu",
    jam: "08:00 s.d 21:00 ",
    telp: [
      { index: 1, nomor: "Poliklinik 1 : 0811 7257 438 " },
      { index: 2, nomor: "Poliklinik 2 : 0811 7257 430 " },
    ],
    info: [
      {
        text: "Poliklinik kami diperkuat dengan 16 bidang spesialisasi kedokteran siap memenuhi kebutuhan anda menyelenggarakan Pelayanan Kesehatan yang bermutu, ramah dan profesional",
      },
      {
        text: "Menyelenggarakan pelayanan kesehatan yang berorientasi pada perkembangan tekhnologi dengan berbagai fasilitas terkini",
      },
    ],
  },
  {
    id: "lay2",
    title: "Rawat Jalan / Gawat Darurat",
    img: "instalasi-gawat-darurat",
    hari: "Senin s/d Sabtu",
    jam: "08:00 s.d 21:00 ",
    telp: [{ index: 1, nomor: " 0811 7257 438 " }],

    info: [
      {
        text: "Unit Gawat Darurat (24 jam)",
      },
      {
        text: "Poli Bedah umum",
      },
    ],
  },
  {
    id: "lay3",
    title: "Fisioterapi",
    img: "fisioterapi",
    hari: "Senin s/d Jum'at",
    jam: "08:00 s.d 20:00 ",
    telp: [{ index: 1, nomor: " 0811 7257 438 " }],
    info: [
      {
        text: "Mengembalikan fungsi tubuh setelah terkena penyakit atau cedera. ",
      },
    ],
  },
  {
    id: "lay4",
    title: "Hemodialisa",
    img: "hemodialisa",
    hari: "Senin s/d Sabtu",
    jam: "08:00 s.d 21:00 ",
    telp: [{ index: 1, nomor: "0811 7270 538 " }],
    info: [
      {
        text: "Saat ini kami memiliki 33 unit mesin cuci darah yang digunakan untuk melayani pasien reguler maupun pasien CITO.",
      },
      {
        text: "Hemodialisa adalah metode pencucian darah dengan membuang cairan berlebih dan zat-zat yang berbahaya bagi tubuh melalui alat dialysis untuk menggantikan fungsi ginjal yang rusak.",
      },
    ],
  },
];

const data_fasilitas = [
  {
    id: "fas1",
    title: "Magnetic resonance imaging (MRI)",
    img: "mri5",
    info: [
      {
        text: "Merupakan pemeriksaan organ tubuh yang dilakukan dengan menggunakan teknologi magnet dan gelombang radio.",
      },
    ],
    kategori: "unggulan",
  },
  {
    id: "fas2",
    title: "Vitrektomy",
    img: "vitrektomy",
    info: [
      {
        text: "Vitrektomy adalah operasi untuk rnenghilangkan badan kaca atau vitreus (jelly bening seperti kaca) dari dalam bola mata.",
      },
    ],
    kategori: "unggulan",
  },
  {
    id: "fas3",
    title: "Endoscopy",
    img: "endoscopy_1",
    info: [
      {
        text: "Mesin endoscopy digunakan untuk tindakan endoscopy diagnostic baik saluran cerna bagian atas maupun bagian bawah.",
      },
    ],
    kategori: "unggulan",
  },
  {
    id: "fas4",
    title: "CT Scan 16 Slice",
    img: "ct-scan",
    info: [
      {
        text: "Fasilitas radiologi yang canggih ditangani oleh tenaga medis dan paramedis yang terlatih dan berpengalaman di bidangnya  ",
      },
    ],
    kategori: "poliklinik",
  },
  {
    id: "fas5",
    title: "Instalasi Gawat Darurat (24 Jam)",
    img: "icu",
    info: [
      {
        text: "Menyediakan penanganan awal bagi pasien yang menderita sakit dan cedera, yang dapat mengancam kelangsungan hidupnya.",
      },
      {
        text: "Selalu siaga dokter dari berbagai spesialisasi bersama sejumlah perawat dan dokter jaga, memberikan pelayanan awal 24 jam sehari, 7 hari seminggu.",
      },
    ],
    kategori: "rawat-jalan",
  },
  {
    id: "fas6",
    title: "Poli. Bedah Umum",
    img: "bedahUmum",
    info: [
      {
        text: "Menyediakan Ahli bedah umum dapat mendiagnosa beberapa jenis penyakit, terkait dengan perut dan organ-organ yang terhubung. ",
      },
      { text: "Juga mengobati pasien luka bakar" },
    ],
    kategori: "rawat-jalan",
  },
  {
    id: "fas7",
    title: "Endoscopy THT",
    img: "endoscopy-tht",
    info: [
      {
        text: "Mendeteksi penyakit yang terjadi pada organ yang terkait dengan telinga, hidung, dan tenggorokan. Ini termasuk dengan bronkus, esofagus, dan laring. ",
      },
      {
        text: "Juga digunakan untuk melakukan pemeriksaan meluruh pada sinus dan polip",
      },
    ],
    kategori: "poliklinik",
  },
  {
    id: "fas8",
    title: "Oto Acoustic Emission OAE",
    img: "oae_1",
    info: [
      {
        text: "Skrining (deteksi dini) atau tes pendengaran bayi baru lahir yang menangkap emisi pada koklea. ",
      },
    ],
    kategori: "poliklinik",
  },
  {
    id: "fas9",
    title: "Audiometri",
    img: "audiometri",
    info: [
      {
        text: "Audiometri adalah pemeriksaan untuk mengevaluasi fungsi pendengaran.  ",
      },
    ],
    kategori: "poliklinik",
  },
  {
    id: "fas10",
    title: "Timpanometri",
    img: "timponometri",
    info: [
      {
        text: "Timpanometri adalah pemeriksaan telinga yang berguna untuk menentukan keadaan di telinga tengah.  ",
      },
    ],
    kategori: "poliklinik",
  },
  {
    id: "fas11",
    title: "Brain Evoked Response Auditory (BERA)",
    img: "bera",
    info: [
      {
        text: "Pemeriksaan untuk melihat ambang dengar pada telinga anak.  ",
      },
    ],
    kategori: "poliklinik",
  },
  {
    id: "fas12",
    title: "UltraSonoGrafi (USG 3D)",
    img: "usg",
    info: [
      {
        text: "Digunakan dalam pemeriksaan organ abdomen (ginjal, buli-buli, prostat, hepar, lien, gallblader, payudara dan pembuluh darah pada extremitas atas I bawah)  ",
      },
    ],
    kategori: "poliklinik",
  },
  {
    id: "fas13",
    title: "Digital Radiography",
    img: "dradiologi",
    info: [
      {
        text: "Radiografi digital adalah bentuk radiografi yang menggunakan pelat yang peka terhadap sinar x untuk secara langsung menangkap data selama pemeriksaan pasien, segera mentransfernya ke sistem komputer tanpa menggunakan kaset perantara.",
      },
    ],
    kategori: "poliklinik",
  },

  {
    id: "fas14",
    title: "Echo Cardiogram (USG Jantung)",
    img: "echocardiogram",
    info: [
      {
        text: "Melihat gelombang gelombang frekuensi yang disebut ultrasound dari bilik-bilik jantung. ",
      },
    ],
    kategori: "poliklinik",
  },

  {
    id: "fas15",
    title: "Farmasi",
    img: "farmasi",
    info: [
      {
        text: "Dibawah pimpinan apoteker yang kompeten siap menyediakan obat-obatan untuk unit perawatan dan bidang – bidang lain",
      },
    ],
    kategori: "penunjang-klinik",
  },

  {
    id: "fas16",
    title: "Instalasi Gizi",
    img: "instalasi-gizi",
    info: [
      {
        text: "Memberikan pelayanan gizi yang penting untuk mempercepat proses penyembuhan terhadap pasien",
      },
    ],
    kategori: "penunjang-klinik",
  },

  {
    id: "fas17",
    title: "Ruang Operasi",
    img: "ruang-operasi",
    info: [
      {
        text: "Ruang Operasi RS Urip Sumoharjo adalah salah satu fasilitas rumah sakit yg dirancang sesuai dengan standar akreditasi RS dengan konsep lingkungan yg aman dan nyaman yang dilengkapi dengan fasilitas modern serta tim dokter dan tenaga paramedis yg profesional dan kompeten.",
      },
    ],
    kategori: "penunjang-klinik",
  },
];
export { data_pelayanan, data_fasilitas };
