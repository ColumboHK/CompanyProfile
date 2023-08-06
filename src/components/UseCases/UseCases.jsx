import React from "react";
// Using react-boostrap for a gridded layout
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import ICML from "../../Assets/ICML.png";
import CVPR from "../../Assets/CVPR.svg";
import Neurips from "../../Assets/Neurips.png";
import BasketBallGroup from "../../Assets/basketballGroup.png";
import ReadingGroup from "../../Assets/ReadingGroup.png";
import CityUHK from "../../Assets/CityUHK.svg";
import HKTech300 from "../../Assets/HKTech300.png";
import HKSTP from "../../Assets/HKSTP.png";

const UseCases = () => {
    return (
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <Container fluid className={"no-gutters mx-0 px-0 pt-28"}>
                <h1 style={{ paddingBottom: 15 }} className="heading font-mono font-bold mx-28">
                    Use Cases
                </h1>
                <Row className="align-items-center py-0 my-0">
                    <h3 className="flex justify-center pt-32">
                        Academic Conferences
                    </h3>
                    <Col>
                        <img src={ICML}
                             className="inset-0 scale-50 mx-auto"
                             alt="ICML">
                        </img>
                    </Col>
                    <Col>
                        <img src={CVPR}
                             className="inset-0 scale-50 mx-auto"
                             alt="CVPR">
                        </img>
                    </Col>
                    <Col>
                        <img src={Neurips}
                             className="inset-0 scale-50 mx-auto"
                             alt="Neurips">
                        </img>
                    </Col>
                </Row>
                <Row className="align-items-center py-0 my-0">
                    <h3 className="flex justify-center pt-32">
                        Exhibitions
                    </h3>

                </Row>
                <Row className="align-items-center py-0 my-0">
                    <h3 className="flex justify-center pt-32">
                        Interest Groups
                    </h3>
                    <Col>
                        <img src={BasketBallGroup}
                             className="inset-0 scale-50 mx-auto"
                             alt="BasketBall Group">
                        </img>
                    </Col>
                    <Col>
                        <img src={ReadingGroup}
                             className="inset-0 scale-50 mx-auto"
                             alt="Reading Group">
                        </img>
                    </Col>
                </Row>
                <Row className="align-items-center py-0 my-0">
                    <h3 className="flex justify-center pt-32">
                        Organizations
                    </h3>
                    <Col>
                        <img src={CityUHK}
                             className="inset-0 scale-50 mx-auto"
                             alt="CityUHK">
                        </img>
                    </Col>
                    <Col>
                        <img src={HKTech300}
                             className="inset-0 scale-50 mx-auto"
                             alt="HKTech300">
                        </img>
                    </Col>
                    <Col>
                        <img src={HKSTP}
                             className="inset-0 scale-50 mx-auto"
                             alt="HKSTP">
                        </img>
                    </Col>
                </Row>
            </Container>
        </section>

    );
  }
  
  export default UseCases;