import {useReducer, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";


const User = ({handleLoginRequest, handleCreateUser}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [register, toggleRegister] = useReducer(state => !state, false);

    function handleSubmit(e) {
        e.preventDefault();
        handleLoginRequest({username, password})
    }

    function handleRegister(e) {
        e.preventDefault();
        handleCreateUser({username, password})
    }

    return (
        <>
            <Row className="justify-content-md-center mt-4">
                <Col xs={5}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Please {register ? 'Register' : 'Login'}</Card.Title>
                            <Form onSubmit={register ? handleRegister : handleSubmit}>
                                <Form.Group as={Row} className="mt-3">
                                    <Form.Label column sm={4}>Username</Form.Label>
                                    <Col><Form.Control type='text' onChange={e => setUserName(e.target.value)}/></Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mt-3">
                                    <Form.Label column sm={4}>Password</Form.Label>
                                    <Col>
                                        <Form.Control type='password'
                                                      onChange={e => setPassword(e.target.value)}/></Col>
                                </Form.Group>
                                <Button variant="primary" type="submit" className='mt-3'>Submit</Button>
                                <Col xs='auto'><Button variant="outline-danger" className='mt-3'
                                                       onClick={toggleRegister}>{register ? 'Cancel' : 'Register'}</Button></Col>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default User