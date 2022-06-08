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
import { setlogin } from "../../slice/patientSlice";
import { useDispatch } from "react-redux";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().required("email harus diisi").email("format email salah"),
  password: Yup.string().required("Password harus diisi"),
});

const Login = ({ setOpenRegister }) => {
  const dispatch = useDispatch();
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
          onSubmit={(values, { setSubmitting }) => {
            dispatch(setlogin());
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
                className=" bg-clrPrimaryDark  logo-btn h-7"
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
