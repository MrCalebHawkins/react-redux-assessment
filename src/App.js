import {Container} from 'react-bootstrap';
import User from "./Components/User";
import {connect} from "react-redux";
import {initiateCreateUser, initiateLogin} from "./modules/userModule";
import CalendarLandingPage from "./Components/CalendarLandingPage";


//This is the top level of the app
function App({dispatch, events, reminders, token}) {

    console.log(reminders)
    return (
        <Container>
            {
                token ?
                    <CalendarLandingPage events={events} reminders={reminders} dispatch={dispatch}/> :
                    <User
                        handleLoginRequest={credentials => dispatch(initiateLogin(credentials))}
                        handleCreateUser={credentials => dispatch(initiateCreateUser(credentials))}
                    />
            }
        </Container>

    );
}

function mapStateToProps(state) {
    return {...state.user, ...state.events, ...state.reminders}
}

export default connect(mapStateToProps)(App);


