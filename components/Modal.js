import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { handleReferenceApplication } from "../slice/patientSlice";

const Modal = ({ facility, setOpenModal }) => {
  const { title, img, info } = facility;
  // const { cloud_id, cloud_image } = img;
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <div className="modal-base">
      <div className="modal-container">
        <div className="modal-image ">
          <Image
            src={`/images/pelayanan-fasilitas/${img}.jpg`}
            width={630}
            height={500}
            className="object-cover object-center "
            alt={img}
          />
        </div>
        <div className="p-5">
          <h4>{title}</h4>
          {info.map((text, index) => {
            return (
              <p
                className="leading-5 text-slate-700 text-base md:text-sm"
                key={index}
              >
                {text.text}
              </p>
            );
          })}
          <div className="mt-5 md:absolute bottom-5 right-5 space-x-2">
            <button
              onClick={() => setOpenModal({ opened: false, facility: {} })}
              className="btn bg-red-600"
            >
              Kembali
            </button>
            <button
              onClick={() => {
                setOpenModal({ opened: false, facility: {} });
                dispatch(
                  handleReferenceApplication({
                    purpose: title,
                    location: "facility",
                  })
                );

                router.push("/main/schedule-appointment");
              }}
              className="btn bg-clrPrimaryDark"
            >
              Mendaftar
            </button>
          </div>
        </div>
        <button
          onClick={() => {
            setOpenModal({ opened: false, facility: {} });
          }}
        >
          <FontAwesomeIcon
            icon={faClose}
            className=" absolute top-5 right-5 text-2xl text-red-600"
          />
        </button>
      </div>
    </div>
  );
};

export default Modal;
