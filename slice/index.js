import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import layoutSlice from "./layoutSlice";
import patientSlice from "./patientSlice";

const rootReducer = combineReducers({
  patients: patientSlice.reducer,
  layout: layoutSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [],
      ignoredPaths: [],
    },
  }),
});
