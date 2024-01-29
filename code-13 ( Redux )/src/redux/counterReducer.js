import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  timer: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumber: (state) => {
      state.value += 1;
    },
  },
});

const { addNumber } = counterSlice.actions;

export default counterSlice.reducer;
