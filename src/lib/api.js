import axios from 'axios';

const baseUrl =
  'https://thingproxy.freeboard.io/fetch/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=gbp';

export const getTop100 = () => {
  return axios.get(`${baseUrl}`, {
    headers: {
      'X-CMC_PRO_API_KEY': '0ac704e8-5483-4d9f-90d2-3168fb85d5bf',
    },
  });
};
