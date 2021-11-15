import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useState} from "react";
import ReminderCard from "./ReminderCard";


function Reminders({reminders, handleGetRemindersById, handleUpdateRemindersById}) {

    const [user_id, setUserId] = useState('')
    const [id, setId] = useState('')

    function onReminderChange(e) {
        setUserId(e.target.value)
    }

    function requestReminder(event) {
        event.preventDefault()
        handleGetRemindersById({id, user_id})

    }

    function onIdChange(e) {
        setId(e.target.value)
    }

    return (
        <>
        <Form onSubmit={requestReminder}>
            <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" onChange={onIdChange} placeholder="Enter Id:" />
                <Form.Text className="text-muted">
                    This is searching for the Uuid.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>User Id</Form.Label>
                <Form.Control type="text" onChange={onReminderChange} placeholder="Enter User Id:" />
                <Form.Text className="text-muted">
                    This is searching for the reminder Uuid.
                </Form.Text>
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <ReminderCard reminders={reminders} handleGetRemindersById={handleGetRemindersById} handleUpdateRemindersByID={handleUpdateRemindersById}/>
    </>)
}
export default Reminders