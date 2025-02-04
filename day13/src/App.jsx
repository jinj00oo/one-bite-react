import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CurrencyInput from "./components/CurrencyInput";

function App() {
  const [currency, setCurrency] = useState({
    krw: 0,
    usd: 0,
  });

  const onChange = (e) => {
    if (e.target.name === "krw") {
      setCurrency({
        krw: e.target.value,
        usd: e.target.value / 1300,
      });
    } else {
      setCurrency({
        krw: e.target.value * 1300,
        usd: e.target.value,
      });
    }
  };

  return (
    <>
      <Header />
      <CurrencyInput name="krw" value={currency.krw} onChange={onChange} />
      <CurrencyInput name="usd" value={currency.usd} onChange={onChange} />
    </>
  );
}

export default App;
