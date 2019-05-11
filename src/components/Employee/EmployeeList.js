//React must be in scope when using JSX.
import React, { Component } from "react";

//employee list class. Will be imported as a child of Kennel.
//export default
export default class EmployeeList extends Component {
    //render method requires a return statement.
    render() {
        console.log("employees props", this.props.employees);
        return (
                <section className="employees">
                    {
                        //values of employees objects passed down from state as props. Use .map to create new array of objects with employee names. For each employee in employees from props.
                        this.props.employees.map(employee =>
                            <React.Fragment>
                            <div key={employee.id}>
                                {employee.name}
                            </div>
                            <button
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</button>
                                </React.Fragment>
                )
                    }
                </section>
        )
    }
}