import {Container} from 'react-bootstrap';
import User from "./Components/User";
import Events from "./Components/Events.js"
import {connect} from "react-redux";
import {initiateCreateUser, initiateLogin, logout} from "./modules/userModule";
import {
    initiateGetEvents,
    initiateCreateEvents,
    initiateUpdateByID,
    initiateDeleteById
} from "./modules/eventsModule";


//This is the top level of the app
function App({dispatch, events, token}) {
    //setEvent is what mutates the data
    // const [events, setEvents] = useState([])


    // useEffect(() => {if (token) {handleRequestEvents()}}, [token, handleRequestEvents])

    function handleLoginRequest(username, password) {
        dispatch(initiateLogin({username, password}))

    }

    function handleLogoutRequest() {
        dispatch(logout())
    }

    function handleGetEvents() {
        dispatch(initiateGetEvents())
    }

    function handleCreateUser(credentials) {
        dispatch(initiateCreateUser(credentials))
    }

    function handleDeleteEventByID(event) {
        dispatch(initiateDeleteById(event))
    }

    function handleUpdateEventById(event) {
        dispatch(initiateUpdateByID(event))
    }


    return (
        <Container>
            {
                token ?
                    <Events
                        handleLogoutRequest={handleLogoutRequest}
                        events={events}
                        handleGetEvents={handleGetEvents}
                        handleUpdateEventById={handleUpdateEventById}
                        handleDeleteEventById={handleDeleteEventByID}
                        handleCreateEvents={event => dispatch(initiateCreateEvents(event))}
                    /> :
                    <User
                        handleLoginRequest={handleLoginRequest}
                        handleCreateUser={handleCreateUser}
                    />
            }
        </Container>

    );
}

function mapStateToProps(state) {
    return {...state.user, ...state.events}
}

export default connect(mapStateToProps)(App);

//
// const addEvent = (event) => {
//     const eventString = JSON.stringify(event);
//     newEvent(eventString, token).then(() => {
//         getEvents(token).then(items => {
//             console.log(items?.event_list);
//             setEvents(items?.event_list);
//         });
//     });
// }
//
// const handleDeleteEvent = (event) => {
//     deleteEvent(event, token).then(() => {
//         getEvents(token).then(items => {
//             console.log(items?.event_list);
//             setEvents(items?.event_list);
//         });
//     });
// }
//

// This is just a boolean model
// const [showCreateEvent, setShowCreateEvent] = useState(false)
// const [show, setShow] = useState(false);
// const {token, setToken} = useToken();

// const handleShow = () => setShow(true);
// const handleClose = () => setShow(false);
// const deleteEvent = (id) => {
//     // .filter iterates through the array and looks for what we provide here it's id
//     // setEvents modifies events and tells it to rerender
//     setEvents(events.filter((event) => event.id !== id))
// }
// const addEvent = (event) => {
//     // This is a mock id and will change with the addition of backend
//     const id = Math.floor(Math.random() * 9999999) + 1
//     const newEvent = {id, ...event} //the three dot gives objects next to id not objects within it
//     setEvents([...events, newEvent]) // the newEvent gives the elements with a newElement at the end
// }

//sets the token to null allows logout
//     const logout = () => {
//         setToken(null);
//     }
//
//     // This checks if the token is false, if it is it will return the login window with please login
//     if (!token) {
//         return <Container fluid="sm"><User setToken={setToken}/></Container>
//     }
//
//     // Lines below take in the above 3 and and a new one to the end
//     // Three dot operator gets the elements not the array
//     // const newEvents = {'id': '4', 'text': 'new'}
//     // setEvents([...events, newEvents]);
//
//     return (
//         <Container fluid='sm'>
//             <Header onCreate={handleShow} onLogout={logout}/>
//             <AddEvent onSubmit={addEvent} show={show} handleClose={handleClose}/>
//             <Events events={events} onDelete={handleDeleteEvent}/>
//         </Container>
//
//
//     );
// }
//
// export default App;
