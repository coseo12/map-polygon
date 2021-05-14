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
  }
}

export type Geolocation = {
  city: string;
  country: string;
  code: string;
  polygon: string[];
};

export type Geolocations = {
  maps: Geolocation[];
};
