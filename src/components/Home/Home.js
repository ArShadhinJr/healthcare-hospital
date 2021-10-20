import React, { useEffect, useState } from 'react';
import { Badge, Container, Row } from 'react-bootstrap';
import Carousels from '../Carousel/Carousels';
import DoctorList from '../DoctorList/DoctorList';
import Marguee from '../Marquee/Marguee';

function Home() {
    // useState from admition useEffect
    const [ doctors, setDoctors ] = useState( [] );
    //  load data frm frist page for home page 
    useEffect( () => {
        fetch( 'https://arshadhinjr.github.io/jsonapi/data.json' )
            .then( res => res.json() )
            .then( data => setDoctors( data ) )
    }, [] );
    return (
        <>
            {/* use marguee  */}
            <Marguee></Marguee>
            {/* use Carousels  */}
            <Carousels></Carousels>
            <Container>
                <h1 className='mt-5 fw-bolder'>
                    OUR DOCTORS <h5 className="d-inline-block align-text-top"><Badge bg="danger">SPECIALIST</Badge></h5>
                </h1>
            </Container>
            {/* use Services for home page  */}
            <Row xs={1} md={3} className="g-4 m-5">
                {
                    doctors.map( doctor => <DoctorList
                        key={doctors.id}
                        doctor={doctor}
                    ></DoctorList> )
                }
            </Row>
        </>
    )
}

export default Home
