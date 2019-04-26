//location list will be a child component of Kennel.
import React, { Component } from "react";

export default class Location extends Component {
    render() {
        console.log("locations props", this.props);
        return (
            <section className = "location">
            {this.props.locations.map(location =>
                <div key ={location.id}>
                <span>{location.name}</span>
                <span>{location.address}</span>
                </div>
                )}
                </section>
        )
    }
}