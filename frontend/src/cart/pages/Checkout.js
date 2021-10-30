import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import CheckoutList from '../components/CheckoutList';
import CheckoutDetails from '../components/CheckoutDetails';

const Checkout = () => {

    const PRODS = [{id: 'p1', name: 'product uno', price: 5, amount: 6, img_path:''},{id: 'p2', name: 'product dos', price: 10, amount: 1, img_path:''},{id: 'p3', name: 'product tres', price: 1, amount: 600, img_path:''}];

    return (
        <Container style={{maxWidth: '56rem'}}>
            <h3 className="mb-4 fst-italic">Review your order</h3>

            <CheckoutList items={PRODS}/>
            <CheckoutDetails />

            <div className="d-flex justify-content-end mb-3 ">
                <div>
                    <h5 className="my-3">Total: ₪(total)</h5>
                    <div>
                        <Link className="btn btn-secondary mx-1" role="button" to="/cart"> 
                            Change Something
                        </Link>
                        <Link className="btn btn-success mx-1" role="button" to="/checkout"> 
                            Pay and Continue
                        </Link>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default Checkout;