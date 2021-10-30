import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default class AdminEditCategory extends Component {

    constructor(props) {

		super(props);

		this.onChangeCatName = this.onChangeCatName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			category_id: '',
			category_name: '',
		};
	}

    componentDidMount() {
		axios.get('http://localhost:5000/api/category/' + this.props.match.params.id)
			.then(res => {
				this.setState({
					category_id: res.data._id,
					category_name: res.data.name,
				})

			})
			.catch(function (error) {
				console.log(error);
			})
	}

	onChangeCatName(e) {
		this.setState({
			category_name: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const category = {
			name: this.state.category_name
		};

		axios.post('http://localhost:5000/api/category/update/' + this.props.match.params.id, category)
			.then(window.location = '/admin/categories/');

	}

    render () {
        return (
                <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
                    <h3 className="mb-2"><Link style={{ textDecoration: 'none' }} to="/admin/categories">⏴</Link><i>Admin Dashboard - Categories - Edit Category</i></h3>

                    <Form onSubmit={this.onSubmit}>
                        
						<Form.Group className="mb-3" controlId="formCatId">
                            <Form.Label>Category ID: </Form.Label>
                            <Form.Control
                                readOnly
                                type="text"
                                value={this.state.category_id}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formCatName">
                            <Form.Label>Category Name: </Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="category name" 
                                value={this.state.category_name}
                                onChange={this.onChangeCatName}/>
                        </Form.Group>

						<Form.Group>
							<input type="submit" value="Save" className="btn btn-success" />
						</Form.Group>

                    </Form>
                </Container>
        );
    };
}

