import React from "react";
import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { TopBar } from "../../../common/components";
import { moviesActions, useAppDispatch, useAppSelector } from "../../../redux";

const ReviewsPage = () => {
  const dispatch = useAppDispatch();
  const moviesState = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(moviesActions.fetch());
  }, [dispatch]);

  return (
    <>
      <TopBar title="Reviews" />
      <Container>
        <Typography variant="h1" textAlign="center">
          Movie Reviews
        </Typography>
        <Typography variant="body1">
          Here you can see reviews for every movie on the list!
        </Typography>
        <Container>
          {moviesState?.moviesData?.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </Container>
      </Container>
    </>
  );
};

export default ReviewsPage;
