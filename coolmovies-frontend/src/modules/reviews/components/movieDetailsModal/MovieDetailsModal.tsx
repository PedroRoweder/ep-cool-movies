import React from "react";
import { Close } from "@mui/icons-material";
import { IconButton, Modal, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux";
import { actions as movieActions } from "../../../../redux/slices/movies/slice";
import styles from "./styles";
import MovieRatingForm from "../movieRatingForm";
import { MovieReview } from "../movieReview";

interface Props {
  isDetailsOpen: boolean;
  selectedMovie?: Movies.Data;
  toggleDetailsOpen: () => void;
}

const MovieDetailsModal = ({
  isDetailsOpen,
  toggleDetailsOpen,
  selectedMovie,
}: Props) => {
  const dispatch = useAppDispatch();
  const moviesState = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(
      movieActions.fetchMovieReviews({
        movieId: moviesState.selectedMovie?.id || "",
      })
    );
  }, [dispatch, moviesState.selectedMovie]);

  if (!selectedMovie) {
    return null;
  }

  return (
    <Modal open={isDetailsOpen} onClose={toggleDetailsOpen}>
      <div css={styles.root}>
        <Box css={styles.detailsContainer}>
          <IconButton
            onClick={toggleDetailsOpen}
            disableRipple
            size="small"
            css={styles.closeButton}
          >
            <Close />
          </IconButton>
          <Box css={styles.imageContainer}>
            <Image
              src={selectedMovie.imgUrl}
              alt=""
              layout="fill"
              css={styles.image}
            />
          </Box>
          <Typography variant="body1">{selectedMovie.title}</Typography>
          <Typography variant="subtitle1">
            Release Date: {selectedMovie.releaseDate}
          </Typography>
          <Typography variant="subtitle1">
            Directed By: {selectedMovie.directorName}
          </Typography>
          <Typography variant="subtitle1">
            Added by: {selectedMovie.creatorName}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box css={styles.reviewsContainer} overflow="auto">
            {moviesState.selectedMovieReviews.map((review) => (
              <MovieReview
                key={review.id}
                movieId={selectedMovie.id}
                {...review}
              />
            ))}
          </Box>
          <MovieRatingForm selectedMovieId={selectedMovie.id} />
        </Box>
      </div>
    </Modal>
  );
};

export default MovieDetailsModal;
