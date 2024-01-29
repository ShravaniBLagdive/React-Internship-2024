import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";

export const store = configureStore({
  reducer: {
    couter: counterReducer,
    // add slice here
  },
});
