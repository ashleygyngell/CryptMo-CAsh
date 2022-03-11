import React from 'react';
import { getTokenWithCurrency, getCurrencySign } from '../lib/api';

function Convert() {
  const [amount, setAmount] = React.useState(0);
  const [cryptos, setCryptos] = React.useState(null);
  const [conversionResult, setConversionResult] = React.useState(0);
  const [selectedCrypto, setSelectedCrypto] = React.useState(0);
  const [selectedCurrency, setSelectedCurrency] = React.useState('USD');
  const [availableCurrencies, setAvailableCurrencies] = React.useState(null);
  const [divisibleNumber, setDivisibleNumber] = React.useState(0);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { data },
        } = await getTokenWithCurrency(selectedCurrency);
        setCryptos(data);
        console.log(
          'this is after setcryptos',
          data[1].quote[selectedCurrency].price
        );
      } catch (err) {
        console.error(err);
      }
    };

    const getAvailableCurrencies = async () => {
      const {
        data: { data },
      } = await getCurrencySign();
      setAvailableCurrencies(data);
    };

    getAvailableCurrencies();
    getData();
  }, [selectedCurrency]);

  function handleChange(event) {
    setAmount(event.target.value);
    setDivisibleNumber(cryptos.find(crypto => crypto.name === selectedCrypto).quote[selectedCurrency].price)
    setConversionResult(event.target.value / divisibleNumber)
    console.log('test', selectedCurrency)
    ;
  }

  const handleCurrencySelect = (e) => {
    setSelectedCurrency(e.target.value);
    console.log('test', selectedCurrency)
  };

  const handleCryptoSelect = (e) => {
    setSelectedCrypto(e.target.value);
  };

  console.log({
    amount,
    cryptos,
    conversionResult,
    selectedCrypto,
    availableCurrencies,
    selectedCurrency
  });

  //
  return (
    <>
      <div className="columns">
        <div className="column ">
          {/* TOP */}
        
          <form className="box">
            <div className="field ">
              <label className="label">Amount</label>
              <div className=" column is-half  control">
                <input
                  type="number"
                  className="input"
                  placeholder="VALUE"
                  onChange={handleChange}
                  value={amount}
                />
                </div>
                <label className="label">Currency</label>
                <div className="select is-multiple column ">
                  <select multiple size="3" onChange={handleCurrencySelect}>
                    {!!availableCurrencies &&
                      availableCurrencies.map((currency) => {
                        return (
                          <option key={currency.id} value={currency.symbol}>
                            {currency.name}
                          </option>
                        );
                      })}
                  </select>
              </div>
            </div>

            
            
    
          
            <div className="field">
              <label className="label">Crypto</label>
              <div className="select is-multiple">
                <select multiple size="3" onChange={handleCryptoSelect}>
                  {!!cryptos &&
                    cryptos.map((currency) => {
                      return (
                        <option key={currency.id} value={currency.cmc_rank - 1}>
                          {currency.name}
                        </option>
                      );
                    })}
                </select>
              
            </div>

            <div className="field">
              <label className="label">Conversion Result</label>
              <div className="conversionResult">
                <p>{conversionResult}</p>
              </div>
            </div>

            
          
        </div>
          </form>
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
    </>
  );
}

export default Convert;
