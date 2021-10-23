import React from 'react';
import './App.sass';
import {Route, Switch} from 'react-router-dom';
import Home from './home';
import Projects from './projects';

function App() {
  return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} />
      </Switch>
  );
}

export default App;
