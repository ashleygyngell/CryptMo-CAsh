import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  function handleClick(event) {
    const extension = /event.target.innerHTML.replaceAll(' ', '').toLowerCase();
    navigate(/extension);
  }

  const navigate = useNavigate();
  return (
    <section className="hero is-fullheight has-background-primary">
      <div className="hero-header mt-6 ">
        <p className="title has-text-centered">cryptMO cASH </p>
      </div>
      <div className="hero-body is-flex-wrap-wrap">
        <div className="container columns">
          <button
            id="top-100"
            className="card p-6 column is-half m-2 has-text-centered"
            onClick={handleClick}
          >
            Top 100
          </button>
          <button
            id="convert"
            className="card p-6 column is-half m-2 has-text-centered"
            onClick={handleClick}
          >
            Convert
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
