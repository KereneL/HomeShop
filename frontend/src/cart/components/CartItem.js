import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'


const CartItem = props => {

    //var total = this.price * this.amount;

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>₪{props.price}</td>
            <td>×<input style={{ width: "4rem", height: "1.5rem" }} type="number" step="1" min="1" value={props.amount} onChange={props.handleChange} /> <Link to="/cart">remove</Link></td>
            <td>{props.price * props.amount}</td>
        </tr>
    )
};

export default CartItem;
