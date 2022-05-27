import React from "react";
import Link from "next/link";
import SideMenu from "../components/SideMenu";

const ScheduleAppointment = () => {
  return (
    <div className="main-pages-container">
      <div className="h-full">
        <h1>Daftar Pasien</h1>
      </div>
      <SideMenu />
    </div>
  );
};

export default ScheduleAppointment;
