//location list will be a child component of Kennel.
import React, { Component } from "react";

export default class Location extends Component {
    render() {
        console.log("locations props", this.props.locations);
        return (
            this.props.locations.map(location =>
                <div key ={location.id}>
                <span>{location.name}</span>
                <span>{location.address}</span>
                </div>
                )
        )
    }
}