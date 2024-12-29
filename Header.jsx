import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () =>{
  return (
    <header className="header">
      <h1>News App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/search">Search</Link>
      </nav>
    </header>
  );
};

export default Header;
