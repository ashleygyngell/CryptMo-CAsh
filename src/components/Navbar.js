import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className="hero   is-primary is-large">
      <div className="hero-head ">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <div className="hero-header mt-6 ">
                <h1 className="title is-1">
                  cryptMO cASH{' '}
                </h1>
              </div>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <Link to="/" className="navbar-item is-active is-clickable">
                  <strong>Home</strong>
                </Link>
                <Link
                  to="/top100"
                  className="navbar-item is-active is-clickable "
                >
                  <strong>Top 100</strong>
                </Link>
                <Link
                  to="/convert"
                  className="navbar-item is-active is-clickable "
                >
                  <strong>Convert</strong>
                </Link>
                <span className="navbar-item ">
                  <input
                    className=" navbar-end has-text-centered is-offset-6 column is-6"
                    placeholder="Search..."
                  ></input>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
