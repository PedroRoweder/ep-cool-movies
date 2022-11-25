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
