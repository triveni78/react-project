// Navigation.js

import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
 
  const isLoggedIn = localStorage.getItem("signUp") !== null;

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
      </ul>
    </nav>
  );
}

export default Navigation;
