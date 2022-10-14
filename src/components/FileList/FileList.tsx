import { Card, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { useGetFilesQuery } from '../../services/task1';
import { useNavigate } from 'react-router-dom';

export const FileList = () => {
  const { data: files } = useGetFilesQuery();

  const navigate = useNavigate();

  return (
    <Card sx={{ maxWidth: 360 }}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Files
          </ListSubheader>
        }
      >
        {(files || []).map(fileName => (
          <ListItemButton key={fileName} onClick={() => navigate(`${fileName}`)}>
            <ListItemText primary={fileName} />
          </ListItemButton>
        ))}
      </List>
    </Card>
  );
};
