import Button from '@restart/ui/esm/Button';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Singup = () => {
const {handleNameChange, handleEmailChange, handlePasswordChange, handleRegistration , error} = useAuth();


    return (
        <><Row className="justify-content-md-center my-4 mx-0">
            <Col xs="10" md="4" className="border border-4 border-primary rounded-3">
                <h1 className="text-center text-primary m-3">Create Account</h1>
                <Form className="p-3" onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Your Full Name</Form.Label>
                        <Form.Control type="text" onBlur={handleNameChange} placeholder="Your full name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleEmailChange} placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handlePasswordChange} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                    <div className="row mb-3 text-danger">{error}</div>
                        <h6>Already registered? <Link to="/login">Login Account.</Link>
                        </h6>
                    </Form.Group>
                    <div className="d-grid">
                    <Button className="btn btn-primary d-block" type="submit">
                        Sing Up
                    </Button>
                    </div>
                </Form>
            </Col>
        </Row></>
    );
};

export default Singup;