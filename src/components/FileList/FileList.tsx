import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useGetFilesQuery } from "../../services/task1";
import { useNavigate } from "react-router-dom";

export const FileList = () => {
  const { data: files, error, isLoading } = useGetFilesQuery();
  const navigate = useNavigate();

  return (
    <List
      sx={{ mt: 2, width: "100%", maxWidth: 360, bgcolor: "primary.dark" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          sx={{ bgcolor: "primary.dark" }}
          component="div"
          id="nested-list-subheader"
        >
          Files
        </ListSubheader>
      }
    >
      {(files || []).map((fileName) => (
        <ListItemButton key={fileName} onClick={() => navigate(`${fileName}`)}>
          <ListItemText primary={fileName} />
        </ListItemButton>
      ))}
    </List>
  );
};
