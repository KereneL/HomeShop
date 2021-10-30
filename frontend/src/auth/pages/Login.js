import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import axios from 'axios';


const Login = () => {

    const history = useHistory()
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    function submitHandler(e) {
        e.preventDefault()
        axios.post('http://localhost:5000/api/user/login', user)
            .then(res => {
                console.log({ res });
                if (res.data && res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    history.push('/cart')
                }
            });
    }

    function handleChange({target}) {
        const field = target.name
        const value = target.type === 'number' ? + target.value : target.value
        setUser({ ...user, [field]: value })
    }

    return (
        <Container className="my-5 p-4 border border-dark" style={{ maxWidth: "40em" }}>
            <h3 className="mb-4 fst-italic">Log In</h3>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username (email): </Form.Label>
                    <Form.Control value={user.email} onChange={handleChange} name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control value={user.password} onChange={handleChange} name="password" type="password" placeholder="Password" />
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