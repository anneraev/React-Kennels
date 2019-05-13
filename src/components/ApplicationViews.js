import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/animalList";
import LocationList from "./Location/LocationList";
import EmployeeList from "./Employee/EmployeeList";
import OwnersList from "./owner/OwnersList";
import animalAPI from "./animal/animalAPI";
import ownerAPI from "./owner/ownerAPI";
import employeeAPI from "./Employee/employeeAPI";
import locationAPI from "./Location/locationAPI";

export default class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
    }

    deleteAnimal = id => {
        return animalAPI.delete(id).then(() => animalAPI.getAll().then(animals => this.setState({
            animals: animals
        })))
    }

    deleteOwner = id => {
        return ownerAPI.delete(id).then(() => ownerAPI.getAll().then(owners => this.setState({
            owners: owners
        })))
    }

    deleteEmployee = id => {
        return employeeAPI.delete(id).then(() => employeeAPI.getAll().then(employees => this.setState({
            employees: employees
        })))
    }

    getAllData = () => {
        const newState = {}
        employeeAPI.getAll().then(employees => newState.employees = employees).then(() => animalAPI.getAll().then(animals => newState.animals = animals)).then(() => ownerAPI.getAll().then(owners => newState.owners = owners)).then(() => locationAPI.getAll().then(locations => newState.locations = locations)).then(() => {
            console.log(newState)
            this.setState(newState)
        })
    }


    componentDidMount() {
        this.getAllData()
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee}/>
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} deleteOwner={this.deleteOwner}/>
                }} />
            </React.Fragment>
        )
    }
}