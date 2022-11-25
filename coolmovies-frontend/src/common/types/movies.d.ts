namespace Movies {
  interface Data {
    id: string;
    imgUrl: string;
    title: string;
    releaseDate: Date;
    userByUserCreatorId: {
      name: string;
    };
    movieDirectorByMovieDirectorId: {
      name: string;
    };
  }
}
