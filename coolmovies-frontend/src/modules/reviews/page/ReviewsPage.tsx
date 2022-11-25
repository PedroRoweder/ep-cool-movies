import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { TopBar } from "../../../common/components";
import { moviesActions, useAppDispatch, useAppSelector } from "../../../redux";
import { MovieCard } from "../components";

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
        <Typography variant="subtitle1" textAlign="center" marginTop="24px">
          Here you can see reviews for every movie on the list!
        </Typography>
        <Box display="flex" marginTop="32px">
          {moviesState?.moviesData?.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default ReviewsPage;
