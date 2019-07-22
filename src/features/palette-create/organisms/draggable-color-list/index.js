import React from 'react';
import PropTypes from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from '../draggable-color-box';

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
  return (
    <>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => removeColor(color.name)}
        />
      ))}
    </>
  );
});

DraggableColorList.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default DraggableColorList;
