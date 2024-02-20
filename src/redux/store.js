import { configureStore } from "@reduxjs/toolkit";
import DetailFilm from "./reducer/DetailFilmSlice";
import HeaderSlice from "./reducer/HeaderSlice";
import LoadingSlice from "./reducer/LoadingSlice";
import ManagementFilmSlice from "./reducer/ManagementFilmSlice";

export const store = configureStore({
  reducer: {
    ManagementFilmSlice,
    LoadingSlice,
    DetailFilm,
    HeaderSlice,
  },
});
