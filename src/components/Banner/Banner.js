import React from 'react';
import bannerImage from '../../assets/images/banner.jpg';
import './Banner.css';

const Banner = () => (
  <div className="banner">
    <img src={bannerImage} alt="Banner" />
    <div className="banner-content">
      <h1>Welcome to</h1><br />
      <h1>Badminton Court Booking System</h1>
    </div>
  </div>
);

export default Banner;