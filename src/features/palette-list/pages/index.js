/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import { removePalette } from '@features/common/models/delete';
import { $palettesList, getPalettesList } from '@features/common/models/list';
import { Page } from '@features/common/templates';
import { MiniPalette } from '../organisms';
import styles from '../styles';

const PalettesList = props => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deletingId, setDeletingId] = useState('');
  const { classes } = props;
  const palettesList = useStore($palettesList);

  useEffect(() => {
    getPalettesList();
  }, []);

  const openDialog = id => {
    setOpenDeleteDialog(true);
    setDeletingId(id);
  };

  const closeDialog = () => {
    setOpenDeleteDialog(false);
    setDeletingId('');
  };

  const goToPalette = id => {
    // eslint-disable-next-line react/prop-types
    props.history.push(`/palette/${id}`);
  };

  const handleDelete = () => {
    removePalette({ id: deletingId });
    closeDialog();
  };

  return (
    <Page>
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Effector Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettesList &&
              palettesList.map(palette => (
                <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                  <MiniPalette
                    {...palette}
                    goToPalette={goToPalette}
                    openDialog={openDialog}
                    key={palette.id}
                    id={palette.id}
                  />
                </CSSTransition>
              ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    </Page>
  );
};

export const StyledPalettesList = withStyles(styles)(PalettesList);
