import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcase,
  faFileLines,
  faHomeUser,
  faMosque,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="w-full h-20 bg-clrPrimaryDark flex justify-between items-center px-10 text-clrBaseLight">
      <div className="link-icon">
        <div className="navbar-comment">
          <p className=" text-clrTextDark ">Home</p>
        </div>
        <Link href="/">
          <Image
            src="/images/logo hijau.jpg"
            width={220}
            height={65}
            className="cursor-pointer hover:opacity-70 active:opacity-90 object-cover"
          />
        </Link>
      </div>
      <div className="flex space-x-5 items-center">
        <div className="flex flex-col border-r-2 border-clrBaseLight px-5">
          <Link href="/main/patient-data">
            <button className="link-light text-sm">Login dokter</button>
          </Link>
          <Link href="/main/patient-data">
            <button className="link-light text-sm">Login pasien</button>
          </Link>
        </div>

        <Link href="/">
          <button className="link-light ">
            <FontAwesomeIcon icon={faHomeUser} className="text-2xl" />
          </button>
        </Link>

        <div className="relative">
          <button className="link-light" onClick={() => setOpenMenu(!openMenu)}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
          <MenuItems openMenu={openMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MenuItems = ({ openMenu }) => {
  return (
    <div className={openMenu ? "menu h-fit " : "menu h-0 py-0"}>
      <div>
        <Link href="/">
          <div
            className="menu-item"
            style={{
              borderBottomWidth: "1px",
              gridTemplateColumns: "1fr 8fr",
            }}
          >
            <FontAwesomeIcon icon={faMosque} className=" menu-item-icon " />
            <p className="menu-item-text" style={{ borderBottomWidth: "1px" }}>
              Tentang RS Urip Sumoharjo
            </p>
          </div>
        </Link>

        <Link href="/">
          <div
            className="menu-item"
            style={{
              borderBottomWidth: "1px",
              gridTemplateColumns: "1fr 8fr",
            }}
          >
            <FontAwesomeIcon icon={faFileLines} className="menu-item-icon " />
            <p className="menu-item-text">Hak dan Kewajiban Pasien</p>
          </div>
        </Link>

        <Link href="/">
          <div
            className="menu-item"
            style={{
              borderBottomWidth: "1px",
              gridTemplateColumns: "1fr 8fr",
            }}
          >
            <FontAwesomeIcon icon={faBriefcase} className="menu-item-icon " />
            <p className="menu-item-text">Lowongan Kerja</p>
          </div>
        </Link>
      </div>
      <div className=" mt-5 space-x-5">
        <Link href="https://www.instagram.com/rs.uripsumoharjo.lampung/">
          <FontAwesomeIcon
            icon={faInstagram}
            className=" text-purple-500 text-3xl cursor-pointer"
          />
        </Link>
        <Link href="https://www.facebook.com/">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-blue-700 text-3xl cursor-pointer"
          />
        </Link>
        <Link href="https://www.instagram.com/rs.uripsumoharjo.lampung/">
          <FontAwesomeIcon
            icon={faTwitterSquare}
            className="text-blue-500 text-3xl cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};
