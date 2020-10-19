import _map from 'lodash/map';
import React, { useState, useEffect } from 'react';
import { connectItems, createItem, removeItem } from './firebase';
import './App.css';

const App = () => {
  const [input, updateInput] = useState('');
  const [items, updateItems] = useState([]);

  useEffect(() => {
    const connection = connectItems(updateItems);
    return () => connection();
  }, []);

  const handleInput = (event) => {
    updateInput(event.target.value);
  };

  const handleRemove = (id) => {
    removeItem(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createItem(input);
    updateInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <button>Submit</button>
      </form>
      <ul>
        {_map(items, (item) =>
          (<li key={item.id}>{`${item.value}\n`}<span onClick={() => handleRemove(item.id)}>x</span></li>)
        )}
      </ul>
    </div>
  );
};

export default App;
