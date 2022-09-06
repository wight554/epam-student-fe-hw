import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <>
      <Header />
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};
