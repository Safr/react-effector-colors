/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo } from 'react';
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
    <div className={classes.root} onClick={handleClick}>
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
