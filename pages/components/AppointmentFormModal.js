import { faBan, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AppointmentFormModal = ({ data }) => {
  const {
    selfAppointment,
    values: {
      requesterName,
      requesterRelationship,
      requesterPhone,
      name,
      email,
      gender,
      age,
      address,
      phone,
      appointmentPurpose,
      appointmentLocation,
    },
  } = data;
  const requesterData = {
    requesterName,
    requesterRelationship,
    requesterPhone,
  };
  const patientData = {
    name,
    email,
    gender,
    age,
    address,
    phone,
    appointmentPurpose,
    appointmentLocation,
  };
  return (
    <div className="modal-base">
      <div
        className="modal-container  bg-clrBaseLightHover h-fit"
        style={{ width: "500px" }}
      >
        <div className="w-full  pt-10 px-5 pb-0 ">
          <div className="sub-form pb-0  bg-clrBaseLightHover ">
            <div className="form-title">
              <h5>Informasi Pasien</h5>
            </div>
            <p className="leading-5 mb-5">
              Selamat datang, {selfAppointment ? name : requesterName},
              terimakasih atas kepercayaan Anda pada RS Urip Sumoharjo <br />
              Mohon kembali dicek ulang data anda:
            </p>

            {!selfAppointment && (
              <RequesterData requesterData={requesterData} />
            )}
            <PatientData patientData={patientData} />
            <div className="flex space-x-5 my-3 w-full justify-center">
              <button
                type="submit"
                onClick={() => {
                  setOpenModal({
                    status: false,
                    appointment: data,
                  });
                }}
                className=" bg-clrPrimaryDark logo-btn h-7"
              >
                <FontAwesomeIcon icon={faRightToBracket} className="mr-3" />
                Setujui
              </button>

              <button
                type="button"
                onClick={() => {
                  setOpenModal({
                    status: false,
                    appointment: data,
                  });
                }}
                className=" bg-clrPrimaryMedium logo-btn h-7"
              >
                <FontAwesomeIcon icon={faBan} className="mr-3" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentFormModal;

const PatientData = ({ patientData }) => {
  const {
    name,
    email,
    gender,
    age,
    address,
    phone,
    appointmentPurpose,
    appointmentLocation,
  } = patientData;
  return (
    <div className="leading-5 mb-5 ">
      <h5>Patient Data</h5>

      <p>Name pasien : {name}</p>
      <p>Email : {email}</p>
      <p>Jenis kelamin : {gender}</p>
      <p>Usia : {age} tahun</p>
      {address && <p>Alamat : {address}</p>}
      <p>Nomor telepon : {phone}</p>
      <p>Tujuan kunjungan :{appointmentPurpose}</p>
      <p>{appointmentLocation}</p>
    </div>
  );
};

const RequesterData = ({ requesterData }) => {
  const { requesterName, requesterRelationship, requesterPhone } =
    requesterData;
  return (
    <div className="leading-5 mb-5">
      <h5>Data Pendaftar</h5>

      <p>nama : {requesterName}</p>
      <p>Hubungan dengan pasien : {requesterRelationship}</p>
      <p>Nomor telepon anda : {requesterPhone}</p>
    </div>
  );
};
