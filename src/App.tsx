import { useState, useEffect } from 'react';
import getCountries from './api/countries';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data);
    });
  },  []);

  console.log(countries);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Hello Vite!</h1>
    </div>
  )
}

export default App