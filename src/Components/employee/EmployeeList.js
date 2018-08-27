import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h3>Employee List</h3>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        <p>{employee.name}</p>
                        <button onClick={() => this.props.fireEmployee(employee.id)} className="button">Fire</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList