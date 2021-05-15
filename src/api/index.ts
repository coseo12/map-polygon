import { Geolocations, Geolocation } from '../types';
import getoLocationJson from '../data/country.json';

const getMaps = (): Geolocation[] => {
  const { maps } = getoLocationJson as Geolocations;
  return maps;
};

export const getMapData = (): Geolocation[][] => {
  const cityNames = getCityNames();
  const cities = cityNames.map(name => getCities(name));
  return cities;
};

export const getCityNames = (): string[] => {
  const maps = getMaps();
  const cities = maps.map(map => map.city);
  return [...new Set(cities)];
};

export const getCountryNames = (maps: Geolocation[]): string[] => {
  const country = maps.map(map => map.country);
  return [...new Set(country)];
};

export const getCities = (city: string): Geolocation[] => {
  const maps = getMaps();
  return maps.filter(map => map.city === city);
};

export const getCountries = (
  maps: Geolocation[],
  country: string
): Geolocation[] => {
  return maps.filter(map => map.country === country);
};
