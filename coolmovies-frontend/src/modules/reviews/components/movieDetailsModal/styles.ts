import { css } from "@emotion/react";

const styles = {
  root: css({
    display: "flex",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "15px",
    outline: "none",
  }),
  detailsContainer: css({
    width: 300,
    height: 600,
    borderRight: "1px solid lightgrey",
    padding: "32px",
  }),
  closeButton: css({
    position: "absolute",
    right: -30,
    top: -30,
    backgroundColor: "white",
    borderRadius: "100%",
    borderBottomLeftRadius: "0px",
    width: "30px",
    height: "30px",
  }),
  imageContainer: css({
    width: 236,
    height: 350,
    backgroundColor: "green",
    borderRadius: "5px",
    marginBottom: "20px",
    position: "relative",
  }),
  image: css({
    borderRadius: "5px",
  }),
  reviewsContainer: css({
    width: 600,
    height: 350,
    padding: "32px",
  }),
  review: css({
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#eee",
    marginBottom: "32px",
  }),
};

export default styles;
