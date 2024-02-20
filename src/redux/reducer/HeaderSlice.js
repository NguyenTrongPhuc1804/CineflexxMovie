import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";
import { display, hidden } from "./LoadingSlice";

const initialState = {
  allTheLoai: [],
  allQuocGia: [],
};

export const HeaderSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTheLoai.fulfilled, (state, action) => {
      state.allTheLoai = action.payload.items;
    });
    builder.addCase(getAllQuocGia.fulfilled, (state, action) => {
      state.allQuocGia = action.payload.items;
    });
  },
});
export const getAllTheLoai = createAsyncThunk(
  "film/getAllTheLoai",
  async (category, { dispatch }) => {
    dispatch(display());
    try {
      const { data } = await requestMovie.get(`/v1/api/the-loai`);
      dispatch(hidden());

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getAllQuocGia = createAsyncThunk(
  "film/getAllQuocGia",
  async (category, { dispatch }) => {
    dispatch(display());
    try {
      const { data } = await requestMovie.get(`/v1/api/quoc-gia`);
      dispatch(hidden());

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const { reducerName } = HeaderSlice.actions;

export default HeaderSlice.reducer;
