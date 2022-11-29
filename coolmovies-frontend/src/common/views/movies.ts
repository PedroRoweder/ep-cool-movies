const moviesView = (movies: Movies.AllMoviesResponse): Movies.Data[] => {
  if (!movies.allMovies || !movies.allMovies.nodes) return [];

  const view = movies.allMovies.nodes.map((movie) => {
    const reviewsCount = movie.movieReviewsByMovieId.nodes.length;
    const ratingsSum = movie.movieReviewsByMovieId.nodes.reduce(
      (acc, { rating }) => acc + rating,
      0
    );

    return {
      id: movie.id,
      title: movie.title,
      imgUrl: movie.imgUrl,
      releaseDate: movie.releaseDate,
      creatorName: movie.userByUserCreatorId.name,
      directorName: movie.movieDirectorByMovieDirectorId.name,
      averageRating: ratingsSum / reviewsCount,
    };
  });

  return view;
};

export default moviesView;
