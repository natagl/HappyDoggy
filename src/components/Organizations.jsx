import React, { Component } from 'react';


const Organizations = props => {
    //console.log(props)
    return (
        <div className="card-org">
            {props.ready ? (props.showMeOrganization()) : ("Loading...")}
        </div>
    );
}

export default Organizations;