import React from 'react';
import './App.sass';
import {Route, Switch} from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import ProjectId from './projectId';
import { createClient, Provider } from 'urql';

function App() {
  const Client = createClient({
    url: 'https://api.github.com/graphql',
    fetchOptions: () => {
        const token = '890de511da1000cd4f0f37cba72a79df833b57f6';
        return {
            headers: {authorization: `bearer ${token}`}
        }
    }
})
  return (
    <Provider value={Client}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects/:id" component={ProjectId}/>
        <Route path="/projects" component={Projects} />
      </Switch>
    </Provider>
  );
}

export default App;
