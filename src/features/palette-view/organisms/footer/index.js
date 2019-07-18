/* eslint-disable react/prop-types */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const Footer = props => {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
};
export const StyledFooter = withStyles(styles)(Footer);
