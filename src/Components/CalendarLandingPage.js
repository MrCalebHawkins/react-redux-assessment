import {Row, Col, Tab, Nav,} from "react-bootstrap";
import Events from "./Events/Events";
import {initiateCreateEvents, initiateDeleteById, initiateGetEvents, initiateUpdateByID} from "../modules/eventsModule";
import {initiateLogout} from "../modules/userModule";
import Reminders from "./Reminders/Reminders";
import {initiateGetReminderByID} from "../modules/reminderModule";


function CalendarLandingPage ({dispatch, events, reminders}) {

    return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Reminders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tasks</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Events
                            handleLogoutRequest={() => dispatch(initiateLogout())}
                            events={events}
                            handleGetEvents={() => dispatch(initiateGetEvents())}
                            handleUpdateEventById={event => dispatch(initiateUpdateByID(event))}
                            handleDeleteEventById={event => dispatch(initiateDeleteById(event))}
                            handleCreateEvents={event => dispatch(initiateCreateEvents(event))}
                        />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Reminders
                           reminders={reminders}
                            handleGetRemindersById={reminder => dispatch(initiateGetReminderByID(reminder))}
                           handleUpdateRemindersById={reminder =>dispatch(initiateUpdateByID(reminder))}

                        />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Events
                            handleLogoutRequest={() => dispatch(initiateLogout())}
                            events={events}
                            handleGetEvents={() => dispatch(initiateGetEvents())}
                            handleUpdateEventById={event => dispatch(initiateUpdateByID(event))}
                            handleDeleteEventById={event => dispatch(initiateDeleteById(event))}
                            handleCreateEvents={event => dispatch(initiateCreateEvents(event))}
                        />
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>

    )

}

export default CalendarLandingPage