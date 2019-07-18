/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { withStyles } from '@material-ui/styles';
import { Page } from '@features/common/templates';

import { $palette, getPalette } from '@features/common/models/single';
import { ColorBox, Footer, Navbar } from '../organisms';
import styles from '../styles';

const PaletteView = props => {
  const { classes, match } = props;
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const palette = useStore($palette);

  useEffect(() => {
    getPalette({ id: match.params.paletteId });
  }, [match.params.paletteId]);

  const changeLevel = val => {
    setLevel(val);
  };

  const changeFormat = val => {
    setFormat(val);
  };

  const colorBoxes = palette
    ? palette.colors[level].map(color => {
        return (
          <ColorBox
            background={color[format]}
            name={color.name}
            key={color.id}
            moreUrl={palette && `/palette/${palette.id}/${color.id}`}
            showingFullPalette
          />
        );
      })
    : [];

  return (
    <Page>
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={changeLevel}
          handleChange={changeFormat}
          showingAllColors
        />
        <div className={classes.colors}>{colorBoxes}</div>
        <Footer
          paletteName={palette && palette.paletteName}
          emoji={palette && palette.emoji}
        />
      </div>
    </Page>
  );
};

export const StyledPaletteView = withStyles(styles)(PaletteView);
