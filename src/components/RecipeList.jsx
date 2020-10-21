import _map from 'lodash/map';
import React, { useState, useEffect, useContext } from 'react';
import { connectRecipes, createRecipe, deleteRecipe } from '../firebase';
import '../App.css';
import { UserContext } from '../UserProvider';

const RecipeList = () => {
  const { user, signOut } = useContext(UserContext);

  const [input, updateInput] = useState('');
  const [recipesList, updateRecipes] = useState([]);

  useEffect(() => {
    const unsubscribe = connectRecipes(updateRecipes);
    return () => unsubscribe();
  }, []);

  const handleInput = (event) => {
    updateInput(event.target.value);
  };

  const handleRemove = (id) => {
    deleteRecipe(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { uid } = user;
    createRecipe(input, uid);
    updateInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {_map(recipesList, (recipe) => (
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