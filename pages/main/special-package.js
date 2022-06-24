import {
  faCheck,
  faMinusCircle,
  faMoneyBillWave,
  faPhone,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SideMenu from "../../components/SideMenu";
import data_paket from "../../data/data_paketkesehatan.json";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  handleReferenceApplication,
  handleRequestApplication,
} from "../../slice/patientSlice";
import Head from "next/head";
const SpecialPackage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [openInfo, setOpenInfo] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (id) => {
    if (id === selectedIndex) {
      setOpenInfo(true);
    } else {
      setOpenInfo(id);
    }
  };
  return (
    <div className="main-pages-container">
      <Head>
        <title>rs-uripsumoharjo || Paket</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-page">
        {/* ---------------------------- header ---------------------------- */}

        <div className="w-fit my-3 md:my-5 px-5 md:px-10 text-clrTextDark">
          <h2 className="border-b-2 mb-2 md:mb-5 border-b-clrBorder">
            Paket Pemeriksaan
          </h2>
          <h5 className="font-normal md:font-semibold">
            Berikut adalah bundel paket kami, yang ditawarkan dengan harga yang
            menarik. Pendaftaran dibuka setiap hari bisa melalui online maupun
            menghubungi <FontAwesomeIcon icon={faPhone} /> 0811 7270 537
          </h5>
        </div>
        {/* ---------------------------- header ---------------------------- */}

        <div className="px-0 md:px-10">
          {/* --------------------------- subheader -------------------------- */}

          <div className="">
            <div className="special-package-image mb-5 "></div>
          </div>
          {/* --------------------------- subheader -------------------------- */}
          <div className=" w-full mb-5">
            <h2 className="mb-5 border-b-2 border-b-clrBorder text-right mx-5 md:mx-0">
              Pilihan Paket
            </h2>
            <div className="">
              {data_paket.map((item_paket) => {
                const { id, title, price, pemeriksaan, laboratorium } =
                  item_paket;
                return (
                  <div
                    key={id}
                    className="w-full mb-1 md:mb-5 bg-clrBaseLightHover px-5 rounded-sm shadow-sm "
                  >
                    <div
                      className="grid grid-cols-3 items-start md:items-center w-full border-b-clrBorder py-3 md:py-5"
                      style={
                        openInfo === id
                          ? {
                              borderBottomWidth: "1px",
                              gridTemplateColumns: "4fr 4fr 1fr",
                            }
                          : {
                              borderBottomWidth: "0px",
                              gridTemplateColumns: "4fr 4fr 1fr",
                            }
                      }
                    >
                      <h4 className="text-base">{title}</h4>
                      <p className="text-xs md:text-sm leading-4">
                        <FontAwesomeIcon
                          icon={faMoneyBillWave}
                          className="text-clrPrimaryMedium mr-2 text-sm"
                        />
                        {`Harga : ${price}`}
                      </p>
                      <p
                        className="text-right w-full text-md cursor-pointer"
                        onClick={() => handleClick(id)}
                      >
                        {openInfo === id ? (
                          <FontAwesomeIcon
                            icon={faMinusCircle}
                            className="text-clrPrimaryMedium text-md "
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faPlusCircle}
                            className="text-clrPrimaryMedium text-md "
                          />
                        )}
                      </p>
                    </div>
                    {openInfo === id && (
                      <>
                        <div
                          className="w-full border-b-clrBorder py-5"
                          style={{ borderBottomWidth: "1px" }}
                        >
                          <h5>Pemeriksaan</h5>
                          {pemeriksaan.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="grid"
                                style={{ gridTemplateColumns: "1fr 12fr" }}
                              >
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  className="text-clrPrimaryMedium "
                                />
                                <p className="text-sm md:text-base">{item}</p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="w-full py-5">
                          <h5>Laboratorium</h5>
                          {laboratorium.map(({ id, info }) => {
                            return (
                              <div
                                key={id}
                                className="grid"
                                style={{ gridTemplateColumns: "1fr 12fr" }}
                              >
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  className="text-clrPrimaryMedium "
                                />
                                <p className=" text-sm md:text-base leading-4 md:leading-5 mb-1">
                                  {info}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="w-full h-10 mb-5 text-right">
                          <button
                            onClick={() => {
                              dispatch(
                                handleReferenceApplication({
                                  purpose: "laboratorium",
                                  location: "facility",
                                })
                              );

                              router.push("/main/schedule-appointment");
                            }}
                            className="btn w-fit bg-clrPrimaryDark mx-10 mb-5"
                          >
                            Mendaftar
                          </button>
                        </div>
                      </>
                    )}
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

export default SpecialPackage;
