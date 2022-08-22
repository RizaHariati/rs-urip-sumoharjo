import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",

  initialState: {
    categories: [],
    doctorList: [],
    doctordb: [],
    male: [],
    female: [],
    OpenList: false,
    specializationList: [],
    keywords: {
      isQueryName: false,
      status: "poli",
      key: "",
    },
  },
  reducers: {
    setDoctor: (state, action) => {
      const doctordb = action.payload;
      state.doctordb = doctordb;
      state.categories = [...new Set(doctordb.map((doctor) => doctor.poli))];
    },
    setOpenList: (state, action) => {
      state.OpenList = action.payload;
    },
    setDoctorList: (state, action) => {
      state.doctorList = action.payload;
    },
    setspecializationList: (state, action) => {
      state.specializationList = action.payload;
    },

    resetDoctors: (state) => {
      state.OpenList = false;
      state.specializationList = [];
      state.doctorList = [];
    },
    setKeywords: (state, action) => {
      state.keywords = { ...action.payload };
    },
    resetKeywords: (state) => {
      state.keywords = {
        isQueryName: false,
        status: "poli",
        key: "",
      };
    },

    resetAll: (state) => {
      state.OpenList = false;
      state.specializationList = [];
      state.doctorList = [];
      state.keywords = {
        isQueryName: false,
        status: "poli",
        key: "",
      };
    },
    setResultList: (state, action) => {
      console.log(action.payload);
    },
    setGender: (state, action) => {
      const { male, female } = action.payload;

      state.male = male;
      state.female = female;
    },
  },
});

export const {
  setOpenList,
  setDoctorList,
  setspecializationList,
  resetDoctors,
  setKeywords,
  setResultList,
  setDoctor,
  resetKeywords,
  resetAll,
  setGender,
} = doctorSlice.actions;
export default doctorSlice;
