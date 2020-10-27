import React from 'react';
import { NavLink } from "react-router-dom";
import { signOut } from '../firebase';

import '../styles/SidebarMenu.css'

const SidebarMenu = (props) => {
  const { username } = props;

  const content = (
    <div className='sidebar'>
      <h1>{`Hi ${username}`}</h1>
      <ul className='sidebar-nav'>
        <li className='nav-item'>
          <NavLink to={'/home'}>Home</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to={'/create'}>Create New</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to={'/recipes'}>View Recipes</NavLink>
        </li>
        <li className='nav-item'>
          <button type='button' className='signOutButton' onClick={signOut}>Sign Out</button>
        </li>
      </ul>
    </div>
  );

  return content;
}

export default SidebarMenu;
