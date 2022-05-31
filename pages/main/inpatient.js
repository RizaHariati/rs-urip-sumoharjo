import {
  faCheck,
  faCheckCircle,
  faInfoCircle,
  faMoneyBillTransfer,
  faMoneyBillWave,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import data_inap from "../../data/data_inap.json";

const Inpatient = () => {
  const [openInfo, setOpenInfo] = useState("");
  const [indexCard, setIndexCard] = useState(null);

  const handleClick = (id) => {
    if (id === indexCard) {
      setOpenInfo(true);
    } else {
      setOpenInfo(id);
    }
  };
  return (
    <div className="main-pages-container">
      <div className="main-page">
        {/* ---------------------------- header ---------------------------- */}

        <div className="w-fit py-2 px-10 text-clrTextDark">
          <h5 className="text-red-600">
            Jam besuk : Pagi Pukul 11.00 - 12.00 Wib || Sore Pukul 17.00 - 18.00
            Wib
          </h5>
          <h2 className="py-2 border-b-2 border-b-clrBorder ">Rawat Inap</h2>
          <h5>
            Untuk pendaftaran rawat inap dan pemesanan kamar silahkan
            menghubungi <FontAwesomeIcon icon={faPhone} /> 0811 7270 537
          </h5>
        </div>
        {/* ---------------------------- header ---------------------------- */}

        <div className="px-10 py-5">
          {/* --------------------------- subheader -------------------------- */}

          <div className="grid grid-cols-2 space-x-5 place-items-end ">
            <p className="text-right">
              Ruang Rawat Inap RS Urip Sumoharjo terbagi atas ruang perawatan
              dewasa, ruang perawatan anak, ruang perawatan kebidanan, ruang
              isolasi dan ruang rawat intensif. Rumah Sakit Jakarta memiliki
              beberapa jenis ruang perawatan yang sesuai dengan kebutuhan dan
              kondisi keuangan Anda.
            </p>
            <Image
              src="/images/doctorvisit.jpg"
              height={200}
              width={400}
              className="object-cover"
            />
          </div>
          {/* --------------------------- subheader -------------------------- */}
          <div>
            <h2 className="py-2 border-b-2 border-b-clrBorder text-right my-10 ">
              Pilihan Kamar
            </h2>
            <div className="flex flex-col space-y-5  items-center justify-center">
              {data_inap.map((room) => {
                const { id, kelas, pasien, harga, img, fasilitas } = room;
                return (
                  <div key={id} onClick={() => handleClick(id)}>
                    <div className="inpatient-room">
                      <div className="inpatient-room-info">
                        <h4>{kelas}</h4>
                        <p>
                          <FontAwesomeIcon
                            icon={faUsers}
                            className="text-clrPrimaryMedium mr-5 text-sm"
                          />
                          {`Jumlah pasien/ruangan ${pasien} orang`}
                        </p>
                        <p>
                          <FontAwesomeIcon
                            icon={faMoneyBillWave}
                            className="text-clrPrimaryMedium mr-5 text-sm"
                          />
                          {`Harga kamar/malam : Rp ${harga}`}
                        </p>
                        <p className="inpatient-info text-sm">
                          <FontAwesomeIcon
                            icon={faInfoCircle}
                            className="text-clrPrimaryMedium mr-5 text-sm"
                          />
                          tidak termasuk biaya pengobatan/pemeriksaan
                        </p>
                        <button className=" text-clrPrimaryDark hover:text-clrTextMedium mt-5 uppercase text-sm">
                          Fasilitas yang disediakan...
                        </button>
                      </div>
                      <Image
                        src={`/images/inpatient-rooms/${img}`}
                        height={200}
                        width={300}
                        className="object-cover"
                      />

                      {openInfo === id && (
                        <div
                          className="col-span-2 grid grid-cols-2 px-10 py-5"
                          style={{ borderTop: "1px solid lightGray" }}
                        >
                          {fasilitas.map((item, index) => {
                            return (
                              <div key={index}>
                                <p>
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-clrPrimaryMedium mr-2"
                                  />
                                  {item}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <SideMenu />
    </div>
  );
};

export default Inpatient;
