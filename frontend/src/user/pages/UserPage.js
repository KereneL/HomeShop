import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import UserDetails from '../components/UserDetails'
import PastOrders from '../components/PastOrders';

export default class UserPage extends Component {

    constructor(props) {
    
            super(props);
    
            this.state = {
                user: [],
                orders: [],
            };
        }
    componentDidMount() {

            axios.get('http://localhost:5000/api/user/')
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        user: res.data,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    render() {
        return (
            <div>
                <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
                    <UserDetails user={this.state.user}/>
                    
                    <div>
                        <h5> Past Orders:</h5>
                        <PastOrders pastOrders={this.state.orders}/>
                    </div>
                </Container>
            </div>
        )
    }
}