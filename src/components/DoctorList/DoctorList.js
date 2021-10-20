import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';


const DoctorList = ( props ) => {
    // destructuring for doctor 
    const { nameClass, img, fee, position, id } = props.doctor;
    
    return (
        <>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="text-center">
                        <Card.Title className="text-info"><h2>{nameClass}</h2></Card.Title>
                        <Card.Text><b>{position}</b></Card.Text>
                        <Card.Text>Fee: <b>{fee}</b></Card.Text>
                        <p className="fs-5 bg-gray border border-4 rounded">Dr. {nameClass} is a {position}. He is a spialist for {position}. Please Confirm your appointment for Good services. Allah bless you. Good wishes for you. <br /></p>
                        <Link to={`/doctor/${id}`}><p className="text-center"><Button variant="primary">Book Now</Button></p></Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default DoctorList;