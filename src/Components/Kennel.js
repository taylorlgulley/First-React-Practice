import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "bootstrap/dist/css/bootstrap.min.css"
import "./Kennel.css"


class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Kennel

// import React, { Component } from 'react'
// import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
// import LocationList from "./LocationList"  // Import LocationList component
// import AnimalList from "./AnimalList"
// import OwnersList from "./OwnersList"
// import AnimalOwnersList from "./AnimalOwnersList"
// import App from "../App"

// export default class Kennel extends Component {
//     employeesFromAPI = [
//         { id: 1, name: "Jessica Younker" },
//         { id: 2, name: "Jordan Nelson" },
//         { id: 3, name: "Zoe LeBlanc" },
//         { id: 4, name: "Blaise Roberts" },
//         { id: 5, name: "Taylor Gulley" }

//     ]
//     locationsFromAPI = [
//         { id: 1, name: "North Nashville", address: "500 Circle Way" },
//         { id: 2, name: "South Nashville", address: "10101 Binary Court" }
//     ]
//     animalsFromAPI = [
//         { id: 1, name: "Monkey", type: "cat"},
//         { id: 2, name: "Lily", type: "cat"},
//         { id: 3, name: "Prissy", type: "cat"},
//         { id: 4, name: "Midnight", type: "cat"},
//         { id: 5, name: "Nash", type: "dog"}
//     ]
//     ownersFromAPI = [
//         { id: 1, name: "Taylor Gulley" },
//         { id: 2, name: "Shelby Scott" },
//         { id: 3, name: "Turner Landess" }
//     ]
//     animalOwnerFromAPI = [
//         { id: 1, ownerId: 1, petId: 1},
//         { id: 2, ownerId: 1, petId: 2},
//         { id: 3, ownerId: 1, petId: 3},
//         { id: 4, ownerId: 2, petId: 4},
//         { id: 5, ownerId: 3, petId: 5}
//     ]
//     state = {
//         owners: this.ownersFromAPI,
//         employees: this.employeesFromAPI,
//         locations: this.locationsFromAPI,
//         animals: this.animalsFromAPI,
//         animalOwners: this.animalOwnerFromAPI
//     }
//     allPetOwners = animalOwnerFromAPI.map(po => {
//         let animal = animalsFromAPI.find(animal => {
//             return po.petId === animal.id
//         })
//         let owner = ownersFromAP.find(owner => {
//             return po.ownerId === pwner.id
//         })
    
//         return {
//             pet: animal.name,
//             owner: owner.name
//         }
//     })
//     render() {
//         return (
//             <article className="kennel">
//                 <App />
//                 <LocationList locations={this.state.locations} />
//                 <EmployeeList employees={this.state.employees} />
//                 <AnimalList animals={this.state.animals} />
//                 <OwnersList owners={this.state.owners} />
//                 <AnimalOwnersList animalOwners={this.state.animalOwners} />
//             </article>
//         )
//     }
// }