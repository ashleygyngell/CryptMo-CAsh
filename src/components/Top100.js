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
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {!cryptos ? (
            
            <div className="pageloader ">
              <span className="title is-active ">Loading...</span>
            </div>
          ) : (
            cryptos.data.map((crypto) => (
              <div>
                <table className="table is-bordered is-fullwidth is-strpied">
                  <thead>
                    <tr>
                      <th className="crm">Position</th>
                      <th className="name">Cryptocurrency Sign</th>
                      <th className="name">Cryptocurrency Name</th>
                      <th className="symbol">Symbol</th>
                      <th className="price">Price (£)</th>
                      <th className="volume_24h">Volume in 24 hours</th>
                      <th className="percent_change_24h">
                        Percentage change in 24 hours (%)
                      </th>
                      <th className="market_cap">Market Cap</th>
                      <th className="fully_diluted_market_cap">
                        Full Market Cap
                      </th>
                      <th className="7d_chart">7d chart</th>
                    </tr>
                  </thead>
                </table>
                <CryptoCard key={crypto.id} {...crypto} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Top100;
