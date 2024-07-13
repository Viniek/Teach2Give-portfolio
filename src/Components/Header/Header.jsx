import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>

        
        <li>
          <NavLink
            to="/Works"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/works"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Works
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
