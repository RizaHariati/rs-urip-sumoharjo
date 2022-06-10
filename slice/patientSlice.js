import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patients",
  initialState: {
    login: false,
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
    handleRequestApplication: (state, action) => {
      const { appointmentData, selfAppointment } = action.payload;
      if (selfAppointment) {
        state.appointmentTemp = {
          ...appointmentData,
          requesterName: "",
          requesterRelationship: "",
          requesterPhone: "",
        };
        state.selfAppointment = selfAppointment;
      } else {
        state.appointmentTemp = appointmentData;
        state.selfAppointment = selfAppointment;
      }
    },
    handleConfirmApplication: (state, action) => {
      const { appointmentData, selfAppointment } = action.payload;
      if (selfAppointment) {
        state.appointmentData = {
          ...appointmentData,
          requesterName: "",
          requesterRelationship: "",
          requesterPhone: "",
        };
      } else {
        state.appointmentData = appointmentData;
      }
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
      state.selfAppointment = true;
    },
    handleResetApplication: (state) => {
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
      state.selfAppointment = true;
    },
    setlogin: (state) => {
      state.login = true;
    },
    setlogout: (state) => {
      state.login = false;
    },
  },
});
export const {
  handleRequestApplication,
  handleResetApplication,
  handleConfirmApplication,
  setlogin,
  setlogout,
} = patientSlice.actions;
export default patientSlice;
