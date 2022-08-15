import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

export const Task1 = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: 5 }}>
      <Button
        onClick={() => {
          navigate("/create");
        }}
        color="info"
      >
        Create file
      </Button>
      <Outlet />
    </Box>
  );
};
