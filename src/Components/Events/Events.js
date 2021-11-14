import EventCard from "./EventCard.js";
// import CardGroup from "react-bootstrap/CardGroup";
import Row from 'react-bootstrap/Row'
import Button from "react-bootstrap/Button";
import AddEvent from "./AddEvent";


function Events({events, handleGetEvents, handleCreateEvents, handleUpdateEventById, handleDeleteEventById}) {
    return (
        <>
            <Row>
                <Button onClick={handleGetEvents}>
                    Get Events
                </Button>
            </Row>
            <Row>
                <AddEvent
                    handleGetEvents={handleGetEvents}
                    handleCreateEvents={handleCreateEvents}/>
            </Row>
            <Row xs={1} sm={1} md={2} lg={2} xl={3} xxl={4} className='g-4'>
                {
                    events && events.length > 0 && events.map(event =>
                        <EventCard key={event.id} event={event} handleDeleteEventByID={handleDeleteEventById}
                        handleUpdateEventById={handleUpdateEventById}/>
                    )
                }

            </Row>


            {/*//         // .map iterates through all elements of the array*/}
            {/*//         // call the provided function event with the current element events*/}
            {/*//         // event will be called for every element within events*/}
            {/*//         events.map((event) => (*/}
            {/*//             <EventCard key={event.id} event={event} onDelete={onDelete}/>*/}
            {/*//             )*/}
            {/*//         )*/}
            {/*//     }*/}

        </>
    )

}

export default Events