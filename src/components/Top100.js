import React from 'react';
import { getTop } from '../lib/api';
import CryptoCard from './CryptoCard';

const Top100 = () => {
  const [cryptos, setCryptos] = React.useState(null);
  console.log(cryptos);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getTop();
        setCryptos(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <section className="section hero is-fullheight is-primary is-large">
      <div className="container">
        <div className="columns is-multiline">
          {!cryptos ? (
            <div className="pageloader ">
              <span className="title is-active ">Loading...</span>
            </div>
          ) : (
            cryptos.data.map((crypto) => (
              <div>
              
                <CryptoCard key={crypto.id} {...crypto} />
              </div>
            ))
          )}
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
          <div className="container ">
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

export default Top100;
