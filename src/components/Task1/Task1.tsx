import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

export const Task1 = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ mt: 5 }}>
      <Button sx={{ color: "#fff"}} variant="outlined" onClick={() => navigate("create")}>
        Create file
      </Button>
      <Outlet />
    </Box>
  );
};
