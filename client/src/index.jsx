import React from 'react';
import ReactDOM from 'react-dom';
import {
  MemoryRouter as Router,
  Route
} from "react-router-dom";
import './index.css';
import AppContainer from './components/AppContainer';
import { UserProvider } from './UserProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/'>
        <UserProvider>
          <AppContainer />
        </UserProvider>
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
