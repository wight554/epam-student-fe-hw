import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#494864",
    },
  },
});
