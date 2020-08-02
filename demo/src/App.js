import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </div>
  );
}

export default App;
