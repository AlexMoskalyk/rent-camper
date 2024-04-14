import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <nav className="nav">
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/catalog">
        Catalog
      </NavLink>
      <NavLink className="nav-link" to="/favourites">
        Favourites
      </NavLink>
    </nav>
  );
}

export default Header;
