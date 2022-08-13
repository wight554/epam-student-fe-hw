import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const CreateFileForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <TextField
        sx={{ width: "200px", marginTop: "10px", input: { color: "#fff" } }}
        type="text"
        label="filename"
        variant="filled"
        color="info"
      />
      <TextField
        id="filled-multiline-flexible"
        inputProps={{ style: { color: "#fff" } }}
        label="content"
        multiline
        variant="filled"
        color="info"
        minRows={4}
        maxRows={10}
        sx={{
          width: "300px",
          marginTop: "10px",
        }}
      />
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
        <Select
          color="info"
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          sx={{ width: "200px", marginTop: "10px", color: "#fff" }}
        >
          <MenuItem value={10}>.txt</MenuItem>
          <MenuItem value={20}>.json</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary">
        save
      </Button>
    </Box>
  );
};
