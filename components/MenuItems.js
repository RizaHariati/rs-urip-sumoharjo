import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { menu_item } from "../data/data_menu";
import { useDispatch, useSelector } from "react-redux";
import { closeDropMenu, toggleDropMenu } from "../slice/layoutSlice";
import Link from "next/link";

export const MenuItems = () => {
  const dropMenu = useSelector((state) => state.layout.dropMenu);
  const dispatch = useDispatch();
  return (
    <div
      data-testid="navbar-dropdown-menu"
      id="navbar-dropdown-menu"
      className={dropMenu ? "menu h-fit" : "menu h-0 py-0"}
    >
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

export default MenuItems;
