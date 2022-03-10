import React from 'react';
// import {getCurrencySign} from '../lib/api'

const CryptoCard = ({
  cmc_rank,
  id,
  name,
  symbol,
  quote,
  volume_24h,
  percent_change_24h,
  market_cap,
  fully_diluted_market_cap,
}) => {
  return (
    <table class="table is-bordered is-fullwidth is-strpied">
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
          <th className="fully_diluted_market_cap"> Full Market Cap</th>
          <th className="7d_chart">7d chart</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th className="crm">Position</th>
          <th className="name">Cryptocurrency Name</th>
          <th className="name">Cryptocurrency Name</th>
          <th className="symbol">Symbol</th>
          <th className="price">Price (£)</th>
          <th className="volume_24h">Volume in 24 hours</th>
          <th className="percent_change_24h">
            Percentage change in 24 hours (%)
          </th>
          <th className="market_cap">Market Cap</th>
          <th className="fully_diluted_market_cap"> Full Market Cap</th>
          <th className="7d_chart">7d chart</th>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <th>{cmc_rank}</th>
          <td>
            <figure className="image is-64x64 is-clickable">
              <img
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
                alt={name}
              />
            </figure>
          </td>
          <td>{name}</td>
          <td>{symbol}</td>
          <td>{quote.GBP.price.toFixed(2)}</td>
          <td>{quote.GBP.volume_24h.toFixed(2)}</td>
          <td>{quote.GBP.percent_change_24h.toFixed(2)}</td>
          <td>{quote.GBP.market_cap.toFixed(2)}</td>
          <td>{quote.GBP.fully_diluted_market_cap.toFixed(2)}</td>
          <td>
            <img
              src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${id}.svg`}
              alt=""
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CryptoCard;
