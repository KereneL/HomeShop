import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";


const Dashboard = () => {

    return (
            <Container className="my-5 p-4 border border-dark" style={{maxWidth:"40em"}}>
                <h3 className="mb-4 fst-italic">Admin Dashboard</h3>

                <ul>
                    <li><Link to="/admin/products/">Edit products</Link></li>
                    <li><Link to="/admin/categories/">Edit categories</Link></li>
                    <li><Link to="/admin/users/">List of users</Link></li>
                    <li><Link to="/admin/orders/">List of orders</Link></li>
                </ul>
            </Container>
    );
};

export default Dashboard;