import { useState, useEffect } from 'react';
import getCountries from '../api/countries';
import { Country } from '../types/country';
import CountryCard from './CountryCard';

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
          <CountryCard country={country} onClick={() => {}} />
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
