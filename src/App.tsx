import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SmileyPage from './pages/smiley/smiley-page.component';
import HomePage from './pages/home-page/home-page.component';
import SideDrawer from './components/side-drawer/side-drawer.component';
import NavBar from './components/app-bar/app-bar'



function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerClick = (drawerStatus: boolean) => {
    setOpen(drawerStatus);
  };

  return (
    <div className="App">
      {/* Header */}
      {/* <SmileyPage /> */}
      <Router>
        <SideDrawer handleDrawerClick={handleDrawerClick} isDrawerOpen={open} />
        <NavBar handleDrawerClick={handleDrawerClick} isDrawerOpen={open} />

        <Switch>
          <Route exact path="/" render={props => <HomePage />} />
          <Route exact path="/toggle" render={props => <SmileyPage />} />
        </Switch>
      </Router>
      {/* Footer */}
    </div>
  );
}

export default App;
