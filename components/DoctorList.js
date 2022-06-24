import {
  faCalendarDays,
  faClock,
  faHouseMedical,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import { handleReferenceApplication } from "../slice/patientSlice";

const DoctorList = ({ doctorlist, male, female }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="doctor-card-container ">
      {doctorlist.map((item, index) => {
        const { nama, waktu, poli, hari, jam, gender } = item;

        const image =
          gender === true
            ? male.results.find((item, indexImage) => indexImage === index)
            : female.results.find((item, indexImage) => indexImage === index);

        const picture = image.picture.thumbnail;
        return (
          <div key={index} className="doctor-card">
            <div className="text-left">
              <div className="flex space-x-3 items-end w-full justify-start border-b-2 border-b-clrBorder mb-2 pb-2 z-10">
                <Image
                  src={picture}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt={`thumbnail ${picture}`}
                />
                <h5 className=" text-base">{nama}</h5>
              </div>
              <div className="text-sm leading-5 text-clrTextMedium">
                <p>
                  <FontAwesomeIcon
                    icon={faHouseMedical}
                    className="mr-3 text-clrBorder"
                  />
                  Poli :{poli}
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faSun}
                    className="mr-3 text-clrBorder"
                  />
                  Waktu : {waktu}
                </p>
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
              <button
                onClick={() => {
                  dispatch(
                    handleReferenceApplication({
                      purpose: nama,
                      location: "doctor",
                    })
                  );
                  router.push("/main/schedule-appointment");
                }}
                className="btn bg-clrPrimaryDark block float-right mt-2"
              >
                Mendaftar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default DoctorList;
