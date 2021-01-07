import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SmileyPage from './pages/smiley/smiley-page.component';
import HomePage from './pages/home-page/home-page.component';

function App() {
  return (
    <div className="App">
      {/* Header */}
      {/* <SmileyPage /> */}
      <Router>
        <Switch>
          <Route exact path="/" render={props => <HomePage />} />
        </Switch>
      </Router>
      {/* Footer */}
    </div>
  );
}

export default App;
