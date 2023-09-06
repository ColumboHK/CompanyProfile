import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


/*
For a tags, target attribute specifies where to open link. Here we are opening a new tab
            rel attribute specifies the relationship between current doc & linked doc.
*/
const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="bottom-0 pt-10 pb-8 bg-gray-300">
            <Row>
                <Col md={4} className="text-center">
                    <h3 className="text-xs my-8">
                        Property of Columbo
                    </h3>
                </Col>
                <Col md={4} className="text-center">
                    <h3 className="text-xs my-8">
                        Copyright © {year}
                    </h3>
                </Col>
                <Col md={4} className="content-evenly contents">
                    <a href="https://twitter.com/Columbo-App-filler"
                       style={{ paddingTop:32, paddingLeft:28, alignItems:"center", aspectRatio:"auto", color:"black" }}
                       target="_blank"
                       rel="noopener noreferrer">
                        <AiOutlineTwitter />
                    </a>
                    <a href="https://www.instagram.com/Columbo-App-filler"
                       style={{ paddingTop:32, paddingLeft:28, alignItems:"center", aspectRatio:"auto", color:"black" }}
                       target="_blank"
                       rel="noopener noreferrer">
                        <AiFillInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/Columbo-App-filler"
                       style={{ paddingTop:32, paddingLeft:28, alignItems:"center", aspectRatio:"auto", color:"black" }}
                       target="_blank"
                       rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
