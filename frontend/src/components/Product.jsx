import React from "react";
import { Card } from "react-bootstrap";


const Product = ({ product }) => {

    return (
        <>
            <Card className="my-3 p-3 rounded border">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <a href={`/products/${product._id}`}>
                        <Card.Title as="div">{product.name}</Card.Title>
                        <Card.Text as="div">{`${product.rating} from ${product.numReviews} reviews`}</Card.Text>
                        <Card.Text as='h3'>{product.price}</Card.Text>
                    </a>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product;