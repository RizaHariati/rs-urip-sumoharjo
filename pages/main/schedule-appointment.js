import React from "react";
import SideMenu from "../../components/SideMenu";
import Image from "next/image";
import AppointmentForm from "../../components/AppointmentForm";

const ScheduleAppointment = () => {
  return (
    <div className="main-pages-container">
      <div className="main-page">
        {/* ---------------------------- header ---------------------------- */}

        <div className="w-fit my-3 md:my-5 px-5 md:px-10 text-clrTextDark">
          <h2 className="border-b-2 border-b-clrBorder ">Pendaftaran Pasien</h2>
          <h5>
            Barisan Garda Depan Kami Siap Melayani Dengan Dukungan Fasilitas
            yang Mumpuni
          </h5>
        </div>
        {/* ---------------------------- header ---------------------------- */}
        <div>
          <div className="flex flex-col mb-5 leading-5 px-5 md:px-10">
            <p className="text-base leading-4">
              Selain menghubungi langsung lewat telepon, Anda juga bisa
              mendaftar secara online dengan mengisi formulir dibawah. Jika data
              anda valid, admin kami akan menghubungi anda pada jam kerja baik
              melalui WhatsApp maupun telpon untuk mengkonfirmasi pendaftaran
            </p>
          </div>

          {/*  -------------------------- intermezzo -------------------------- */}
          <div className="grid grid-cols-2 md:grid-cols-3 h-36 md:h-44 my-5 bg-clrBorder rounded-sm overflow-hidden">
            <div className=" col-span-1 md:col-span-2 p-3 md:p-4 lg:p-10 self-center ">
              <h5 className="text-clrBaseLight text-base md:text-2xl mb-2 leading-4 md:leading-7">
                Jika anda sudah pernah terdaftar sebagai pasien, silahkan login
                terlebih dahulu
              </h5>

              <button className="btn bg-clrPrimaryDark md:text-lg">
                Login Pasien
              </button>
            </div>
            <div className="object-cover object-center w-full h-full overflow-hidden">
              <Image
                src="/images/admission.jpg"
                width={400}
                height={400}
                className=" object-cover object-center "
                alt="admission"
              />
            </div>
          </div>
          {/*  -------------------------- intermezzo -------------------------- */}
          {/* ----------------------------- form ----------------------------- */}
          <AppointmentForm />
          {/* ----------------------------- form ----------------------------- */}
        </div>
      </div>

      <SideMenu />
    </div>
  );
};

export default ScheduleAppointment;
