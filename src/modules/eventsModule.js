import {requestEvents, createEvent, updateEvent, deleteEventById, updateEventById} from "../services/eventService";


//Reducer
const initialState = {
    getEventsPending: false,
    getEventsFailure: false,
    events: [],
    createEventPending: false,
    createEventFailure: false,
    updateEventPending: false,
    updateEventFailure: false,
    deleteEventPending: false,
    deleteEventFailure: false,

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_EVENTS_REQUEST":
            return {...state, getEventsPending: true}

        case "GET_EVENTS_SUCCESS":
            return {
                ...state,
                getEventsPending: false,
                events: action.events
            }

        case "GET_EVENTS_FAILURE":
            return {
                ...state,
                getEventsPending: false,
                getEventsFailure: true
            }

        case "CREATE_EVENTS_REQUEST":
            return {
                ...state,
                createEventPending: false,
                createEventFailure: false,
            }
        case "CREATE_EVENTS_FAILURE":
            return {
                ...state,
                createEventPending: false,
                createEventFailure: true
            }
        case "UPDATE_EVENTS_REQUEST":
            return {
                ...state,
                updateEventPending: false,
                updateEventFailure: false,
            }
        case "UPDATE_EVENTS_FAILURE":
            return {
                ...state,
                updateEventPending: false,
                updateEventFailure: true
            }
        case "DELETE_EVENT_REQUEST":
            return {
                ...state,
                deleteEventPending: true,
                deleteEventFailure: false
            }
        case "DELETE_EVENT_FAILURE":
            return {
                ...state,
                deleteEventPending: false,
                deleteEventFailure: true
            }
        case "DELETE_EVENT_SUCCESS":
            return {
                ...state,
                deleteEventPending: false,
                deleteEventFailure: false
            }

        default:
            return state
    }
}


export function initiateGetEvents() {
    return function getEvents(dispatch, getState) {
        dispatch({type: 'GET_EVENTS_REQUEST'})
        requestEvents(getState().user.token).then(response => {
            if (!response.ok) {
                dispatch({type: 'GET_EVENTS_FAILURE'})
                return
            }

            response.json().then(json => {
                if (!json.eventList) {
                    dispatch({type: 'GET_EVENTS_FAILURE'})
                    return
                }
                dispatch({type: 'GET_EVENTS_SUCCESS', events: json.eventList})
            })
        })
    }
}

export function initiateCreateEvents(event) {
    return function createDEvent(dispatch, getState) {
        console.log(typeof dispatch)
        dispatch({type: 'CREATE_EVENTS_REQUEST'})
        createEvent(event, getState().user.token).then(response => {
            console.log(response)
            if (!response.ok) {
                dispatch({type: 'CREATE_EVENTS_FAILURE'})
                return
            }

            response.json().then(json => {
                if (json.message !== 'created') {
                    dispatch({type: 'CREATE_EVENTS_FAILURE'})
                    return
                }
                dispatch({type: 'CREATE_EVENTS_SUCCESS', events: json.event})
            })
        })
    }
}

export function initiateUpdateByID(event) {
    return function (dispatch, getState) {
        dispatch({type: 'UPDATE_EVENT_REQUEST'})
        updateEventById(event, getState().user.token).then(response => {
            if (!response.ok) {
                dispatch({type: 'UPDATE_EVENT_FAILURE'})
                return
            }
            response.json().then(json => {
                if (json.message !== 'updated') {
                    dispatch({type: 'UPDATE_EVENT_FAILURE'})
                    return
                }
                dispatch({type: 'UPDATE_EVENT_SUCCESS'})
                dispatch(initiateGetEvents())
            })

        })
    }
}

// export function initiateUpdateEvents() {
//     return function (dispatch, getState) {
//         dispatch({type: 'UPDATE_EVENTS_REQUEST'})
//         updateEvent(getState().events).then(response => {
//             if (!response.ok) {
//                 dispatch({type: 'UPDATE_EVENTS_FAILURE'})
//                 return
//             }
//
//             response.json().then(json => {
//                 if (!json.event) {
//                     dispatch({type: 'UPDATE_EVENTS_FAILURE'})
//                     return
//                 }
//                 dispatch({type: 'UPDATE_EVENTS_SUCCESS', events: json.event})
//                 dispatch(initiateGetEvents())
//             })
//         })
//     }
// }

export function initiateDeleteById(event) {
    console.log(event)
    return function (dispatch, getState) {
        dispatch({type: 'DELETE_EVENT_REQUEST'})
        deleteEventById(event, getState().user.token).then(response => {
                if (!response.ok) {
                    dispatch({type: 'DELETE_EVENT_FAILURE'})
                    return
                }
                dispatch({type: 'DELETE_EVENT_SUCCESS'})
                dispatch(initiateGetEvents())
            }
        )

    }
}
