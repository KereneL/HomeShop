import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import ProductsList from '../components/ProductsList';

export default class AdminProducts extends Component {


    constructor(props) {

		super(props);

		this.state = {
            products: [],
		};
	}

    componentDidMount() {

		axios.get('http://localhost:5000/api/product/')
			.then(res => {
                this.setState({
                    products: res.data,
                });
			})
			.catch((error) => {
				console.log(error);
			});
	}


    render() {
        return (
                <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
                    <h3 className="mb-2"><Link style={{ textDecoration: 'none' }} to="/admin/">⏴</Link><i>Admin Dashboard - Products</i></h3>
                    
                    <ProductsList prods={this.state.products}/>
                    <Link to="/admin/products/new">+ New Product</Link>
                </Container>
        );
    }
}

