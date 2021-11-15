import {Card, Form, Modal, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {useState} from "react";
import Button from "react-bootstrap/Button";


const ReminderCard = ({reminders, handleGetRemindersById, handleUpdateRemindersByID}) => {

    const [title, setTitle] = useState(reminders.title)
    const [show, setShow] = useState(false)
    const [timestamp, setTimestamp] = useState(reminders.timestamp)
    const [event_id, setEventID] = useState(reminders.event_id)
    const [user_id, setUserID] = useState(reminders.user_id)

    const handleClose = () => {
        setShow(false)
    }

    function handleShow() {
        setShow(true)
    }

    function onTimeUpdate(e) {
        setTimestamp(e.target.value)
    }

    function onTitleUpdate(e) {
        setTitle(e.target.value)
    }

    function onEventIdUpdate(e) {
        setEventID(e.target.value)
    }

    function onUserIdUpdate(e) {
        setUserID(e.target.value)
    }

    function handleEdit() {
        handleClose()

        handleUpdateRemindersByID({event_id, timestamp, title, user_id})
    }


    return (
        <>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Subtitle>
                            My Reminder
                        </Card.Subtitle>
                        <Card.Text>
                            Event Id: {reminders.event_id}<br/>
                            Time: {reminders.timestamp}<br/>
                            Reminder: {reminders.title}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={handleShow}>Edit</Button>
                    </Card.Footer>
                </Card>
            </Col>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update: {reminders.title} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Reminder Title</Form.Label>
                        <Col><Form.Control type='text' defaultValue={reminders.title}
                                           onChange={onTitleUpdate}/></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Time</Form.Label>
                        <Col><Form.Control type='text' defaultValue={reminders.timestamp}
                                           onChange={onTimeUpdate}/></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Event Id</Form.Label>
                        <Col><Form.Control type='text' defaultValue={reminders.event_id}
                                           onChange={onEventIdUpdate}/></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>User Id</Form.Label>
                        <Col><Form.Control type='text' defaultValue={reminders.user_id}
                                           onChange={onUserIdUpdate}/></Col>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleEdit}>Submit Change</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ReminderCard