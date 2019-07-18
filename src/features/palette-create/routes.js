import React, { lazy } from 'react';
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

export default React.memo(PaletteCreatePage);
