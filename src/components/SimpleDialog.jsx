import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';


function SimpleDialog({open, onClose, list,title, card}) {

  const handleClose = () => {
    onClose(null);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      {
        card?card:
        <List sx={{ pt: 0 }}>
          {list?.map((option, index) => (
            <ListItem key={`dialog-list-item-${index}`} button onClick={() => handleListItemClick(option)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={option.name} secondary={option.lastname} />
            </ListItem>
          ))}
        </List>
      }
    </Dialog>
  );
}

export default SimpleDialog