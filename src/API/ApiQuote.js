import { useEffect, useState } from "react";
const API_KEY = "1031bcaf47ced35f5adf93ebd56dee09";

function SearchApiQuote(symbol) {
  const [loadingQ, setLoading] = useState(true);
  const [rowDataQ, setData] = useState([]);
  const [errorQ, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setData(await getDataQuote(symbol));
        console.log(rowDataQ);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [symbol]);
  return {
    loadingQ,
    rowDataQ,
    errorQ,
  };
}

async function getDataQuote(symbol) {
  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  let quote = data.map((quote) => {
    return {
      name: quote.name,
      price: quote.price,
      dayHigh: quote.dayHigh,
      dayLow: quote.dayLow,
      volume: quote.volume,
      previousClose: quote.previousClose,
    };
  });

  return quote;
}

export default SearchApiQuote;
