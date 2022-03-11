import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  function handleClick(event) {
    const extension = event.target.id;
    navigate(extension);
  }

  const navigate = useNavigate();
  return (
    <section className="hero is-fullheight is-primary is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <button
            id="top100"
            className="card p-6 column is-full m-2 has-text-centered is-clickable is-size-1"
            onClick={handleClick}
          >
            Top 100
          </button>
          <button
            id="convert"
            className="card p-6 column is-full m-2 has-text-centered is-clickable is-size-1"
            onClick={handleClick}
          >
            Convert
          </button>
        </div>
      </div>
      <div className="hero-foot ">
        <nav className="tabs">
          <div className="container ">
            <ul>
              <li>
                <strong>
                  <p className="ml-6  has-text-black">Mohamed Mohamed</p>
                </strong>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/mohamed-mohamed-2bb355115/"
                  className="is-clickable"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/momoh66"
                  className="is-clickable"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className="container">
            <ul>
              <li>
                <strong>
                  <p className="ml-6  has-text-black">Ashley Gyngell</p>
                </strong>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/ashley-gyngell-292457230/"
                  className="is-clickable"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/agyngell"
                  className="is-clickable"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Homepage;
