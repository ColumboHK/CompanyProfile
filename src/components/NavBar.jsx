import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.jpg";

import { AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);


    return (
        <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
            <Container>
                <Navbar.Brand href="/" className="navbar navbar-light fixed-top py-lg-0">
                    <img src={logo} width="10" height="10" className="inline-flex" alt="CompanyLogo"></img>
                </Navbar.Brand>
                
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false:"expanded");
                    }}
                >
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="flex justify-end" style={{ width: "100%"}}>
                        <Nav.Item>
                            <Nav.Link as={Link} eventKey="/" to="/"  style={{color:"black"}}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} eventKey="/about" to="about" style={{color:"black"}} className="hover:text-teal-300">
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> About Us
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/productfeatures" eventKey="/productfeatures" onClick={() => updateExpanded(false)} style={{color:"black"}}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Product Features
                            </Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link as={Link} to="/usecases" eventKey="/usecases" onClick={() => updateExpanded(false)} style={{color:"black"}}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Use Cases
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/Search" eventKey="/Search" onClick={() => updateExpanded(false)} style={{color:"black"}}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Search
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/registration" eventKey="/registration" onClick={() => updateExpanded(false)} style={{color:"black"}}>
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Join Us!
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;