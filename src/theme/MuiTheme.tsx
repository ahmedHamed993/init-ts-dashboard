import { createTheme } from "@mui/material";
// create theme
export const MuiTheme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: ["Cairo"].join(","),
  },
  palette: {
    primary: {
      main: "#27374D",
    },
    secondary: {
      main: "#A1B3CC",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
        },
      },
    },
  },
});
