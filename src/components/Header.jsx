import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/?tab=products" className="nav-link">Products</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  );
};

export default Header;
