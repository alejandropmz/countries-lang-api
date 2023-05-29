import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { CountryCard } from "./components/CountryCard";
import { Select } from "./components/Select";
import languages from "../src/json/languages.json";

function App() {
  const [countries, setCountries] = useState();
  const [language, setLanguage] = useState("spa");

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/lang/${language}`;

    axios
      .get(url)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, [language]);

  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };


  return (
    <div className="app">
      {countries ? (
        <div className="app__options">
          <h1 className="app__title">Country app</h1>
          <Select handleLanguage={handleLanguage} languages={languages} />
        </div>
      ) : (
        ""
      )}

      {!countries ? (
        <h1 className="app__title">Countries are loading...</h1>
      ) : (
        countries.map((country) => (
          <CountryCard key={country.name.official} country={country} />
        ))
      )}
    </div>
  );
}

export default App;
