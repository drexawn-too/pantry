import _map from 'lodash/map';
import React, { useState, useEffect } from 'react';
import { recipeCollection$, deleteRecipe } from '../firebase';

const RecipeList = () => {
  const [recipeList, updateRecipes] = useState([]);

  useEffect(() => {
    const sub = recipeCollection$.subscribe((collection) => updateRecipes(collection));
    return () => sub.unsubscribe();
  }, []);

  const handleRemove = (id) => {
    deleteRecipe(id);
  };

  return (
    <ul>
      {_map(recipeList, (recipe) => (
        <li key={recipe.id}>
          <span style={{ display: 'inline' }}>
            {`${recipe.value}`}
            <button style={{ border: 'none', backgroundColor: 'inherit' }} type='submit' onClick={() => handleRemove(recipe.id)}>x</button>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
