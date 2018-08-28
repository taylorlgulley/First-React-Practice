import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import dog from "./DogIcon.png"
import cat from "./CatIcon.png"
import "./Animal.css"

export default class AnimalList extends Component {
    render() {

        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                    </button>
                </div>
                <section className="animals">
                    {
                        this.props.animals.map(animal =>
                            <div key={animal.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={(animal.type === "cat") ? cat : dog} className="icon" />
                                        {animal.name}
                                        <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                        <a href="#"
                                            onClick={() => this.props.deleteAnimal(animal.id)}
                                            className="card-link">Discharge</a>
                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}