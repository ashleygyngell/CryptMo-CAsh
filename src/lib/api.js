import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_SERVER}https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=gbp`;

export const getTop100 = () => {
  return axios.get(`${baseUrl}`, {
    headers: {
      'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_API_KEY}`,
    },
  });
};
export const getCurrencySign = () => {
  return axios.get('https://pro-api.coinmarketcap.com/v1/fiat/map', {
    headers: {
      'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_API_KEY}`,
    },
  });
};
