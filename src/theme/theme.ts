import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: `#8d8d8d`,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#494864",
    },
  },
});
