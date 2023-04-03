import GoogleMapReact from 'google-map-react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const Map = ({ center, zoom }) => {
  // const = {} = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  // })

  return (
    <div style={{ height: '500px', width: '80%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
      {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
};

export default Map;