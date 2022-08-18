import {
  faEnvelope,
  faHouseChimneyUser,
  faLock,
  faPhone,
  faRightToBracket,
  faUser,
  faUserClock,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import React, { useState } from "react";
import { MyTextInput, Radio } from "./AppointmentFormInputs";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { handleRequestRegister } from "../slice/patientSlice";
import LoadingSpinner from "./LoadingSpinner";

const URL_PATIENT =
  "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/patient/";

const initialValues = {
  name: "",
  email: "",
  password: "",
  gender: "",
  age: "",
  address: "",
  phone: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Nama harus diisi"),
  email: Yup.string().required("email harus diisi").email("format email salah"),
  password: Yup.string().required("Password harus diisi"),
  gender: Yup.boolean().required("Silahkan pilih salah satu gender"),
  age: Yup.number()
    .required("Usia tidak boleh kosong")
    .typeError("Usia harus dalam bentuk angka")
    .min(0, "Usia tidak boleh minus")
    .max(110, "Usia maximal 110 tahun"),
  address: Yup.string().required("Alamat harus diisi"),
  phone: Yup.number()
    .typeError("Nomor telepon harus dalam bentuk angka")
    .required("Telepon tidak boleh kosong"),
});

const gender = [
  { id: 0, label: "Female", value: "false" },
  { id: 1, label: "Male", value: "true" },
];

const Register = ({ setOpenRegister, setOpenAlert }) => {
  const [loading, setLoading] = useState(false);
  const registerTemp = useSelector((state) => state.patients.registerTemp);
  const dispatch = useDispatch();
  const router = useRouter();
  const registerpatient = async (values) => {
    setLoading(true);
    if (values) {
      dispatch(handleRequestRegister(values));
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        };

        const response = await fetch(URL_PATIENT + "/register", requestOptions);
        const data = await response.json();
        console.log(response);
        const { msg } = data;
        if (response.status === 200 || response.status === 202) {
          setOpenAlert({ status: true, msg, color: "bg-green-300" });
          dispatch(handleRequestRegister(initialValues));
          setTimeout(() => {
            router.reload();
          }, 2000);
          setLoading(false);
          return;
        } else {
          setOpenAlert({
            status: true,
            msg,
            color: "bg-pink-300",
          });
          dispatch(handleRequestRegister(values));
          setTimeout(() => {
            setOpenAlert({
              status: false,
              msg: "",
              color: "bg-pink-300",
            });
          }, 2000);
          setLoading(false);
          return;
        }
      } catch (error) {
        console.log({ error });
      }
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  } else {
    return (
      <div id="register-container">
        <div className="w-full flex justify-center ">
          <p className="mr-1">Sudah ada akun? Silahkan</p>
          <button
            type="button"
            className="underline underline-offset-4 text-clrPrimaryMedium transition-all hover:text-clrPrimaryDark "
            onClick={() => setOpenRegister(false)}
          >
            login
          </button>
        </div>
        <div className="sub-form px-0 pt-7 mt-5">
          <div className="form-title">
            <h5>Register</h5>
          </div>
          <Formik
            initialValues={registerTemp}
            validationSchema={validationSchema}
            validateOnBlur={true}
            validateOnChange={false}
            onSubmit={async (values, { setSubmitting }) => {
              await registerpatient(values);

              setSubmitting(false);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit} id="register-form">
                <div className="form-input-container ">
                  <div className="form-input-item">
                    <MyTextInput
                      label="Nama Pasien"
                      id="name"
                      name="name"
                      placeholder="Masukkan nama pasien"
                      type="text"
                      icon={faUser}
                    />
                  </div>

                  <div className="form-input-item">
                    <MyTextInput
                      label="Email Pasien"
                      id="email"
                      name="email"
                      placeholder="Masukkan email"
                      type="email"
                      icon={faEnvelope}
                    />
                  </div>

                  <div className="form-input-item">
                    <MyTextInput
                      label="Password"
                      id="password"
                      name="password"
                      placeholder="Masukkan password"
                      type="password"
                      icon={faLock}
                    />
                  </div>
                  <div role="group" className="form-input-item">
                    <label>
                      <FontAwesomeIcon
                        icon={faVenusMars}
                        className="form-icon"
                      />
                      gender
                    </label>
                    {formik.errors.gender ? (
                      <div className="error">
                        {formik.touched.gender && formik.errors.gender}
                      </div>
                    ) : null}
                    <div id="register-gender-container">
                      {gender.map((item, index) => {
                        const { id, label, value } = item;
                        return (
                          <Radio
                            id={`gender${index}`}
                            key={id}
                            label={label}
                            name="gender"
                            value={value}
                          />
                        );
                      })}
                    </div>
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
                <div className="flex space-x-5 my-3 w-full justify-center">
                  <button
                    type="submit"
                    className=" bg-clrPrimaryDark  logo-btn h-7"
                  >
                    <FontAwesomeIcon icon={faRightToBracket} className="mr-3" />
                    Register
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
};

export default Register;
