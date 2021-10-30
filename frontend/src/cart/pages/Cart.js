import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import CartList from '../components/CartList';

//CSS

const Cart = () => {

    const PRODS = [{id: 'p1', name: 'product uno', price: 5, amount: 6, img_path:''},{id: 'p2', name: 'product dos', price: 10, amount: 1, img_path:''},{id: 'p3', name: 'product tres', price: 1, amount: 600, img_path:''}];

    return (
        <Container style={{maxWidth: '56rem'}}>
            <h3 className="mb-4 fst-italic">Your Cart</h3>

            <CartList items={PRODS} />
            
            <div className="d-flex justify-content-end mb-3">
                <div>
                    <h5 className="my-3">Total: ₪(total)</h5>
                    <Link className="btn btn-success" role="button" to="/checkout"> 
                        Checkout
                    </Link>
                </div>
            </div>

        </Container>
    );
};

export default Cart;