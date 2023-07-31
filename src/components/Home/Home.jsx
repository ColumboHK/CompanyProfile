import React from "react";
// Using react-boostrap for a gridded layout
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import TypeWriter from "./TypeWriter";

const Home = () => {
  return (
    <section>
        {/* pt-20 means padding-top with 80px
            px-0 means padding-left: 0px, padding-right: 0px*/}
        <Container fluid className={"no-gutters mx-0 px-0 pt-28"}>
            <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h1>
            <Row>
                {/* Within Col, we can add the following parameter
                xs=6, which means 6 parts of screen on small screen
                md=8, which means 8 parts of screen on medium screen */}
                <Col style={{disply:'flex', justifyContent:'left'}}>
                    <h1 className="heading-name">
                    Welcome to
                    <strong className="main-name"> Columbo!</strong>
                    </h1>
                </Col>
                <Col style={{disply:'flex', justifyContent:'left'}}>
                    <div>
                        <h1>
                            Something here?
                        </h1>
                    </div>
                </Col>
                <Col style={{disply:'flex', justifyContent:'left'}}>
                    <div style={{ padding: 50, textAlign: "left" }}>
                    {/* This is where the typewriter goes */}
                    <TypeWriter />  
                    </div>
                </Col>
            </Row>
        </Container>
        <h1 className="">
            Our Team
        </h1>
        <Container fluid className="">
            <Row>
                <Col className="">
                    <p className="">
                        Image here?
                        <br />
                        Li Meixuan
                        <br />
                        Something here?
                        <br />
                    </p>
                </Col>
                <Col className="">
                    <p className="">
                        Image here?
                        <br />
                        Hu Yue
                        <br />
                        Something here?
                        <br />
                    </p>
                </Col>
                <Col className="">
                    <p className="">
                        Image here?
                        <br />
                        Vincent Sun
                        <br />
                        Something here?
                        <br />
                    </p>
                </Col>
            </Row>
        </Container>
        <h1 className="">
            Our Partners/Connections
        </h1>
        <Container className="">
            <Row>
                <Col className="">
                    <p className="">
                        HKTech 300
                    </p>
                </Col>
                <Col className="">
                    <p className="">
                        HKSTP
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Home;
