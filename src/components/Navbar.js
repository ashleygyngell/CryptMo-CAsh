import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section class="hero  is-primary is-large">
      <div class="hero-head ">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <div className="hero-header mt-6 ">
                <h1 className="title has-text-centered">cryptMO cASH </h1>
              </div>
              <span class="navbar-burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <Link to="/" class="navbar-item is-active is-clickable">
                  <strong>Home</strong>
                </Link>
                <Link to="/top100" class="navbar-item is-active is-clickable ">
                  <strong>Top 100</strong>
                </Link>
                <Link to="/convert" class="navbar-item is-active is-clickable ">
                  <strong>Convert</strong>
                </Link>
                <span class="navbar-item ">
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
      {/* <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
    </section>
  );
};

export default Navbar;
