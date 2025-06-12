import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
    return (<header>
        <Container>
            <Row>
                <Col className="text-center py-5">
                    Copyright &copy; Bela Lujjo Cosmetics
                </Col>
            </Row>
        </Container>
    </header>);
}

export default Footer;