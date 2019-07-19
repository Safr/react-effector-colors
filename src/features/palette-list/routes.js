import React, { lazy } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';

const PalettesList = lazy(() =>
  import('./pages').then(module => ({
    default: module.StyledPalettesList,
  })),
);

export const PalettesListPage = props => (
  <Switch>
    <Route
      exact
      path="/"
      component={routeProps => <PalettesList {...props} {...routeProps} />}
    />
    <Redirect to="/404" />
  </Switch>
);

PalettesListPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default React.memo(PalettesListPage);
