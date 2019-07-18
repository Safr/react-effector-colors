import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PalettesListPage } from './features/palette-list';
import { PaletteCreatePage } from './features/palette-create';
import { PaletteViewPages } from './features/palette-view';

const App = props => {
  return (
    <Route
      render={({ location }) => (
        // <TransitionGroup>
        //   <CSSTransition key={location.key} classNames="page" timeout={500}>
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
        //   </CSSTransition>
        // </TransitionGroup>
      )}
    />
  );
};

export default App;

// return (
//     <Route
//       render={({ location }) => (
//         <TransitionGroup style={{ height: '100vh' }}>
//           <CSSTransition key={location.key} classNames="page" timeout={200}>
//             <Switch location={location}>
//               <Route
//                 exact
//                 path="/palette/new"
//                 render={routeProps => <PaletteCreatePage {...routeProps} />}
//               />
//               <Route
//                 exact
//                 path="/"
//                 render={routeProps => <PalettesListPage {...routeProps} />}
//               />
//               <Route
//                 path="/palette/:paletteId"
//                 render={routeProps => (
//                   <PaletteViewPages
//                     // palette={generatePalette(
//                     //   this.findPalette(routeProps.match.params.paletteId),
//                     // )}
//                     {...routeProps}
//                   />
//                 )}
//               />
//             </Switch>
//           </CSSTransition>
//         </TransitionGroup>
//       )}
//     />
//   );
