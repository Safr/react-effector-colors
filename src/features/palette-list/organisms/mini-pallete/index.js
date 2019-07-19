import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles';

const MiniPalette = props => {
  const {
    classes,
    paletteName,
    emoji,
    colors,
    id,
    openDialog,
    goToPalette,
  } = props;

  const deletePalette = e => {
    e.stopPropagation();
    openDialog(id);
  };

  const handleClick = () => {
    goToPalette(id);
  };

  const miniColorBoxes = colors.map(color => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ));
  return (
    <div
      role="button"
      tabIndex="0"
      className={classes.root}
      onClick={handleClick}
      onKeyUp={handleClick}
    >
      <DeleteIcon
        className={classes.deleteIcon}
        style={{
          transition: 'all 0.3s ease-in-out',
          width: '2.5rem',
          height: '2.5rem',
        }}
        onClick={deletePalette}
      />

      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
};

export default memo(withStyles(styles)(MiniPalette));

MiniPalette.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  paletteName: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  id: PropTypes.string.isRequired,
  openDialog: PropTypes.func.isRequired,
  goToPalette: PropTypes.func.isRequired,
};
