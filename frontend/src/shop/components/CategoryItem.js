import React from "react";

const CategoryItem = props => {

    
    return (
        <option key={props.id} value={props.id}>{props.name}</option>
    );
}

export default CategoryItem;