export { actions as moviesActions } from "./slice";
export { default as moviesReducer } from "./slice";
import { combineEpics } from "redux-observable";
import {
  fetchAllMoviesEpic,
  fetchMovieReviewsEpic,
  createMovieReviewEpic,
  updateMovieReviewEpic,
} from "./epics";

export const moviesEpics = combineEpics(
  fetchAllMoviesEpic,
  fetchMovieReviewsEpic,
  createMovieReviewEpic,
  updateMovieReviewEpic
);
