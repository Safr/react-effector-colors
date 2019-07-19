import React, { lazy } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

const PaletteView = lazy(() =>
  import('./pages').then(module => ({
    default: module.StyledPaletteView,
  })),
);

const PaletteSingleView = lazy(() =>
  import('./pages/single').then(module => ({
    default: module.StyledPaletteSingleView,
  })),
);

export const PaletteViewPages = props => (
  <Switch>
    <Route
      exact
      path={props.match.path}
      component={routeProps => <PaletteView {...props} {...routeProps} />}
    />
    <Route
      exact
      path={`${props.match.path}/:colorId`}
      component={routeProps => (
        <PaletteSingleView
          {...props}
          {...routeProps}
          colorId={routeProps.match.params.colorId}
        />
      )}
    />
    <Redirect to="/404" />
  </Switch>
);

PaletteViewPages.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default React.memo(PaletteViewPages);
