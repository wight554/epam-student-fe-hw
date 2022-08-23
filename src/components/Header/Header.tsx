import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={2}>
          <Grid item>
            <Button
              color="info"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="info"
              onClick={() => {
                navigate("/task1");
              }}
            >
              Task 1
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
