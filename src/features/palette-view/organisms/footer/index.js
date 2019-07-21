import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const Footer = ({ paletteName, emoji, classes }) => (
  <footer className={classes.PaletteFooter}>
    <Link to="/" className={classes.goBack}>
      GO BACK
    </Link>

    {paletteName}
    <span className={classes.emoji}>{emoji}</span>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  emoji: PropTypes.string.isRequired,
  paletteName: PropTypes.string.isRequired,
};
export const StyledFooter = withStyles(styles)(Footer);
