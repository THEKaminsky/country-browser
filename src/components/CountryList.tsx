import { useState, useEffect } from 'react';
import getCountries from '../api/countries';

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data);
    });
  },  []);

  console.log(countries);

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>
          <span>{country.name.common}</span>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
