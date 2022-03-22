// require('dotenv').config();
import React from 'react'
import {GoogleApiWrapper , Map} from 'google-maps-react';
const key = process.env.GOOGLE_API;
// import { Wrapper } from "@googlemaps/react-wrapper";


function MapContainer(props) {
  return (
    <Map 
    
    google={props.google} 
    zoom={10}
    initialCenter={{
        lat: 40.854885,
        lng: -88.081807
      }}>
    </Map>
    
  )
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API
  })(MapContainer)