import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import Navigation from '../Nav/Nav';
import Footer from '../Footer/Footer';

function About() {
  return (
    <div>
    <Navigation />
      <div id='about'>
          <header id='about-h'></header>
      </div>
    <Footer />
    </div>
  )
}

export default About