import React, { useState } from "react";
import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useCreateFileMutation } from "../../services/task1";
import { IFileFormBody } from "../../types";
import { StyledTextField } from "./StyledTextField";
import { useNavigate } from "react-router-dom";

export const CreateFileForm = () => {
  const [fileForm, setFileForm] = useState<IFileFormBody>({
    filename: "",
    content: "",
    type: "",
    password: "",
  });

  const navigate = useNavigate();

  const [createFile, { isLoading, isError, error, isSuccess }] =
    useCreateFileMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFileForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFileForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileCreate = () => {
    createFile(fileForm);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Card sx={{ padding: 5 }}>
        <Typography variant="h6" textAlign="center">
          Create file
        </Typography>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          sx={{ mt: 5 }}
        >
          <Grid item>
            <StyledTextField
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
            <StyledTextField
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
            <FormControl variant="filled" sx={{ minWidth: 200 }}>
              <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
              <Select
                onChange={handleSelectChange}
                color="info"
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                name="type"
                value={fileForm.type}
              >
                <MenuItem value={".txt"}>.txt</MenuItem>
                <MenuItem value={".json"}>.json</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField
              id="filled-multiline-flexible"
              label="content"
              multiline
              variant="filled"
              color="info"
              name="content"
              minRows={4}
              maxRows={5}
              value={fileForm.content}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item>
            <Grid container display="flex" spacing={5}>
              <Grid item>
                <Button
                  onClick={() => navigate("/task1")}
                  variant="contained"
                  color="secondary"
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  onClick={handleFileCreate}
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
