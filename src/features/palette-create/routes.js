import React, { lazy } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

const PaletteCreate = lazy(() =>
  import('./pages').then(module => ({
    default: module.StyledPaletteCreate,
  })),
);

export const PaletteCreatePage = props => (
  <Switch>
    <Route
      exact
      path="/palette/new"
      component={routeProps => <PaletteCreate {...props} {...routeProps} />}
    />
    <Redirect to="/404" />
  </Switch>
);

PaletteCreatePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default React.memo(PaletteCreatePage);
