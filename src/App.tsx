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
        const token = '6a826c4d3ac3c1a6525c53a9fd79440dbc7d5519';
        return {
            headers: {authorization: `bearer ${token}`}
        }
    }
})
  return (
    <Provider value={Client}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectId}/>
      </Switch>
    </Provider>
  );
}

export default App;
