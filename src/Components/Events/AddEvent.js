import {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';


const AddEvent = ({handleCreateEvents, handleGetEvents}) => {
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [meeting_link, setMeetingLink] = useState('')
    const [start_timestamp, setStartTime] = useState('')
    const [end_timestamp, setEndTime] = useState('')
    const [attendee_listString, setAttendeeList] = useState('')
    const [location, setLocation] = useState('')

    function handleOpen() {
        setShow(true)
    }


    function onTitleChange(e) {
        setTitle(e.target.value)
    }

    function onDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function onLocationChange(e) {
        setLocation(e.target.value)
    }

    function onMeetingChange(e) {
        setMeetingLink(e.target.value)
    }

    function onStartChange(e) {
        setStartTime(e.target.value)
    }

    function onEndChange(e) {
        setEndTime(e.target.value)
    }

    function onAttendeeChange(e) {
        setAttendeeList(e.target.value)
    }
// event here is used to
    function submitEventInfo(event) {
        const attendee_list = attendee_listString.split(",")
        event.preventDefault()
        handleCreateEvents({title, description, meeting_link, attendee_list, location, start_timestamp, end_timestamp})
        handleGetEvents()
        setShow(!show)

    }

    return (
        <>
            <Modal show={show} onHide={() => setShow(!show)}>
                <Modal.Header closeButton>
                    <Modal.Title>New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitEventInfo}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Event Title</Form.Label>
                            <Col><Form.Control type='text' onChange={onTitleChange}/></Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Description</Form.Label>
                            <Col><Form.Control type='textarea' onChange={onDescriptionChange}/></Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Location</Form.Label>
                            <Col><Form.Control type='textarea' onChange={onLocationChange}/></Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Start Time</Form.Label>
                            <Col><Form.Control type='datetime-local' onChange={onStartChange}/></Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>End Time</Form.Label>
                            <Col><Form.Control type='datetime-local' onChange={onEndChange}/></Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Attendee List</Form.Label>
                            <Col><Form.Control type='text' onChange={onAttendeeChange}/></Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Meeting Link</Form.Label>
                            <Col><Form.Control type='text' onChange={onMeetingChange}/></Col>
                        </Form.Group>
                        <Button variant="primary" type = "submit">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
            <Button onClick={handleOpen}>
                Create New Event
            </Button>

        </>
    )
}
export default AddEvent