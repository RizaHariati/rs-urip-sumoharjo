import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { closeDropMenu } from "../../slice/layoutSlice";
import { data_menu } from "../../data/data_menu.js";
const SideMenu = () => {
  const dispatch = useDispatch();

  return (
    <div className="side-menu-container">
      {data_menu.map((item) => {
        const { id, title, href, icon, info } = item;
        return (
          <Link href={href} key={id}>
            <a
              className="side-menu-item "
              onClick={() => dispatch(closeDropMenu())}
            >
              <div className="side-menu-title">
                <FontAwesomeIcon icon={icon} className="side-menu-icon " />
                <p className="side-menu-text">{title}</p>
              </div>

              <p className="side-menu-info">{info}</p>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default SideMenu;
