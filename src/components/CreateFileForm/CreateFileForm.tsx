import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useCreateFileMutation } from "../../services/task1";
import { FileFormBody } from "../../types";

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
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      sx={{ mt: 5 }}
    >
      <Grid item>
        <TextField
          sx={{ width: "200px", input: { color: "#fff" } }}
          type="text"
          label="filename"
          variant="filled"
          color="info"
          name="filename"
          value={fileForm.filename}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
        <TextField
          sx={{ width: "200px", input: { color: "#fff" } }}
          type="password"
          label="password"
          variant="filled"
          color="info"
          name="password"
          value={fileForm.password}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item>
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
      </Grid>
      <Grid item>
        <FormControl variant="filled" sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
          <Select
            onChange={handleSelectChange}
            color="info"
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            name="type"
            value={fileForm.type}
            sx={{ width: "200px", color: "#fff" }}
          >
            <MenuItem value={".txt"}>.txt</MenuItem>
            <MenuItem value={".json"}>.json</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <Button onClick={handleFileCreate} variant="contained" color="primary">
          save
        </Button>
      </Grid>
    </Grid>
  );
};
