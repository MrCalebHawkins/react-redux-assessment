export function getRemindersById(reminder, userToken) {
    return fetch('http://localhost:3000/api/reminder/' + reminder.id, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reminder)
    })
}

export function updateRemindersById(reminder, userToken) {
    return fetch('http://localhost:3000/api/reminder/' +reminder.id, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reminder)
    })
}