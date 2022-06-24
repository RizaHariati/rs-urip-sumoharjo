import React from "react";
import SideMenu from "../../components/SideMenu";
import Image from "next/image";
import Head from "next/head";
import AppointmentForm from "../../components/AppointmentForm";
import { useSelector } from "react-redux";
import Link from "next/link";

const ScheduleAppointment = () => {
  const { status, datapatient } = useSelector((state) => state.patients.login);
  return (
    <div className="main-pages-container">
      <Head>
        <title>rs-uripsumoharjo || Daftar Online</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-page">
        {/* ---------------------------- header ---------------------------- */}

        <div className="w-fit my-3 md:my-5 px-5 md:px-10 text-clrTextDark">
          <h2 className="border-b-2 mb-2 md:mb-5 border-b-clrBorder">
            Pendaftaran Pasien
          </h2>
          <h5>
            Barisan Garda Depan Kami Siap Melayani Dengan Dukungan Fasilitas
            yang Mumpuni
          </h5>
        </div>
        {/* ---------------------------- header ---------------------------- */}
        <div>
          <div className="flex flex-col mb-5 leading-5 px-5 md:px-10">
            <p>
              Selain menghubungi langsung lewat telepon, Anda juga bisa
              mendaftar secara online dengan mengisi formulir dibawah. Jika data
              anda valid, admin kami akan menghubungi anda pada jam kerja baik
              melalui WhatsApp maupun telpon untuk mengkonfirmasi pendaftaran
            </p>
          </div>

          {/*  -------------------------- intermezzo -------------------------- */}
          <div className="grid grid-cols-2 md:grid-cols-3 h-36 md:h-44 my-5 bg-clrBorder rounded-sm overflow-hidden">
            <div className=" col-span-1 md:col-span-2 p-3 md:p-4 lg:p-10 self-center ">
              {status ? (
                <>
                  <h5 className="text-clrBaseLight text-base md:text-2xl mb-2 leading-4 md:leading-7">
                    Selamat datang {datapatient.name} terimakasih sudah
                    melakukan login
                  </h5>
                </>
              ) : (
                <>
                  <h5 className="text-clrBaseLight text-base md:text-2xl mb-2 leading-4 md:leading-7">
                    Jika anda sudah pernah terdaftar sebagai pasien, silahkan
                    login terlebih dahulu
                  </h5>

                  <Link href="/">
                    <button className="btn bg-clrPrimaryDark md:text-lg">
                      Login Pasien
                    </button>
                  </Link>
                </>
              )}
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
