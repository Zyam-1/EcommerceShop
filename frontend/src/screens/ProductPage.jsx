import React from "react";
import { Row, Col, ListGroup, ListGroupItem, Button, Image } from "react-bootstrap";
import { Link, useParams, useNavigate } from 'react-router-dom';
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
                        <ListGroupItem>{product.name}</ListGroupItem>
                    </ListGroup>
                    <ListGroup>
                        <ListGroupItem>{product.description}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                </Col>
            </Row>
        </>
    )
}

export default ProductPage;