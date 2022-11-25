import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoviesState {
  moviesData: Movies.Data[];
  error?: Error;
}

const initialState: MoviesState = {
  moviesData: [],
  error: undefined,
};

export const slice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    fetch: () => {},
    clearData: (state) => {
      state.moviesData = [];
      state.error = undefined;
    },
    loaded: (state, action: PayloadAction<{ data: Movies.Data[] }>) => {
      state.moviesData = action.payload.data;
      state.error = undefined;
    },
    loadError: (state) => {
      state.error = new Error("Error Fetching Movies.");
    },
  },
});

export const { actions } = slice;
export type SliceAction = typeof actions;
export default slice.reducer;
