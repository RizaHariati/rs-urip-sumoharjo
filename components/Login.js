import {
  faEnvelope,
  faLock,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Formik } from "formik";
import React from "react";
import { MyTextInput } from "./AppointmentFormInputs";
import * as Yup from "yup";
import { handleRequestRegister, setlogin } from "../slice/patientSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const URL_PATIENT =
  "https://rs-urip-sumoharjo-api.herokuapp.com/api/v1/patient/";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().required("email harus diisi").email("format email salah"),
  password: Yup.string().required("Password harus diisi"),
});

const Login = ({ setOpenRegister, setOpenAlert }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogin = async (values) => {
    dispatch(
      handleRequestRegister({
        name: "",
        email: "",
        password: "",
        gender: "",
        age: "",
        address: "",
        phone: "",
      })
    );
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    try {
      const response = await fetch(`${URL_PATIENT}/login`, requestOptions);
      const data = await response.json();

      const { msg, findPatient, token } = data;

      if (response.status === 200 || response.status === 202) {
        setOpenAlert({ status: true, msg, color: "bg-green-300" });
        dispatch(setlogin({ findPatient, token }));
        setTimeout(() => {
          router.reload();
        }, 2000);
        return;
      } else {
        setOpenAlert({ status: true, msg, color: "bg-pink-300" });
        dispatch(handleRequestRegister(values));
        setTimeout(() => {
          setOpenAlert({ status: false, msg: "", color: "bg-pink-300" });
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center ">
        <p className="mr-1">Belum ada akun? silahkan</p>
        <button
          type="button"
          className="underline underline-offset-4 text-clrPrimaryMedium transition-all hover:text-clrPrimaryDark "
          onClick={() => setOpenRegister(true)}
        >
          register
        </button>
      </div>
      <div className="sub-form px-0 py-7 mt-5">
        <div className="form-title">
          <h5>Login</h5>
        </div>
        <Formik
          initialValues={initialValues}
          validateOnBlur={true}
          validateOnChange={false}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await handleLogin(values);
            setTimeout(() => {
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className="form-input-container">
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
            </div>
            <div className="flex space-x-5 my-3 w-full justify-center">
              <button
                type="submit"
                className=" bg-clrPrimaryDark  logo-btn h-7 px-3"
              >
                <FontAwesomeIcon icon={faRightToBracket} className="mr-3" />
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
