import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestMovie from "../../services/servicesReques";
import { display, hidden } from "./LoadingSlice";

const initialState = {
  count: 1,
  homeFilm: [],
  PhimLe: {},
  PhimMoi: {},
  PhimBo: {},
  HoatHinh: {},
  AllCategoryFilm: {},
};

const ManagementFilmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFilmHomePage.fulfilled, (state, action) => {
      state.homeFilm = action.payload.arrFilm;
      state.PhimMoi = action.payload.data;
    });
    builder.addCase(getPhimLe.fulfilled, (state, action) => {
      state.PhimLe = action.payload;
    });
    builder.addCase(getPhimBo.fulfilled, (state, action) => {
      state.PhimBo = action.payload;
    });
    builder.addCase(getPhimHoatHinh.fulfilled, (state, action) => {
      state.HoatHinh = action.payload;
    });
    builder.addCase(getAllCategoryFilm.fulfilled, (state, action) => {
      state.AllCategoryFilm = action.payload;
    });
    builder.addCase(getAllCountry.fulfilled, (state, action) => {
      state.AllCategoryFilm = action.payload;
    });
    builder.addCase(getFilmSearch.fulfilled, (state, action) => {
      state.AllCategoryFilm = action.payload;
    });
    builder.addCase(getListFilm.fulfilled, (state, action) => {
      state.AllCategoryFilm = action.payload;
    });
  },
});
export const getFilmHomePage = createAsyncThunk(
  "film/getFilmHomePage",
  async (info, { dispatch }) => {
    dispatch(display());
    try {
      let arrFilm = [];
      const { data } = await requestMovie.get("v1/api/home");
      for (let i in data.items.splice(0, 5)) {
        let film = await requestMovie.get(`/phim/${data.items[i].slug}`);
        arrFilm.push(film.movie);
      }
      dispatch(hidden());
      return { arrFilm, data };
    } catch (err) {
      console.log(err);
    }
  }
);

export const getPhimLe = createAsyncThunk(
  "film/getPhimLe",
  async (page = "", { dispatch }) => {
    dispatch(display());

    try {
      const { data } = await requestMovie.get(
        `/v1/api/danh-sach/phim-le?page=${page}`
      );
      dispatch(hidden());

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getPhimBo = createAsyncThunk(
  "film/getPhimBo",
  async (page = "", { dispatch }) => {
    try {
      const { data } = await requestMovie.get(
        `/v1/api/danh-sach/phim-bo?page=${page}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getPhimHoatHinh = createAsyncThunk(
  "film/getPhimHoatHinh",
  async (page = "", { dispatch }) => {
    try {
      const { data } = await requestMovie.get(
        `/v1/api/danh-sach/hoat-hinh?page=${page}`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getAllCategoryFilm = createAsyncThunk(
  "film/getAllCategoryFilm",
  async ({ catg = "", page = 1 }, { dispatch }) => {
    dispatch(display());

    try {
      const { data } = await requestMovie.get(
        `/v1/api/the-loai/${catg}?page=${page}`
      );
      dispatch(hidden());

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getAllCountry = createAsyncThunk(
  "film/getAllCountry",
  async ({ ctry = "", page = 1 }, { dispatch }) => {
    dispatch(display());

    try {
      const { data } = await requestMovie.get(
        `/v1/api/quoc-gia/${ctry}?page=${page}`
      );
      dispatch(hidden());

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const getFilmSearch = createAsyncThunk(
  "film/getFilmSearch",
  async ({ search = "", page = 0 }, { dispatch }) => {
    dispatch(display());

    try {
      const { data } = await requestMovie.get(
        `/v1/api/tim-kiem?keyword=${search}`
      );
      dispatch(hidden());

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
//tiep tuc
export const getListFilm = createAsyncThunk(
  "film/getListFilm",
  async ({ catg = "", page = "1" }, { dispatch }) => {
    dispatch(display());

    try {
      const { data } = await requestMovie.get(
        `/v1/api/danh-sach/${catg}?page=${page}`
      );
      dispatch(hidden());

      return data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const { setCount } = ManagementFilmSlice.actions;

export default ManagementFilmSlice.reducer;
