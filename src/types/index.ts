export type Geolocation = {
  city: string;
  country: string;
  code: string;
  polygon: string[];
};

export type Geolocations = {
  maps: Geolocation[];
};
