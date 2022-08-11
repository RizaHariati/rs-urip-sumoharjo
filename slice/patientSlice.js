import { createSlice } from "@reduxjs/toolkit";
import {
  handleConfirm,
  handleReference,
  handleRequest,
  handleReset,
} from "./utils/Application";

const patientSlice = createSlice({
  name: "patients",
  initialState: {
    login: { status: false, datapatient: {}, token: "" },
    registerTemp: {
      name: "",
      email: "",
      password: "",
      gender: "",
      age: "",
      address: "",
      phone: "",
    },
    selfAppointment: true,
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
      appointmentPurpose: "",
      appointmentLocation: "",
    },
    appointmentTemp: {
      requesterName: "",
      requesterRelationship: "",
      requesterPhone: "",
      name: "",
      email: "",
      gender: "",
      age: "",
      address: "",
      phone: "",
      appointmentPurpose: "Umum",
      appointmentLocation: "specialization",
    },
  },
  reducers: {
    /* --------- functions for ScheduleAppointment application --------- */

    handleRequestApplication: handleRequest,
    handleConfirmApplication: handleConfirm,
    handleResetApplication: handleReset,
    handleReferenceApplication: handleReference,
    /* --------- functions for ScheduleAppointment application --------- */

    handleRequestRegister: (state, action) => {
      state.registerTemp = { ...action.payload, password: "" };
    },
    setlogin: (state, action) => {
      const { findPatient, token } = action.payload;
      const { name, email, gender, age, address, phone } = findPatient;
      state.login.status = true;
      state.login.datapatient = findPatient;
      state.login.token = token;
      state.appointmentTemp = {
        ...state.appointmentTemp,
        name,
        email,
        gender,
        age,
        address,
        phone,
      };
    },
    setlogout: (state) => {
      state.login.status = false;
      state.login.datapatient = {};
      state.login.token = "";
      state.appointmentTemp = {
        requesterName: "",
        requesterRelationship: "",
        requesterPhone: "",
        name: "",
        email: "",
        gender: "",
        age: "",
        address: "",
        phone: "",
        appointmentPurpose: "Umum",
        appointmentLocation: "specialization",
      };
    },
  },
});
export const {
  handleRequestApplication,
  handleResetApplication,
  handleConfirmApplication,
  handleReferenceApplication,
  handleRequestRegister,
  setlogin,
  setlogout,
} = patientSlice.actions;
export default patientSlice;
