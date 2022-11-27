import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MoviesState {
  moviesData: Movies.Data[];
  selectedMovie?: Movies.Data;
  selectedMovieReviews: Movies.ReviewsData[];
  error?: Error;
}

const initialState: MoviesState = {
  moviesData: [],
  selectedMovieReviews: [],
  selectedMovie: undefined,
  error: undefined,
};

export const slice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    fetch: () => {},
    fetchMovieReviews: (
      _,
      __: PayloadAction<{ movieId: Movies.Data["id"] }>
    ) => {},
    setSelectedMovie: (
      state,
      action: PayloadAction<{ movie: Movies.Data }>
    ) => {
      state.selectedMovie = action.payload.movie;
    },
    clearSelectedMovie: (state) => {
      state.selectedMovie = undefined;
    },
    clearData: (state) => {
      state.moviesData = [];
      state.error = undefined;
    },
    loadedReviews: (
      state,
      action: PayloadAction<{ data: Movies.ReviewsData[] }>
    ) => {
      state.selectedMovieReviews = action.payload.data;
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
