import React from 'react'
import './Map.css'
import {
  GoogleMap,
  useLoadScript,
  Marker,
//   InfoWindow,
} from "@react-google-maps/api";
// import usePlacesAutocomplete, { 
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboBoxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import { formatRelative } from "date-fns";

import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "calc(100vh - 310px)",
};
const center = {
  lat: 50.450100,
  lng: 30.523399,
};
const options = {
  zoomControl: true,
}

function Map() {
const {isLoaded, loadError} = useLoadScript({
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries
});
const [markers, setMarkers] = React.useState([]);

const onMapClick = React.useCallback((e) => {
  setMarkers((current) => [
    ...current,
    {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date(),
    }
  ]);
}, []);

if (loadError) return "Error loading maps";
if (!isLoaded) return "Loading Maps";


return (
  <div id='map-container'>
    <GoogleMap 
    id='map'
    mapContainerStyle={mapContainerStyle} 
    zoom={8} 
    options={options}
    center={center}
    onClick={onMapClick}
    >
      {markers.map(marker => (
      <Marker 
      key={marker.time.toISOString()} 
      position={{ lat: marker.lat, lng: marker.lng}}
      />
      ))}
    </GoogleMap>
  </div>
    
    )
  }
  export default Map;