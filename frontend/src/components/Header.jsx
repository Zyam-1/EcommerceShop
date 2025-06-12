import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Bella Lujo Store</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link ><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/sign-in">
                                <Nav.Link ><i className="fa-solid fa-user"></i> Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>);
}

export default Header;