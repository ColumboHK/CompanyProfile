import React from "react";
// Using react-boostrap for a gridded layout
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const About = () => {
    return (
      <Container fluid className={"no-gutters mx-0 px-0 pt-28"}>
          <h1 style={{ paddingBottom: 15 }} className="heading">
              About Us
          </h1>
      </Container>
    );
  }
  
  export default About;