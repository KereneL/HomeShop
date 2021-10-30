import React from "react";


const CheckoutItem = props => {

    //var total = this.price * this.amount;

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>₪{props.price}</td>
            <td>×{props.amount}</td>
            <td>(total)</td>
        </tr>
    )
};

export default CheckoutItem;
