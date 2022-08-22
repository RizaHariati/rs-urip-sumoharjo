import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useField } from "formik";
import React from "react";

export const MyTextInput = ({ label, icon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name} className="form-icon">
        <FontAwesomeIcon icon={icon} className="form-icon" />
        {label}
      </label>
      <input autoComplete="off" className="form-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export const Radio = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "radio" });
  return (
    <>
      <label className="flex items-center ml-5 cursor-pointer">
        <input type="radio" {...field} {...props} className="mr-2" />
        {label}
      </label>
    </>
  );
};

const AppointmentFormInputs = () => {
  return <div>AppointmentFormInputs</div>;
};

export default AppointmentFormInputs;
