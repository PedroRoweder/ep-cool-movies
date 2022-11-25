import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./styles";

const MovieCard = ({ imgUrl, title, averageRating }: Movies.Data) => {
  return (
    <Box css={styles.root}>
      <Box css={styles.imageContainer}>
        <Image src={imgUrl} alt="" layout="fill" css={styles.image} />
      </Box>
      <Typography variant="body1" css={styles.title}>
        {title}
      </Typography>
      <Box display="flex" justifyContent="center">
        <Rating
          name="rating"
          value={averageRating}
          readOnly
          precision={0.1}
          size="small"
        />
      </Box>
    </Box>
  );
};

export default MovieCard;
