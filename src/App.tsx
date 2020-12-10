import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SmileyPage from './pages/smiley/smiley-page.component';
import HomePage from './pages/home-page/home-page.component';

function App() {
  return (
    <div className="App">
      {/* Header */}
      {/* <SmileyPage /> */}
      <HomePage />
      {/* Footer */}
    </div>
  );
}

export default App;
