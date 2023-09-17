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
        <div fluid className="bottom-0 pt-10 pb-8 bg-[#8598CF] bg-opacity-70 flex justify-end">
            {/* <Row>
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
                <Col md={4} className="content-evenly contents justify-rights align-right">
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
            </Row> */}
            <h3 className="text-xs my-8 pr-12">
                Property of Columbo
            </h3>
            <h3 className="text-xs my-8">
                Copyright © {year}
            </h3>
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
                className="pr-12"
                style={{ paddingTop:32, paddingLeft:28, alignItems:"center", aspectRatio:"auto", color:"black" }}
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn />
            </a>
        </div>
    );
}

export default Footer;
