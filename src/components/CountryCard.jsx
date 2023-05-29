import React from "react";

export const CountryCard = ({ country }) => {
  return (
    <article className="country__card__container">
      <img src={country.flags.svg} alt={`${country.name.common}_flag`} />
      <main className="country__main">
        <ul className="country__ul">
          <li>
            Country name: {country.name.common}, {country.cca2}
          </li>
          <li>Capital city: {country.capital}</li>
          <li>Population: {country.population}</li>
        </ul>
      </main>
    </article>
  );
};
