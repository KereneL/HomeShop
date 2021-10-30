import React from 'react';
import OrderItem from './OrderItem';

const OrdersList = props => {
    if (!props.items || props.items.length === 0) {
        return (
            <div>
                <h5>No Orders Found 😢</h5>
            </div>
        );
    }

    return (
        <table className="mb-4" style={{width:"100%"}}>
            <thead>
                <tr> 
                    <th>ID</th>
                    <th>User</th>
                    <th>Sum</th>
                    <th>Date Placed</th>
                    <th>Shipping Date</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map(order => {
                        return <OrderItem
                            key={order._id}
                            id={order._id}
                            user={order.user}
                            total={order.total}
                            date_placed={order.date_placed}
                            date_shipped={order.date_shipped}
                            />
                    })}
            </tbody>
        </table>
    )
}

export default OrdersList;
