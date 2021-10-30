import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import OrdersList from '../components/OrdersList';

export default class AdminOrders extends Component {

    constructor(props) {

		super(props);

		this.state = {
            orders: [],
		};
	}

    componentDidMount() {

		axios.get('http://localhost:5000/api/order/')
			.then(res => {
                console.log(res.data)
                this.setState({
                    orders: res.data,
                });
			})
			.catch((error) => {
				console.log(error);
			});
    }

    render() {
        return (
                <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
                    <h3 className="mb-2"><Link style={{ textDecoration: 'none' }} to="/admin/">⏴</Link><i>Admin Dashboard - Orders</i></h3>
                        <OrdersList orders={this.state.orders}/>
                </Container>
        )
    }
}

