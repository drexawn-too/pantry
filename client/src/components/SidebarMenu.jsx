import React from 'react';
import { NavLink } from "react-router-dom";

import { signOut } from '../firebase';

const SidebarMenu = (props) => {
  const { username } = props;

  const content = (
    <div>
      <h1>{`Hi ${username}`}</h1>
      <div>
        <NavLink to={'/home'}>Home</NavLink>
      </div>
      <div>
        <NavLink to={'/create'}>Create New</NavLink>
      </div>
      <div>
        <NavLink to={'/recipes'}>View Recipes</NavLink>
      </div>
      <button type='button' onClick={signOut}>Sign Out</button>
    </div>
  );

  return content;
}

export default SidebarMenu;
