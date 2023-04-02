import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBLE_tAiDBNd4Ug55l1xYU3AH-48U2Ogy8' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      </GoogleMapReact>
    </div>
  );
};

export default Map;