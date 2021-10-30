import React from 'react';
import ProductItem from './ProductItem';


const ProductsList = props => {
    if (!props.prods || props.prods.length === 0) {
        return (
            <div>
                <h5>No Products Found 😢</h5>
            </div>
        );
    }

    return (

        <table className="mb-4" style={{width:"100%"}}>
            <thead>
                <tr> 
                    <th>Category</th>
                    <th>IMG</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>

                {props.prods.map(product => {
                        return <ProductItem
                            key={product._id}
                            category={product.category_id.name}
                            id={product._id}
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

export default ProductsList;
