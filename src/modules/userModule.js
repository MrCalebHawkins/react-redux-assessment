import {requestLogin, registerUser} from "../services/userService";

//Actions

const LOGIN_REQUEST = 'LOGIN_REQUEST'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAILURE = 'LOGIN_FAILURE'

const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST'
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

const LOGOUT = 'LOGOUT'


//Reducer
const initialState = {
    loginPending: false,
    loginFailure: false,
    token: '',
    createUserPending: false,
    createUserFailure: false,

}

export default function reducer(state = initialState, action) {
    // This switch below is taking the place of this more verbose function
    // if (action == LOGIN_REQUEST) {
    //     return state;
    // } else if (action == LOGIN_SUCCESS) {
    //     return state;
    // } else if (action == LOGIN_FAILURE) {
    //     return state;
    // } else if (action == LOGOUT) {
    //     return state;
    // }

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                // login_pending: true, //this is saying if a login request is received login pending should be true. failed should be false and we need a token
                // login_failed: false,
                // token: ''
                ...state,
                loginPending: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                loginPending: false,
                token: action.token
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                loginPending: false,
                loginFailure: true
            }
        case CREATE_USER_REQUEST:
            return {
                // login_pending: true, //this is saying if a login request is received login pending should be true. failed should be false and we need a token
                // login_failed: false,
                // token: ''
                ...state,
                createUserPending: true
            }

        case CREATE_USER_SUCCESS:
            return {
                ...state,
                createUserPending: false,
                token: action.token
            }

        case CREATE_USER_FAILURE:
            return {
                ...state,
                createUserPending: false,
                createUserFailure: true
            }

        case LOGOUT:
            return {
                ...state,
                token: '' // when logout is clicked '' sets the token to empty
            }

        default:
            return state
    }
}


//Action Creators

function loginRequest() {
    return {type: LOGIN_REQUEST}
}

function loginSuccess(token) {
    return {type: LOGIN_SUCCESS, token: token}
}

function loginFailure() {
    return {type: LOGIN_FAILURE}
}

export function logout() {
    return {type: LOGOUT}
}

//Side Effects

export function initiateLogin(credentials) {
    console.log(credentials)
    return function login(dispatch) {
        dispatch(loginRequest())
        requestLogin(credentials).then(response => {
            if (!response.ok) {
                dispatch(loginFailure())
                return
            }

           response.json().then(data => {
               if (!data.token) {
                   dispatch(loginFailure())
                   return
               }

               dispatch(loginSuccess(data.token))

           })
        })
    }
    
}
export function initiateCreateUser(credentials) {
    console.log(credentials)
    return function createUser(dispatch) {
        dispatch({type: CREATE_USER_REQUEST})

        registerUser(credentials).then(response => {
            if (!response.ok) {
                dispatch({type: CREATE_USER_FAILURE})
                return
            }

            response.json().then(data => {
                console.log(data)
                if (!data.message) {
                    dispatch({type: CREATE_USER_FAILURE})
                    return
                }
            if (data.message !== 'created') {
                dispatch({type: CREATE_USER_FAILURE})
                return
            }

                dispatch({type: CREATE_USER_SUCCESS}, (data.token))

            })
        })
    }

}

export function initiateLogout() {
    return function logOut(dispatch) {
        dispatch (logout())
    }
}