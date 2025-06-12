import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (<header><Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
        <Container>
            <Navbar.Brand href="#home">Bella Lujo Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/home"><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
                    <Nav.Link href="/login"><i className="fa-solid fa-user"></i> Sign In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar></header>);
}

export default Header;