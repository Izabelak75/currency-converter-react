import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Button, Field, Header, Info, LabelText } from "./styled";

export const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

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
    <form onSubmit={onSubmit}>
      <Header>Przelicznik walut</Header>
      <p>
        <label>
          <LabelText>Kwota w złotówkach*:</LabelText>
          <Field
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w zl"
            type="number"
            required
            step="0.01"
          />
        </label>
      </p>
      <p>
        <label>
          <LabelText>Waluta:</LabelText>
          <Field
            as="select"
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.short} value={currency.short}>
                {currency.name}
              </option>
            ))}
          </Field>
        </label>
      </p>
      <p>
        <Button>Przelicz</Button>
      </p>

      <Info>
        Kursy pochodza ze strony NBP z tabeli nr 213/C/NBP/2025 z dnia
        2025-10-31
      </Info>

      <Result result={result} />
    </form>
  );
};
