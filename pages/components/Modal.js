import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
const Modal = ({ facility, setOpenModal }) => {
  const { title, img, info } = facility;

  return (
    <div className="modal-base">
      <div className="modal-container">
        <Image
          src={`/images/pelayanan-fasilitas/${img}.jpg`}
          width={400}
          height={250}
          className="object-cover"
        />
        <div className="p-5">
          <h4>{title}</h4>
          {info.map((item, index) => {
            const { text } = item;
            return (
              <p className="leading-5 text-sm" key={index}>
                {text}
              </p>
            );
          })}
          <div className="absolute bottom-5 right-5 space-x-2">
            <button
              onClick={() => setOpenModal({ opened: false, facility: {} })}
              className="btn bg-red-600"
            >
              Kembali
            </button>
            <button className="btn bg-clrPrimaryDark">Mendaftar</button>
          </div>
        </div>
        <button onClick={() => setOpenModal({ opened: false, facility: {} })}>
          <FontAwesomeIcon
            icon={faClose}
            className=" absolute top-5 right-5 text-xl text-red-600"
          />
        </button>
      </div>
    </div>
  );
};

export default Modal;
