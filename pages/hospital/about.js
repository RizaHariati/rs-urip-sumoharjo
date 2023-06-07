import {
  faCaretRight,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Head from "next/head";

const About = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <div className="about-container">
      <Head>
        <title>rs-uripsumoharjo | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-0 right-0 bg-hospital w-full h-full opacity-90 mix-blend-overlay -z-20 bg-cover bg-top transition-all"></div>

      <div className="about-grid">
        <div className="bg-transparent text-clrTextDark">
          <h2>Tentang Urip Sumoharjo</h2>
          <div className="my-2" style={{ height: "1px" }}></div>
          <p className="mb-5 font-normal md:text-lg leading-5 md:leading-6">
            RS Urip Sumoharjo Merupakan RS Swasta dengan semangat Islami, yang
            menyediakan pelayanan kesehatan untuk semua kalangan sebagai bagian
            dari rahmat untuk alam semesta.
          </p>
          <p className="mb-5 font-normal md:text-lg leading-5 md:leading-6 ">
            Telah beroperasi sejak tanggal 10 September 2001 dan sesuai dengan
            Keputusan Menteri Kesehatan RI No. 492/menkes/SK/V/2008, RS Urip
            Sumoharjo saat ini merupakan rumah sakit swasta utama setara tipe B
            Non Pendidikan
          </p>
        </div>
        <div className="bg-transparent">
          {data.map((item) => {
            const { id, info, title } = item;
            return (
              <div
                key={id}
                className=" bg-clrBaseLightHover rounded-sm mb-3 md:mb-5 bg-opacity-80 shadow-sm "
              >
                <div
                  className="flex items-center justify-between px-5 py-2 border-b-clrBorder"
                  style={
                    selected === id
                      ? { borderBottomWidth: "1px" }
                      : { borderbottomWidth: "0px" }
                  }
                >
                  <h4>{title}</h4>
                  <button
                    onClick={() => {
                      toggle(id);
                    }}
                  >
                    <FontAwesomeIcon
                      className=" text-clrTextMedium"
                      icon={selected === id ? faMinusCircle : faPlusCircle}
                    />
                  </button>
                </div>
                {selected === id && (
                  <ul className="p-5">
                    {info.map((infoItem, index) => {
                      return (
                        <li
                          key={index}
                          className="grid mb-2 "
                          style={{ gridTemplateColumns: "1fr 12fr" }}
                        >
                          <FontAwesomeIcon
                            icon={faCaretRight}
                            className="text-clrBorder mr-3"
                          />
                          <p className="leading-5"> {infoItem}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;

const data = [
  {
    id: 1,
    title: "Visi",
    info: ["Menjadi rumah sakit rujukan di Sumatera bagian Selatan."],
  },

  {
    id: 2,
    title: "Misi",
    info: [
      "Menyelenggarakan Pelayanan Kesehatan yang bermutu, ramah dan profesional",
      "Menyelenggarakan pelayanan kesehatan secara cepat, tepat, dan informatif",
      "Menyelenggarakan pelayanan kesehatan yang berorientasi pada perkembangan tekhnologi",
      "Mengembangkan profesionalisme Sumber Daya Manusia yang berkesinambungan hingga mampu bersaing ditingkat taraf nasional",
    ],
  },
  {
    id: 3,
    title: "Filosofi",
    info: ["Bekerja sambil beramal dan berobat sambil beramal"],
  },
  {
    id: 4,
    title: "Akreditasi",
    info: [
      "Status Akriditasi Tingkat Paripurna Nomor : KARS-SERT/ 670/ III/ 2017.",
    ],
  },
  {
    id: 5,
    title: "Penghargaan",
    info: [
      "Penghargaan dari Jamsostek sebagai RS yang tertib Administrasi dan pelayanan terbaik se Sumbagsel",
      "Penghargaan dari BPJS Ketenagakerjaan sebagai RS yang tertib dalam Pembayaran iuran",
    ],
  },
];
