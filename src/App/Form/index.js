import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ short }) => short === currency).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form__header">Przelicznik walut</h1>
      <p>
        <label>
          <span className="form__labelText">Kwota w zł*:</span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w zl"
            className="form__field"
            type="number"
            required
            step="0.01"
          />
        </label>
      </p>
      <p>
        <label>
          <span className="form__labelText">Waluta:</span>
          <select
            className="form__field"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </select>
        </label>
      </p>
      <p>
        <button className="form__button">Przelicz</button>
      </p>

      <p className="form__info">
        Kursy pochodza ze strony NBP z tabeli nr 213/C/NBP/2025 z dnia
        2025-10-31
      </p>

      <Result result={result} />
    </form>
  );
};
