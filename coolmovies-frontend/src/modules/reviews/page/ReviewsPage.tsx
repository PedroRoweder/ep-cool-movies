import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { TopBar } from "../../../common/components";
import { moviesActions, useAppDispatch, useAppSelector } from "../../../redux";
import { MovieCard } from "../components";
import MovieDetailsModal from "../components/movieDetailsModal";

const ReviewsPage = () => {
  const dispatch = useAppDispatch();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const moviesState = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(moviesActions.fetch());
  }, [dispatch]);

  const toggleDetailsOpen = () => setIsDetailsOpen((isOpen) => !isOpen);

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
            <MovieCard
              key={movie.id}
              openDetails={toggleDetailsOpen}
              {...movie}
            />
          ))}
        </Box>
        <MovieDetailsModal
          isDetailsOpen={isDetailsOpen}
          selectedMovie={moviesState.selectedMovie}
          toggleDetailsOpen={toggleDetailsOpen}
        />
      </Container>
    </>
  );
};

export default ReviewsPage;
