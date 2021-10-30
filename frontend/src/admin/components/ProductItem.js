import React from "react";
import { Link } from "react-router-dom";


const ProductItem = props => {
    return (
        
        <tr>
            <td>{props.category}</td>
            <td>{props.img_path}</td>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>₪{props.price}</td>
            <td><Link to={"/admin/products/edit/" + props.id}>Edit</Link></td>
        </tr>
    )
};

export default ProductItem;
