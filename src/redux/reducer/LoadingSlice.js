import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingState: false,
  LoadingPlayer: false,
};

export const LoadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    display: (state, action) => {
      state.loadingState = true;
    },
    hidden: (state) => {
      state.loadingState = false;
    },
    displayPlayer: (state, action) => {
      state.LoadingPlayer = true;
    },
    hiddenPlayer: (state) => {
      state.LoadingPlayer = false;
    },
  },
});

export const { hidden, display, displayPlayer, hiddenPlayer } =
  LoadingSlice.actions;

export default LoadingSlice.reducer;
