import React from "react";


const CheckoutItem = props => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>₪{props.price}</td>
            <td>×{props.amount}</td>
            <td>{props.price * props.amount}</td>
        </tr>
    )
};

export default CheckoutItem;
