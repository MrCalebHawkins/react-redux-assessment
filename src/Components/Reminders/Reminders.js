import {Form, Toast, ToastContainer} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useEffect, useState} from "react";
import ReminderCard from "./ReminderCard";
import {useSelector} from "react-redux";


function Reminders({reminders, handleGetRemindersById, handleUpdateRemindersById, updateRemindersByIdFailure}) {

    const [user_id, setUserId] = useState('')
    const [id, setId] = useState('')
    const[showStupidUpdateError, setStupidUpdateError] = useState(false)
    const reminderState = useSelector((state) => {
        return state
    });

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
    useEffect(() => {
        if (reminderState.reminders.updateRemindersByIdFailure) {
            setStupidUpdateError(reminderState.reminders.updateRemindersByIdFailure)
        }
    }, [reminderState.reminders.updateRemindersByIdFailure])

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
            <ToastContainer className="p-3" position='bottom-end'>
                <Toast bg='danger' onClose={() => setStupidUpdateError(false)} show={showStupidUpdateError}
                       delay={3000} autohide>
                    <Toast.Body className={'text-white'}>Error Updating Reminder</Toast.Body>
                </Toast>
            </ToastContainer>
    </>)
}
export default Reminders