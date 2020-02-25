import React, { Component } from "react";
import axios from "axios";
import axiosCall from "../axios-call";

class AnimalDetail extends Component {
  state = {
    pet1: {},
    ready: false
  };
  async componentDidMount() {
    let authToken = await axiosCall();
    let singlePet = await axios.get(
      `https://api.petfinder.com/v2/animals/${this.props.match.params.petId}`,
      {
        headers: {
          Authorization: `Bearer ${authToken.access_token}`
        }
      }
    );

    console.log(singlePet);
    this.setState({
      pet1: singlePet.data.animal,
      ready: true
    }); ///to receive single pet info
  }

  render() {
    return (
      <div>
        {this.state.ready ? (
          <li>
            {/* {this.state.pet1.name}
            <br />
            {this.state.pet1.id}
            <br />
            {this.state.pet1.age}
            <br />
            {this.state.pet1.gender}
            <br />
            {this.state.pet1.size}
            <br /> */}
          </li>
        ) : (
          "Loading"
        )}
      </div>
    );
  }
}

export default AnimalDetail;
