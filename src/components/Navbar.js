import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar is-link columns">
        <div className="container">
          <div className="navbar-brand">
            <input
              className="has-text-centered is-offset-9 column is-3"
              placeholder="Search..."
            ></input>{' '}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
