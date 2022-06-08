import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBriefcase,
  faFileLines,
  faHomeAlt,
  faMosque,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDropMenu, toggleDropMenu } from "../../slice/layoutSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-20 bg-clrPrimaryDark flex justify-between items-center px-10 text-clrBaseLight sticky top-0 z-30">
      <div className="link-icon">
        <div className="navbar-comment">
          <p className=" text-clrTextDark ">Home</p>
        </div>
        <Link href="/">
          <a>
            <Image
              src="/images/logo hijau.jpg"
              width={220}
              height={65}
              className="cursor-pointer hover:opacity-70 active:opacity-90 object-cover"
            />
          </a>
        </Link>
      </div>
      <div className="flex space-x-5 items-center">
        <div className="flex flex-col border-r-2 border-clrBaseLight px-5">
          <Link href="/main/patient-data">
            <a className="link-light text-base">Login pasien</a>
          </Link>
        </div>

        <Link href="/">
          <a className="link-light ">
            <FontAwesomeIcon icon={faHomeAlt} className="text-2xl" />
          </a>
        </Link>

        <div className="relative">
          <button
            className="link-light"
            onClick={() => dispatch(toggleDropMenu())}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
          <MenuItems />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MenuItems = () => {
  const dropMenu = useSelector((state) => state.layout.dropMenu);
  const dispatch = useDispatch();
  return (
    <div className={dropMenu ? "menu h-fit" : "menu h-0 py-0"}>
      <div>
        <Link href="/hospital/about">
          <button
            className="menu-item"
            style={{
              borderBottomWidth: "1px",
              gridTemplateColumns: "1fr 8fr",
            }}
            onClick={() => dispatch(closeDropMenu())}
          >
            <FontAwesomeIcon icon={faMosque} className=" menu-item-icon " />
            <p className="menu-item-text" style={{ borderBottomWidth: "1px" }}>
              Tentang RS Urip Sumoharjo
            </p>
          </button>
        </Link>

        <Link href="/hospital/termandconditions">
          <button
            className="menu-item"
            style={{
              borderBottomWidth: "1px",
              gridTemplateColumns: "1fr 8fr",
            }}
            onClick={() => dispatch(closeDropMenu())}
          >
            <FontAwesomeIcon icon={faFileLines} className="menu-item-icon " />
            <p className="menu-item-text">Hak dan Kewajiban Pasien</p>
          </button>
        </Link>

        <Link href="/hospital/jobopportunity">
          <button
            className="menu-item"
            style={{
              borderBottomWidth: "1px",
              gridTemplateColumns: "1fr 8fr",
            }}
            onClick={() => dispatch(closeDropMenu())}
          >
            <FontAwesomeIcon icon={faBriefcase} className="menu-item-icon " />
            <p className="menu-item-text">Lowongan Kerja</p>
          </button>
        </Link>
      </div>
      <div className=" mt-5 space-x-5">
        <Link href="https://www.instagram.com/rs.uripsumoharjo.lampung/">
          <a>
            <FontAwesomeIcon
              icon={faInstagram}
              className=" text-purple-500  text-3xl cursor-pointer"
            />
          </a>
        </Link>
        <Link href="https://www.facebook.com/">
          <a>
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-blue-700 text-3xl cursor-pointer"
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/rs.uripsumoharjo.lampung/">
          <a>
            <FontAwesomeIcon
              icon={faTwitterSquare}
              className="text-blue-500 text-3xl cursor-pointer"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};
