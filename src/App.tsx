import { ThemeProvider, Typography } from "@mui/material";
import { theme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Typography sx={{ textAlign: "center" }}>Hello</Typography>
    </ThemeProvider>
  );
};

export default App;
