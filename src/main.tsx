import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
