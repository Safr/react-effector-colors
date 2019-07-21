import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './styles';

const Navbar = props => {
  const [format, setFormat] = useState('hex');
  const [isOpen, setOpen] = useState(false);
  const { level, changeLevel, handleChange, showingAllColors, classes } = props;

  const handleFormatChange = e => {
    setFormat(e.target.value);
    setOpen(true);
    handleChange(e.target.value);
  };

  const closeSnackbar = () => {
    setOpen(false);
  };

  return (
    <header className={classes.Navbar}>
      <div className={classes.logo}>
        <Link to="/">React Effector Colors</Link>
      </div>
      {showingAllColors && (
        <div className={classes.level}>
          <span>Level: {level}</span>
          <div className={classes.slider}>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
      )}
      <div className={classes.selectContainer}>
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={isOpen}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format Changed To {format.toUpperCase()}</span>
        }
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
};

Navbar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  level: PropTypes.string.isRequired,
  changeLevel: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  showingAllColors: PropTypes.bool.isRequired,
};

export const StyledNavbar = withStyles(styles)(Navbar);
