import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import CategoriesList from '../components/CategoriesList';

export default class AdminCategories extends Component {

    constructor(props) {

		super(props);

		this.state = {
            categories: [],
		};
	}

    componentDidMount() {

		axios.get('http://localhost:5000/api/category/')
			.then(res => {
                this.setState({
                    categories: res.data,
                });
			})
			.catch((error) => {
				console.log(error);
			})
	}

    render() {
        return (
                <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
                    <h3 className="mb-2"><Link style={{ textDecoration: 'none' }} to="/admin/">⏴</Link><i>Admin Dashboard - Categories </i></h3>

                    <CategoriesList cats={this.state.categories}/>
                    <Link className="mb-4" to="/admin/categories/new">+New Category</Link>
                </Container>
        );
    }
};
