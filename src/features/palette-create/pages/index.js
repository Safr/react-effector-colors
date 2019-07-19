/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useStore } from 'effector-react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { arrayMove } from 'react-sortable-hoc';
import { $palettesList, getPalettesList } from '@features/common/models/list';
import { Page } from '@features/common/templates';
import { savePalette } from '@features/common/models/save';
import { seedColors } from '@features/common/data';
import { ColorPickerForm, DraggableColorList, FormNav } from '../organisms';
import styles from '../styles';

const PaletteCreate = props => {
  const [isOpen, setOpen] = useState(true);
  const [colors, setColors] = useState(seedColors[0].colors);

  const { classes, history, maxColors } = props;

  const palettesList = useStore($palettesList);

  useEffect(() => {
    getPalettesList();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = newColor => {
    setColors(prevColors => [...prevColors, newColor]);
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = palettesList.map(p => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor =
        colors &&
        // eslint-disable-next-line no-loop-func
        colors.some(color => color && color.name === randomColor.name);
    }

    setColors(prevColors => [...prevColors, randomColor]);
  };

  const handleSubmit = newPalette => {
    newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, '-');
    newPalette.colors = colors;
    savePalette({ palette: newPalette });
    history.push('/');
  };

  const removeColor = colorName => {
    setColors(prevColors => [
      ...prevColors.filter(color => color.name !== colorName),
    ]);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const paletteIsFull = colors.length >= maxColors;

  return (
    <Page>
      <div className={classes.root}>
        <FormNav
          open={isOpen}
          palettes={palettesList}
          handleSubmit={handleSubmit}
          handleDrawerOpen={handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={isOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={clearColors}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
                onClick={addRandomColor}
                disabled={paletteIsFull}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              paletteIsFull={paletteIsFull}
              addNewColor={addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: isOpen,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={removeColor}
            axis="xy"
            onSortEnd={onSortEnd}
            distance={20}
          />
        </main>
      </div>
    </Page>
  );
};

PaletteCreate.defaultProps = {
  maxColors: 20,
};

PaletteCreate.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  maxColors: PropTypes.number,
};

export const StyledPaletteCreate = withStyles(styles)(PaletteCreate);
