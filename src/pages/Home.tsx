import React from 'react';
import styled from 'styled-components';
import { getCities, getCityNames, getCountries, getCountryNames } from '../api';
import GoogleMap from '../components/GoogleMap';
import Header from '../components/Header';

const HomeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  header {
    position: fixed;
    background-color: transparent;
  }
`;

const Home = () => {
  const cityNames = getCityNames();
  const cities = getCities(cityNames[0]);
  const countryNames = getCountryNames(cities);
  const countries = getCountries(cities, countryNames[0]);

  console.log(countries);
  return (
    <HomeContainer>
      <Header />
      <GoogleMap />
    </HomeContainer>
  );
};

export default Home;
