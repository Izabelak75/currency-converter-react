import { useState } from "react";
import { Result } from "./Result";
import {
  Button,
  Field,
  Header,
  Info,
  LabelText,
  Loading,
  Failure,
} from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [result, setResult] = useState(null);
  const ratesData = useRatesData();
  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency].value;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onSubmit}>
      <Header>Przelicznik walut</Header>

      {ratesData.state === "loading" ? (
        <Loading>
          Moment... <br />
          Laduje kursy walut z currencyapi.com
        </Loading>
      ) : ratesData.state === "error" ? (
        // eslint-disable-next-line jsx-a11y/accessible-emoji
        <Failure>
          Nie udalo sie pobrac kursow walut Sprawdż, czy masz połączenie z
          internetem.
        </Failure>
      ) : (
        <>
          <p>
            <label>
              <LabelText>Kwota w zl*:</LabelText>
              <Field
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="Wpisz kwote w zlotowkach"
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
                {!!ratesData.rates &&
                  Object.keys(ratesData.rates).map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
              </Field>
            </label>
          </p>
          <p>
            <Button>Przelicz</Button>
          </p>

          <Info>
            Kursy walut aktualne na dzien{" "}
            {new Date(ratesData.date).toLocaleString("pl-PL")} z
            currencyapi.com.
          </Info>

          <Result result={result} />
        </>
      )}
    </form>
  );
};
