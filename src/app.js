import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PalettesListPage } from './features/palette-list';
import { PaletteCreatePage } from './features/palette-create';
import { PaletteViewPages } from './features/palette-view';

const App = () => {
  return (
    <Route
      render={({ location }) => (
        <Switch location={location}>
          <Route
            exact
            path="/palette/new"
            render={routeProps => <PaletteCreatePage {...routeProps} />}
          />
          <Route
            exact
            path="/"
            render={routeProps => <PalettesListPage {...routeProps} />}
          />
          <Route
            path="/palette/:paletteId"
            render={routeProps => <PaletteViewPages {...routeProps} />}
          />
        </Switch>
      )}
    />
  );
};

export default App;
