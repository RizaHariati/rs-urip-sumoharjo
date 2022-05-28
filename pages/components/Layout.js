import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Advertising from "./Advertising";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  useState;
  return (
    <div className="relative">
      <Advertising />
      <Navbar />
      {children}
      <div
        onClick={() => setOpen(!open)}
        className={open ? "ambulance w-100" : "ambulance w-14"}
      >
        <FontAwesomeIcon icon={faAmbulance} className="text-2xl mr-4" />
        Ambulance : (0721)700323
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
