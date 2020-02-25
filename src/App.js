//import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import axios from "axios";
import axiosCall from "./axios-call.js";
import React, { Component } from "react";
import HomePage from "./components/HomePage";
import Pets from "./components/Pets";
import NewPet from "./components/NewPet";
import FindPet from "./components/FindPet";
import AnimalDetail from "./components/AnimalDetail";

class App extends Component {
  state = {
    pets: [],
    petTypes: []
  };
  // to get axios
  async componentDidMount() {
    // To get a token, make the following request, replacing {CLIENT-ID} and {CLIENT-SECRET} with your own information
    let authToken = await axiosCall(); //Getting Authenticated
    console.log(authToken);
    let data = await axios({
      url: "https://api.petfinder.com/v2/animals?type=dog&page=2",
      params: {},
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken.access_token}`
      }
    });
    console.log(data.data);
    let petTypes = await axios.get("https://api.petfinder.com/v2/types", {
      headers: {
        Authorization: `Bearer ${authToken.access_token}`
      }
    });

    console.log(petTypes);

    this.setState({ pets: data.data.animals, petTypes: petTypes.data.types });
  }
  showPets = () => {
    return this.state.pets.map(eachPet => {
      return (
        <div key={eachPet.id}>
          <Link to={`/pet-details/${eachPet.id}`}>
            <ul>Name: {eachPet.name}</ul>
          </Link>
          <h4>Type: {eachPet.type}</h4>

          <h5>Gender:{eachPet.gender}</h5>
          <h5>Organization ID: {eachPet.organization_id}</h5>
          <img style={{ width: "100px" }} src={eachPet.photos} alt="pet" />
        </div>
      );
    });
  };
  showPetType = () => {
    return this.state.petTypes.map(eachPetType => {
      return (
        <div key={eachPetType.id}>
          <Link to={`/pet-details/${eachPetType.id}`}>
            <ul>Name: {eachPetType.name}</ul>
          </Link>
          <h4>Type: {eachPetType.type}</h4>

          <h5>Gender:{eachPetType.gender}</h5>
          <h5>Organization ID: {eachPetType.organization_id}</h5>
          <img
            style={{ width: "100px" }}
            src={eachPetType.photos}
            alt="petType"
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={props => <HomePage {...props} />} />

          <Route
            exact
            path="/pets"
            render={props => <Pets {...props} showMePets={this.showPets}  showMePetType={this.showPetType}  />}
          />
          <Route exact path="/find" render={props => <FindPet {...props} />} />
          <Route
            exact
            path="/new-pet"
            render={props => <NewPet {...props} />}
          />
          <Route
            exact
            path="/pet-details/:petId"
            render={props => <AnimalDetail {...props} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
