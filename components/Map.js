import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const map = useRef(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    if(!map) return 
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-75.1652, 39.9526],
      zoom: 10.5
    });
    new mapboxgl.Marker().setLngLat([-75.1652, 39.9526]).addTo(map.current)

  }, []);

  return <div className="map-container" ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Map