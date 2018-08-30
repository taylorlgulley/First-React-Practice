import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.png"
import cat from "./CatIcon.png"


export default class AnimalDetail extends Component {

    state = {
        animal: {},
        edit: false
    }

    // Update state whenever an input field is edited
    handleFieldChange = (whichOne, evt) => {
        const editedAnimal = this.state.animal;
        const stateToChange = whichOne
        editedAnimal[stateToChange] = evt.target.value
        this.setState({ editedAnimal })
    }

    componentDidMount = () => {
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0)) || {}
        // animal.employeeId = this.props.employees.find(e => e.name === animal.employeeId);

        console.log("animal", animal)
        this.setState({ animal })
    }

    // changes state for edit to true
    editMode = () => {
        console.log("hi")
        this.setState({ edit: true })
    }

    constructEditedAnimal = evt => {
        evt.preventDefault()
        const animal = {
            name: this.state.animal.name,
            breed: this.state.animal.breed,
            type: this.state.animal.type,
            // employeeId: this.props.employees.find(e => e.name === this.state.employee).id
        }

        // Create the animal and redirect user to animal list
        this.props.editAnimal(animal, parseInt(this.props.match.params.animalId));
        this.setState({ edit: false });
    }

    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */

        return (
            <section className="animal">
                <div key={this.state.animal.id} className="card">
                    <div className="card-body">
                        {(this.state.edit) ?
                            <input type="text" required="true"
                                className="form-control"
                                onChange={(evt) => { this.handleFieldChange("name", evt) }}
                                id="name"
                                value={this.state.animal.name} />
                            :
                            <h4 className="card-title">
                                <img src={(this.state.animal.type === "cat") ? cat : dog} className="icon" />
                                {this.state.animal.name}
                            </h4>
                        }
                        {(this.state.edit) ?
                            <input type="text" required="true"
                                className="form-control"
                                onChange={(evt) => { this.handleFieldChange("type", evt) }}
                                id="type"
                                value={this.state.animal.type} />
                            :
                            <h6 className="card-title">{this.state.animal.type}</h6>
                        }
                        {(this.state.edit) ?
                            <input type="text" required="true"
                                className="form-control"
                                onChange={(evt) => { this.handleFieldChange("breed", evt) }}
                                id="breed"
                                value={this.state.animal.breed} />
                            :
                            <h6 className="card-title">{this.state.animal.breed}</h6>
                        }
                        {/* {(this.state.edit) ?
                            <input type="text" required="true"
                                className="form-control"
                                onChange={(evt) => { this.handleFieldChange("employeeId", evt) }}
                                id="employeeId"
                                value={this.state.animal.employeeId} />
                            :
                            <h6 className="card-title">Caretaker: {this.state.animal.employeeId}</h6>
                        } */}
                        {(this.state.edit) ?
                            <a href="#"
                                onClick={this.constructEditedAnimal}
                                className="card-link">Save Edited Animal Info</a>
                            :
                            <a href="#"
                                onClick={this.editMode}
                                className="card-link">Edit Animal Info</a>
                        }
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(this.state.animal.id)
                                .then(() => this.props.history.push("/animals"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}