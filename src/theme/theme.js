import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5e60ce",
    },
    secondary: {
      main: "#48bfe3",
    },
    background: {
      default: "#f8f9ff",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins, Roboto, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
});

export default theme;
