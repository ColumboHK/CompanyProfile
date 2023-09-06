import React from "react";
// Using react-boostrap for a gridded layout
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const About = () => {
    return (
        <section className="bg-cyan-50">
            <Container fluid className={"no-gutters mx-0 px-0 pt-28"}>
                <h1 style={{ paddingBottom: 15 }} className="heading font-mono font-bold mx-28">
                    About Us
                </h1>
            </Container>
        </section>
    );
  }
  
  export default About;