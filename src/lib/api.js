import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_SERVER}https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100`;


export const getTop = () => {
  return axios.get(`${baseUrl}&convert=gbp`, {
    headers: {
      'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_API_KEY}`,
    },
  });
};

export const getTokenWithCurrency = (currency) => {
  return axios.get(`${baseUrl}&convert=${currency}`, {
    headers: {
      'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_API_KEY}`,
    },
  });
};

export const getCurrencySign = () => {
  return axios.get(
    `${process.env.REACT_APP_API_SERVER}https://pro-api.coinmarketcap.com/v1/fiat/map`,
    {
      headers: {
        'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
};
