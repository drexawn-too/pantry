import _get from 'lodash/get';
import React, { useContext } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import { UserContext } from '../UserProvider';
import { signOut } from '../firebase';
import CreateRecipeForm from './CreateRecipeForm';
import RecipeList from './RecipeList';
import SignInPage from './SignInPage';
import Dashboard from './Dashboard';

const AppContainer = () => {
  const { user } = useContext(UserContext);

  const content = (
    <div>
      <h1>{`Hi ${_get(user, 'displayName', '')}`}</h1>
      <div>
        <Link to={'/home'}>Home</Link>
      </div>
      <div>
        <Link to={'/create'}>Create New</Link>
      </div>
      <div>
        <Link to={'/recipes'}>View Recipes</Link>
      </div>
      <div>
        <Switch>
          <Route exact path={'/recipes'}>
            <RecipeList />
          </Route>
          <Route exact path={'/create'}>
            <CreateRecipeForm />
          </Route>
          <Route>
            <Dashboard />
          </Route>
        </Switch>
      </div>
      <button type='button' onClick={signOut}>Sign Out</button>
    </div>
  );

  return user ? content : <SignInPage />;
};

export default AppContainer;
