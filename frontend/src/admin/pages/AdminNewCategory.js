import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default class AdminNewCategory extends Component {

    constructor(props) {

		super(props);

		this.onChangeCatName = this.onChangeCatName.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			category_name: '',
		};
	}

	onChangeCatName(e) {
		this.setState({
			category_name: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const newCategory = {
			name: this.state.category_name
		};

		axios.post('http://localhost:5000/api/category/new/', newCategory)
			.then(res => window.location = '/admin/categories/');

		
	}

    render () {
        return (
                <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
                    <h3 className="mb-2"><Link style={{ textDecoration: 'none' }} to="/admin/categories">⏴</Link><i>Admin Dashboard - Categories - New Category</i></h3>

                    <Form onSubmit={this.onSubmit}>
                        
                        <Form.Group className="mb-3" controlId="formCatName">
                            <Form.Label>Category Name: </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Category name" 
                                value={this.state.category_name}
                                onChange={this.onChangeCatName}/>
                        </Form.Group>

						<Form.Group>
							<input type="submit" value="Add" className="btn btn-success" />
						</Form.Group>

                    </Form>
                </Container>
        );
    };
}

