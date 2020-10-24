import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import AppContainer from './components/AppContainer';
import { UserProvider } from './UserProvider';
import NotFound from './components/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <UserProvider>
            <AppContainer />
          </UserProvider>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
