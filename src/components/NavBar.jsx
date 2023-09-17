import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.jpg";

import { AiOutlineHome, 
         AiFillQuestionCircle,
         AiOutlineSearch } from "react-icons/ai";
import { FaProductHunt } from "react-icons/fa";
import { HiDocumentSearch } from "react-icons/hi";
import { MdAppRegistration } from "react-icons/md";

const NavBar = (props) => {
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
        <Navbar expanded={expand} fixed="top" expand="md" className={
            (props.transparent
              ? "top-0 absolute z-50 w-full"
              : "relative shadow-lg bg-white shadow-lg") +
            " flex flex-wrap items-center justify-between px-2 py-3 "
          }>
        {/* // <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"} style={{backgroundColor: "rgba(255,255,255,1.0)"}}> */}
            <Container fluid className="px-4 font-bold">
                <Navbar.Brand href="/CompanyProfile" className="navbar navbar-light py-0 fixed left-0 top-0">
                    <img src={logo} className="inline-flex object-left-top h-20 w-20" alt="CompanyLogo"></img>
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
                                <AiOutlineHome style={{ position: "center", marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>

                        {/* <Nav.Item>
                            <Nav.Link as={Link} eventKey="/about" to="about" style={{color:"black"}}>
                                <AiFillQuestionCircle style={{ marginBottom: "2px" }} /> About Us
                            </Nav.Link>
                        </Nav.Item> */}

                        <Nav.Item>
                            <Nav.Link as={Link} to="/productfeatures" eventKey="/productfeatures" style={{color:"black"}}>
                                <FaProductHunt style={{ marginBottom: "2px" }} /> Product Features
                            </Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link as={Link} to="/usecases" eventKey="/usecases" style={{color:"black"}}>
                                <HiDocumentSearch style={{ marginBottom: "2px" }} /> Use Cases
                            </Nav.Link>
                        </Nav.Item>

                        {/* <Nav.Item>
                            <Nav.Link as={Link} to="/Search" eventKey="/Search" style={{color:"black"}}>
                                <AiOutlineSearch style={{ marginBottom: "2px" }} /> Search
                            </Nav.Link>
                        </Nav.Item> */}

                        <Nav.Item>
                            <Nav.Link as={Link} to="/registration" eventKey="/registration" style={{color:"black"}}>
                                <MdAppRegistration style={{ marginBottom: "2px" }} /> Join Us!
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;