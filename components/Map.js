import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = ({center}) => {
  const {isLoaded } =useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY });
  
  

  return isLoaded ? (
    <div>
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
    <Marker position={center} />
  </GoogleMap>
  </div>
  ) : (<div>Loading.... </div>)
}

export default Map

























// import GoogleMapReact from 'google-map-react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


// const Map = ({ center, zoom }) => {
//   const = {} = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
//   })
  

//   return (
//     <div mapContainerClassName="w-full h-full">
//       <GoogleMapReact      
//         bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
//         defaultCenter={center}
//         defaultZoom={zoom}
//       >
      
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default Map;