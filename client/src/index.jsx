import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/AppContainer';
import { UserProvider } from './UserProvider';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <AppContainer />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
