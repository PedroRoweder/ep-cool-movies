import React, { useState } from "react";
import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import styles from "./styles";

const MovieRatingForm = () => {
  const [userRating, setUserRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  return (
    <Box
      css={styles.root}
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      {!hasRated ? (
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
          <Box width="100%">
            <TextField size="small" fullWidth label="Title" margin="normal" />
            <TextField
              size="small"
              multiline
              rows={3}
              fullWidth
              label="Description"
            />
          </Box>
          <Box marginTop={1} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={() => setHasRated(false)}>
              Back
            </Button>
            <Button variant="contained">Submit</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MovieRatingForm;
