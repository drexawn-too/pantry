import React, { useContext } from 'react';
import '../App.css';
import { UserContext } from '../UserProvider';
import RecipeList from './RecipeList';
import SignInPage from './SignInPage';

const App = () => {
  const { user } = useContext(UserContext);

  return (user ? <RecipeList /> : <SignInPage />);
};

export default App;
