import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { iosPaw } from "react-icons-kit/ionicons/iosPaw";
import { glass } from "react-icons-kit/iconic/glass";
import { profile } from "react-icons-kit/icomoon/profile";
import { paperclip } from "react-icons-kit/iconic/paperclip";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { u1F429 } from 'react-icons-kit/noto_emoji_regular/u1F429'


const HomePage = () => {
  return (
    <div className="homePage">
      <Carousel autoPlay={true} className="carousel">
        <div className="carousel-item1">
          <img src="images/1.jpg" className="pics" />
          <div className="petDiv" >
            <Link to="/pets">
              <Icon className="iconButton" size={60} icon={u1F429} />
            </Link>
            <h5>Pets</h5>
          </div>
        </div>
        <div className="findDiv" >
          <img src="images/2.jpeg" className="pics" />
          <div className="petDiv">
            < Link to="/find">
              <Icon className="iconButton3" size={45} icon={glass} />
            </Link>
            <h5>Find Pet</h5>
          </div>
        </div>
        <div className="donateDiv">
          <img src="images/3.jpg" className="pics" />
          <Link to="/new">
            <Icon className="iconButton1" size={45} icon={paperclip} />
          </Link>
          <h5>Donate Pet</h5>
        </div>
        <div className="organizationsDiv" className="carousel-item4">
          <img src="images/4.jpg" className="pics" />
          <Link to="/organizations">
            <Icon className="iconButton5" size={45} icon={profile} />
          </Link>
          <h5>Oragizations</h5>
        </div>
      </Carousel>
    </div>
  );
};

export default HomePage;
