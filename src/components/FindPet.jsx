import React, { Component } from "react";
import axios from "axios";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";
class FindPet extends Component {
  state = {
    findPet: [],
    ready: false
  };

  async componentDidMount() {
    let data = await axios({
      url: "https://dog.ceo/api/breeds/image/random/20",
      params: {},
      method: "GET",
      headers: {}
    });
    console.log(data.data.message);
    this.setState({ findPet: data.data.message, ready: true });
  }


  showFindPet = () => {
    return this.state.findPet.map((eachFindPet, index) => {
      return (
        <div className="images" key={index} >
          <ul className="find-box">
            <img className="findImg" src={`/images/newImg/${index}.jpg`} alt="pet" />
            <div className="cardFind-body">
              <ul className="box-text"> <p>I'm looking for this cutie to be mine!
                If you have some information, please contact me.
            </p></ul>
            </div>
            <div className="socialDiv">
              <ul className="socialButtons">
                <FacebookShareButton url={eachFindPet}>
                  <FacebookIcon size={30} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={eachFindPet}>
                  <TwitterIcon size={30} round={true} />
                </TwitterShareButton>
              </ul>
            </div>
          </ul>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="findPetRender">
        {this.state.ready
          ?
          this.showFindPet()
          : "Loading"}
      </div>
    );
  }
}

export default FindPet;
