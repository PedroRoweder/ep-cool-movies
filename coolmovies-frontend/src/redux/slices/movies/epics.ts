import { gql } from "@apollo/client";
import { Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { moviesView } from "../../../common/views";
import { RootState } from "../../store";
import { EpicDependencies } from "../../types";
import { actions, SliceAction } from "./slice";

export const fetchAllMoviesEpic: Epic = (
  action$: Observable<SliceAction["fetch"]>,
  _: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetch.match),
    switchMap(async () => {
      try {
        const result = await client.query<Movies.AllMoviesResponse>({
          query: queryAllMovies,
        });

        const movies = moviesView(result.data);

        return actions.loaded({ data: movies });
      } catch (err) {
        return actions.loadError();
      }
    })
  );

export const fetchMovieReviewsEpic: Epic = (
  action$: Observable<SliceAction["fetchMovieReviews"]>,
  _: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.fetchMovieReviews.match),
    switchMap(async ({ payload }) => {
      try {
        const result = await client.query<{
          allMovieReviews?: {
            nodes?: Movies.ReviewsData[];
          };
        }>({
          query: queryAllMovieReviews(payload.movieId),
          fetchPolicy: "no-cache",
        });

        console.log(result);

        return actions.loadedReviews({
          data: result.data.allMovieReviews?.nodes || [],
        });
      } catch (err) {
        console.log(err);
        return actions.loadError();
      }
    })
  );

const queryAllMovies = gql`
  query AllMovies {
    allMovies {
      nodes {
        id
        imgUrl
        title
        releaseDate
        userByUserCreatorId {
          name
        }
        movieDirectorByMovieDirectorId {
          name
        }
        movieReviewsByMovieId {
          nodes {
            rating
          }
        }
      }
    }
  }
`;

const queryAllMovieReviews = (movieId: string) => gql`
  query AllMovieReviews {
    allMovieReviews(filter: { movieId: { equalTo: "${movieId}" } }) {
      nodes {
        body
        id
        userByUserReviewerId {
          name
        }
        rating
        title
      }
    }
  }
`;
