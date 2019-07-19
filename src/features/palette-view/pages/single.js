import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useStore } from 'effector-react';
import { withStyles } from '@material-ui/styles';
import { Page } from '@features/common/templates';
import { $palette } from '@features/common/models/single';
import { ColorBox, Footer, Navbar } from '../organisms';
import styles from '../styles';

const PaletteSingleView = props => {
  const { classes, colorId } = props;
  const [format, setFormat] = useState('hex');
  const [shades, setShades] = useState([]);
  const palette = useStore($palette);

  useEffect(() => {
    const gatherShades = (newPalette, colorToFilterBy) => {
      let newShades = [];
      const allColors = newPalette.colors;

      for (const key in allColors) {
        if (allColors) {
          newShades = newShades.concat(
            allColors[key].filter(color => color.id === colorToFilterBy),
          );
        }
      }
      setShades(newShades.slice(1));
    };

    gatherShades(palette, colorId);
  }, [colorId, palette]);

  const changeFormat = val => {
    setFormat(val);
  };

  const { paletteName, emoji, id } = palette;

  const colorBoxes = shades.map(color => (
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
    />
  ));

  return (
    <Page>
      <div className={classes.Palette}>
        <Navbar handleChange={changeFormat} showingAllColors={false} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    </Page>
  );
};

PaletteSingleView.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  colorId: PropTypes.string.isRequired,
};

export const StyledPaletteSingleView = withStyles(styles)(PaletteSingleView);
