import React from 'react';
import { getTop100 } from '../lib/api';
import CryptoCard from './CryptoCard';


const Top100 = () => {
  const [cryptos, setCryptos] = React.useState(null);
  console.log(cryptos);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getTop100();
        setCryptos(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {!cryptos ? (
            // <p>loading...</p>
            <div className="pageloader is-full- ">
              <span className="title is-active ">Loading...</span>
            </div>
          ) : (
            cryptos.data.map((crypto) => (
              <CryptoCard key={crypto.id} {...crypto} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Top100;
