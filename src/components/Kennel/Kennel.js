import React, { Component } from "react"
import EmployeeList from "../Employee/EmployeeList"; //import EmployeeList
import LocationList from "../Location/LocationList"; //import LocationList.
import "./Kennel.css";
import AnimalList from "../animal/animalList";

//export kennel element with EmployeeList and LocationList as children. Kennel extends Component class.
export default class Kennel extends Component {
    /*
            Although you will eventually be pulling your objects
            from your json-server API, for this chapter, we're
            faking it and just creating those arrays in the component
            itself
        */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]
    //animals API.
    animalsFromAPI = [
        {id: 1, name: "Chloe", breed: "Springer Spaniel"},
        {id: 2, name: "Buster", breed: "Mutt"},
        {id: 3, name: "Spunky", breed: "Cartoon"}
    ]

    //state is an object containing objects from database.
    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    //calls render from Component, which is now part of the new Kennel class since Kennel aliases Component.
    //locations and employees are now pulled from API and called as an attribute of state. The content in the imported components will REACT to the changes in state.
    render() {
        console.log("state", this.state)
        console.log("employeeList", <EmployeeList />)
        console.log("locationList", <LocationList />)
        return (
            //returns an object contianing JSX.
            <article className="kennel">
                <h1>Student Kennels</h1>
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
            </article>
        );
    }
}