import React from 'react';
import { getTop100 } from '../lib/api';

function Convert() {
  const [amount, setAmount] = React.useState(0);
  const [cryptos, setCryptos] = React.useState(null);
  const [conversionResult,setConversionResult] = React.useState(0)
  console.log(cryptos);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getTop100();
        setCryptos(data);
        console.log('this is after setcryptos', data.data[0].quote.GBP.price);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  function handleChange(event) {
    setAmount(event.target.value);
    setConversionResult(event.target.value / cryptos.data[0].quote.GBP.price);
  }
  console.log(amount);

  // console.log(cryptos.data[0].quote.GBP.price)

  // const cryptoPrice = cryptos.data[0].quote.GBP.price

  
  // cryptoPrice;

  function executeConversion() {
    const getData = async () => {
      try {
        const { data } = await getTop100();
        setCryptos(data);
        console.log('this is after setcryptos', data.data[0].quote.GBP.price);
      } catch (err) {
        console.error(err);
      }
    };
    getData();

  }

  //
  return (
    <>
      <div class="columns">
        <div class="column is-half">
          <form class="box">
            <div class="field">
              <label class="label">CURRENCY</label>
              <div class=" columns control">
                <input
                  type="number"
                  className="input"
                  placeholder="VALUE"
                  onChange={handleChange}
                  value={amount}
                />
                <div class="select is-multiple">
                  <select multiple size="2">
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">CRYPTO (BITCOIN)</label>
              <div class="conversionResult">
                <p>{conversionResult}</p>
              </div>
            </div>

            <button class="button is-primary" onClick={executeConversion}>
              Convert
            </button>
          </form>
        </div>
        <div class="column is-half">
          <form class="box">
            <div class="field">
              <label class="label">CRYTPTO</label>
              <div class="control is-loading">
                <input class="input" type="email" placeholder="100" />
              </div>
            </div>

            <div class="field">
              <label class="label">CURRENCY</label>
              <div class="conversionResult">
                <p>{conversionResult}</p>
              </div>
            </div>

            <button class="button is-primary">Convert</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Convert;
