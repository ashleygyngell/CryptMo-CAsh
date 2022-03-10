import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar is-link columns">
        <div className="container">
          <div className="navbar-brand">
           <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/top100" className="navbar-item">
              Top 100
            </Link>
            <input
              className="has-text-centered is-offset-122 column is-3"
              placeholder="Search..."
            ></input>{' '}
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
