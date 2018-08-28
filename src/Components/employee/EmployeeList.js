import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class EmployeeList extends Component {
    render() {
        return (
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
        )
    }
}

export default EmployeeList