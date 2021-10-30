import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FaCartPlus } from 'react-icons/fa';

const ProductItem = props => {
    return (
        
        <Card className="m-2" style={{ width: '12rem', padding: 0}}>
                <Card.Img variant="top" src={props.img_path} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Price: ₪{props.price}
                    </Card.Text>
                    
                    <div className="d-flex justify-content-end">
                        <Button variant="success" type="submit">
                            <FaCartPlus />
                        </Button>
                    </div>
                    
                </Card.Body>
        </Card>
    )
};

export default ProductItem;
