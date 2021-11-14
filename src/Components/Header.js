// import User from "./UserLogin.js"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Header = ({onCreate, onLogout}) => {
    return (
        <Row className="my-4">
            <Col><h2>Welcome, here are your events:</h2></Col>
            <Col xs='auto'>
                <Button onClick={onCreate}>Click Me</Button>
            </Col>
            <Col xs='auto'>
                <Button variant='outline-dark' onClick={onLogout}>Logout</Button>
            </Col>
        </Row>

            // <header className= 'header'>
        //     <h1 className= 'header'>Calendar</h1>
        //     <User text={createCancel ? 'Cancel' : 'Create'} color='blue' onClick={onCreate}/>
        //
        // </header>
    )

}
export default Header