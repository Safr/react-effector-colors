import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $palettesList } from '@features/common/models/list';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const palettesList = useStore($palettesList);
  return (
    <Route
      {...rest}
      render={props =>
        palettesList && palettesList.length > 0 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.node.isRequired,
};
