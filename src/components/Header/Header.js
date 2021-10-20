import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'; // header css 

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        // navbar start here 
        <Navbar bg="primary" variant="light" className="p-4" expand="md">
            <Container className="d-flex justify-content-between ">
                <Container>

                    {/* website title main  */}
                    <Navbar.Brand href="/home" className="header-title fs-2 text-white">HEALTHCARE HOSPITAL</Navbar.Brand>
                </Container>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="d-md-flex justify-content-md-end">
                        {/* Website main manu  */}
                        <Nav className="d-flex justify-content-end">
                            <Nav.Link>
                                <NavLink to="/home" className="btn" activeClassName="btn-light">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/about" className="btn" activeClassName="btn-light">About</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/services" className="btn" activeClassName="btn-light">Covid-19</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/doctor/" className="btn" activeClassName="btn-light">Doctors</NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                {user.email  && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                                {user.email ? <Button onClick={logOut} className="btn btn-light">Log Out</Button> : <NavLink to="/login" className="btn" activeClassName="btn-light">Login</NavLink>}
                            </Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    );
};

export default Header;