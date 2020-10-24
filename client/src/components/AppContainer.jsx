import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { UserContext } from '../UserProvider';
import { signOut } from '../firebase';
import CreateRecipe from './CreateRecipe';
import RecipeList from './RecipeList';
import SignInPage from './SignInPage';

const AppContainer = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <SignInPage />;
  }

  return (
    <Router>
      <h1>{`Hi ${user.displayName}`}</h1>
      <div>
        <Link to={'/create'}>Create New</Link>
      </div>
      <div>
        <Link to={'/'}>View List</Link>
      </div>
      <div>
        <Switch>
          <Route exact path='/'>
            <RecipeList />
          </Route>
          <Route exact path='/create'>
            <CreateRecipe />
          </Route>
          <Route exact path='/signIn'>
            <SignInPage />
          </Route>
        </Switch>
      </div>
      <button type='button' onClick={signOut}>Sign Out</button>
    </Router>
  );
};

export default AppContainer;
