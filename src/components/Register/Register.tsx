import React, { useState } from "react";
import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import { useRegisterMutation } from "../../services/auth";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [register] = useRegisterMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleRegister = async () => {
    const { name, email, password } = registerForm;
    const token  = await register({ name, email, password }).unwrap();
    console.log(token);
    if (token) {
      alert("Success");
      navigate("/login");
    }
  };
  return (
    <Grid container direction="column" alignItems="center">
      <Card sx={{ padding: 5, maxWidth: 360, mt: 2 }}>
        <Typography variant="h6" textAlign="center">
          Register
        </Typography>
        <Grid container spacing={2} alignItems="center" sx={{ mt: 5 }}>
          <Grid item xs={12}>
            <TextField
              onChange={handleInputChange}
              value={registerForm.name}
              fullWidth
              type="text"
              label="Name"
              variant="filled"
              color="info"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleInputChange}
              value={registerForm.email}
              fullWidth
              type="email"
              label="Email"
              variant="filled"
              color="info"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleInputChange}
              value={registerForm.password}
              fullWidth
              type="password"
              label="Password"
              variant="filled"
              color="info"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleInputChange}
              value={registerForm.confirmPassword}
              fullWidth
              type="password"
              label="Confirm password"
              variant="filled"
              color="info"
              name="confirmPassword"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between" spacing={2}>
              <Grid item>
                <Button
                  onClick={handleRegister}
                  disabled={
                    !registerForm.password ||
                    registerForm.password !== registerForm.confirmPassword
                  }
                  variant="text"
                  color="info"
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
