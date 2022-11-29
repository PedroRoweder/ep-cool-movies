import { Save, Cancel } from "@mui/icons-material";
import { Box, IconButton, Rating, TextField, Typography } from "@mui/material";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import EditIcon from "../../../../../public/edit.svg";
import { moviesActions, useAppDispatch } from "../../../../redux";
import styles from "./styles";

interface Props {
  title: string;
  body: string;
  rating: number;
  id: string;
  movieId: string;
}

const MovieReview = ({ title, body, rating, id, movieId }: Props) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [reviewData, setReviewData] = useState({ title, body, rating });

  const toggleEditMode = () => setIsEditing((editing) => !editing);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setReviewData((data) => ({ ...data, [e.target.name]: e.target.value }));
  };

  const updateReview = () => {
    dispatch(
      moviesActions.updateReview({
        review: { ...reviewData, movieId },
        reviewId: id,
      })
    );
    toggleEditMode();
  };

  return (
    <div css={styles.review}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
        {isEditing ? (
          <TextField
            onChange={handleChange}
            value={reviewData.title}
            name="title"
            size="small"
            variant="outlined"
          />
        ) : (
          <Typography variant="body1">{title}</Typography>
        )}
        <Box display="flex" alignItems="center">
          <Rating
            value={reviewData.rating}
            name="rating"
            onChange={(_, value) =>
              setReviewData((data) => ({
                ...data,
                rating: value || data.rating,
              }))
            }
            precision={isEditing ? 1 : 0.1}
            readOnly={!isEditing}
            size="small"
          />
          {isEditing ? (
            <>
              <IconButton size="small" onClick={updateReview}>
                <Save />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => {
                  toggleEditMode();
                  setReviewData({ title, body, rating });
                }}
              >
                <Cancel />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={toggleEditMode}>
              <Image
                src={EditIcon}
                width={20}
                height={20}
                alt="Edit Review Button"
              />
            </IconButton>
          )}
        </Box>
      </Box>
      {isEditing ? (
        <TextField
          onChange={handleChange}
          value={reviewData.body}
          name="body"
          size="small"
          variant="outlined"
          multiline
          rows={3}
          fullWidth
        />
      ) : (
        <Typography>{body}</Typography>
      )}
    </div>
  );
};

export default MovieReview;
