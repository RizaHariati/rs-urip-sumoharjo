import {
  faBed,
  faCalendarCheck,
  faFileLines,
  faGifts,
  faSyringe,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { closeDropMenu } from "../../slice/layoutSlice";

const SideMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="side-menu-container">
      <Link href="/main/find-doctor">
        <a
          className="side-menu-item "
          onClick={() => dispatch(closeDropMenu())}
        >
          <div className="side-menu-title">
            <FontAwesomeIcon icon={faUserDoctor} className="text-2xl" />
            <p className="side-menu-text">Cari Dokter</p>
          </div>

          <p className="side-menu-info">
            Dapatkan informasi jadwal dokter anda
          </p>
        </a>
      </Link>

      <Link href="/main/schedule-appointment">
        <a
          className="side-menu-item "
          onClick={() => dispatch(closeDropMenu())}
        >
          <div className="side-menu-title">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="side-menu-icon "
            />
            <p className="side-menu-text">Pendaftaran</p>
          </div>

          <p className="side-menu-info">
            Buat janji temu dengan dokter/ mendaftar kefasilitas kami secara
            online
          </p>
        </a>
      </Link>

      <Link href="/main/services">
        <a
          className="side-menu-item "
          onClick={() => dispatch(closeDropMenu())}
        >
          <div className="side-menu-title">
            <FontAwesomeIcon icon={faSyringe} className="side-menu-icon " />
            <p className="side-menu-text">Fasilitas dan Klinik</p>
          </div>

          <p className="side-menu-info">
            Temukan jadwal fasilitas dan klinik yang anda butuhkan
          </p>
        </a>
      </Link>

      <Link href="/main/inpatient">
        <a
          className="side-menu-item "
          onClick={() => dispatch(closeDropMenu())}
        >
          <div className="side-menu-title">
            <FontAwesomeIcon icon={faBed} className="side-menu-icon " />
            <p className="side-menu-text">Rawat Inap</p>
          </div>

          <p className="side-menu-info">
            Kelas rawat inap beserta fasilitas penunjang
          </p>
        </a>
      </Link>

      <Link href="/main/special-package">
        <a
          className="side-menu-item "
          onClick={() => dispatch(closeDropMenu())}
        >
          <div className="side-menu-title">
            <FontAwesomeIcon icon={faGifts} className="side-menu-icon " />
            <p className="side-menu-text">Paket Kesehatan</p>
          </div>

          <p className="side-menu-info">
            Berbagai paket kesehatan sesuai kebutuhan anda
          </p>
        </a>
      </Link>

      <Link href="/main/patient-data">
        <a
          className="side-menu-item "
          onClick={() => dispatch(closeDropMenu())}
        >
          <div className="side-menu-title">
            <FontAwesomeIcon icon={faFileLines} className="side-menu-icon " />
            <p className="side-menu-text">Informasi Pasien</p>
          </div>
          <p className="side-menu-info">
            Akses info medis pasien secara online
          </p>
        </a>
      </Link>
    </div>
  );
};

export default SideMenu;
