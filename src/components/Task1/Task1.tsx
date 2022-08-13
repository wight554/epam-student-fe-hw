import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export const Task1 = () => {
  return (
    <Box sx={{ mt: 5 }}>
      <Outlet />
    </Box>
  );
};
