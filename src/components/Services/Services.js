import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Services = () => {
    // use State to set services 
    const [ services, setServices ] = useState( [] );
    //  Load Services data from services json file 
    useEffect( () => {
        fetch( './services.json' )
            .then( res => res.json() )
            .then( data => setServices( data ) )
    }, [] );
    return (
        <>
        {/* Services Section main slogan  */}
            <div className="fw-bolder text-center p-5 m-5 mb-0 pb-0">
                <h1 className="fs-1 text-primary">OUR SERVICES</h1>
                <p>HEALTHCARE HOSPITAL / SERVICES</p>
            </div>
            <Row xs={1} md={3} className="g-4 m-5  p-5">
                {/* map for show services  */}
                {
                    services.map( service => <Col>
                        <Card>
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title><h2 className="text-danger">{service.nameClass}</h2></Card.Title>
                                <Card.Text className="text-justify ">{service.details}</Card.Text>
                                <Card.Text>Cost: <b>{service.price} Taka</b></Card.Text>
                                <Card.Text>Total Seat: <b>{service.totalSeet} </b></Card.Text>
                                <Card.Text>Seat Available: <b>{service.seetAvailable}</b></Card.Text>
                                <p className="text-center"><Button variant="danger">Go For Admition</Button></p>
                            </Card.Body>
                        </Card>
                    </Col> )
                }

            </Row>
        </>
    );
};

export default Services;