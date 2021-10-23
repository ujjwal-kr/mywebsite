import React from 'react';
import './App.sass';
import {Route, Switch} from 'react-router-dom';
import Home from './home';

function App() {
  return (
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
  );
}

export default App;
