import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"

function Header() {
  return (
    <nav>
    <div
    className='Menu'>
      <span></span>
      <span></span>
      <span></span>
    </div>
      <ul>
        <li>
          <NavLink to="/">Works</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/Blog">Blog</NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header