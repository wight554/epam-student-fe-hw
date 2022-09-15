import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import { authApi } from "../../services/auth";
import { useEffect } from "react";
import { getUserName } from "../../slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AUTH_TOKEN } from "../../constants/constants";
import { Token } from "../../types";

export const Header = () => {
  const { name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const logout = () => {
    dispatch(getUserName(""));
    localStorage.setItem(AUTH_TOKEN, "");
    dispatch(authApi.util.resetApiState());
  };

  const token = localStorage.getItem(AUTH_TOKEN);

  useEffect(() => {
    if (token) {
      const decoded = jwt_decode<Token>(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        logout();
      } else {
        dispatch(getUserName(decoded.name));
      }
    }
  }, [token, name]);

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
            {name ? (
              <Grid container>
                <Avatar>{name[0]}</Avatar>
                <Button color="info" onClick={logout}>
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
