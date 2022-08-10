import {
  faCircle,
  faCircleDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";

import LoadingSpinner from "../../components/LoadingSpinner";
import DoctorList from "../../components/DoctorList";

const URL = "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/doctors/?";

const FindDoctor = ({ female, male, doctordb }) => {
  const [specializationList, setspecializationList] = useState([
    ...new Set(doctordb.map((doctor) => doctor.poli)),
  ]);
  const [keywords, setKeywords] = useState({
    isQueryName: false,
    status: "poli",
    key: "",
  });

  const [OpenList, setOpenList] = useState(false);
  const [doctorList, setDoctorList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchName = async (key, status) => {
    if (!key) {
      setOpenList(false);
      setspecializationList([]);
      setDoctorList([]);
    }
    setLoading(true);
    try {
      const response = await fetch(`${URL}${status}=${key}`);
      const data = await response.json();
      const { total, allDoctors } = data;
      if (total > 0) {
        setDoctorList(allDoctors);
        if (keywords.status === "poli") {
          setOpenList(true);
          setspecializationList([
            ...new Set(allDoctors.map((doctor) => doctor.poli)),
          ]);
        }
      } else {
        setOpenList(false);
        setspecializationList([]);
        setDoctorList([]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleSearch = async (item) => {
    setOpenList(false);
    setLoading(true);
    try {
      const response = await fetch(`${URL}poli=${item}`);
      const data = await response.json();
      const { allDoctors } = data;
      setDoctorList(allDoctors);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (!keywords.key) {
      setOpenList(false);
      setDoctorList([]);
      return;
    }
    if (keywords.key) {
      fetchName(keywords.key, keywords.status);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords]);

  const handleSubmit = () => {
    console.log("handlesubmit");
  };
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
              onClick={() => {
                setKeywords({
                  isQueryName: false,
                  status: "poli",
                  key: "",
                });
                setDoctorList([]);
                setspecializationList([
                  ...new Set(doctordb.map((doctor) => doctor.poli)),
                ]);
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
              onClick={() => {
                setKeywords({
                  isQueryName: true,
                  status: "nama",
                  key: "",
                });
                setDoctorList([]);
                setOpenList(false);
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
          <div className="relative bg-clrBaseLight">
            <form
              className="px-2 mb-3 md:mb-5 z-20 flex overflow-hidden mx-auto"
              style={{ minWidth: "300px" }}
            >
              <input
                autoComplete="false"
                name="search"
                value={keywords.key}
                id="search"
                placeholder={
                  keywords.isQueryName
                    ? "Nama dokter..."
                    : "Spesialisasi dokter..."
                }
                className="w-full p-2 px-5 h-10 outline-none shadow-sm  rounded-l-full mb-5"
                onChange={(e) => {
                  e.preventDefault();
                  setKeywords((prev) => ({ ...prev, key: e.target.value }));
                }}
                onFocus={() => {
                  if (keywords.status === "poli") {
                    setOpenList(true);
                  }
                }}
              />
              <button
                type="submit"
                className="w-14 h-10 rounded-r-full bg-clrPrimaryDark shadow-sm text-clrBaseLight"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>

            {/* ------------------------ search results ------------------------ */}
            {loading && <LoadingSpinner />}

            {OpenList && (
              <div className="list-menu">
                {specializationList.length > 0 &&
                  specializationList.map((item, index) => {
                    return (
                      <button
                        onClick={() => handleSearch(item)}
                        key={index}
                        className="text-left h-10 py-3
                        transition-all hover:border-b-2 hover:pl-1 hover:font-medium hover:text-clrTextMedium text-clrTextDark active:text-clrTextDark"
                      >
                        <p>{item}</p>
                      </button>
                    );
                  })}
              </div>
            )}

            {!OpenList && doctorList.length > 0 && (
              <DoctorList
                doctorlist={doctorList}
                male={male}
                female={female}
                handleSubmit={handleSubmit}
              />
            )}

            {!loading && keywords.key && doctorList.length < 1 && (
              <div className="w-full text-center mt-5">
                <h4>
                  {`Tidak ada ${keywords.status} dengan kata kunci ${keywords.key}`}
                  <span className=" capitalize">{name}</span>
                </h4>
              </div>
            )}

            {!keywords.key && <div className="find-doctor-image mb-10"></div>}
            {/* ------------------------ search results ------------------------ */}
          </div>
        </div>
      </div>

      <SideMenu />
    </div>
  );
};

export default FindDoctor;

export const getStaticProps = async () => {
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
