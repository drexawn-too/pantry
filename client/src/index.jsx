import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter as Router } from "react-router-dom";
import AppContainer from './components/AppContainer';
import { UserProvider } from './UserProvider';

import './styles/index.css';

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
