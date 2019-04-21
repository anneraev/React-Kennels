import React, { Component } from "react";

export default class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        <span>{animal.name}</span>
                        <span>{animal.breed}</span>
                    </div>
                    )
            }
            </section>
        )
    }
}