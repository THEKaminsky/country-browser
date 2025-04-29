import { useState, useEffect } from 'react';
import getCountries from '../api/countries';
import { Country } from '../types/country';
import CountryCard from './CountryCard';
import CountryDetailModal from './CountryDetailModal';

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data);
    });
  },  []);

  console.log(countries);

  return (
    <>
    <ul>
      {countries.map((country: Country) => (
        <li key={country.name.common}>
          <CountryCard country={country} onClick={() => setSelectedCountry(country)} />
        </li>
      ))}
    </ul>
    {selectedCountry && <CountryDetailModal country={selectedCountry} onClose={() => setSelectedCountry(null)} />}
    </>
  );
};

export default CountryList;
