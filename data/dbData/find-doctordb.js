import { faCircle, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import SideMenu from "../../components/SideMenu";

import FindDoctorInput from "../../components/FindDoctorInput";
import { useDispatch, useSelector } from "react-redux";
import { resetDoctors, setDoctor, setKeywords } from "../../slice/doctorSlice";
import LoadingSpinner from "../../components/LoadingSpinner";
const URL = "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/doctors/?";

const FindDoctor = () => {
  const { doctordb, keywords } = useSelector((state) => state.doctor);

  const dispatch = useDispatch();

  const fetchDoctor = async () => {
    try {
      const res3 = await fetch(URL);
      const doctordb = await res3.json();
      if (doctordb) {
        dispatch(setDoctor(doctordb.allDoctors));

        return;
      }
    } catch (error) {
      console.log(error);
    }

    return;
  };

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (doctordb.length < 1) {
        fetchDoctor();
      }
    }
    return () => {
      isMount = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (doctordb.length < 1) {
    return (
      <div>
        <LoadingSpinner />
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
            <FindDoctorInput />
          </div>
        </div>

        <SideMenu />
      </div>
    );
  }
};

export default FindDoctor;
