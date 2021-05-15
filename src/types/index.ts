import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    accent: string;
    bgColor: string;
    fontColor: string;
    borderColor: string;
    borderRadius: string;
    thin: string;
    light: string;
    medium: string;
    bold: string;
    baseColor: string;
    shdow: string;
    h1: string;
    h2: string;
    h3: string;
  }
}

export type Cities = {
  city: string;
  locations: Geolocation[];
};

export type Geolocation = {
  city: string;
  country: string;
  code: string;
  polygon: string[];
};

export type Geolocations = {
  maps: Geolocation[];
};

export type Coords = {
  lat: number;
  lng: number;
};

export type GoogleMapProps = {
  locations?: Geolocation[];
  removeLocation(cityName: string, countryName: string): void;
  addLocation(geolocation: Geolocation): void;
  cities?: Geolocation[][];
};

type address_components = {
  long_name: string;
  short_name: string;
  types: string[];
};
export type Geocoder = {
  address_components: address_components[];
  formatted_address: string;
  geometry: any;
  place_id: string;
  types: string[];
};

export type Locations = {
  polygonCoords: any;
  geolocation: Geolocation;
};
