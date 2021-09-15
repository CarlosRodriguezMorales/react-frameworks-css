import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'


export default function ReactBootstrap() {
    return(
        <>
            <h2>React Bootstrap</h2>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="index.html">Action</NavDropdown.Item>
                        <NavDropdown.Item href="index.html">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="index.html">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="index.html">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
    
}