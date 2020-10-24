import _get from 'lodash/get';
import React, { useContext } from 'react';
import { UserContext } from '../UserProvider';
import SignInPage from './SignInPage';
import SidebarMenu from './SidebarMenu';
import MainContent from './MainContent';

const AppContainer = () => {
  const { user } = useContext(UserContext);
  
  const content = (
    <div>
      <SidebarMenu username={_get(user, 'displayName', '')} />
      <MainContent />
    </div>
  );
  
  return user ? content : <SignInPage />;
}

export default AppContainer;
