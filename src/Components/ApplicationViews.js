import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './AnimalList'
import AnimalDetail from './AnimalDetail'
import AnimalManager from "../modules/AnimalManager"
import LocationList from './LocationList'
import LocationManager from "../modules/LocationManager"
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeManager from '../modules/EmployeeManager'
import OwnersList from './OwnersList'
import OwnerDetail from './OwnerDetail'
import OwnerManager from '../modules/OwnerManager'


export default class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    componentDidMount() {

        // Example code. Make this fit into how you have written yours.
        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
        OwnerManager.getAll().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })
    }

    deleteAnimal = id => AnimalManager.removeAndList(id)
    .then(animals => this.setState({
        animals: animals
    }))

    fireEmployee = id => EmployeeManager.removeAndList(id)
    .then(employees => this.setState({
        employees: employees
    }))

    ownerLeft = id => OwnerManager.removeAndList(id)
    .then(owners => this.setState({
        owners: owners
    }))

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList ownerLeft={this.ownerLeft} owners={this.state.owners} />
                }} />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} ownerLeft={this.ownerLeft} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}