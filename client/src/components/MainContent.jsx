import React from 'react';
import { Switch, Route } from "react-router-dom";
import CreateRecipeForm from './CreateRecipeForm';
import RecipeList from './RecipeList';
import Dashboard from './Dashboard';

const MainContent = () => {
  return (
    <div>
      <Switch>
        <Route path={'/recipes'} component={RecipeList} />
        <Route path={'/create'} component={CreateRecipeForm}/>
        <Route component={Dashboard} />
      </Switch>
    </div>
  );
}

export default MainContent;
