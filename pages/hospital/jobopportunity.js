import React, { useState } from "react";
import loker from "../../data/data_loker.json";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// const url = "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/jobs";

const JobOpportunity = ({ jobs }) => {
  const [showLoker, setShowLoker] = useState(false);
  const [dataLoker, setDataLoker] = useState("");

  // const setTanggal = (tanggal) => {
  //   return tanggal;
  //   // return `${tanggal.slice(8, 10)}-${tanggal.slice(5, 7)}-${tanggal.slice(
  //   //   0,
  //   //   4
  //   // )}`;
  // };

  const handleClick = (id) => {
    setShowLoker(true);
    let newData = loker.find((item) => item.id === id);
    // const tanggalPosting = setTanggal(newData.tanggal || 0);
    // newData = { ...newData, tanggal: tanggalPosting };
    setDataLoker(newData);
  };

  return (
    <div className="w-full h-fit p-5 bg-clrBaseLightActive">
      <Head>
        <title>rs-uripsumoharjo || Jobs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h4 className="uppercase text-center max-w-xl mx-auto mb-5 ">
        Mari bergabung sebagai bagian dari team RS Urip Sumoharjo. Jika Anda
        memenuhi persyaratan yang tertera dibawah, silahkan kirim lamaran ke:
        <span className="lowercase"> job@rsuripsumoharjo.co.id</span>
      </h4>
      <div className=" bg-clrBorder mb-5 " style={{ height: "1px" }}></div>
      <div className="job-container bg-clrBaseLight">
        <div className="flex flex-row md:flex-col overflow-x-scroll md:overflow-y-scroll h-44 md:h-full gap-2 bg-clrBaseLight p-3 ">
          {loker.map((item) => {
            const { id, pengalaman, tanggal, title } = item;
            return (
              <div
                key={id}
                className="cursor-pointer bg-clrBaseLightHover  rounded-sm shadow-sm shrink-0 p-3 w-52 md:w-full transition-all hover:bg-clrBaseLightActive"
                onClick={() => handleClick(id)}
              >
                <h5 className="leading-4 text-left h-10 ">{title}</h5>
                <div className="line"></div>
                {pengalaman ? (
                  <p className=" capitalize text-sm">
                    pengalaman minimal : {pengalaman} tahun
                  </p>
                ) : (
                  <p className=" capitalize text-sm">Menerima Fresh Graduate</p>
                )}
                <p className="text-sm">posting: {tanggal}</p>
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
    <div
      className="w-full bg-clrBaseLight rounded-sm shadow-sm p-3 pb-20"
      style={{ height: "400px", overflowY: "scroll" }}
    >
      <div
        className="w-full border-b-clrBorder pb-5 mb-5"
        style={{ borderBottomWidth: "1px" }}
      >
        <h4>{title}</h4>
        <div className="line"></div>
        <h5>Dipost tanggal : {tanggal}</h5>
        {pengalaman ? (
          <h5 className=" capitalize">
            pengalaman minimal : {pengalaman} tahun
          </h5>
        ) : (
          <h5 className=" capitalize">Menerima Fresh Graduate</h5>
        )}
      </div>
      <h5>Persyaratan: </h5>
      <ul className="loker-content-list mb-5">
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
      {/* <Link href="/">
        <button className="btn bg-clrPrimaryDark">Read More</button>
      </Link> */}
    </div>
  );
};

// export const getStaticProps = async () => {

//   const res = await fetch(url);
//   const data = await res.json();
//   const { vacancies: jobs } = data;
//   return { props: { jobs } };
// };
