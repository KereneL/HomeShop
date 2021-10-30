import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'



const Login = () => {

    return (
        <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
            <h3 className="mb-4 fst-italic">Log In</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username (email): </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="d-flex justify-content-end">
                    <Button variant="primary" size="lg" type="submit">
                        Log In
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Login;