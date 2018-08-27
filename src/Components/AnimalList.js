import React, { Component } from 'react'
import dog from "./DogIcon.png"
import cat from "./CatIcon.png"
import "./Animal.css"

export default class AnimalList extends Component {
    render () {

        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={(animal.type === "cat") ? cat : dog} className="icon" />
                                {animal.name}
                                <a href="#"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}