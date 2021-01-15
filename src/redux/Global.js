import { createSlice } from "@reduxjs/toolkit";

export const global = createSlice({
  name: "global",
  initialState: {
    Counter: 0
  },
  reducers: {
    setCounter: (state, action) => {
      state.Counter = action.payload;
    },
  },
});

export const { setCounter } = global.actions;

export const Counter = (state) => state.Counter;

export default global.reducer;
