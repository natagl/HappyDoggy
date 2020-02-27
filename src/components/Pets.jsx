import React, { Component } from "react";

const Pets = props => {
  // console.log(props)
  return <div className="all-pets">{props.showMePets()}</div>;
};
export default Pets;
