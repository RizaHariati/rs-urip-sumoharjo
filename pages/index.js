import {
  faFileContract,
  faPeopleGroup,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import CareItem from "../components/componenthomepage/CareItem";
import Slogan from "../components/componenthomepage/Slogan";
import Rules from "../components/componenthomepage/Rules";
import Footer from "../components/Footer";
import SideMenu from "../components/SideMenu";
import { closeDropMenu } from "../slice/layoutSlice";
import { resetAll } from "../slice/doctorSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeDropMenu());
    dispatch(resetAll());
    setTimeout(() => {
      setShowTitle(true);
    }, 500);
  }, []);

  return (
    <div className=" bg-clrBaseLight">
      <Head>
        <title>rs-uripsumoharjo || Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main-pages-container home-background">
        <div className="main-page-index main-grid-background">
          <div
            className={
              showTitle
                ? "absolute bottom-24 md:bottom-12 left-5 xl:left-14 text-clrBaseLight pr-20 transition-all opacity-100"
                : "absolute bottom-24 md:bottom-12 left-32 xl:left-52 text-clrBaseLight pr-20 transition-all opacity-0"
            }
          >
            <h1 className="text-3xl lg:text-4xl 2xl:text-5xl leading-7 mb-2">
              Rs Urip Sumoharjo
            </h1>

            <h2 className="text-lg lg:text-2xl  2xl:text-3xl leading-5">
              Memberikan Pelayanan yang Profesional dan Prima kepada Seluruh
              Masyarakat
            </h2>
          </div>
        </div>
        <SideMenu />
      </div>
      <div className="h-fit block bg-clrBaseLight w-full text-center mt-10 px-5 xs:px-10 sm:px-20 md:px-40 lg:px-32 ">
        <h2 className="mb-0 capitalize">
          Perawatan Tepat waktu kapanpun Anda membutuhkannya
        </h2>
        <div className="care-items-container">
          <CareItem
            icon={faFileContract}
            title="Informasi COVID"
            info="Temukan informasi terbaru tentang COVID-19, termasuk distribusi vaksin
          gratis"
            button="COVID-19 Updates"
            addclass=" top-4 left-0 bg-yellow-300"
            href="https://covid19.go.id/"
          />
          <CareItem
            icon={faStethoscope}
            title="Pendaftaran Online"
            info="Anda dapat melakukan pendaftaran secara online, sesuai dengan kebutuhan anda dan menghindari antrian terlalu lama"
            button="Mendaftar online"
            addclass=" top-6 left-4 bg-green-300"
            href="/main/schedule-appointment"
          />
          <CareItem
            icon={faPeopleGroup}
            title="Lowongan kerja"
            info="Bergabung menjadi bagian RS Urip Sumoharjo dalam melayani masyarakat sebagai bagian dari rahmatan lil alamin"
            button="Join Us!"
            addclass=" top-0 left-7 bg-purple-300"
            href="/hospital/jobopportunity"
          />
        </div>
      </div>
      <Rules />
      <Slogan />
      <Footer color="bg-clrPrimaryDark" />
    </div>
  );
};

export default Home;
