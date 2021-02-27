import React from 'react';
import './App.sass';
import {Route, Switch} from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import ProjectId from './projectId';

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:id" component={ProjectId}/>
    </Switch>
  );
}

export default App;
