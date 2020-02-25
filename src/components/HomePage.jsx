import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { iosPaw } from "react-icons-kit/ionicons/iosPaw";
import { glass } from "react-icons-kit/iconic/glass";
import { profile } from "react-icons-kit/icomoon/profile";

const HomePage = () => {
  return (
    <div>
      <ul id="home">
        <div className="petDiv">
          <Link to="/pets">
            <Icon className="iconButton" size={70} icon={iosPaw} />
          </Link>
          <h5>Pets</h5>
          <br />
        </div>
        <br />
        {/* <div>
          <Link to="/new-pet">New Pet</Link>
          <br />
        </div> */}
        <br />
        <div className="findDiv">
          <Link to="/find">
            <Icon className="iconButton3" size={70} icon={glass} />
          </Link>
          <h5>Find Pet</h5>
          <br />
        </div>
        <div className="petdetailsDiv">
          <Link to="/pet-details">
            <Icon className="iconButton3" size={70} icon={profile} />
          </Link>
          <h5>Pet Details</h5>
          <br />
        </div>
      </ul>
    </div>
  );
};

export default HomePage;
