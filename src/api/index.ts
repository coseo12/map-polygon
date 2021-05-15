import { Geolocations, Geolocation, Cities } from '../types';
import getoLocationJson from '../data/country.json';

const getMaps = async (): Promise<Geolocation[]> => {
  const { maps } = (await getoLocationJson) as Geolocations;
  return maps;
};

export const getMapData = async (): Promise<Cities[]> => {
  const cityNames = await getCityNames();
  const maps = await getMaps();
  const fn = (city: string) => maps.filter(map => map.city === city);
  const cities = await cityNames.map(name => ({
    city: name,
    locations: fn(name),
  }));
  return cities;
};

export const getCityNames = async (): Promise<string[]> => {
  const maps = await getMaps();
  const cities = maps.map(map => map.city);
  return [...new Set(cities)];
};

export const getCountryNames = (maps: Geolocation[]): string[] => {
  const country = maps.map(map => map.country);
  return [...new Set(country)];
};

export const getCountries = (
  maps: Geolocation[],
  country: string
): Geolocation[] => {
  return maps.filter(map => map.country.split(' ')[0] === country);
};
