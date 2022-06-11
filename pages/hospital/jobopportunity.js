import React, { useState } from "react";
import loker from "../../data/data_loker.json";
import Image from "next/image";
import Head from "next/head";
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
    <div className="w-full h-fit p-5 bg-clrBaseLightActive">
      <Head>
        <title>rs-uripsumoharjo || Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h4 className="uppercase text-center ">
        Saat ini kami membutuhkan tenaga kerja untuk :
      </h4>
      <div className=" bg-clrBorder mb-5 " style={{ height: "1px" }}></div>
      <div className="job-container bg-clrBaseLight">
        <div className="flex flex-row md:flex-col overflow-x-scroll md:overflow-y-scroll h-44 md:h-full gap-2 bg-clrBaseLight p-3 ">
          {loker.map((item) => {
            const { id, pengalaman, tanggal, title } = item;
            return (
              <div
                key={id}
                className="cursor-pointer bg-clrBaseLightHover hover:bg-white rounded-sm shadow-sm shrink-0 p-3 w-52 md:w-full "
                onClick={() => handleClick(id)}
              >
                <h5 className="leading-4 text-left ">{title}</h5>
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
        <div className=" h-fit md:h-fit col-span-1 md:col-span-2 overflow-y-scroll bg-clrBaseLight">
          {!showLoker && (
            <div className=" object-cover object-centerh h-fit w-fit">
              <Image
                src="/images/doctors.jpg"
                width={700}
                height={600}
                alt="doctors"
                className="object-center object-cover"
              />
            </div>
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
