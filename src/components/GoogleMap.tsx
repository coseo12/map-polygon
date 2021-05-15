import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import GoogleMapReact from 'google-map-react';
import { Coords, Geocoder, GoogleMapProps } from '../types';
import {
  useGeocode,
  useLocations,
  useMap,
  useMaps,
  usePolygon,
} from '../contexts/LocationContext';

const KEY: string = 'AIzaSyBM0k_VvlAs52qP7mRiTFq86EX1lhDLJc4';

const GoogleMapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const GoogleMaps = () => {
  const { setMap } = useMap();
  const { setMaps } = useMaps();
  const { getAddress } = useGeocode();
  const { setPolygons } = usePolygon();
  const { locations } = useLocations();

  const onApiLoaded = ({ map, maps }: { map: google.maps.Map; maps: any }) => {
    setMap(map);
    setMaps(maps);
  };

  const onClick = (event: GoogleMapReact.ClickEventValue) => {
    const location = {
      lat: event.lat,
      lng: event.lng,
    };
    getAddress(location);
  };

  useEffect(() => {
    setPolygons(locations);
  }, [locations]);

  return (
    <GoogleMapContainer>
      <Helmet>
        <title>Home | GoogleMap Polygon</title>
      </Helmet>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={onApiLoaded}
        onClick={onClick}
        defaultZoom={13}
        draggable={true}
        defaultCenter={{ lat: 37.5804682520471, lng: 127.00864326221884 }}
        bootstrapURLKeys={{ key: KEY }}
      ></GoogleMapReact>
    </GoogleMapContainer>
  );
};

export default GoogleMaps;
