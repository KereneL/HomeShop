import React from "react";
import Navbar from 'react-bootstrap/Navbar';

// import css
import Header from "./Header";
import NavLinks from "./NavLinks";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaHome } from 'react-icons/fa';


const Navigation = props => {
    return (
        <Header>
            <Navbar bg="dark" variant="dark" className="mb-4">
                <Container className="d-flex justify-content-center">
                    <Row className="d-flex justify-content-between">
                        <div className="d-flex" style={{ width: '20rem'}}>
                            <Navbar.Brand className="text-white" href="/">
                                <FaHome /> SHOPHOME
                            </Navbar.Brand>
                        </div>
                        <div className="d-flex" style={{ width: '20rem'}}>
                            <NavLinks />
                        </div>
                    </Row>
                </Container>
            </Navbar>
        </Header>
    )
}

export default Navigation;