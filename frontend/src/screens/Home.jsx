import React from "react";
// import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";



const Home = () => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:5000/api/products").then((res) => {
            setProducts(res.data);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    // console.log(products);
    return (<>
        <h1>Our Products</h1>
        <Row>
            {products.map((product) => {
                return <Col key={product._id} sm={12} md={6} lg={3}> <Product product={product} />
                </Col>
            })}
        </Row>
    </>)
}

export default Home;