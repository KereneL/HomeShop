import React from "react";
// import css;


const UserDetails = props => {
    return (
        <div>
            <h3 className="mb-4 fst-italic"> This is you </h3>
                    
            <div className="mb-4">
                <h5>ID: {props.id}</h5>
                <h5>Name: {props.first_name} {props.last_name}</h5>
            </div>
        </div>
    )
}

export default UserDetails;
