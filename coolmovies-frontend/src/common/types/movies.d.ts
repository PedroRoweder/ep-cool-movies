namespace Movies {
  interface Data {
    id: string;
    imgUrl: string;
    title: string;
    releaseDate: string;
    directorName: string;
    creatorName: string;
    averageRating: number;
  }

  interface ReviewsData {
    body: string;
    id: string;
    rating: number;
    title: string;
  }

  interface CreateReview {
    title: string;
    rating: number;
    body: string;
    movieId: string;
  }
  interface AllMoviesResponse {
    allMovies?: {
      nodes?: {
        id: string;
        imgUrl: string;
        title: string;
        releaseDate: string;
        userByUserCreatorId: {
          name: string;
        };
        movieReviewsByMovieId: {
          nodes: { rating: number }[];
        };
        movieDirectorByMovieDirectorId: {
          name: string;
        };
      }[];
    };
  }
}
