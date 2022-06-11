import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideMenu from "../../components/SideMenu";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faCircleDot,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Register from "../../components/Register";
import Login from "../../components/Login";

import { useRouter } from "next/router";
import { setlogout } from "../../slice/patientSlice";
const benefitOnline = [
  { id: "1", task: "Melakukan jadwal pemeriksaan secara online" },
  { id: "2", task: "Mengecek dan membayar tagihan anda" },
  { id: "3", task: "Melihat rekam medis anda" },
  {
    id: "4",
    task: "Melihat hasil laboratorium dan tes kesehatan",
  },
];
const PatientData = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const dispatch = useDispatch();
  const route = useRouter();
  const login = useSelector((state) => state.patients.login);
  const handleLogout = () => {
    dispatch(setlogout());
    route.reload();
  };
  return (
    <div className="main-pages-container">
      <div className="main-page">
        {/* ---------------------------- header ---------------------------- */}

        {login && (
          <div className="w-fit my-3 md:my-5 px-5 md:px-10 text-clrTextDark">
            <h2 className="border-b-2 mb-2 md:mb-5 border-b-clrBorder ">
              Informasi Pasien
            </h2>
            <h5 className=" font-normal tracking-tighter md:font-medium">
              Selamat datang kembali Riza Hariati
              <br />
              Rs Urip Sumoharjo siap memberikan pelayanan yang profesional dan
              prima untuk Anda
            </h5>
          </div>
        )}
        {!login && (
          <div className="w-fit my-3 md:my-5 px-5 md:px-10 text-clrTextDark">
            <h2 className="border-b-2 mb-2 md:mb-5 border-b-clrBorder">
              Login Pasien
            </h2>
            <h5 className="font-normal md:font-semibold">
              Untuk menjaga kerahasiaan data medis Anda, registrasi dari akun
              Anda hanya dapat dilakukan secara fisik di RS Urip Sumoharjo
              dengan bantuan departemen Administrasi.
              <br />
            </h5>
          </div>
        )}
        {/* ---------------------------- header ---------------------------- */}
        <div className="px-0 md:px-10 ">
          {/*  -------------------------- Option Access -------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-3 h-80 md:h-40  my-5 space-x-5 bg-clrPrimaryDark rounded-sm shadow-sm overflow-hidden text-clrBaseLight">
            <Image
              src="/images/welcome.jpg"
              width={200}
              height={200}
              className=" object-cover "
              alt="welcome"
              priority
            />
            <div className="md:col-span-2 pr-2 py-4 self-center ">
              <h5 className="mb-2 font-medium">
                Fasilitas yang dapat Anda akses secara online:
              </h5>

              <div>
                {benefitOnline.map(({ id, task }) => {
                  return (
                    <div
                      className="flex items-start justify-start leading-5 font-thin"
                      key={id}
                    >
                      <FontAwesomeIcon
                        icon={faCircleDot}
                        className="text-sm mr-2 mt-1"
                      />
                      <p>{task}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/*  -------------------------- intermezzo -------------------------- */}
          {/* ----------------------------- form ----------------------------- */}
          {!login && (
            <div className="w-full ">
              <div className=" bg-clrBaseLightHover mx-auto p-5 pb-1 rounded-sm shadow-sm  sm:w-9/12 md:w-7/12 ">
                <div className="block mb-5 ">
                  {/* <Image
                    src="/images/logo bulat.jpg"
                    width={50}
                    height={50}
                    alt="logo bulat"
                  /> */}
                  <div className="login-logo"></div>
                </div>
                {!openRegister && <Login setOpenRegister={setOpenRegister} />}
                {openRegister && <Register setOpenRegister={setOpenRegister} />}
              </div>
            </div>
          )}
          {/* ----------------------------- form ----------------------------- */}
          {login && (
            <div className="flex items-center justify-center w-full ">
              <button
                onClick={() => handleLogout()}
                type="button"
                className=" bg-clrPrimaryDark  logo-btn h-7"
              >
                <FontAwesomeIcon icon={faSignOut} className="mr-3" />
                logout
              </button>
            </div>
          )}
        </div>
      </div>
      <SideMenu />
    </div>
  );
};

export default PatientData;
