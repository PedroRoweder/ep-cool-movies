import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { moviesActions, useAppDispatch } from "../../../../redux";
import styles from "./styles";

interface Props extends Movies.Data {
  openDetails: () => void;
}

const MovieCard = ({ openDetails, ...props }: Props) => {
  const dispatch = useAppDispatch();
  const { imgUrl, title, averageRating } = props;

  const selectMovie = () => {
    dispatch(moviesActions.setSelectedMovie({ movie: props }));
    openDetails();
  };

  return (
    <Box css={styles.root} onClick={selectMovie}>
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
