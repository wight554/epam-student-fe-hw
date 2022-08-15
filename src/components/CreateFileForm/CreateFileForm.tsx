import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useCreateFileMutation } from "../../services/task1";
import {FileFormBody} from '../../types';

export const CreateFileForm = () => {
  const [fileForm, setFileForm] = useState<FileFormBody>({
    filename: "",
    content: "",
    type: "",
    password: "",
  });

  const [createFile, { isLoading, isError, error, isSuccess }] =
    useCreateFileMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFileForm({ ...fileForm, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFileForm({ ...fileForm, [name]: value });
  };

  const handleFileCreate = () => {
    createFile(fileForm);
  };

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
        name="filename"
        value={fileForm.filename}
        onChange={handleInputChange}
      />
      <TextField
        sx={{ width: "200px", marginTop: "10px", input: { color: "#fff" } }}
        type="password"
        label="password"
        variant="filled"
        color="info"
        name="password"
        value={fileForm.password}
        onChange={handleInputChange}
      />
      <TextField
        id="filled-multiline-flexible"
        sx={{
          width: "300px",
          marginTop: "10px",
        }}
        inputProps={{ style: { color: "#fff" } }}
        label="content"
        multiline
        variant="filled"
        color="info"
        name="content"
        minRows={4}
        maxRows={10}
        value={fileForm.content}
        onChange={handleInputChange}
      />
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
        <Select
          onChange={handleSelectChange}
          color="info"
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          name="type"
          value={fileForm.type}
          sx={{ width: "200px", marginTop: "10px", color: "#fff" }}
        >
          <MenuItem value={".txt"}>.txt</MenuItem>
          <MenuItem value={".json"}>.json</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleFileCreate} variant="contained" color="primary">
        save
      </Button>
    </Box>
  );
};
