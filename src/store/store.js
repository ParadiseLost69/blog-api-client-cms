import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../features/pageSlice";

export default configureStore({
  reducer: {
    page: pageReducer,
  },
});
