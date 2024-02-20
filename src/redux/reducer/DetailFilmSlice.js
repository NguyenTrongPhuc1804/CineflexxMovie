import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";
import { display, hidden } from "./LoadingSlice";

const initialState = {
  detailFilm: {},
  listTheLoai: [],
  linkFilm: "",
};

export const DetailFilm = createSlice({
  name: "detail",
  initialState,
  reducers: {
    reducerName: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getDetailFilm.fulfilled, (state, action) => {
      const { sever } = action.payload;
      const { episodes } = action.payload;
      state.detailFilm = action.payload.data;
      state.linkFilm =
        action.payload.data.item.episodes[sever].server_data[
          episodes
        ].link_embed;
    });
    builder.addCase(getTheLoai.fulfilled, (state, action) => {
      state.listTheLoai = action.payload;
    });
  },
});
export const getDetailFilm = createAsyncThunk(
  "film/getDetailFilm",
  async ({ name = "", sever = 0, episodes = 0 }, { dispatch }) => {
    dispatch(display());
    try {
      const { data } = await requestMovie.get(`/v1/api/phim/${name}`);
      dispatch(hidden());

      return { data, sever, episodes };
    } catch (err) {
      console.log(err);
    }
  }
);
export const getTheLoai = createAsyncThunk(
  "film/getTheLoai",
  async (category, { dispatch }) => {
    dispatch(display());
    try {
      const { data } = await requestMovie.get(`/v1/api/the-loai/${category}`);
      dispatch(hidden());

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const { reducerName } = DetailFilm.actions;

export default DetailFilm.reducer;
