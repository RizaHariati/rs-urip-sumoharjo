import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeAdBlock, closeDropMenu } from "../slice/layoutSlice";

import Advertising from "./Advertising";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  useState;
  return (
    <div
      className="relative"
      onWheel={() => {
        dispatch(closeDropMenu());
        dispatch(closeAdBlock());
      }}
    >
      <Advertising />
      <Navbar />
      {children}
      <div
        id="ambulance"
        onClick={() => setOpen(!open)}
        className={open ? "ambulance w-100" : "ambulance w-14"}
      >
        <FontAwesomeIcon icon={faAmbulance} className="text-2xl mr-4" />
        Ambulance : (0721)700323
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
