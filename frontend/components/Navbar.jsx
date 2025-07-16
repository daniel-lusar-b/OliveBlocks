import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">🌿 Olive Blocks</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/farmer">Farmer</Link>
        <Link to="/investor">Investor</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
