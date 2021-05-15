import React from 'react';

const Polygon = () => {
  const triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];
  const coords = { lat: -21.805149, lng: -49.0921657 };

  return (
    <Map
      google={this.props.google}
      style={{ width: '100%', height: '100%', position: 'relative' }}
      className={'map'}
      zoom={14}
    >
      <Polyline
        path={triangleCoords}
        strokeColor="#0000FF"
        strokeOpacity={0.8}
        strokeWeight={2}
      />
    </Map>
  );
};

export default Polygon;
