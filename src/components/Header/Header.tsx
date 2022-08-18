import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
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
