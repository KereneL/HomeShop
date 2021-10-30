import React from 'react';

import CartItem from './CartItem';


const CartList = props => {
    if (!props.items || props.items.length === 0) {
        return (
            <div>
                <h2>Cart is Empty.</h2>
            </div>
        );
    }



    return (
        <table style={{ width: "100%" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>

                {props.items.map(product => {
                    return <CartItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        amount={product.amount}
                        img_path={product.img_path}
                    />
                })}
            </tbody>
        </table>
    )
}

export default CartList;
