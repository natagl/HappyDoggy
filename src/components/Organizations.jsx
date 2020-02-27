import React, { Component } from 'react';


const Organizations = props => {
    //console.log(props)
    return (
        <div>
            {props.ready ? (props.showMeOrganization()) : ("Loading...")}
        </div>
    );
}

export default Organizations;