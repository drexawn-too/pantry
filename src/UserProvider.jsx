import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { AUTH, signInWithGoogle, signOut } from './firebase';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AUTH.onAuthStateChanged((u) => {
      setUser(u);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
