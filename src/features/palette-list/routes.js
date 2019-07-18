import React, { lazy } from 'react';
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

export default React.memo(PalettesListPage);
