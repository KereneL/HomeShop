import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import UsersList from '../components/UsersList';

export default class AdminUsers extends Component {

    constructor(props) {

		super(props);

		this.state = {
            users: [],
		};
	}

    componentDidMount() {

		axios.get('http://localhost:5000/api/user/')
			.then(res => {
                console.log(res.data)
                this.setState({
                    users: res.data,
                });
			})
			.catch((error) => {
				console.log(error);
			});
    }
    

    render(){
        return (
                <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
                    <h3 className="mb-2"><Link style={{ textDecoration: 'none' }} to="/admin/">⏴</Link><i>Admin Dashboard - Users</i></h3>
                    <UsersList users={this.state.users}/>
                </Container>
        );
    }
}
