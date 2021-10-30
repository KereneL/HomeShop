import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useHistory } from 'react-router';

const SignUp = () => {

    const history = useHistory()
    const [user, setUser] = useState({
        email: '',
        password: '',
        repeat_password: '',
        first_name: '',
        last_name: '',
    })


    function submitHandler(e) {
        e.preventDefault()
        if (user.repeat_password !== user.password) {
            console.log('passsword dont match ');
            return
        }
        delete user.repeat_password
        console.log({ user });
        axios.post('http://localhost:5000/api/user/signup', user)
            .then(res => {
                console.log(res);
                if (res.data && res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    history.push('/cart')
                }
            });
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? + target.value : target.value
        setUser({ ...user, [field]: value })
    }

    return (
        <Container className="my-5 p-4 border border-dark" style={{ maxWidth: "40em" }}>
            <h3 className="mb-4 fst-italic">Join Us</h3>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username (email): </Form.Label>
                    <Form.Control value={user.email} onChange={handleChange} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control value={user.password} onChange={handleChange} name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formRepeatPassword">
                    <Form.Label>Repeat: </Form.Label>
                    <Form.Control value={user.repeat_password} onChange={handleChange} name="repeat_password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicName">
                    <Row>
                        <Col>
                            <Form.Label>First Name: </Form.Label>
                            <Form.Control value={user.first_name} name="first_name" onChange={handleChange} placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Last Name: </Form.Label>
                            <Form.Control value={user.last_name} name="last_name" onChange={handleChange} placeholder="Last name" />
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