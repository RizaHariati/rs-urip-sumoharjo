import {
  faCaretDown,
  faCheck,
  faInfoCircle,
  faMoneyBillWave,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Head from "next/head";
import React, { useState } from "react";
import SideMenu from "../../components/SideMenu";
import data_inap from "../../data/data_inap.json";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { handleReferenceApplication } from "../../slice/patientSlice";

const Inpatient = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [openInfo, setOpenInfo] = useState("");

  const handleClick = (id) => {
    if (id === null) {
      setOpenInfo(true);
    } else {
      setOpenInfo(id);
    }
  };
  return (
    <div className="main-pages-container">
      <Head>
        <title>rs-uripsumoharjo || Rawat Inap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-page">
        {/* ---------------------------- header ---------------------------- */}

        <div className="w-fit my-3 md:my-5 px-5 md:px-10 text-clrTextDark">
          <h5 className="text-red-600">
            Jam besuk : Pagi Pukul 11.00 - 12.00 Wib || Sore Pukul 17.00 - 18.00
            Wib
          </h5>
          <h2 className="border-b-2 mb-2 md:mb-5 border-b-clrBorder">
            Rawat Inap
          </h2>
          <h5>
            Untuk pendaftaran rawat inap dan pemesanan kamar silahkan
            menghubungi <FontAwesomeIcon icon={faPhone} /> 0811 7270 537
          </h5>
        </div>
        {/* ---------------------------- header ---------------------------- */}

        <div className="mt-2 md:mt-5 ">
          {/* --------------------------- subheader -------------------------- */}

          <div className=" px-5 sm:px-10 grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5 place-items-center">
            <p className="text-left sm:text-right  mb-2 md:mb-5  ">
              Ruang Rawat Inap RS Urip Sumoharjo terbagi atas ruang perawatan
              dewasa, ruang perawatan anak, ruang perawatan kebidanan, ruang
              isolasi dan ruang rawat intensif. Rumah Sakit Jakarta memiliki
              beberapa jenis ruang perawatan yang sesuai dengan kebutuhan dan
              kondisi keuangan Anda.
            </p>
            <div className="w-full h-52 overflow-hidden object-center object-cover rounded-sm shadow-sm row-start-1">
              <Image
                src="/images/doctorvisit.jpg"
                height={300}
                width={500}
                alt="doctor visit"
                className="object-cover object-center "
              />
            </div>
          </div>
          {/* --------------------------- subheader -------------------------- */}
          <div className="px-0 md:px-10">
            <h2 className="border-b-2 mb-2 md:mb-5 border-b-clrBorder text-right px-5 md:px-0">
              Pilihan Kamar
            </h2>
            <div
              className="flex flex-col gap-3 md:gap-5 items-center bg-clrBaseLight justify-center"
              id="inpatient-class-container"
            >
              {data_inap.map((room) => {
                const { id, kelas, pasien, harga, img, fasilitas } = room;
                return (
                  <div
                    key={id}
                    onClick={() => handleClick(id)}
                    id={`inpatient-${id}`}
                  >
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
                        <p className="inpatient-info ">
                          <FontAwesomeIcon
                            icon={faInfoCircle}
                            className="text-clrPrimaryMedium mr-5 text-sm"
                          />
                          tidak termasuk biaya pengobatan / pemeriksaan
                        </p>
                        <button className=" text-clrPrimaryDark hover:text-clrTextMedium mt-2 sm:mt-5 uppercase text-sm">
                          Fasilitas yang disediakan...
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            className="text-clrPrimaryMedium ml-10 text-lg"
                          />
                        </button>
                      </div>
                      <div className="object-cover object-center overflow-hidden row-start-1 w-full h-44 md:h-52 ">
                        <div
                          className="h-full w-full bg-cover bg-center "
                          style={{
                            backgroundImage: `url('/images/inpatient-rooms/${img}')`,
                          }}
                        ></div>
                      </div>
                      {openInfo === id && (
                        <div
                          id={`inpatient-${id}-facility`}
                          className="sm:col-span-2 grid grid-cols-2 gap-0 sm:gap-3 px-2 sm:px-10 py-2 sm:py-5 w-full  "
                          style={{ borderTop: "1px solid lightGray" }}
                        >
                          {fasilitas.map((item, index) => {
                            return (
                              <div key={index}>
                                <p className="text-sm sm:text-base h-4 sm:h-3">
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    className="text-clrPrimaryMedium sm:mr-2"
                                  />
                                  {item}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                      {openInfo === id && (
                        <button
                          onClick={() => {
                            dispatch(
                              handleReferenceApplication({
                                purpose: kelas,
                                location: "bed",
                              })
                            );

                            router.push("/main/schedule-appointment");
                          }}
                          className="btn w-fit bg-clrPrimaryDark mx-5 sm:mx-10 mb-5"
                        >
                          Mendaftar
                        </button>
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
