import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Button from '@material-ui/core/Button';
import { $palettesList } from '@features/common/models/list';
import { PaletteMetaForm } from '../palette-meta-form';
import styles from './styles';

const FormNav = props => {
  const [newPaletteName, setNewPaletteName] = useState('');
  const [isFormShown, setFormShown] = useState(false);
  const palettesList = useStore($palettesList);

  const handleChange = evt => {
    // this.setState({
    //   [evt.target.name]: evt.target.value,
    // });
  };

  const showForm = () => {
    setFormShown(true);
  };

  const hideForm = () => {
    setFormShown(false);
  };

  const { classes, open, handleSubmit, handleDrawerOpen } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <AddToPhotosIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Create A Palette
          </Typography>
        </Toolbar>
        <div className={classes.navBtns}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Go Back
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={showForm}
            className={classes.button}
          >
            Save
          </Button>
        </div>
      </AppBar>
      {isFormShown && (
        <PaletteMetaForm
          palettes={palettesList}
          handleSubmit={handleSubmit}
          hideForm={hideForm}
        />
      )}
    </div>
  );
};

FormNav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(FormNav);
