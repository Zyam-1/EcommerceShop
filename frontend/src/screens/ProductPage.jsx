import React from "react";
import { Row, Col, ListGroup, ListGroupItem, Button, Image } from "react-bootstrap";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Rating from "../components/Rating";
import products from "../products";



const ProductPage = () => {
    let { id } = useParams();
    let navigate = useNavigate();
    let product = products.find(p => p._id === Number(id));

    function handleGoBack() {
        navigate(-1);
    }

    return (
        <>
            <Button varient="link" onClick={handleGoBack}>Go Back</Button>
            <Row className="mt-2">
                <Col md={6}>
                    <Image src={product.image} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroupItem><h2>{product.name}</h2></ListGroupItem>
                        <ListGroupItem>{product.description}</ListGroupItem>
                        <ListGroupItem>
                            <Rating ratings={product.rating} reviews={product.numReviews} />
                        </ListGroupItem>

                        <ListGroupItem><h3>${product.price}</h3></ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroupItem>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem><Button varient="button" disabled={product.countInStock === 0}>Add to Cart</Button></ListGroupItem>

                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductPage;