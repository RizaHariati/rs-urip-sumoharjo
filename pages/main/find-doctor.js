import {
  faCircle,
  faCircleDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import SideMenu from "../components/SideMenu";
import doctordb from "../../data/doctordb.json";
const allSpecialization = [...new Set(doctordb.map((doctor) => doctor.poli))];
const FindDoctor = () => {
  const [searchName, setSearchName] = useState(false);
  const [specialization, setSpecialization] = useState("");
  const [specializationList, setSpecializationList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSpecialization(e.target.value);
  };

  useEffect(() => {
    if (specialization) {
      const doctors = allSpecialization.filter((doctor, index) => {
        return doctor.toLowerCase().includes(specialization.toLowerCase());
      });

      setSpecializationList(doctors);
    }
  }, [specialization]);

  return (
    <div className="main-pages-container">
      <div className="h-full w-full bg-clrBaseLight">
        {/* ---------------------------- header ---------------------------- */}

        <div className="w-fit py-2 px-10 text-clrTextDark">
          <h2 className="py-2 border-b-2 border-b-clrBorder ">Cari Dokter</h2>
          <h5>
            Temukan Jadwal Dokter sesuai kebutuhan medis Anda berdasarkan
            nama/spesialisasi
          </h5>
        </div>
        {/* ---------------------------- header ---------------------------- */}

        <div className="px-10 py-5">
          <div>
            <div className="flex space-x-5 mb-5">
              <button
                onClick={() => {
                  setSearchName(!searchName);
                }}
                className={
                  searchName
                    ? " bg-clrPrimaryMedium logo-btn"
                    : " bg-clrPrimaryDark  logo-btn"
                }
              >
                <FontAwesomeIcon
                  icon={searchName ? faCircle : faCircleDot}
                  className="mr-3"
                />
                Berdasarkan Spesialisasi
              </button>

              <button
                onClick={() => {
                  setSearchName(!searchName);
                }}
                className={
                  !searchName
                    ? " bg-clrPrimaryMedium logo-btn"
                    : " bg-clrPrimaryDark  logo-btn"
                }
              >
                <FontAwesomeIcon
                  icon={!searchName ? faCircle : faCircleDot}
                  className="mr-3"
                />
                Berdasarkan Nama
              </button>
            </div>
            <div className="relative">
              {!searchName && (
                <div className=" flex rounded-full overflow-hidden shadow-sm ">
                  <input
                    name="specialization"
                    value={specialization || ""}
                    id="specialization"
                    placeholder="Cari berdasarkan spesialisasi dokter..."
                    className="w-full p-2 px-5 h-10 outline-none"
                    onChange={(e) => handleChange(e)}
                  />
                  <button className="w-14 h-10 bg-clrPrimaryDark text-clrBaseLight">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              )}

              {searchName && (
                <div className="flex rounded-full overflow-hidden shadow-sm">
                  <input
                    type="text"
                    placeholder="Cari nama"
                    className="w-full p-2 px-5 h-10"
                  />
                  <button className="w-14 h-10 bg-clrPrimaryDark text-clrBaseLight">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              )}
              {specializationList.length > 0 && (
                <div className="absolute flex flex-col">
                  {specializationList.map((item, index) => {
                    return (
                      <button key={index} className="text-left">
                        <p>{item}</p>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <SideMenu />
    </div>
  );
};

export default FindDoctor;
