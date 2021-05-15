import React, { useState, useEffect, useContext } from 'react';
import { getCountries, getMapData } from '../api';
import { Cities, Coords, Geocoder, Geolocation, Locations } from '../types';

type address = {
  city: string;
  country?: string;
};

type Context = {
  loading: boolean;
  setup: boolean;
  address: address;
  locations: Locations[];
  cities: Cities[];
  removeLocation(cityName: string, countryName: string): void;
  addLocation(geolocation: Geolocation): void;
  searchTerm(term: address): void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  map: google.maps.Map | undefined;
  setMap: React.Dispatch<React.SetStateAction<google.maps.Map | undefined>>;
  maps: any;
  setMaps: React.Dispatch<any>;
  getAddress(location: Coords): Geocoder[] | void;
  setPolygons(items: Locations[]): void;
  setSetup: React.Dispatch<React.SetStateAction<boolean>>;
  setCities: React.Dispatch<React.SetStateAction<Cities[]>>;
};

export const LocationContext = React.createContext<Context | null>(null);

const LocationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [setup, setSetup] = useState<boolean>(true);
  const [address, setAddress] = useState<address>({ city: '', country: '' });
  const [locations, setLocations] = useState<Locations[]>([]);
  const [cities, setCities] = useState<Cities[]>([]);
  const [map, setMap] = useState<google.maps.Map>();
  const [maps, setMaps] = useState<any>();

  const removeLocation = (cityName: string, countryName: string) => {
    const removeItems = locations.filter(
      location =>
        location.geolocation.city === cityName &&
        location.geolocation.country === countryName
    );

    for (const r of removeItems) {
      r.polygonCoords.setMap(null);
    }

    const results = locations.filter(
      location =>
        location.geolocation.city !== cityName &&
        location.geolocation.country !== countryName
    );
    setLocations(results);
  };

  const addLocation = (geolocation: Geolocation) => {
    if (
      locations?.some(
        location =>
          location.geolocation.city === geolocation.city &&
          location.geolocation.country === geolocation.country
      )
    ) {
      removeLocation(geolocation.city, geolocation.country);
      return;
    }
    const results = [...locations, { geolocation, polygonCoords: null }];
    setLocations(results);
  };

  const setPolygons = (items: Locations[]) => {
    for (const location of items) {
      if (location.polygonCoords) {
        location.polygonCoords.setMap(null);
      }
      const coords: Coords[] = [];
      const polygon = [...location.geolocation.polygon];
      for (const p of polygon) {
        const sp1 = p.split(',');
        coords.push({ lat: Number(sp1.pop()), lng: Number(sp1.shift()) });
        for (const s of sp1) {
          const sp2 = s.split('_');
          coords.push({ lat: Number(sp2[0]), lng: Number(sp2[1]) });
        }
      }
      const polygonCoords = new maps.Polygon({
        paths: coords,
        strokeColor: '#7684ff',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#7684ff',
        fillOpacity: 0.35,
      });
      location.polygonCoords = polygonCoords;
      polygonCoords.setMap(map);
    }
  };

  const getAddress = (location: Coords) => {
    const geocoder = new maps.Geocoder();
    geocoder.geocode(
      { location },
      async (results: Geocoder[], status: string) => {
        if (status === 'OK') {
          const addr = results[1].formatted_address;
          const [_, city, country] = addr.split(' ');
          setAddress({ city, country });
          const items = cities.filter(a => a.city === city);
          if (items.length > 0) {
            const countries = await getCountries(items[0].locations, country);
            for (const c of countries) {
              await addLocation(c);
            }
          }
        } else {
          alert('정확한 위치를 선택해주세요');
        }
      }
    );
  };

  // const getCoords = (address: string) => {
  //   const geocoder = new maps.Geocoder();
  //   geocoder.geocode({ address }, (results: Geocoder[], status: string) => {
  //     if (status === 'OK') {
  //       setAddress(results[1].formatted_address);
  //     } else {
  //       alert('정확한 주소를 입력해주세요');
  //     }
  //   });
  // };

  const searchTerm = (term: address) => {
    setAddress(term);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
        map,
        setMap,
        maps,
        setMaps,
        getAddress,
        setPolygons,
        setup,
        setSetup,
        setCities,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;

export const useAddress = () => {
  const { address, searchTerm } = useContext(LocationContext) as Context;
  return { address, searchTerm };
};

export const useCities = () => {
  const { cities, setCities } = useContext(LocationContext) as Context;
  return { cities, setCities };
};

export const useLocations = () => {
  const { locations, removeLocation, addLocation } = useContext(
    LocationContext
  ) as Context;
  return { removeLocation, addLocation, locations };
};

export const useLoading = () => {
  const { loading, setLoading } = useContext(LocationContext) as Context;
  return { loading, setLoading };
};

export const useMap = () => {
  const { map, setMap } = useContext(LocationContext) as Context;
  return { map, setMap };
};

export const useMaps = () => {
  const { maps, setMaps } = useContext(LocationContext) as Context;
  return { maps, setMaps };
};

export const useGeocode = () => {
  const { getAddress } = useContext(LocationContext) as Context;
  return { getAddress };
};

export const usePolygon = () => {
  const { setPolygons } = useContext(LocationContext) as Context;
  return { setPolygons };
};

export const useSetup = () => {
  const { setup, setSetup } = useContext(LocationContext) as Context;
  return { setup, setSetup };
};
