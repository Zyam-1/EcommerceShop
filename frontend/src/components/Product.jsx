import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {

    return (
        <>
            <Card className="my-3 p-3 rounded border">
                <Card.Img loading="lazy" variant="top" src={product.image} />
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="div" className="pt-2">{product.name}</Card.Title>
                        <Card.Text as="div" className="pt-2"><Rating ratings={product.rating} reviews={product.numReviews} /></Card.Text>
                        <Card.Text as='h3' className="pt-2">${product.price}</Card.Text>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}

export default Product;