import React from "react";
import { Link } from "react-router-dom";


const CatItem = props => {
    return (
        
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.prods}</td>
            <td><Link to={"/admin/categories/edit/" + props.id}>Edit</Link></td>
        </tr>
    )
};

export default CatItem;
