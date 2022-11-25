import { css } from "@emotion/react";

const styles = {
  root: css({
    boxShadow: "1px 1px 5px 2px rgba(0,0,0,0.3)",
    borderRadius: "3px",
    padding: "15px",
    margin: "10px",
    position: "relative",
  }),
  ratingContainer: css({
    position: "absolute",
    left: -10,
    top: -10,
    width: "30px",
    height: "30px",
    backgroundColor: "#FFD700",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  }),
  imageContainer: css({
    width: "200px",
    height: "300px",
    marginBottom: "15px",
    position: "relative",
  }),
  image: css({
    borderRadius: "3px",
  }),
  title: css({
    maxWidth: "200px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }),
};

export default styles;
