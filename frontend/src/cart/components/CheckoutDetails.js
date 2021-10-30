import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CheckoutDetails = props => {

    //var total = this.price * this.amount;

    return (
        <Container className="my-4">
            <Form md="2">
                <Row>
                <Form.Group className="mb-3" as={Col} md="12" controlId="formBasicAddress">
                    <Form.Label>Address: </Form.Label>
                    <Form.Control type="text" placeholder="Enter delivery address..." />
                </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" as={Col} md="6" controlId="formDeliveryDate">
                        <Form.Label>Delivery date: </Form.Label>
                        <Form.Control type="date"/>
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md="6" controlId="formBasicText">
                        <Form.Label>CC four digits: </Form.Label>
                        <Form.Control type="text" placeholder="0000" />
                    </Form.Group>
                </Row>
            </Form>
        </Container>
    )
};

export default CheckoutDetails;
