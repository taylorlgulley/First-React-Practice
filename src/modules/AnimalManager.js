const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/animals`).then(e => e.json())
        }
    },
    post: {
        value: function (newAnimal) {
            return fetch(`${remoteURL}/animals`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAnimal)
            }).then(e => e.json())
        }
    },
    edit: {
        value: function (editedAnimal, id) {
            return fetch(`${remoteURL}/animals/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editedAnimal)
            }).then(e => e.json())
        }
    },
    removeAndList: {
        value: function (id) {
            return fetch(`${remoteURL}/animals/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`${remoteURL}/animals/`))
            .then(e => e.json())
        }
    }
})