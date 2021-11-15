//Module is where the Redux State happens
//This stores the states and updates the states and returns data and contains data about the state

//Actions
import {getRemindersById, updateRemindersById} from "../services/reminderServices";

// const GET_REMINDERBYID_REQUEST = 'GET_REMINDERBYID_REQUEST'
// const GET_REMINDERBYID_SUCCESS= 'GET_REMINDERBYID_SUCCESS'
// const GET_REMINDERBYID_FAILURE = 'GET_REMINDERBYID_FAILURE'

//Reducers

const initialState = {
    getReminderByIdPending: false,
    getRemindersByIdFailure: false,
    reminders: [],
    updateRemindersByIdPending: false,
    updateRemindersByIdFailure: false,
}

//Functions that Switch between actions

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_REMINDERBYID_REQUEST":
            return {...state, getReminderByIdPending: true}

        case 'GET_REMINDERBYID_SUCCESS':
            return {
                ...state,
                getReminderByIdPending: false,
                reminders: action.reminders
            }
        case 'GET_REMINDERBYID_FAILURE':
            return {
                ...state,
                getReminderByIdPending: false,
                getRemindersByIdFailure: true
            }
        case 'UPDATE_REMINDERBYID_REQUEST':
            return{...state, getReminderByIdPending: true
            }

        case 'UPDATE_REMINDERBYID_FAILURE':
            return  {
                ...state,
                getReminderByIdPending: false,
                getRemindersByIdFailure: true
            }
        case 'UPDATE_REMINDERBYID_SUCCESS':
            return{
                ...state,
                getReminderByIdPending: false,
                getRemindersByIdFailure: false
            }
        default:
            return state
    }
}

//Action Creators

//Side Effects

export function initiateGetReminderByID(reminder) {
    return function (dispatch, getState) {
        dispatch({type: 'GET_REMINDERBYID_REQUEST'})
        getRemindersById(reminder, getState().user.token).then(response => {
            if (!response.ok) {
                dispatch({type: 'GET_REMINDERBYID_FAILURE'})
                return
            }
            response.json().then(json => {
                if (!json.reminder) {
                    dispatch({type: "GET_REMINDERBYID_FAILURE"})
                    return
                }
                dispatch({type: "GET_REMINDERBYID_SUCCESS", reminders: json.reminder})
            })

        })
    }
}

export function initiateUpdateReminderByID(reminder) {
    return function (dispatch, getState) {
        dispatch ({type: 'UPDATE_REMINDERBYID_REQUEST'})
        updateRemindersById(reminder, getState().user.token).then(response => {
            if (!response.ok) {
                dispatch({type: 'UPDATE_REMINDERBYID_FAILURE'})
                return
            }
            response.json().then(json => {
                if (json.message !== 'updated') {
                    dispatch({type:'UPDATE_REMINDERBYID_FAILURE'})
                    return
                }
                dispatch({type: 'UPDATE_REMINDERBYID_SUCCESS'})
                dispatch(initiateGetReminderByID(reminder))
            })
        })
    }
}