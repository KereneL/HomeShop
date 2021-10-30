import React from 'react';
import CheckoutItem from './CheckoutItem';


const CheckoutList = props => {
    if (!props.items || props.items.length === 0) {
        return (
            <div>
                <h2>Empty Order</h2>
            </div>
        );
    }

    return (
        <div className="border border-dark p-3">
            <table className="mb-4" style={{width:"100%"}}>
                <tr> 
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                </tr>

                {props.items.map(product => {
                        return <CheckoutItem
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
