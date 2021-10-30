import React from "react";
// import css;

import OrderItem from "./OrderItem";

const PastOrders = props => {
    if (!props.items || props.items.length === 0) {
        return (
            <div>
                <h5 className="fst-italic">No Past Orders.</h5>
            </div>
        );
    }

    return (
        <ul>
            {props.items.map(order => {
                return <OrderItem
                    id={order.id}
                    date={order.date}
                    orderTotal={order.orderTotal}
                    />
            })}
        </ul>
    )
}

export default PastOrders;
