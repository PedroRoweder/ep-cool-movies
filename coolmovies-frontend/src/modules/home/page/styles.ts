import { css } from "@emotion/react";

const styles = {
  root: css({
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  body: css({
    alignSelf: "stretch",
    padding: 32,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  heading: css({ fontSize: "2.75rem", textAlign: "center" }),
  subtitle: css({
    textAlign: "center",
    maxWidth: 600,
    margin: "24px 0",
  }),
  mainControls: css({
    display: "flex",
    alignItems: "center",
    button: { marginRight: 16 },
  }),
  dataInput: css({
    alignSelf: "stretch",
    margin: "32px 0",
  }),
};

export default styles;
