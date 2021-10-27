import React, { Fragment } from 'react';
import './App.sass';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import ScrollToTop from './scroll'

function App() {
  return (
    <Fragment>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Fragment>

  );
}

export default App;
