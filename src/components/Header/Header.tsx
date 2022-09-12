import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import { authApi, useGetUserQuery } from "../../services/auth";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const Header = () => {
  const [skip, setSkip] = useState(true);
  const { data } = useGetUserQuery(null, { skip: skip });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const token = localStorage.getItem("AUTH_TOKEN");
  useEffect(() => {
    if (token) {
      setSkip(false);
    }
  }, [token]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" spacing={2}>
          <Grid item container xs spacing={3}>
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
          <Grid item>
            {data ? (
              <Grid container>
                <Avatar>{data.name[0]}</Avatar>
                <Button
                  color="info"
                  onClick={() => {
                    localStorage.setItem("AUTH_TOKEN", "");
                    dispatch(authApi.util.resetApiState());
                  }}
                >
                  Logout
                </Button>
              </Grid>
            ) : (
              <Button
                color="info"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
