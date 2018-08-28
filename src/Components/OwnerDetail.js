import React, { Component } from "react"

export default class OwnerDetail extends Component {
    render() {
        /*
            Using the route parameter, find the owner that the
            user clicked on by looking at the `this.props.owner`
            collection that was passed down from ApplicationViews
        */
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="owner">
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {owner.name}
                        </h4>
                        <h6 className="card-title">Owner</h6>
                        <a href="#"
                            onClick={() => this.props.ownerLeft(owner.id)
                                            .then(() => this.props.history.push("/owners"))}
                            className="card-link">Owner Left</a>
                    </div>
                </div>
            </section>
        )
    }
}