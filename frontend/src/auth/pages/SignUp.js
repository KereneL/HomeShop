import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignUp = () => {

    return (
        <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
        <h3 className="mb-4 fst-italic">Join Us</h3>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username (email): </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formRepeatPassword">
                <Form.Label>Repeat: </Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formBasicName">
                <Row>
                    <Col>
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="d-flex justify-content-end">
                <Button variant="primary" size="lg" type="submit">
                    Sign Up
                </Button>
            </Form.Group>
        </Form>
    </Container>
    );
};

export default SignUp;