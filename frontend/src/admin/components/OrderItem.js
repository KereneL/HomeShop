import React from "react";


const OrderItem = props => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.user}</td>
            <td>{props.total}</td>
            <td>{props.date_placed}</td>
            <td>{props.date_shipped}</td>
        </tr>
    )
};

export default OrderItem;
