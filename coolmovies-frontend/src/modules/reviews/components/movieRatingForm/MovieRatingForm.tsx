import React, { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import Lottie from "react-lottie";
import styles from "./styles";
import { moviesActions, useAppDispatch } from "../../../../redux";
import starLottie from "../../../../../public/lottie/star.json";

interface Props {
  selectedMovieId: string;
}

const MovieRatingForm = ({ selectedMovieId }: Props) => {
  const dispatch = useAppDispatch();
  const [formSubmited, setFormSubmited] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);
  const [ratingForm, setRatingForm] = useState<{
    title: string;
    body: string;
  }>({
    title: "",
    body: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRatingForm((previousValue) => ({
      ...previousValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      moviesActions.createReview({
        review: { ...ratingForm, rating: userRating, movieId: selectedMovieId },
      })
    );
    setFormSubmited(true);
  };

  return (
    <Box
      css={styles.root}
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      {formSubmited ? (
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: starLottie,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={100}
            width={100}
          />
          <Typography variant="body1" textAlign="center">
            Thanks for Rating!
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            Your review was submitted and will be shown above. :)
          </Typography>
        </Box>
      ) : !hasRated ? (
        <>
          <Box>
            <Typography variant="body1" textAlign="center">
              Have you seen this movie?
            </Typography>
            <Typography variant="subtitle1" textAlign="center">
              How would you rate it?
            </Typography>
          </Box>
          <Rating
            size="large"
            value={userRating}
            onChange={(_, rating) => {
              if (rating) {
                setUserRating(rating);
                setHasRated(true);
              }
            }}
          />
        </>
      ) : (
        <Box>
          <Typography variant="body1" textAlign="center">
            What are your thoughts about it?
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box width="100%">
              <TextField
                onChange={handleFormChange}
                required
                size="small"
                fullWidth
                label="Review Title"
                margin="normal"
                name="title"
              />

              <TextField
                onChange={handleFormChange}
                required
                size="small"
                multiline
                rows={3}
                fullWidth
                name="body"
                label="Description"
              />
            </Box>
            <Box marginTop={1} display="flex" justifyContent="space-between">
              <Button variant="outlined" onClick={() => setHasRated(false)}>
                Back
              </Button>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default MovieRatingForm;
