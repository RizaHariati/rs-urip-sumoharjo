import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import LocationOnMap from "./LocationOnMap";
import Link from "next/link";
const Footer = ({ color }) => {
  return (
    <div
      className={`w-full  px-10 sm:px-20 md:px-5 lg:px-32 py-3 text-clrBaseLight text-sm leading-6 md:leading-8 ${color}`}
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 items-start">
        <div>
          <h2 className="font-thin mb-4">RS.Urip Sumoharjo</h2>
          <p>Jl. Urip Sumoharjo no. 200 Gn. Sulah</p>
          <p> Way Halim Kota Bandar Lampung</p>
          <p>Lampung 35356</p>
        </div>
        <div>
          <p>contact us:</p>
          <div className="flex items-center ">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <p>(0721)771322</p>
          </div>
          <div className="flex items-center ">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />

            <p>(0721)771323</p>
          </div>
          <div className="flex items-center ">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <p>info@rsuripsumoharjo.com</p>
          </div>
          <div className=" mt-5 space-x-5 mb-5">
            <Link href="https://www.instagram.com/rs.uripsumoharjo.lampung/">
              <a>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=" text-pink-500  text-3xl cursor-pointer"
                />
              </a>
            </Link>
            <Link href="https://www.facebook.com/">
              <a>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-500 text-3xl cursor-pointer"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/rs.uripsumoharjo.lampung/">
              <a>
                <FontAwesomeIcon
                  icon={faTwitterSquare}
                  className="text-blue-300 text-3xl cursor-pointer"
                />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <LocationOnMap />
        </div>
      </div>
    </div>
  );
};

export default Footer;
