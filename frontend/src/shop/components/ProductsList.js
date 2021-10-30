import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ProductItem from './ProductItem';


const ProductsList = props => {
    if (!props.items || props.items.length === 0) {
        return (
            <div>
                <h2>No Products Found.</h2>
            </div>
        );
    }

    return (
        <Container fluid className="d-flex justify-content-center">
            <Row className="d-flex justify-content-around" style={{maxWidth: '56rem'}}> 
                {props.items.filter(item => {
                    return  item.category_id == props.selectedCategoryId
            }).map(product => {
                    return <ProductItem
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        img_path={product.img_path}
                        />
                })}
            </Row>
        </Container>
    )
}

export default ProductsList;
