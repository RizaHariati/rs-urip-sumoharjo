import {
  faCalendarDays,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Head from "next/head";
import polyclinics from "../../data/polyclinics.json";
import Footer from "../../components/Footer";
const ContactUs = () => {
  return (
    <div className=" bg-clrBaseLightActive w-full pt-5 ">
      <Head>
        <title>rs-uripsumoharjo || Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto w-full md:w-4/5 py-5 px-10  md:px-5">
        <h4 className="uppercase text-center leading-5 md:leading-6 mb-3">
          Anda dapat mendaftar secara online, maupun menghubungi kami di:
        </h4>
        <div className=" bg-clrBorder mb-5" style={{ height: "1px" }}></div>
        <div className="grid grid-cols-1 w-full lg:w-10/12 mx-auto md:grid-cols-2 gap-3">
          {polyclinics.map((polyclinic) => {
            const { id, title, img, hari, jam, telp } = polyclinic;

            return (
              <button
                key={id}
                className="bg-clrBaseLightHover p-3 rounded-sm shadow-sm"
              >
                <div className="text-left leading-4 ">
                  <h5 className="mb-3">{title}</h5>
                  <div className="text-sm leading-5 text-clrTextMedium">
                    <div className="flex items-start justify-start">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="mr-3 text-clrBorder"
                      />
                      <div className="flex flex-col justify-start items-start">
                        {telp.map((item, index) => {
                          const { nomor } = item;
                          return <p key={index}>{nomor}</p>;
                        })}
                      </div>
                    </div>

                    <p>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="mr-2 text-clrBorder"
                      />
                      Hari : {hari}
                    </p>
                    <p>
                      <FontAwesomeIcon
                        icon={faClock}
                        className="mr-3 text-clrBorder"
                      />
                      Jam : {jam}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
        <div className="mx-auto h-52 md:h-96 bg-cover bg-center w-full md:w-4/5 p-5 bg-hospital my-5 rounded-sm shadow-sm "></div>
      </div>
      <Footer color="bg-clrBorder" />
    </div>
  );
};

export default ContactUs;
