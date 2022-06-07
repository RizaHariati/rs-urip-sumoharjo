import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { handleRequestApplication } from "../../slice/patientSlice";
import { text } from "@fortawesome/fontawesome-svg-core";
const Modal = ({ facility, setOpenModal }) => {
  const { title, img, info } = facility;
  const router = useRouter();
  const dispatch = useDispatch();
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
            <button
              onClick={() => {
                setOpenModal({ opened: false, facility: {} });
                dispatch(
                  handleRequestApplication({
                    appointmentData: {
                      requesterName: "",
                      requesterRelationship: "",
                      requesterPhone: "",
                      name: "",
                      email: "",
                      gender: "",
                      age: "",
                      address: "",
                      phone: "",
                      appointmentPurpose: title,
                      appointmentLocation: "facility",
                    },
                    selfAppointment: true,
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
            className=" absolute top-5 right-5 text-xl text-red-600"
          />
        </button>
      </div>
    </div>
  );
};

export default Modal;
