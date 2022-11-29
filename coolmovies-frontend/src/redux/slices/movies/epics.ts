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
          query: queryAllMovieReviews,
          variables: { movieId: payload.movieId },
          fetchPolicy: "no-cache",
        });

        return actions.loadedReviews({
          data: result.data.allMovieReviews?.nodes || [],
        });
      } catch (err) {
        console.log(err);
        return actions.loadError();
      }
    })
  );

export const createMovieReviewEpic: Epic = (
  action$: Observable<SliceAction["createReview"]>,
  _: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.createReview.match),
    switchMap(async ({ payload }) => {
      try {
        await client.mutate({
          mutation: mutationCreateMovieReview,
          variables: {
            input: {
              movieReview: {
                ...payload.review,
                userReviewerId: "5f1e6707-7c3a-4acd-b11f-fd96096abd5a",
              },
            },
          },
        });

        return actions.fetchMovieReviews({ movieId: payload.review.movieId });
      } catch (err) {
        console.log(err);
        return actions.loadError();
      }
    })
  );

export const updateMovieReviewEpic: Epic = (
  action$: Observable<SliceAction["updateReview"]>,
  _: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(actions.updateReview.match),
    switchMap(async ({ payload }) => {
      try {
        await client.mutate({
          mutation: mutationUpdateMovieReview,
          variables: {
            input: {
              movieReviewPatch: payload.review,
              id: payload.reviewId,
            },
          },
        });

        return actions.fetchMovieReviews({ movieId: payload.review.movieId });
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

const queryAllMovieReviews = gql`
  query AllMovieReviews($movieId: UUID!) {
    allMovieReviews(filter: { movieId: { equalTo: $movieId } }) {
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

const mutationCreateMovieReview = gql`
  mutation CreateReviewMutation($input: CreateMovieReviewInput!) {
    createMovieReview(input: $input) {
      clientMutationId
    }
  }
`;

const mutationUpdateMovieReview = gql`
  mutation UpdateReviewMutation($input: UpdateMovieReviewByIdInput!) {
    updateMovieReviewById(input: $input) {
      clientMutationId
    }
  }
`;
