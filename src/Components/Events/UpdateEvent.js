import {Button, Form, Modal, Row} from "react-bootstrap";
import {useState} from "react";
import Col from "react-bootstrap/Col";

function UpdateEvent({event, handleUpdateEventById}) {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState(event.title)
    const [description, setDescription] = useState(event.description)
    const [location, setLocation] = useState(event.location)
    const [attendeeList, setAttendee] = useState(event.attendee_list)
    const [start_timestamp, setStartTime] = useState(event.start_timestamp)
    const [meeting_link, setMeetingLink] = useState(event.meeting_link)
    const [end_timestamp, setEndTime] = useState(event.end_timestamp)
    const [edit, setEdit] = useState()

    const id = event.id

    const handleClose = () => {
        setEdit(false)
        setShow(false);}

    function handleShow() {
        setShow(true)
    }

    function handleEdit() {
        setEdit(true)
    }

    function onTitleUpdate(e) {
        setTitle(e.target.value)
    }

    function onDescriptionUpdate(e) {
        setDescription(e.target.value)
    }

    function onLocationUpdate(e) {
        setLocation(e.target.value)
    }

    function onAttendeeUpdate(e) {
        setAttendee(e.target.value)
    }

    function onStartTimeUpdate(e) {
        setStartTime(e.target.value)
    }

    function onMeetingUpdate(e) {
        setMeetingLink(e.target.value)
    }

    function onEndTimeUpdate(e) {
        setEndTime(e.target.value)
    }

    function upDateButton() {
        handleClose()
        setEdit(false)
        const attendee_list = attendeeList.split(",")


        handleUpdateEventById({
            id,
            title,
            description,
            location,
            attendee_list,
            meeting_link,
            start_timestamp,
            end_timestamp
        })

    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update: {event.title} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        edit ?
                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>Event Title</Form.Label>
                                    <Col><Form.Control type='text' defaultValue={event.title}
                                                       onChange={onTitleUpdate}/></Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>Description</Form.Label>
                                    <Col><Form.Control type='text' defaultValue={event.description}
                                                       onChange={onDescriptionUpdate}/></Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>Location</Form.Label>
                                    <Col><Form.Control type='text' defaultValue={event.location}
                                                       onChange={onLocationUpdate}/></Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>Attendees</Form.Label>
                                    <Col><Form.Control type='text' defaultValue={event.attendee_list}
                                                       onChange={onAttendeeUpdate}/></Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>Meeting Link</Form.Label>
                                    <Col><Form.Control type='text' defaultValue={event.meeting_link}
                                                       onChange={onMeetingUpdate}/></Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>Start Time</Form.Label>
                                    <Col><Form.Control type='datetime-local' onChange={onStartTimeUpdate}/></Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>End Time</Form.Label>
                                    <Col><Form.Control type='datetime-local' onChange={onEndTimeUpdate}/></Col>
                                </Form.Group>
                            </Form> :
                            <>
                                <p>Event Title: {event.title}</p>
                                <p>Description: {event.description}</p>
                                <p> Location: {event.location}</p>
                                <p>Attendees: {event.attendee_list}</p>
                                <p>Meeting Link: {event.meeting_link}</p>
                                <p> Start Time: {event.start_timestamp}</p>
                                <p>End Time: {event.end_timestamp}</p>
                            </>
                    }
                </Modal.Body>

                <Modal.Footer>
                    {
                        edit ?
                            <Button onClick={upDateButton}>Update</Button>:
                            <Button onClick={handleEdit}>Edit</Button>
                    }
                </Modal.Footer>

            </Modal>
            <Button onClick={handleShow}>
                View Event
            </Button>

        </>

    )


}

export default UpdateEvent