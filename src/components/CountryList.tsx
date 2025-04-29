import { useState, useEffect } from 'react';
import getCountries from '../api/countries';
import { Country } from '../types/country';

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data);
    });
  },  []);

  console.log(countries);

  return (
    <ul>
      {countries.map((country: Country) => (
        <li key={country.name.common}>
          <span>{country.name.common}</span>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
