import React, { useState, useEffect, useContext } from 'react';
import { getMapData } from '../api';
import { Geolocation } from '../types';

type Locations = {
  loading: boolean;
  address: string;
  locations: Geolocation[];
  cities: Geolocation[][];
  removeLocation(cityName: string, countryName: string): void;
  addLocation(geolocation: Geolocation): void;
  searchTerm(term: string): void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LocationContext = React.createContext<Locations | null>(null);

const LocationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [locations, setLocations] = useState<Geolocation[]>([]);
  const [cities, setCities] = useState<Geolocation[][]>([[]]);

  const searchTerm = (term: string) => {
    setAddress(term);
  };

  const removeLocation = (cityName: string, countryName: string) => {
    const results = locations.filter(
      location => location.city !== cityName && location.country !== countryName
    );
    setLocations(results);
  };

  const addLocation = (geolocation: Geolocation) => {
    if (
      locations?.some(
        location =>
          location.city === geolocation.city &&
          location.country === geolocation.country
      )
    ) {
      return;
    }
    const results = [...locations, geolocation];
    setLocations(results);
  };

  const setData = async () => {
    setCities(await getMapData());
  };

  useEffect(() => {
    setData();
    return () => {};
  }, []);

  return (
    <LocationContext.Provider
      value={{
        address,
        cities,
        locations,
        removeLocation,
        addLocation,
        searchTerm,
        loading,
        setLoading,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;

export const useAddress = () => {
  const { address, searchTerm } = useContext(LocationContext) as Locations;
  return { address, searchTerm };
};

export const useCities = () => {
  const { cities } = useContext(LocationContext) as Locations;
  return { cities };
};

export const useLocations = () => {
  const { locations, removeLocation, addLocation } = useContext(
    LocationContext
  ) as Locations;
  return { removeLocation, addLocation, locations };
};

export const useLoading = () => {
  const { loading, setLoading } = useContext(LocationContext) as Locations;
  return { loading, setLoading };
};
