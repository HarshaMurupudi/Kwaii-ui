import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SmileyPage from './pages/smiley/smiley-page.component';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <SmileyPage />
      {/* Footer */}
    </div>
  );
}

export default App;
