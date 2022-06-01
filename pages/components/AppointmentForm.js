import {
  faCircle,
  faCircleDot,
  faUser,
  faUserInjured,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestForOther, requestforSelf } from "../../slice/patientSlice";

const AppointmentForm = () => {
  const dispatch = useDispatch();
  const selfAppointment = useSelector(
    (state) => state.patients.selfAppointment
  );
  return (
    <div className="main-form">
      <h3 className="mb-5">Formulir Pendaftaran online</h3>

      <form>
        <div className="sub-form">
          <div className="form-title">
            <h5>Informasi Pendaftar</h5>
          </div>
          <div>
            <p>
              Apakah Anda mendaftar sebagai pasien atau mendaftarkan orang lain?
            </p>
            <div className="flex space-x-5 my-3 w-full justify-center">
              <button
                type="button"
                onClick={() => {
                  dispatch(requestforSelf());
                }}
                className={
                  selfAppointment
                    ? " bg-clrPrimaryDark  logo-btn h-7"
                    : " bg-clrPrimaryMedium logo-btn h-7"
                }
              >
                <FontAwesomeIcon
                  icon={selfAppointment ? faCircleDot : faCircle}
                  className="mr-3"
                />
                Sebagai Pasien
              </button>

              <button
                type="button"
                onClick={() => {
                  dispatch(requestForOther());
                }}
                className={
                  !selfAppointment
                    ? " bg-clrPrimaryDark  logo-btn h-7"
                    : " bg-clrPrimaryMedium logo-btn h-7"
                }
              >
                <FontAwesomeIcon
                  icon={!selfAppointment ? faCircleDot : faCircle}
                  className="mr-3"
                />
                Orang Lain
              </button>
            </div>
          </div>
          {!selfAppointment && (
            <div className="form-input-container">
              <label>
                <FontAwesomeIcon icon={faUser} className="form-icon" /> Nama
                Pendaftar
              </label>
              <input placeholder="Nama Pendaftar..." className="form-input" />
            </div>
          )}
        </div>

        <div className="sub-form">
          <div className="form-title">
            <h5>Informasi Pasien</h5>
          </div>
          <div className="form-input-container">
            <label>
              <FontAwesomeIcon icon={faUserInjured} className="form-icon" />{" "}
              Nama Pasien
            </label>
            <input placeholder="Nama Pasien..." className="form-input" />
          </div>
        </div>

        <div className="sub-form">
          <div className="form-title">
            <h5>Tujuan Pendaftar</h5>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
