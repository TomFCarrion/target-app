import React, { useState, useEffect } from 'react';
import { Map, GeoJson, Overlay } from 'pigeon-maps';
import { maptiler } from 'pigeon-maps/providers';
import target from 'assets/target.png';

export interface CustomMapProps {
  latitude: number;
  longitude: number;
}

const CustomMap = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setlongitude] = useState(0);
  const maptilerProvider = maptiler('zX7dOjGvPcgXbBaGZrRl', 'streets');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    });
  }, []);

  console.log(`${latitude}  ${longitude}`);

  const geoJsonSample = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [longitude, latitude] },
        properties: { prop0: 'value0' }
      }
    ]
  };

  return (
    <Map
      provider={maptilerProvider}
      dprs={[1, 2]}
      center={[latitude, longitude]}
      defaultZoom={17}
    >
      <GeoJson
        data={geoJsonSample}
        svgAttributes={{
          fill: '#FFFFFF99',
          strokeWidth: '2',
          stroke: '#EFC639',
          r: '30'
        }}
      />
      <Overlay anchor={[latitude, longitude]} offset={[30, 60]}>
        <img src={target} alt="" height={64} width={64} />
      </Overlay>
    </Map>
  );
};

export default CustomMap;
