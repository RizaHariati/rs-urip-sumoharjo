import {
  faCalendarDays,
  faClock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import polyclinics from "../../data/polyclinics.json";
import Footer from "../components/Footer";
const ContactUs = () => {
  return (
    <div className=" bg-clrBaseLightActive w-full py-5 ">
      <div className="mx-auto w-full md:w-4/5 py-5 px-10  md:px-5">
        <div className="mx-auto h-52 md:h-96 bg-cover bg-center w-full md:w-4/5 p-5 bg-hospital mb-5 rounded-sm shadow-sm "></div>
        <h4 className="uppercase text-center leading-4 md:leading-5 mb-3">
          Anda dapat mendaftar secara online, maupun menghubungi kami di:
        </h4>
        <div className=" bg-clrBorder mb-5" style={{ height: "1px" }}></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
      </div>
      <Footer color="bg-clrBorder" />
    </div>
  );
};

export default ContactUs;
