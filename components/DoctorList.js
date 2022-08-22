import {
  faCalendarDays,
  faClock,
  faHouseMedical,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGender } from "../slice/doctorSlice";
import { handleReferenceApplication } from "../slice/patientSlice";
import LoadingSpinner from "./LoadingSpinner";

const DoctorList = () => {
  const { doctorList, male, female } = useSelector((state) => state.doctor);
  const router = useRouter();
  const dispatch = useDispatch();

  const fetchGender = async () => {
    if (doctorList.length < 1) return;
    else {
      try {
        const res = await fetch(
          "https://randomuser.me/api/?gender=female&inc=picture&results=71"
        );
        const dataFemale = await res.json();

        const res2 = await fetch(
          "https://randomuser.me/api/?gender=male&inc=picture&results=71"
        );
        const dataMale = await res2.json();

        if (dataFemale && dataMale) {
          const female = dataFemale.results;
          const male = dataMale.results;
          dispatch(setGender({ female, male }));

          return;
        }
      } catch (error) {
        console.log(error);
      }

      return;
    }
  };

  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (male.length < 1 || female.length < 1) {
        fetchGender();
      }
    }
    return () => {
      isMount = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [male, female]);

  if (male.length < 1 || female.length < 1)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  else {
    return (
      <div className="doctor-card-container " id="doctor-card-container">
        {doctorList.map((item, index) => {
          const { nama, waktu, poli, hari, jam, gender } = item;

          const image =
            gender === true
              ? male.find((_, indexImage) => indexImage === index)
              : female.find((_, indexImage) => indexImage === index);

          const picture = image.picture.thumbnail;
          return (
            <div
              key={index}
              className="doctor-card"
              id={`doctor-card-${index}`}
            >
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
                  id="doctor-appointment-button"
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
  }
};
export default DoctorList;
