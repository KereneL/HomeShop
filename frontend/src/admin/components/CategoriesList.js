import React from 'react';
import CatItem from './CatItem';


const CategoriesList = props => {
    if (!props.cats || props.cats.length === 0) {
        return (
            <div>
                <h5>No Categories Found 😢</h5>
            </div>
        );
    }

    return (

        <table className="mb-4" style={{width:"100%"}}>
            <thead>
                <tr> 
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>

            <tbody>

                {props.cats.map(cat => {
                        return <CatItem
                            key={cat._id}
                            id={cat._id}
                            name={cat.name}
                            />
                    })}
            </tbody>
        </table>
    )
}

export default CategoriesList;
