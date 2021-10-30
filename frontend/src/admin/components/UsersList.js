import React from 'react';
import UserItem from './UserItem';

const UsersList = props => {
    if (!props.users || props.users.length === 0) {
        return (
            <div>
                <h5>No Users Found 😢</h5>
            </div>
        );
    }

    return (
        <table className="mb-4" style={{width:"100%"}}>
            <thead>
                <tr> 
                    <th>Email</th>
                    <th>Name</th>
                    <th>is Admin?</th>
                </tr>
            </thead>
            
            <tbody>
                {props.users.map(user => {
                        return <UserItem
                            key={user.id}
                            id={user.id}
                            email={user.email}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            is_admin={user.is_admin}
                            />
                    })}
            </tbody>
        </table>
    )
}

export default UsersList;
