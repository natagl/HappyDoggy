import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HomePage = () => {
  return (
    <div className="homePage">
      <Carousel autoPlay={true} className="carousel">
        <div className="carousel-item1">
          <img src="images/1.jpg" className="pics" />
        </div>
        <div className="findDiv" >
          <img src="images/2.jpeg" className="pics" />
        </div>
        <div className="donateDiv">
          <img src="images/3.jpg" className="pics" />
        </div>
        <div className="organizationsDiv" className="carousel-item4">
          <img src="images/4.jpg" className="pics" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
