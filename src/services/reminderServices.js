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

export function updateRemindersById(reminders, userToken) {
    console.log(reminders.id)
    return fetch('http://localhost:3000/api/reminder/' + reminders.id, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer ' + userToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reminders)
    })
}