import React from 'react';
import { getCities, getCityNames, getCountries, getCountryNames } from '../api';

function App() {
  const cityNames = getCityNames();
  const cities = getCities(cityNames[0]);
  const countryNames = getCountryNames(cities);
  const countries = getCountries(cities, countryNames[0]);

  console.log(countries);
  return <div>Home</div>;
}

export default App;
