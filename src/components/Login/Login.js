import Button from '@restart/ui/esm/Button';
import { Col, Form, Row } from 'react-bootstrap';
import { Link , useLocation, useHistory } from 'react-router-dom';
import initializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

initializeAuthentication();


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <><Row className="justify-content-md-center my-4 mx-0">
            <Col xs="10" md="4" className="border border-4 border-primary rounded-3">
                <h1 className="text-center text-primary m-3">Pleace Login</h1>
                <Form className="p-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <h6>Not registered? <Link to="/singup">Create Account.</Link>
                        </h6>
                    </Form.Group>
                    <div className="d-grid">
                    <Button className="btn btn-primary" type="submit">
                        Login
                    </Button>
                    </div>
                    <div className="mt-3 text-center">
                        or login with
                    </div>
                    
                </Form>
                <div className="d-grid mb-3">
                    <Button onClick={handleGoogleLogin} className="btn btn-outline-primary" type="submit">
                        Google
                    </Button>
                    </div>
            </Col>
        </Row></>
    );
};

export default Login;