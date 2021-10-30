import React from "react";
import { Link } from "react-router-dom";
// import css;

const OrderItem = props => {
    return (
        <li className="">
            {props.id} {props.date}, ₪{props.orderTotal}
        </li>
    )
};

export default OrderItem;
