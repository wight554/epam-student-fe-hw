import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  MenuItem,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useCreateFileMutation } from "../../services/task1";
import { IFileFormBody } from "../../types";
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
      <Card sx={{ padding: 5, maxWidth: 360 }}>
        <Typography variant="h6" textAlign="center">
          Create file
        </Typography>
        <Grid container spacing={2} alignItems="center" sx={{ mt: 5 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              label="File name"
              variant="filled"
              color="info"
              name="filename"
              value={fileForm.filename}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="filled"
              color="info"
              name="password"
              value={fileForm.password}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              select
              type="text"
              label="Type"
              variant="filled"
              color="info"
              name="type"
              value={fileForm.type}
              onChange={handleInputChange}
            >
              <MenuItem value={".txt"}>.txt</MenuItem>
              <MenuItem value={".json"}>.json</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="filled-multiline-flexible"
              label="Content"
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
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="flex-end">
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
