import CloseButton from 'react-bootstrap/CloseButton'
import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card"
import UpdateEvent from "./UpdateEvent";



function event_date(event) {
    const date = new Date(event.start_timestamp);
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()

}


const EventCard = ({event, handleDeleteEventByID, handleUpdateEventById}) => {
    return (

        <Col>
            <Card>
                <Card.Body>
                    <Card.Subtitle>
                        {event_date(event)}
                        <CloseButton onClick={() => {
                            handleDeleteEventByID(event)
                        }}/>

                    </Card.Subtitle>
                    <Card.Text>
                        Event Title: {event.title}<br/>
                        Description: {event.description}<br/>
                        Location: {event.location}<br/>
                        Attendees: {event.attendee_list}<br/>
                        Meeting Link: {event.meeting_link}<br/>
                        Start Time: {event.start_timestamp}<br/>
                        End Time: {event.end_timestamp}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <UpdateEvent event={event} handleUpdateEventById={handleUpdateEventById} />
                </Card.Footer>
            </Card>
        </Col>

    )

}
export default EventCard

