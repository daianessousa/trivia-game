import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { InitGame } from './pages/InitGame';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Results } from './pages/Results';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/initgame" component={InitGame} />
        <Route path="/game" component={Game} />
        <Route path="/results" component={Results} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
