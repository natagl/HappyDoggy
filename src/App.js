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
import Organizations from "./components/Organizations";
import { Icon } from "react-icons-kit";
import { androidMail } from "react-icons-kit/ionicons/androidMail";
import { ic_phone } from "react-icons-kit/md/ic_phone";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    pets: [],
    org: [],
    ready: false
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
    this.setState({
      pets: data.data.animals,
      org: data.data.animals,
      ready: true
    });
  }
  showPets = () => {
    return this.state.pets.map(eachPet => {
      console.log(eachPet.photos);
      if (eachPet.photos[0]) {
        return (
          <div className="allPets">
            <ul className="echPetUl" key={eachPet.id}>
              <img
                className="echPetImg"
                style={{ width: "200px" }}
                src={eachPet.photos[0].full}
                alt="pet"
              />
              <div className="card-body">
                <ul>Name: {eachPet.name}</ul>
                <ul>Id: {eachPet.id}</ul>
                <ul>Type: {eachPet.type}</ul>
                <ul>Breed: {eachPet.breeds.primary}</ul>
                <ul>Gender: {eachPet.gender}</ul>
                <ul>
                  <span className="spanP" style={{ background: "linen" }}>
                    Ask About Me
                  </span>
                </ul>
                <ul>
                  <Icon className="iconMail" size={25} icon={androidMail} />
                  {eachPet.contact.email}
                </ul>
                <ul>
                  <Icon className="iconPhone" size={25} icon={ic_phone} />
                  {eachPet.contact.phone}
                </ul>
              </div>
            </ul>
          </div>
        );
      }
    });
  };

  showOrganization = () => {
    console.log(this.state);
    return this.state.org.map((eachOrg, index) => {
      //console.log(eachOrg.organization_id)
      return (
        <div className="card-org" key={index}>
          <ul key={eachOrg.organization_id}>
            {/* <Link to={`/organizations/${eachOrg.organization_id}`}></Link> */}
            <ul>Organization Id: {eachOrg.organization_id}</ul>
            <ul> Email: {eachOrg.contact.email}</ul>
            <ul>Phone: {eachOrg.contact.phone}</ul>
            <ul>Address: {eachOrg.contact.address.address1}</ul>
            <ul>City: {eachOrg.contact.address.city}</ul>
            <ul>
              State: {eachOrg.contact.address.state}, Post Code:
              {eachOrg.contact.address.postcode}
            </ul>
          </ul>
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
            render={props => <Pets {...props} showMePets={this.showPets} />}
          />
          <Route
            exact
            path="/find"
            render={props => <FindPet showMeFindPet={this.showFindPet} />}
          />
          <Route exact path="/new" render={props => <NewPet {...props} />} />
          <Route
            exact
            path="/pet-details/:petId"
            render={props => <AnimalDetail {...props} />}
          ></Route>
          <Route
            exact
            path="/organizations"
            render={props => (
              <Organizations
                {...props}
                showMeOrganization={this.showOrganization}
                ready={this.state.ready}
              />
            )}
          ></Route>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
