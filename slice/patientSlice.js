import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patients",
  initialState: {
    login: false,
    loginData: {
      name: "",
      email: "",
      gender: "",
      age: 0,
      address: "",
      phone: "",
    },
    selfAppointment: true,
    appointmentData: {
      appointmentRequester: {
        requesterName: "",
        requesterRelationship: "",
        requesterPhone: "",
      },
      appointmentPatient: {
        name: "",
        email: "",
        gender: "",
        age: 0,
        address: "",
        phone: "",
      },
      appointmentPurpose: "",
    },
  },
  reducers: {
    requestForOther: (state) => {
      state.selfAppointment = false;
    },
    requestforSelf: (state) => {
      state.selfAppointment = true;
    },
  },
});
export const { requestForOther, requestforSelf } = patientSlice.actions;
export default patientSlice;
