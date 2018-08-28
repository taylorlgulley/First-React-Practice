import React, { Component } from "react"
import "./Animal.css"

export default class AnimalForm extends Component {
    // Set initial state
    state = {
        animalName: "",
        type: "",
        breed: "",
        employee: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewAnimal = evt => {
        evt.preventDefault()
        if (this.state.employee === "") {
            window.alert("Please select a caretaker")
        } else {
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                type: this.state.type,
                employeeId: this.props.employees.find(e => e.name === this.state.employee).id
            }

            // Create the animal and redirect user to animal list
            this.props.addAnimal(animal).then(() => this.props.history.push("/animals"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="animalName"
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="breed" placeholder="Breed" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="type" placeholder="Type of Animal" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}