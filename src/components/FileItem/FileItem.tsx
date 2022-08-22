import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useChangeFileMutation,
  useCreateFileMutation,
  useDeleteFileMutation,
  useGetFileByNameQuery,
} from "../../services/task1";
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";

export const FileItem = () => {
  const { filename } = useParams();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetFileByNameQuery(filename!);
  const [changeFile, {}] = useChangeFileMutation();
  const [deleteFile, {}] = useDeleteFileMutation();

  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setContent((data || {}).content || "");
  }, [data]);

  const onSaveChanges = () => {
    const isConfirm = confirm("Are you sure?");
    if (isConfirm) {
      changeFile({ filename: filename!, content });
      setEditMode(false);
    }
  };

  const onDeleteFile = () => {
    const isConfirm = confirm("Are you sure?");
    if (isConfirm) {
      deleteFile(filename!);
      navigate("/task1");
    }
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 400, p: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h6">Filename: {filename}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Uploaded date: {JSON.stringify((data || {}).uploadedDate)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              type="text"
              variant={editMode ? "filled" : "outlined"}
              color="info"
              name="content"
              label="Content"
              inputProps={{ readOnly: !editMode }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => setEditMode(!editMode)} color="info">
              Edit
            </Button>
            {editMode && (
              <Button onClick={onSaveChanges} color="success">
                Save
              </Button>
            )}
            <Button onClick={onDeleteFile} color="warning">
              Delete
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};
