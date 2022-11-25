import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#FFF",
    },
  },
  typography: {
    h1: {
      fontSize: "2.75rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontWeight: 300,
      color: "rgba(0, 0, 0, 0.6)",
    },
    body1: {
      fontSize: "16px",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#222",
          color: "#FFF",
          width: "250px",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "32px",
        },
      },
    },
  },
});

export default theme;
