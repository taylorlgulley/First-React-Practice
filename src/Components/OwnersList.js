import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OwnersList  extends Component {
    render() {
        return (
            <section className="owners">
                <h3>Owner List</h3>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            <h5>Name: {owner.name}</h5>
                            <p>Phone Number: {owner.phone}</p>
                            <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                            <button onClick={() => this.props.ownerLeft(owner.id)} className="button">Owner Left</button>
                        </div>
                    )
                }
            </section>
        );
    }
}