import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Badge, ButtonGroup, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./DoctorDetails.css";

const DoctorDetails = () => {
    //useauth , use params , usestate 
    const { user } = useAuth();
    const { doctorId } = useParams();
    const [ doctor, setDoctor ] = useState( [] );

    // distructuring for doctor 
    const { img, nameClass, fee, totalSeet, position } = doctor;

    //use effect load indivitual data 
    useEffect( () => {
        fetch( `https://arshadhinjr.github.io/jsonapi/data${doctorId}.json` )
            .then( res => res.json() )
            .then( data => setDoctor( data ) )
    }, [] );

    return (

        <>
            <Container>

                <Col xm={12}>
                    <div className="fw-bolder text-center p-5 m-5">
                        <h1 className="fs-1 text-primary">OUR DOCTORS DETAIL</h1>
                        <p>HEALTHCARE HOSPITAL  / APPOINTMENT LETTER</p>
                    </div>
                </Col>

                {user.email ?
                    <Row className="mb-5">
                        <Col xm={12} md={6}>
                            <Image src={img} border="primary" rounded fluid />
                        </Col>
                        <Col xm={12} md={6} className="p-5 text-center">
                            <h1>
                                <Badge bg="primary" className="my-4 size ">Dr. {nameClass}</Badge>
                            </h1>
                            <h1 className="text-primary text-bolder mb-4">{position}</h1>
                            <h2 className="text-bolder mb-4">Fee: $ {fee}</h2>
                            <h2 className="text-bolder mb-4">Availave: {totalSeet}</h2>

                            <p className="fs-4 bg-gray border border-4 rounded">Dr. {nameClass} is a {position}. He is a spialist for {position}. Please Confirm your appointment for Good services. Allah bless you. Good wishes for you. <br /><Link to="/home" className=" text-decoration-none"><h4 className="my-3 text-info" >HEALTHCARE HOSPITAL</h4></Link></p>

                            <ButtonGroup size="lg" className="mb-2">
                                <Button className="btn btn-success">Appointment</Button>
                                <Button className="btn btn-danger">Cencel</Button>
                            </ButtonGroup>

                        </Col>
                    </Row> :

                    <div >
                        <h2 className="text-primary text-center">Please <Link to="/login">Login</Link> or <Link to="/singup">Sing Up</Link></h2>
                    </div>
                }
            </Container>
        </>
    );
};

export default DoctorDetails;