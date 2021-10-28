import React, { Fragment } from 'react';
import './App.sass';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <Fragment>
      {/* <ScrollToTop /> */}
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path="/" component={Home} exact />
          <Route path="/projects" component={Projects} />
        </Switch>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
