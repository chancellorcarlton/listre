import React, { useRef, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import './Profile.css';
import Navigation from '../Nav/Nav';
import Footer from '../Footer/Footer';
//  import GoogleApiWrapper from '../Map/Map';
//  import axios from 'axios';
//  import { connect } from "react-redux";
//  import { loginUser } from '../../redux/reducer';
//  import mapboxgl from 'mapbox-gl';

//  mapboxgl.accessToken = https://api.mapbox.com/tokens/v2?access_token={pk.eyJ1IjoiY2hhbmNlcmljaGFyZGNhcmx0b24yMDE1IiwiYSI6ImNsMHdoZjB0aTAxbDczZG14dnN2eWxlM24ifQ.t2KLGzWU84l8ldi0LNoKAA};


function Profile() {

//  const mapContainer = useRef(null);
//  const map = useRef(null);
//  const [lng, setLng] = useState(-70.9);
//  const [lat, setLat] = useState(42.35);
//  const [zoom, setZoom] = useState(9);

//  useEffect(() => {
//    if (map.current) return; 
//    map.current = new mapboxgl.Map({
//    container: mapContainer.current,
//    style: 'mapboxstyles/mapbox/streets-v11',
//    center: [lng, lat],
//    zoom: zoom
//    });
//    });


//    useEffect(() => {
//      if (!map.current) return; /
//      map.current.on('move', () => {
//        setLng(map.current.getCenter().lng.toFixed(4));
//        setLat(map.current.getCenter().lat.toFixed(4));
//        setZoom(map.current.getZoom().toFixed(2));
//      });
//    });


  return (
    <div id='profile'>
      <Navigation />
      <div id='profile-container'>
        <Card id='profile-card'>
          <Card.Img variant="top" rounded="true" id='profile-img' src="https://images.hindustantimes.com/img/2022/02/26/1600x900/Pictures-of-the-Week-Global-Photo-Gallery-1_1645878096103_1645878105534.jpg" />
          
            <Card.Title id='card-user-name'>Volodymyr Oleksandrovych Zelenskyy</Card.Title>
          
            <Card.Text id='card-user-bio'>
              Some quick example text to build on the card title and make up the bulk of
              the card's content. Quick example text to build on the card title and make up the bulk.
            </Card.Text>
            <div id='social-links-profile'>
              <a href='facebook.com'>
                <img 
                  className='social-icon-profile'
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                  alt='Facebook Logo'
                />
              </a>
              <a href="twitter.com">
                <img
                  className="social-icon-profile"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                  alt="Twitter logo"
                  />
              </a>
              <a href="https://www.linkedin.com/">
                <img
                  className="social-icon-profile"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn-logo"
                  />
              </a>
            </div>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default Profile