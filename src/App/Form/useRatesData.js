import { useEffect, useState } from "react";

const url =
  "https://api.currencyapi.com/v3/latest?apikey=cur_live_kNZpkFunnm8ylBh9NiutwbI7qOj1re6CNF5HwYab&base_currency=PLN";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        setRatesData({
          state: "success",
          rates: data.data,
          date: data.meta.last_updated_at,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };

    setTimeout(fetchRates, 1000);
  }, []);

  return ratesData;
};
