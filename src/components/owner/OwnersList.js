import React, { Component } from "react";

export default class OwnersList extends Component {
    render() {
        return(
            <section className="owners">
            {this.props.owners.map(owner =>
            <React.Fragment>
                <div key={owner.id}>{owner.name}</div>
                <button
                onClick={() => this.props.deleteOwner(owner.id)}
                className="card-link">Delete</button>
                </React.Fragment>
            )}
            </section>
        )
    }
}