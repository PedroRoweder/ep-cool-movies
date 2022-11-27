export { actions as moviesActions } from "./slice";
export { default as moviesReducer } from "./slice";
import { combineEpics } from "redux-observable";
import { fetchAllMoviesEpic, fetchMovieReviewsEpic } from "./epics";

export const moviesEpics = combineEpics(
  fetchAllMoviesEpic,
  fetchMovieReviewsEpic
);
