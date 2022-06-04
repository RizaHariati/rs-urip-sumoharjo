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
      phone: 0,
    },
    selfAppointment: true,
    appointmentData: {
      requesterName: "",
      requesterRelationship: "",
      requesterPhone: {},
      name: "",
      email: "",
      gender: "",
      age: {},
      address: "",
      phone: {},
      appointmentPurpose: "",
      appointmentLocation: "",
    },
  },
  reducers: {
    handleRequester: (state, action) => {
      const { appointmentData, selfAppointment } = action.payload;
      state.appointmentData = appointmentData;
      state.selfAppointment = selfAppointment;
    },
  },
});
export const { handleRequester } = patientSlice.actions;
export default patientSlice;
