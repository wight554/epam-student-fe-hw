import React, { useState } from "react";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../services/auth";

export const Login = () => {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [login] = useLoginMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async () => {
    const token = await login(loginForm).unwrap();
    if (token) {
      localStorage.setItem("AUTH_TOKEN", token);
      navigate("/");
    }
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Card sx={{ padding: 5, maxWidth: 360, mt: 2 }}>
        <Typography variant="h6" textAlign="center">
          Login
        </Typography>
        <Grid container spacing={2} alignItems="center" sx={{ mt: 5 }}>
          <Grid item xs={12}>
            <TextField
              value={loginForm.email}
              fullWidth
              type="email"
              label="Email"
              variant="filled"
              color="info"
              name="email"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={loginForm.password}
              fullWidth
              type="password"
              id="filled-multiline-flexible"
              label="Password"
              variant="filled"
              color="info"
              name="password"
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between" spacing={2}>
              <Grid item>
                <Button
                  onClick={() => navigate("/register")}
                  variant="text"
                  color="info"
                >
                  Register
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleLogin}
                  disabled={!loginForm.email || !loginForm.password}
                  variant="contained"
                  color="info"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
