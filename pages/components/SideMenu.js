import {
  faBed,
  faCalendarCheck,
  faCoffee,
  faFileLines,
  faGifts,
  faSyringe,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const SideMenu = () => {
  return (
    <div className="side-menu-container">
      <Link href="/main/find-doctor">
        <div className="side-menu-item ">
          <FontAwesomeIcon icon={faUserDoctor} className="text-2xl" />
          <p className="side-menu-text">Cari Dokter</p>
          <p className="side-menu-info">
            Dapatkan informasi jadwal dokter anda
          </p>
        </div>
      </Link>

      <Link href="/main/inpatient">
        <div className="side-menu-item ">
          <FontAwesomeIcon icon={faBed} className="text-2xl" />
          <p className="side-menu-text">Rawat Inap</p>
          <p className="side-menu-info">
            Kelas rawat inap beserta fasilitas penunjang
          </p>
        </div>
      </Link>

      <Link href="/main/services">
        <div className="side-menu-item ">
          <FontAwesomeIcon icon={faSyringe} className="text-2xl" />
          <p className="side-menu-text">Fasilitas dan Klinik</p>
          <p className="side-menu-info">
            Temukan jadwal fasilitas dan klinik yang anda butuhkan
          </p>
        </div>
      </Link>

      <Link href="/main/special-package">
        <div className="side-menu-item ">
          <FontAwesomeIcon icon={faGifts} className="text-2xl" />
          <p className="side-menu-text">Paket Kesehatan</p>
          <p className="side-menu-info">
            Berbagai paket kesehatan sesuai kebutuhan anda
          </p>
        </div>
      </Link>
      <Link href="/main/schedule-appointment">
        <div className="side-menu-item ">
          <FontAwesomeIcon icon={faCalendarCheck} className="text-2xl" />
          <p className="side-menu-text">Pendaftaran Pasien</p>
          <p className="side-menu-info">
            Buat janji temu dengan dokter secara online
          </p>
        </div>
      </Link>

      <Link href="/main/patient-data">
        <div className="side-menu-item ">
          <FontAwesomeIcon icon={faFileLines} className="text-2xl" />
          <p className="side-menu-text">Data Pasien</p>
          <p className="side-menu-info">
            Akses info medis pasien secara online
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SideMenu;
