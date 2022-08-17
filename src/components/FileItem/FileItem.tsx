import React from "react";
import { useParams } from "react-router-dom";
import { useGetFileByNameQuery } from "../../services/task1";
import { Box, Grid, Typography } from "@mui/material";

export const FileItem = () => {
  const { filename } = useParams();
  const { data, error, isLoading } = useGetFileByNameQuery(filename!);
  return (
    <Box>
      <Grid
        sx={{
          padding: "20px",
          display: "inline-flex",
          flexDirection: "column",
          mt: 2,
        }}
      >
        <Typography variant="h6">Filename: {filename}</Typography>
        <Typography variant="subtitle1">
          Content: {JSON.stringify((data || {}).content)}
        </Typography>
        <Typography variant="subtitle1">
          Uploaded date: {JSON.stringify((data || {}).uploadedDate)}
        </Typography>
      </Grid>
    </Box>
  );
};
