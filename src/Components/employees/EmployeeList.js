import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Add Employee
                    </button>
                </div>
                <section className="employees">
                    <h3>Employee List</h3>
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id}>
                                <p>{employee.name}</p>
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                <button onClick={() => this.props.fireEmployee(employee.id)} className="button">Fire</button>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList