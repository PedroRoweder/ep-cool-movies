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
