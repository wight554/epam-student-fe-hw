import React from "react";
import { Box, Button, TextField } from "@mui/material";

export const CreateFileForm = () => {
  return (
    <Box>
      <TextField
        sx={{ width: "200px", margin: "5px"}}
        type="text"
        label="filename"
        variant="filled"
      />
      <TextField
        sx={{ width: "200px", margin: "5px"}}
        type="text"
        label="content"
        variant="filled"
      />
      <Button variant="contained" color="primary">
        save
      </Button>
    </Box>
  );
};
