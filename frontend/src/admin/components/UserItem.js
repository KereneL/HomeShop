import React from "react";
import { Link } from "react-router-dom";


const UserItem = props => {
    return (
        
        <tr>
            <td>{props.email}</td>
            <td>{props.first_name} {props.last_name}</td>
            <td>{String(props.is_admin)}</td>
        </tr>
    )
};

export default UserItem;
