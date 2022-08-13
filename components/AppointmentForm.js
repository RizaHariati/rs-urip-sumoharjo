import {
  faBan,
  faBed,
  faCircle,
  faCircleDot,
  faEnvelope,
  faHandHoldingHand,
  faHouseChimneyUser,
  faPhone,
  faRightToBracket,
  faStethoscope,
  faSyringe,
  faUser,
  faUserClock,
  faUserDoctor,
  faUserInjured,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { MyTextInput, Radio } from "./AppointmentFormInputs";
import FindPurpose from "../utils/FindPurpose";
import * as Yup from "yup";
import AppointmentFormModal from "./AppointmentFormModal";
import { useDispatch, useSelector } from "react-redux";
import {
  handleRequestApplication,
  handleResetApplication,
} from "../slice/patientSlice";
import { useRouter } from "next/router";
import AppointmentConfirmModal from "./AppointmentConfirmModal";

const relationshipOptions = [
  { id: 0, label: "Saya Orang tua/wali dari Pasien", value: "orang tua/wali" },
  { id: 1, label: "Saya Anak dari Pasien", value: "anak" },
  { id: 2, label: "Saya Suami/Istri dari Pasien", value: "suami/istri" },
  { id: 3, label: "Perusahaan", value: "perusahaan" },
  { id: 4, label: "Lainnya", value: "lainnya" },
];

const gender = [
  { id: 0, label: "Female", value: "female" },
  { id: 1, label: "Male", value: "male" },
];

/* ---------------------------------------------------------------- */
/*                    start of the main function                    */
/* ---------------------------------------------------------------- */
const AppointmentForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, datapatient } = useSelector((state) => state.patients.login);

  const appointmentTemp = useSelector(
    (state) => state.patients.appointmentTemp
  );
  const reduxSelfAppointment = useSelector(
    (state) => state.patients.selfAppointment
  );
  const [purpose, setPurpose] = useState("");
  const [purposeValue, setPurposeValue] = useState(
    appointmentTemp.appointmentPurpose
  );
  const [purposeList, setPurposeList] = useState([]);
  const [selfAppointment, setSelfAppointment] = useState(reduxSelfAppointment);
  const [openModal, setOpenModal] = useState({
    status: false,
    appointment: { selfAppointment: true, values: "" },
  });
  const [openConfirmModal, setOpenConfirmModal] = useState({
    status: false,
    confirmedName: "",
  });

  const handleChangePurpose = (e) => {
    e.preventDefault();
    setPurpose(e.target.value);
  };

  useEffect(() => {
    let list = [];
    if (purpose) {
      list = FindPurpose(purpose);
    }
    return setPurposeList(list);
  }, [purpose]);

  /* -------------------- validation alternatives ------------------- */
  const validationSchema1 = Yup.object({
    name: Yup.string().required("Nama harus diisi"),
    email: Yup.string()
      .required("email harus diisi")
      .email("format email salah"),
    gender: Yup.string().required("Silahkan Pilih salah satu"),
    age: Yup.number()
      .required("Usia tidak boleh kosong")
      .typeError("Usia harus dalam bentuk angka")
      .min(0, "Usia tidak boleh minus")
      .max(110, "Usia maximal 110 tahun"),

    phone: Yup.number()
      .typeError("Nomor telepon harus dalam bentuk angka")
      .required("Telepon tidak boleh kosong"),
  });

  const validationSchema2 = Yup.object({
    requesterName: Yup.string().required("Nama pendaftar harus diisi"),
    requesterRelationship: Yup.string().required("Silahkan Pilih salah satu"),
    requesterPhone: Yup.number()
      .typeError("Nomor telepon harus dalam bentuk angka")
      .required("Telepon tidak boleh kosong"),
    name: Yup.string().required("Nama harus diisi"),
    email: Yup.string()
      .required("email harus diisi")
      .email("format email salah"),
    gender: Yup.string().required("Silahkan Pilih salah satu"),
    age: Yup.number()
      .typeError("Usia harus dalam bentuk angka")
      .min(0, "Usia tidak boleh minus")
      .max(110, "Usia maximal 110 tahun")
      .required("Usia tidak boleh kosong"),
    phone: Yup.number()
      .typeError("Nomor telepon harus dalam bentuk angka")
      .required("Telepon tidak boleh kosong"),
  });
  /* -------------------- validation alternatives ------------------- */
  return (
    <div className="main-form" id="main-form">
      <h3 className="mb-5">Formulir Pendaftaran online</h3>

      <Formik
        initialValues={appointmentTemp}
        validationSchema={
          selfAppointment ? validationSchema1 : validationSchema2
        }
        validateOnBlur={true}
        validateOnChange={false}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(
            handleRequestApplication({
              appointmentData: values,
              selfAppointment,
            })
          );
          setTimeout(() => {
            setOpenModal({
              status: true,
              appointment: { selfAppointment, values },
            });
            setSubmitting(false);
          }, 400);
        }}
        enableReinitialize
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {openModal.status && (
              <AppointmentFormModal
                data={openModal.appointment}
                setOpenModal={setOpenModal}
                formik={formik}
                setOpenConfirmModal={setOpenConfirmModal}
              />
            )}
            {openConfirmModal.status && (
              <AppointmentConfirmModal
                setOpenConfirmModal={setOpenConfirmModal}
                confirmedName={openConfirmModal.confirmedName}
                formik={formik}
              />
            )}
            <div className="sub-form">
              <div className="form-title">
                <h5>Informasi Pendaftar</h5>
              </div>
              {/*  -------------------- setting selfAppointment ------------------- */}
              <div>
                <p className="px-5 md:px-0 ">
                  Apakah Anda mendaftar sebagai pasien atau mendaftarkan orang
                  lain?
                </p>
                <div className="flex space-x-5 my-3 w-full justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      setSelfAppointment(true);
                    }}
                    className={
                      selfAppointment
                        ? " bg-clrPrimaryDark  logo-btn h-7 "
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
                      setSelfAppointment(false);
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
              {/*  -------------------- setting selfAppointment ------------------- */}
              {!selfAppointment && (
                /* ------------------------ Requester info ------------------------ */
                <div className="form-input-container">
                  <div className="form-input-item">
                    <MyTextInput
                      label="Nama Pendaftar"
                      id="requesterName"
                      name="requesterName"
                      placeholder="Nama Pendaftar..."
                      type="text"
                      icon={faUser}
                    />
                  </div>

                  <div role="group" className="form-input-item">
                    <label>
                      <FontAwesomeIcon
                        icon={faHandHoldingHand}
                        className="form-icon"
                      />
                      Hubungan dengan pasien
                    </label>
                    {formik.touched.requesterRelationship &&
                    formik.errors.requesterRelationship ? (
                      <div className="error">
                        {formik.errors.requesterRelationship}
                      </div>
                    ) : null}
                    {relationshipOptions.map((item) => {
                      const { id, label, value } = item;
                      return (
                        <Radio
                          key={id}
                          label={label}
                          id="requesterRelationship"
                          name="requesterRelationship"
                          value={value}
                        />
                      );
                    })}
                  </div>

                  <div className="form-input-item">
                    <MyTextInput
                      label="Telepon Pendaftar"
                      id="requesterPhone"
                      name="requesterPhone"
                      placeholder="Telepon Pendaftar..."
                      type="number"
                      icon={faPhone}
                    />
                  </div>
                </div>
                /* ------------------------ Requester info ------------------------ */
              )}
            </div>

            {/* ------------------------- Patient info ------------------------- */}
            <div className="sub-form">
              <div className="form-title">
                <h5>Informasi Pasien</h5>
              </div>

              <div className="form-input-container">
                <div className="form-input-item">
                  <MyTextInput
                    label="Nama Pasien"
                    id="name"
                    name="name"
                    placeholder="Nama Pasien...."
                    type="text"
                    icon={faUserInjured}
                  />
                </div>

                <div className="form-input-item">
                  <MyTextInput
                    label="Email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    icon={faEnvelope}
                  />
                </div>

                <div role="group" className="form-input-item">
                  <label>
                    <FontAwesomeIcon icon={faVenusMars} className="form-icon" />
                    gender
                  </label>
                  {formik.errors.gender ? (
                    <div className="error">
                      {formik.touched.gender && formik.errors.gender}
                    </div>
                  ) : null}
                  {gender.map((item) => {
                    const { id, label, value } = item;
                    return (
                      <Radio
                        key={id}
                        label={label}
                        name="gender"
                        value={value}
                      />
                    );
                  })}
                </div>

                <div className="form-input-item">
                  <MyTextInput
                    label="Usia"
                    id="age"
                    name="age"
                    placeholder="Usia..."
                    type="number"
                    icon={faUserClock}
                  />
                </div>

                <div className="form-input-item">
                  <MyTextInput
                    label="Alamat"
                    id="address"
                    name="address"
                    placeholder="Alamat..."
                    type="text"
                    icon={faHouseChimneyUser}
                  />
                </div>

                <div className="form-input-item">
                  <MyTextInput
                    label="Nomor Telepon"
                    id="phone"
                    name="phone"
                    placeholder="Nomor Telepon..."
                    type="number"
                    icon={faPhone}
                  />
                </div>
              </div>
            </div>
            {/* ------------------------- Patient info ------------------------- */}

            {/* ------------------------ Patient Purpose ----------------------- */}
            <div className="sub-form">
              <div className="form-title">
                <h5>Tujuan Pendaftar</h5>
              </div>

              <div className="form-input-container relative">
                <label htmlFor="appointmentPurpose">
                  Silahkan tulis tujuan pendaftaran atau nama dokter, Poliklinik
                  atau Fasilitas yang dituju.
                </label>
                {formik.errors.appointmentPurpose ? (
                  <div className="error">
                    {formik.errors.appointmentPurpose}
                  </div>
                ) : null}
                {purposeValue && (
                  <input
                    id="appointmentPurpose"
                    name="appointmentPurpose"
                    placeholder="Tulis Tujuan Pendaftaran..."
                    onFocus={() => setPurposeValue("")}
                    className="form-input "
                    type="text"
                    {...formik.getFieldProps("appointmentPurpose")}
                  />
                )}
                {!purposeValue && (
                  <input
                    id="purpose"
                    name="purpose"
                    placeholder="Tujuan Pendaftaran..."
                    className="form-input"
                    type="text"
                    value={purpose}
                    onChange={(e) => handleChangePurpose(e)}
                  />
                )}

                {purpose && purposeList.length > 0 && (
                  <div className="absolute w-full  bg-clrBaseLightHover top-24 rounded-sm shadow-md p-5 z-10">
                    {purposeList.map((item, index) => {
                      const { title, data } = item;
                      return (
                        <div key={index} className="w-full overflow-hidden ">
                          <div className="flex items-center mt-2">
                            {title === "doctor" && (
                              <FontAwesomeIcon
                                icon={faUserDoctor}
                                className="text-clrBorder mr-2"
                              />
                            )}
                            {title === "specialization" && (
                              <FontAwesomeIcon
                                icon={faStethoscope}
                                className="text-clrBorder mr-2"
                              />
                            )}
                            {title === "facility" && (
                              <FontAwesomeIcon
                                icon={faSyringe}
                                className="text-clrBorder mr-2"
                              />
                            )}
                            {title === "bed" && (
                              <FontAwesomeIcon
                                icon={faBed}
                                className="text-clrBorder mr-2"
                              />
                            )}
                            <h5 className="capitalize ">{title}</h5>
                          </div>
                          <div
                            className="overflow-y-auto  overflow-x-hidden max-h-32 border-clrBaseLightActive p-2"
                            style={{ borderWidth: "1px" }}
                          >
                            {data.map((itempurpose, indexpurpose) => {
                              return (
                                <button
                                  type="button"
                                  key={indexpurpose}
                                  className="block h-7 hover:text-clrPrimaryDark transition-all w-full text-left "
                                  onClick={async () => {
                                    setPurposeValue(itempurpose);
                                    formik.setFieldValue(
                                      "appointmentPurpose",
                                      itempurpose
                                    );

                                    formik.setFieldValue(
                                      "appointmentLocation",
                                      title
                                    );
                                    setPurpose("");
                                    setPurposeList([]);
                                  }}
                                >
                                  {itempurpose}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {purpose && purposeList.length < 1 && (
                  <div className="text-center text-clrTextMedium my-5">
                    <h5>Tidak ditemukan hasil dengan kata kunci itu</h5>
                  </div>
                )}
              </div>

              <div className="flex space-x-5 my-3 w-full justify-center">
                <button
                  type="submit"
                  className=" bg-clrPrimaryDark  logo-btn h-7"
                >
                  <FontAwesomeIcon icon={faRightToBracket} className="mr-3" />
                  Daftarkan
                </button>

                <button
                  type="reset"
                  onClick={() => {
                    formik.resetForm();
                    dispatch(handleResetApplication());
                    router.reload();
                  }}
                  className=" bg-clrPrimaryMedium logo-btn h-7"
                >
                  <FontAwesomeIcon icon={faBan} className="mr-3" />
                  Reset
                </button>
              </div>
            </div>
            {/* ------------------------ Patient Purpose ----------------------- */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AppointmentForm;
