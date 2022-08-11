import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHomeAlt,
  faSignIn,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDropMenu, toggleDropMenu } from "../slice/layoutSlice";
import { menu_item } from "../data/data_menu";
import { setlogout } from "../slice/patientSlice";
import { useRouter } from "next/router";

const Navbar = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const { status } = useSelector((state) => state.patients.login);

  const handleClick = () => {
    if (!status) {
      route.push("/main/patient-data");
    } else {
      dispatch(setlogout());
      route.push("/");
    }
  };
  return (
    <div className="w-full h-16 md:h-20 bg-clrPrimaryDark flex justify-between items-center px-5 md:px-10 lg:px-20 text-clrBaseLight sticky top-0 z-30">
      <div className="link-icon" onClick={() => dispatch(closeDropMenu())}>
        <div className="navbar-comment">
          <p className=" text-clrTextDark ">Home</p>
        </div>

        <Link href="/">
          <div id="navbar-logo" className="navbar-logo"></div>
        </Link>
      </div>
      <div className="flex space-x-2 md:space-x-5 items-center">
        <div
          className="flex flex-col border-r-2 border-clrBaseLight px-3 md:px-5 "
          onClick={() => dispatch(closeDropMenu())}
        >
          <button
            type="button"
            className="link-light text-base md:text-lg leading-4 flex items-center"
            onClick={handleClick}
            id="navbar-login"
          >
            <FontAwesomeIcon
              icon={status ? faSignOut : faSignIn}
              className="mr-3"
            />
            <p>{status ? "Logout" : "Login"}</p>
          </button>
        </div>

        <Link href="/">
          <a
            className="link-light"
            onClick={() => dispatch(closeDropMenu())}
            id="navbar-home"
          >
            <FontAwesomeIcon icon={faHomeAlt} className="text-2xl" />
          </a>
        </Link>

        <div className="relative">
          <button
            id="navbar-dropdown"
            className="link-light"
            onClick={() => dispatch(toggleDropMenu())}
          >
            <FontAwesomeIcon icon={faBars} className=" text-3xl " />
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
        {menu_item.map((item) => {
          const { id, title, href, icon } = item;
          return (
            <Link href={href} key={id}>
              <button
                className="menu-item"
                style={{
                  borderBottomWidth: "1px",
                  gridTemplateColumns: "1fr 8fr",
                }}
                onClick={() => dispatch(closeDropMenu())}
              >
                <FontAwesomeIcon icon={icon} className=" menu-item-icon " />
                <p
                  className="menu-item-text"
                  style={{ borderBottomWidth: "1px" }}
                >
                  {title}
                </p>
              </button>
            </Link>
          );
        })}
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
