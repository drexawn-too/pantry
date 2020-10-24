import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './index.css';
import AppContainer from './components/AppContainer';
import { UserProvider } from './UserProvider';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <AppContainer />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
