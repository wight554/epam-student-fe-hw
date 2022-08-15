import React from "react";
import { useParams } from "react-router-dom";
import { useGetFileByNameQuery } from "../../services/task1";
import { Box, Typography } from "@mui/material";

export const FileItem = () => {
  const { filename } = useParams();
  const { data, error, isLoading } = useGetFileByNameQuery(filename);
  return (
    <Box>
      <Box
        sx={{
          padding: "20px",
          display: "inline-flex",
          flexDirection: "column",
          bgcolor: "primary.dark",
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
      </Box>
    </Box>
  );
};
