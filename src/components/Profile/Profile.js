import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import Navigation from '../Nav/Nav';
import './Profile.css';
import Footer from '../Footer/Footer';
import Map from '../Map/Map'

function Profile() {
let first_name = localStorage.getItem('first_name');
let last_name = localStorage.getItem('last_name');
  

  return (
    <div>
    <Navigation />
    <div id='profile'>
      <div id='profile-container'>
        <Card id='profile-card'>
          <Card.Img variant="top" rounded="true" id='profile-img' src="https://images.hindustantimes.com/img/2022/02/26/1600x900/Pictures-of-the-Week-Global-Photo-Gallery-1_1645878096103_1645878105534.jpg" />
          
            <Card.Title id='card-user-name'>{first_name + ' ' + last_name}</Card.Title>
          
            <Card.Text id='card-user-bio'>
              Volodymyr Zelenskyy was elected President of Ukraine on April 21, 2019
              On 20 May, 2019 sworn in as the 6th President of Ukraine
              January 25, 1978.
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
      <div id='profile-map-container'>
        <Map />
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Profile