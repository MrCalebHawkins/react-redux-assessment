export function requestEvents(userToken) {
    return fetch('http://localhost:3000/api/event/', {
        headers: {
            'Authorization': 'Bearer ' + userToken
        }
    })
}

export function createEvent(event, userToken) {
    return fetch('http://localhost:3000/api/event/', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
}

export function updateEventById(event, userToken) {
    return fetch('http://localhost:3000/api/event/' + event.id, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(event)
    })
}

export function deleteEventById(event, userToken) {
    console.log(event)
    const url = 'http://localhost:3000/api/event/' + event.id;
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-Type': 'application/json'
        },
    })
}
