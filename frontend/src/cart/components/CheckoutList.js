import React from 'react';
import CheckoutItem from './CheckoutItem';


const CheckoutList = props => {
    if (!props.items || props.items.length === 0) {
        return (
            <div>
                <h5>Empty Order</h5>
            </div>
        );
    }

    function handleChange(ev) {
        console.log(ev.target.value);
    }

    return (
        <div className="border border-dark p-3">
            <table className="mb-4" style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Total</th>
                    </tr>
                </thead>

                {props.items.map(product => {
                    return <CheckoutItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        amount={product.amount}
                        img_path={product.img_path}
                    />
                })}
            </table>
            <h5 className="my-3">Total: ₪(total)</h5>
        </div>
    )
}

export default CheckoutList;
