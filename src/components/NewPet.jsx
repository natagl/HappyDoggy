import React, { Component } from 'react';
import axios from "axios"
import axiosCall from "../axios-call";

class NewPet extends Component {
    state = {}
    addNewPet = async event => {
        event.preventDefault();
        console.log(this.state)
        let authToken = await axiosCall();
        let singlePet = await axios.post(
            `https://api.petfinder.com/v2/animals/new`, this.state,
            {
                headers: {
                    Authorization: `Bearer ${authToken.access_token}`
                }
            }
        ).catch(err => console.log(err))
        console.log(singlePet)
    }
    handleOnTyping = e => {
        console.log("value is", e.target.value);
        this.setState({
            [e.target.name]: e.target.value //to make it dynamic
        });
    };
    render() {
        return (
            <div className="inputBox">
                <form onSubmit={this.addNewPet}>
                    Name
            <br />
                    <input type="text" name="name" onChange={this.handleOnTyping} />

                    <br />
                    Species
                    <br />
                    <input type="text" name="type" onChange={this.handleOnTyping} />
                    <br />
                    Type
            <br />
                    <input
                        type="text"
                        name="species"
                        onChange={this.handleOnTyping}
                    />
                    <br />
                    Age
            <br />
                    <input
                        type="number"
                        name="age"
                        onChange={this.handleOnTyping}
                    />
                    <br />
                    Color
            <br />
                    <input
                        type="text"
                        name="color"
                        onChange={this.handleOnTyping}
                    />
                    <br />
                    Description
            <br />
                    <input
                        type="text"
                        name="description"

                        onChange={this.handleOnTyping}
                    />
                    <br />
                    Contact Informaion
                    <br />
                    <input
                        type="text"
                        name="description"
                        onChange={this.handleOnTyping} />

                    <br />
                    <input type="submit" name="contactInformation" className="inputButton" />

                </form>
            </div>
        );
    }
}

export default NewPet;
