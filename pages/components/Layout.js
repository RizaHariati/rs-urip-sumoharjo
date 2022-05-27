import React from "react";
import Advertising from "./Advertising";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Advertising />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
