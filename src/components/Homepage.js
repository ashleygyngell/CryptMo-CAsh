import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  function handleClick(event) {
    const extension = event.target.id;
    navigate(extension);
  }

  const navigate = useNavigate();
  return (
    <section class="hero is-fullheight is-primary is-large">
      <div class="hero-body">
        <div class="container has-text-centered">
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
    </section>
    // <section className="hero is-fullheight has-background-primary">
    //   <div className="hero-header mt-6 ">
    //     <p className="title has-text-centered">cryptMO cASH </p>
    //   </div>
    //   <div className="hero-body ">
    //     <div className="container columns ">
    //       <button
    //         id="top-100"
    //         className="card p-6 column is-half m-2 has-text-centered is-clickable"
    //         onClick={handleClick}
    //       >
    //         Top 100
    //       </button>
    //       <button
    //         id="convert"
    //         className="card p-6 column is -half m-2 has-text-centered is-clickable"
    //         onClick={handleClick}
    //       >
    //         Convert
    //       </button>
    //       <div className="head-foot"></div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Homepage;
