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
      fontSize: "30px",
      fontWeight: 500,
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
  },
});

export default theme;
