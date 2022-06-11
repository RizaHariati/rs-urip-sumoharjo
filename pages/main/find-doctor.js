import {
  faCalendarDays,
  faCircle,
  faCircleDot,
  faClock,
  faHouseMedical,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import SideMenu from "../../components/SideMenu";
import doctordb from "../../data/doctordb.json";
const allSpecialization = [...new Set(doctordb.map((doctor) => doctor.poli))];
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { handleRequestApplication } from "../../slice/patientSlice";
const FindDoctor = (props) => {
  const { female, male } = props;
  const [searchName, setSearchName] = useState(false);
  const [specialization, setSpecialization] = useState("");
  const [specializationList, setSpecializationList] = useState([]);
  const [name, setName] = useState("");
  const [nameList, setnameList] = useState([]);
  const [doctorList, setdoctorList] = useState([]);

  useEffect(() => {
    if (!name && !specialization) {
      return;
    }
    if (specialization) {
      const specialists = allSpecialization.filter((item) => {
        return item.toLowerCase().includes(specialization.toLowerCase());
      });
      return setSpecializationList(specialists);
    }
    if (name) {
      const doctors = doctordb.filter((item) => {
        return item.nama.toLowerCase().includes(name.toLowerCase());
      });
      return setnameList(doctors);
    }
  }, [name, specialization]);

  const getSpecialist = (item) => {
    const doctors = doctordb.filter((doctor) => doctor.poli == item);
    setSpecialization("");
    setSpecializationList([]);
    setdoctorList(doctors);
  };
  const handleSubmit = (text) => {
    console.log(text);
  };
  return (
    <div className="main-pages-container">
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
            <button
              onClick={() => {
                setSearchName(false);
                setName("");
                setnameList([]);
              }}
              className={
                searchName
                  ? " bg-clrPrimaryMedium logo-btn"
                  : " bg-clrPrimaryDark  logo-btn"
              }
            >
              <FontAwesomeIcon
                icon={searchName ? faCircle : faCircleDot}
                className="mr-1 lg:mr-3"
              />
              Berdasarkan Spesialisasi
            </button>

            <button
              onClick={() => {
                setSearchName(true);
                setSpecialization("");
                setSpecializationList([]);
                setdoctorList([]);
              }}
              className={
                !searchName
                  ? " bg-clrPrimaryMedium logo-btn"
                  : " bg-clrPrimaryDark  logo-btn"
              }
            >
              <FontAwesomeIcon
                icon={!searchName ? faCircle : faCircleDot}
                className="mr-1 lg:mr-3"
              />
              Berdasarkan Nama
            </button>
          </div>
          <div className="relative bg-clrBaseLight">
            {!searchName && (
              <form
                className="px-2 mb-3 md:mb-5 z-20 flex overflow-hidden mx-auto"
                style={{ minWidth: "300px" }}
              >
                <input
                  autoComplete="false"
                  name="specialization"
                  value={specialization || ""}
                  id="specialization"
                  placeholder="Spesialisasi dokter..."
                  className="w-full p-2 px-5 h-10 outline-none shadow-sm  rounded-l-full"
                  onChange={(e) => {
                    e.preventDefault();
                    setdoctorList([]);
                    setSpecialization(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="w-14 h-10 rounded-r-full bg-clrPrimaryDark shadow-sm text-clrBaseLight"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            )}

            {searchName && (
              <div className="flex rounded-full overflow-hidden shadow-sm">
                <input
                  autoComplete="false"
                  name="name"
                  value={name || ""}
                  id="name"
                  placeholder="Nama dokter..."
                  className="w-full p-2 px-5 h-10 outline-none"
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                  }}
                />
                <button className="w-14 h-10 bg-clrPrimaryDark text-clrBaseLight">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            )}
            {specialization && specializationList.length > 0 && (
              <div className="list-menu">
                {specializationList.map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="text-left h-10 py-3
                        transition-all hover:border-b-2 hover:pl-1 hover:font-medium hover:text-clrTextMedium text-clrTextDark active:text-clrTextDark"
                      onClick={() => getSpecialist(item)}
                    >
                      <p>{item}</p>
                    </button>
                  );
                })}
              </div>
            )}

            {/* ------------------------ search results ------------------------ */}

            {name && nameList.length > 0 && (
              <DoctorList
                doctorlist={nameList}
                male={male}
                female={female}
                handleSubmit={handleSubmit}
              />
            )}
            {specialization && specializationList.length < 1 && (
              <div className="w-full text-center mt-5">
                <h4>
                  Tidak ada spesialisasi dengan nama{" "}
                  <span className=" capitalize">{specialization}</span>
                </h4>
              </div>
            )}
            {name && nameList.length < 1 && (
              <div className="w-full text-center mt-5">
                <h4>
                  Tidak ada dokter dengan nama{" "}
                  <span className=" capitalize">{name}</span>
                </h4>
              </div>
            )}
            {doctorList && doctorList.length > 0 && (
              <DoctorList
                doctorlist={doctorList}
                male={male}
                female={female}
                handleSubmit={handleSubmit}
              />
            )}
            {!name && !specialization && (
              <div className="find-doctor-image"></div>
            )}
          </div>
        </div>
      </div>

      <SideMenu />
    </div>
  );
};

export default FindDoctor;

const DoctorList = ({ doctorlist, male, female }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="doctor-card-container">
      {doctorlist.map((item, index) => {
        const { nama, waktu, poli, hari, jam, gender } = item;

        const image =
          gender === "male"
            ? male.results.find((item, indexImage) => indexImage === index)
            : female.results.find((item, indexImage) => indexImage === index);

        const picture = image.picture.thumbnail;
        return (
          <div key={index} className="doctor-card">
            <div className="text-left">
              <div className="flex space-x-3 items-end w-full justify-start border-b-2 border-b-clrBorder mb-2 pb-2 z-10">
                <Image
                  src={picture}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt={`thumbnail ${picture}`}
                />
                <h5 className=" text-base">{nama}</h5>
              </div>
              <div className="text-sm leading-5 text-clrTextMedium">
                <p>
                  <FontAwesomeIcon
                    icon={faHouseMedical}
                    className="mr-3 text-clrBorder"
                  />
                  Poli :{poli}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faSun}
                    className="mr-3 text-clrBorder"
                  />
                  Waktu : {waktu}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="mr-2 text-clrBorder"
                  />
                  Hari : {hari}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faClock}
                    className="mr-3 text-clrBorder"
                  />
                  Jam : {jam}
                </p>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    handleRequestApplication({
                      appointmentData: {
                        requesterName: "",
                        requesterRelationship: "",
                        requesterPhone: "",
                        name: "",
                        email: "",
                        gender: "",
                        age: "",
                        address: "",
                        phone: "",
                        appointmentPurpose: nama,
                        appointmentLocation: "doctor",
                      },
                      selfAppointment: true,
                    })
                  );
                  router.push("/main/schedule-appointment");
                }}
                className="btn bg-clrPrimaryDark block float-right mt-2"
              >
                Mendaftar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://randomuser.me/api/?gender=female&inc=picture&results=100"
  );
  const female = await res.json();
  const res2 = await fetch(
    "https://randomuser.me/api/?gender=male&inc=picture&results=100"
  );
  const male = await res2.json();
  return {
    props: {
      female,
      male,
    },
  };
};
