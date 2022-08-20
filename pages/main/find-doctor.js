import { faCircle, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import SideMenu from "../../components/SideMenu";

import FindDoctorInput from "../../components/FindDoctorInput";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAll,
  resetDoctors,
  setCategories,
  setKeywords,
} from "../../slice/doctorSlice";
const a = { b: { a: "helpme", "right-now": "no way", "la-ter": "helping" } };
const URL = "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/doctors/?";

const FindDoctor = ({ female, male, doctordb }) => {
  useEffect(() => {
    dispatch(resetAll());

    if (doctordb.length > 0) {
      dispatch(setCategories(doctordb));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(a.b["a"]);
  const { categories, keywords } = useSelector((state) => state.doctor);

  const dispatch = useDispatch();

  if (!categories || categories.length < 1) {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  } else {
    return (
      <div className="main-pages-container">
        <Head>
          <title>rs-uripsumoharjo || Cari Dokter</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="main-page">
          {/* ---------------------------- header ---------------------------- */}

          <div className="w-fit my-3 md:my-5 px-5 md:px-10 text-clrTextDark">
            <h2 className="border-b-2 mb-2 md:mb-5 border-b-clrBorder ">
              Cari Dokter
            </h2>
            <h5 className="my-3 md:my-5">
              Temukan Jadwal Dokter sesuai kebutuhan medis Anda berdasarkan
              nama/spesialisasi
            </h5>
          </div>
          {/* ---------------------------- header ---------------------------- */}

          <div className="px-0 md:px-10">
            <div className="flex justify-center space-x-2 md:space-x-5 mb-3 md:mb-5 ">
              {/* ---------------- set to berdasarkan spesialisasi --------------- */}
              <button
                id="specialization-search-btn"
                onClick={() => {
                  dispatch(resetDoctors());
                  dispatch(
                    setKeywords({
                      isQueryName: false,
                      status: "poli",
                      key: "",
                    })
                  );
                }}
                className={
                  keywords.isQueryName
                    ? " bg-clrPrimaryMedium logo-btn"
                    : " bg-clrPrimaryDark  logo-btn"
                }
              >
                <FontAwesomeIcon
                  icon={keywords.isQueryName ? faCircle : faCircleDot}
                  className="mr-1 lg:mr-3"
                />
                Berdasarkan Spesialisasi
              </button>
              {/* ---------------- set to berdasarkan nama --------------- */}
              <button
                id="name-search-btn"
                onClick={() => {
                  dispatch(resetDoctors());
                  dispatch(
                    setKeywords({
                      isQueryName: true,
                      status: "nama",
                      key: "",
                    })
                  );
                }}
                className={
                  !keywords.isQueryName
                    ? " bg-clrPrimaryMedium logo-btn"
                    : " bg-clrPrimaryDark  logo-btn"
                }
              >
                <FontAwesomeIcon
                  icon={!keywords.isQueryName ? faCircle : faCircleDot}
                  className="mr-1 lg:mr-3"
                />
                Berdasarkan Nama
              </button>
            </div>
            <FindDoctorInput female={female} male={male} />
          </div>
        </div>

        <SideMenu />
      </div>
    );
  }
};

export default FindDoctor;

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://randomuser.me/api/?gender=female&inc=picture&results=100"
  );
  const female = await res.json();

  const res2 = await fetch(
    "https://randomuser.me/api/?gender=male&inc=picture&results=100"
  );
  const male = await res2.json();

  const res3 = await fetch(`${URL}`);
  const doctordb = await res3.json();
  return {
    props: {
      female,
      male,
      doctordb: doctordb.allDoctors,
    },
  };
};
