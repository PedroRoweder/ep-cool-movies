export { actions as moviesActions } from "./slice";
export { default as moviesReducer } from "./slice";
import { fetchAllMoviesEpic } from "./epics";

export const moviesEpics = fetchAllMoviesEpic;
