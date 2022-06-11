import React from "react";
import SideMenu from "../../components/SideMenu";
import polyclinics from "../../data/polyclinics.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  faCalendarDays,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import AppointmentForm from "../../components/AppointmentForm";
const ScheduleAppointment = () => {
  return (
    <div className="main-pages-container">
      <div className="main-page">
        {/* ---------------------------- header ---------------------------- */}

        <div className="w-fit py-2 px-5 md:px-10 text-clrTextDark">
          <h2 className="py-2 border-b-2 border-b-clrBorder ">
            Pendaftaran Pasien
          </h2>
          <h5>
            Barisan Garda Depan Kami Siap Melayani Dengan Dukungan Fasilitas
            yang Mumpuni
          </h5>
        </div>
        {/* ---------------------------- header ---------------------------- */}
        <div className="px-0 md:px-10 py-5">
          {/* --------------------------- phone schedule -------------------------- */}

          <div className="flex flex-col px-5 md:px-10 gap-4 leading-5">
            <p className="text-sm md:text-base">
              Selain menghubungi langsung lewat telepon, Anda juga bisa
              mendaftar secara online dengan mengisi formulir dibawah. Jika data
              anda valid, admin kami akan menghubungi anda pada jam kerja baik
              melalui WhatsApp maupun telpon untuk mengkonfirmasi pendaftaran
            </p>
          </div>

          {/* --------------------------- phone schedule -------------------------- */}

          {/*  -------------------------- intermezzo -------------------------- */}
          <div className="grid grid-cols-3 h-40 my-5 space-x-5 bg-clrBorder rounded-sm overflow-hidden">
            <div className=" col-span-2 p-3 md:p-4 lg:p-10 self-center ">
              <h5 className="text-clrBaseLight mb-2">
                Jika anda sudah pernah terdaftar sebagai pasien, silahkan login
                terlebih dahulu
              </h5>

              <button className="btn bg-clrPrimaryDark"> Login Pasien</button>
            </div>
            <Image
              src="/images/admission.jpg"
              width={200}
              height={200}
              className=" object-cover "
              alt="admission"
            />
          </div>
          {/*  -------------------------- intermezzo -------------------------- */}
          {/* ----------------------------- form ----------------------------- */}
          <AppointmentForm />
          {/* ----------------------------- form ----------------------------- */}
        </div>
        <div className="mx-auto w-full md:w-4/5 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
            {polyclinics.map((polyclinic) => {
              const { id, title, img, hari, jam, telp } = polyclinic;

              return (
                <button
                  key={id}
                  className="bg-clrBaseLightHover p-3 self-start rounded-sm shadow-sm  h-36 w-full"
                >
                  <div className="text-left leading-4 ">
                    <h5 className="mb-3">{title}</h5>
                    <div className="text-sm leading-5 text-clrTextMedium">
                      <div className="flex items-start justify-start">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="mr-3 text-clrBorder"
                        />
                        <div className="flex flex-col justify-start items-start">
                          {telp.map((item, index) => {
                            const { nomor } = item;
                            return <p key={index}>{nomor}</p>;
                          })}
                        </div>
                      </div>

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
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <SideMenu />
    </div>
  );
};

export default ScheduleAppointment;
