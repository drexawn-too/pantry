import React, { useState } from 'react';
import { createRecipe } from '../firebase';

const CreateRecipeForm = () => {
  const [input, updateInput] = useState('');

  const handleInput = (event) => {
    updateInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(input);
    updateInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={input} onChange={handleInput} />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default CreateRecipeForm;
