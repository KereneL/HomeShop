import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

export default class AdminNewProduct extends Component {

    constructor(props) {

		super(props);

		this.onChangeProductName = this.onChangeProductName.bind(this);
		this.onChangeProductPrice = this.onChangeProductPrice.bind(this);
		this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
        this.onChangeProductImgPath = this.onChangeProductImgPath.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			product_name: '',
			product_price: '',
			product_category: '',
            product_img_path: '',

            categories: [],
		};
	}

    componentDidMount() {

		axios.get('http://localhost:5000/api/category/')
			.then(res => {
				if (res.data.length > 0) {
					this.setState({
						categories: res.data,
					});
				}
			})
			.catch((error) => {
				console.log(error);
			})
	}

	onChangeProductName(e) {
		this.setState({
			product_name: e.target.value
		});
	}

	onChangeProductPrice(e) {
		this.setState({
			product_price: e.target.value
		});
	}

	onChangeProductCategory(e) {
		this.setState({
			product_category: e.target.value
		});
	}

    onChangeProductImgPath(e) {
		this.setState({
			product_img_path: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const newProduct = {

			name: this.state.product_name,
			price: this.state.product_price,
			category_id: this.state.product_category,
			img_path: this.state.product_img_path,
            
		};

		console.log(newProduct)
		axios.post('http://localhost:5000/api/product/new', newProduct)
			.then(res => window.location = '/admin/products/');
	}

    render () {
        return (
                <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
                    <h3 className="mb-2"><Link style={{ textDecoration: 'none' }} to="/admin/products/">⏴</Link><i>Admin Dashboard - Products - New Product</i></h3>

                    <Form onSubmit={this.onSubmit}>
                        
                        <Form.Group className="mb-3" controlId="formProductName">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Product name" 
                                value={this.state.product_name}
                                onChange={this.onChangeProductName}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formProductPrice">
                            <Form.Label>Price (₪): </Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={this.state.product_price}
                                onChange={this.onChangeProductPrice}/>
                                
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formProductCategory">
                            <Form.Label>Category: </Form.Label>
                            <Form.Select
                                required
                                value={this.state.product_category}
                                onChange={this.onChangeProductCategory}>
                                {
                                    this.state.categories.map(function (cat) {
                                        return <option
                                            key={cat._id}
                                            value={cat._id}>{cat.name}
                                        </option>;
                                    })
							    }

                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formProductImg">
                            <Form.Label>Upload IMG: </Form.Label>
                            <Form.Control
								required
                                type="text"
								value={this.state.product_img_path}
                                onChange={this.onChangeProductImgPath}/>
                        </Form.Group>

						<Form.Group>
							<input type="submit" value="Add" className="btn btn-success" />
						</Form.Group>
                    </Form>
                </Container>
        );
    };
}

