import { useEffect, useState } from "react";
const API_KEY = "0dd0c19136f01040874e4d1027257bfd";
import { useLocation } from "react-router-dom";

function SearchApiQuote() {
  const [loading, setLoading] = useState(true);
  const [rowData, setData] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const name = location.state.name;

  useEffect(() => {
    (async () => {
      try {
        setData(await getDataQuote(name));
        console.log(rowData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);
  return {
    loading,
    rowData,
    name,
    error,
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
    };
  });

  return quote;
}

export default SearchApiQuote;
