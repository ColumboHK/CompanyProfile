import React from "react";
// Using react-boostrap for a gridded layout
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import TypeWriter from "./TypeWriter";
import CityUHK from "../../Assets/CityUHK.svg";
import HKTech300 from "../../Assets/HKTech300.png";
import HKSTP from "../../Assets/HKSTP.png"

const Home = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
        {/* pt-20 means padding-top with 80px
            px-0 means padding-left: 0px, padding-right: 0px*/}
        <Container fluid className={"no-gutters mx-0 px-4 pt-28"}>
            <h1 style={{ paddingBottom: 15, fontFamily:"monospace" }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h1>
            <Row>
                {/* Within Col, we can add the following parameter
                xs=6, which means 6 parts of screen on small screen
                md=8, which means 8 parts of screen on medium screen */}
                <Col style={{display:'flex', justifyContent:'left', fontFamily:"monospace" }}>
                    <h1 className="heading-name py-5">
                    Welcome to
                    <strong className="main-name"> Columbo!</strong>
                    </h1>
                </Col>
                <Col style={{disply:'flex', justifyContent:'left'}}>
                    <div>
                        <h1>
                            {/* Something here? */}
                        </h1>
                    </div>
                </Col>
                {/* fontFamily contains: serif, sans-serif, cursive, fantasy, system-ui, ui-serif, ui-sans-serif, ui-monospace, ui-rounded */}
                <Col style={{display:'flex', justifyContent:'left', fontSize:"25px", fontWeight:"bold", fontStyle:"italic", fontFamily:"cursive"}}>
                    <div style={{ padding: 50, textAlign: "left" }}>
                    {/* This is where the typewriter goes */}
                    <TypeWriter />  
                    </div>
                </Col>
            </Row>
        </Container>
        
        <Container fluid className="mx-0 px-4">
            <h1 className="" style={{ paddingBottom: 15, fontFamily:"monospace" }}>
                Our Team
            </h1>
            <Row>
                <Col className="">
                    <p className="text-center">
                        Image here?
                        <br />
                        Li Meixuan
                        <br />
                        Something here?
                        <br />
                    </p>
                </Col>
                <Col className="">
                    <p className="text-center">
                        Image here?
                        <br />
                        Hu Yue
                        <br />
                        Something here?
                        <br />
                    </p>
                </Col>
                <Col className="">
                    <p className="text-center">
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
        
        <Container fluid className="no-gutters mx-0 px-4">
            <h1 className="" style={{ paddingBottom: 15, fontFamily:"monospace" }}>
                Our Partners/Connections
            </h1>
            <Row>
                <Col className="content-center">
                    <img src={CityUHK}
                         className="inset-0 scale-75 py-28 mx-auto"
                         alt="CityUHK">
                    </img>
                    <p className="text-center font-bold italic">
                        City University of Hong Kong
                    </p>
                </Col>
                <Col className="content-center">
                    <img src={HKTech300}
                         className="inset-0 scale-75 mx-auto"
                         alt="HKTech 300">
                    </img>
                    <p className="text-center font-bold italic">
                    HKTech 300
                    </p>
                </Col>
                <Col className="content-center">
                    <img src={HKSTP}
                         className="inset-0 scale-75 py-24 mx-auto"
                         alt="HKSTP">
                    </img>
                    <p className="text-center font-bold italic">
                    HKSTP
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Home;
