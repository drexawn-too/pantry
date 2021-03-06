import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { user$ } from './firebase';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sub = user$.subscribe((user) => setUser(user));
    return () => sub.unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
