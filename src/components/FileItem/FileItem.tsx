import React from "react";
import { useParams } from "react-router-dom";
import { useGetFileByNameQuery } from "../../services/task1";
import { Box, Card, Typography, useTheme } from "@mui/material";

export const FileItem = () => {
  const { filename } = useParams();
  const { data, error, isLoading } = useGetFileByNameQuery(filename!);
  const theme = useTheme();
  return (
    <Box>
      <Card sx={{ maxWidth: 400, p: 2 }}>
        <Typography variant="h6">Filename: {filename}</Typography>
        <Typography variant="subtitle1">
          Content: {JSON.stringify((data || {}).content)}
        </Typography>
        <Typography variant="subtitle1">
          Uploaded date: {JSON.stringify((data || {}).uploadedDate)}
        </Typography>
      </Card>
    </Box>
  );
};
