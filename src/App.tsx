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
        const token = '17d90f17a2b0faab006581629b9617166170d548';
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
