import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    page: "home",
  },
  reducers: {
    home: (state) => {
      state.page = "home";
    },
    create: (state) => {
      state.page = "create";
    },
  },
});

export const { home, create } = pageSlice.actions;

export default pageSlice.reducer;
