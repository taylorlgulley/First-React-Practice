import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import AnimalDetail from './animals/AnimalDetail'
import AnimalForm from './animals/AnimalForm'
import AnimalManager from "../modules/AnimalManager"
import LocationList from './LocationList'
import LocationManager from "../modules/LocationManager"
import EmployeeList from './employees/EmployeeList'
import EmployeeDetail from './employees/EmployeeDetail'
import EmployeeForm from './employees/EmployeeForm'
import EmployeeManager from '../modules/EmployeeManager'
import OwnersList from './owners/OwnersList'
import OwnerDetail from './owners/OwnerDetail'
import OwnerForm from './owners/OwnerForm'
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

    addAnimal = animal => AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))

    addEmployee = employee => EmployeeManager.post(employee)
        .then(() => EmployeeManager.getAll())
        .then(employees => this.setState({
            employees: employees
        }))

    addOwner = owner => OwnerManager.post(owner)
        .then(() => OwnerManager.getAll())
        .then(owners => this.setState({
            owners: owners
        }))

    editAnimal = (animal, id) => {
        return AnimalManager.edit(animal, id)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} addAnimal={this.addAnimal} employees={this.state.employees} />
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} editAnimal={this.editAnimal} deleteAnimal={this.deleteAnimal} animals={this.state.animals} employees={this.state.employees} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} addEmployee={this.addEmployee} />
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList {...props} ownerLeft={this.ownerLeft} owners={this.state.owners} />
                }} />
                <Route exact path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} addOwner={this.addOwner} />
                }} />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} ownerLeft={this.ownerLeft} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}