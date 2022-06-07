import React, { useState } from "react";
import loker from "../../data/data_loker.json";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const JobOpportunity = () => {
  const [showLoker, setShowLoker] = useState(false);
  const [dataLoker, setDataLoker] = useState("");
  const handleClick = (id) => {
    setShowLoker(true);
    const newData = loker.find((item) => item.id === id);
    setDataLoker(newData);
  };

  return (
    <div className=" bg-clrBaseLightActive w-full py-5 ">
      <h4 className="uppercase text-center">
        Saat ini kami membutuhkan tenaga kerja untuk :
      </h4>
      <div className=" bg-clrBorder" style={{ height: "1px" }}></div>
      <div
        className=" mx-auto grid border-clrBorder my-5"
        style={{
          borderWidth: "1px",
          width: "800px",
          height: "400px",
          gridTemplateColumns: "1fr 2fr",
        }}
      >
        <div
          className=" overflow-y-scroll p-3"
          style={{
            height: "390px",
          }}
        >
          {loker.map((item) => {
            const { id, pengalaman, tanggal, title } = item;
            return (
              <div
                key={id}
                className=" bg-clrBaseLight hover:bg-clrBaseLightHover rounded-sm mb-3 p-2 shadow-sm cursor-pointer overflow-hidden "
                onClick={() => handleClick(id)}
              >
                <h5 className="leading-4 text-left">{title}</h5>
                <div className="line"></div>
                <p className=" capitalize text-sm">
                  pengalaman minimal : {pengalaman} tahun
                </p>
                <p className="text-sm">posting: {tanggal}</p>
                <p className="text-sm">baca lebih detail...</p>
              </div>
            );
          })}
        </div>
        <div className="w-full h-full overflow-hidden ">
          {!showLoker && (
            <Image
              src="/images/doctors.jpg"
              width={600}
              height={500}
              alt="doctors"
              className=" object-cover"
            />
          )}
          {showLoker && <Loker data={dataLoker} />}
        </div>
      </div>
    </div>
  );
};

export default JobOpportunity;

export const Loker = ({ data }) => {
  const { pengalaman, tanggal, title, kualifikasi } = data;

  return (
    <div className="w-full h-full bg-clrBaseLight rounded-sm shadow-sm p-3 ">
      <h4>{title}</h4>
      <div className="line"></div>
      <h5>Dipost tanggal : {tanggal}</h5>
      <h5>Pengalaman minimal : {pengalaman} tahun</h5>
      <h5>Persyaratan: </h5>
      <ul className="loker-content-list">
        {kualifikasi.map((item, index) => {
          return (
            <li
              key={index}
              className="grid items-start m-2"
              style={{ gridTemplateColumns: "1fr 14fr" }}
            >
              <FontAwesomeIcon
                icon={faCaretRight}
                className="text-clrBorder mt-2"
              />
              <p className="leading-5">{item}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
