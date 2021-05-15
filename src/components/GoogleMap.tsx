import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import GoogleMapReact from 'google-map-react';
import { Coords, Geocoder, GoogleMapProps } from '../types';

const KEY: string = 'AIzaSyBM0k_VvlAs52qP7mRiTFq86EX1lhDLJc4';

const GoogleMapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const GoogleMaps = () => {
  const [map, setMap] = useState<google.maps.Map>();
  const [maps, setMaps] = useState<any>();
  const onApiLoaded = ({ map, maps }: { map: google.maps.Map; maps: any }) => {
    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    // Construct the polygon.
    const bermudaTriangle = new maps.Polygon({
      paths: triangleCoords,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
    });
    bermudaTriangle.setMap(map);
    // console.log(maps);
    setMap(map);
    setMaps(maps);
  };

  const getAddress = (location: Coords) => {
    const geocoder = new maps.Geocoder();
    geocoder.geocode({ location }, (results: Geocoder[], status: string) => {
      if (status === 'OK') {
        console.log(results[1]);
      }
    });
  };

  const getCoords = (address: string) => {
    const geocoder = new maps.Geocoder();
    geocoder.geocode({ address }, (results: Geocoder[], status: string) => {
      if (status === 'OK') {
        console.log(results);
      }
    });
  };

  const onClick = (event: GoogleMapReact.ClickEventValue) => {
    const location = {
      lat: event.lat,
      lng: event.lng,
    };
    getAddress(location);
    getCoords('종로구');
  };

  return (
    <GoogleMapContainer>
      <Helmet>
        <title>Home | GoogleMap Polygon</title>
      </Helmet>
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={onApiLoaded}
        onClick={onClick}
        defaultZoom={14}
        draggable={true}
        defaultCenter={{ lat: 37.5804682520471, lng: 127.00864326221884 }}
        bootstrapURLKeys={{ key: KEY }}
      ></GoogleMapReact>
    </GoogleMapContainer>
  );
};

export default GoogleMaps;
