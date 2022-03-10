import React from 'react';
// import { Link } from 'react-router-dom';

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
    <table class="table is-bordered is-width">
      <tbody>
        <tr>
          <th>{cmc_rank}</th>
          <td>
            <figure className="image is-64x64 is-clickable">
              <img
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
                alt={name}
              />
              <span>{name}</span>
            </figure>
          </td>
          <td>{symbol}</td>
          <td>{quote.GBP.price}</td>
          <td>{quote.GBP.volume_24h}</td>
          <td>{quote.GBP.percent_change_24h}</td>
          <td>{quote.GBP.market_cap}</td>
          <td>{quote.GBP.fully_diluted_market_cap}</td>
          <td><img src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${id}.svg`} alt="" /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default CryptoCard;
