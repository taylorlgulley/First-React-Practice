import React, { Component } from 'react'


export default class AnimalOwnersList  extends Component {
    render() {
        return (
            <section className="animalOwners">
                <h3>Pets and their Owners</h3>
                {
                    this.props.animalOwners.map(animalOwner =>
                        <div key={animalOwner.id}>
                            <h4>{animalOwner.ownerId}</h4>
                            <h4>{animalOwner.petId}</h4>
                        </div>
                    )
                }
            </section>
        );
    }
}