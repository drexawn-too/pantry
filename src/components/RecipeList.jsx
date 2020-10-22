import _map from 'lodash/map';
import React, { useState, useEffect, useContext } from 'react';
import { recipeCollection$, createRecipe, deleteRecipe } from '../firebase';
import { UserContext } from '../UserProvider';

const RecipeList = () => {
  const { user, signOut } = useContext(UserContext);

  const [input, updateInput] = useState('');
  const [recipeList, updateRecipes] = useState([]);

  useEffect(() => {
    const sub = recipeCollection$.subscribe((recipeCollection) => updateRecipes(recipeCollection));
    return () => sub.unsubscribe();
  }, []);

  const handleInput = (event) => {
    updateInput(event.target.value);
  };

  const handleRemove = (id) => {
    deleteRecipe(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(input);
    updateInput('');
  };

  return (
    <div>
      <h1>{`Hi ${user.displayName}`}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {_map(recipeList, (recipe) => (
          <li key={recipe.id}>
            <span style={{ display: 'inline' }}>
              {`${recipe.value}`}
              <button style={{ border: 'none', backgroundColor: 'inherit' }} type="submit" onClick={() => handleRemove(recipe.id)}>x</button>
            </span>
          </li>
        ))}
      </ul>
      <button type="button" onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default RecipeList;
