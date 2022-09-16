import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Avatar, Grid } from "@mui/material";
import { setUser } from "../../slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AUTH_TOKEN } from "../../constants/constants";

export const Header = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  console.log(user);
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setUser({}));
    localStorage.setItem(AUTH_TOKEN, "");
  };

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
            {user.name ? (
              <Grid container>
                <Avatar>{user.name[0]}</Avatar>
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
