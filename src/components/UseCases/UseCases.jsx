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
        <section className="bg-cyan-50">
            <div style={{display:'flex', justifyContent:'left'}} className="py-32">
                <h1 className="px-12 text-[2.5rem] font-semibold leading-normal capitalize sm:pr-8 xl:pr-10">
                    Use Cases
                </h1>
            </div>
            <h3 data-aos="fade-right" data-aos-once="true" className="flex justify-center font-semibold leading-normal py-12">
                Academic Conferences
            </h3>
            <Container fluid className={"no-gutters mx-0 px-0"}>
                <Row className="align-items-center py-0 my-0">
                    <Col>
                        <img src={ICML}
                             className="inset-0 scale-50 mx-auto"
                             alt="ICML" loading="lazy">
                        </img>
                    </Col>
                    <Col>
                        <img src={CVPR}
                             className="inset-0 scale-50 mx-auto"
                             alt="CVPR" loading="lazy">
                        </img>
                    </Col>
                    <Col>
                        <img src={Neurips}
                             className="inset-0 scale-50 mx-auto"
                             alt="Neurips" loading="lazy">
                        </img>
                    </Col>
                </Row>
            </Container>
            <h3 data-aos="fade-right" data-aos-once="true" className="flex justify-center font-semibold leading-normal py-12">
                Exhibitions
            </h3>
            <Container fluid className={"no-gutters mx-0 px-0"}>
                <Row className="align-items-center py-0 my-0">
                </Row>
            </Container>
            <h3 data-aos="fade-right" data-aos-once="true" className="flex justify-center font-semibold leading-normal py-12">
                Interest Groups
            </h3>
            <Container fluid className={"no-gutters mx-0 px-0"}>
                <Row className="align-items-center">
                    <Col>
                        <img src={BasketBallGroup}
                             className="inset-0 scale-75 mx-auto"
                             alt="BasketBall Group" loading="lazy">
                        </img>
                    </Col>
                    <Col>
                        <img src={ReadingGroup}
                             className="inset-0 mx-auto"
                             alt="Reading Group" loading="lazy">
                        </img>
                    </Col>
                </Row>
            </Container>
            <h3 data-aos="fade-right" data-aos-once="true" className="flex justify-center font-semibold leading-normal py-12">
                Organizations
            </h3>
            <Container fluid className={"no-gutters mx-0 px-0"}>
                <Row className="align-items-center">
                    <Col>
                        <img src={CityUHK}
                             className="inset-0 scale-75 mx-auto"
                             alt="CityUHK" loading="lazy">
                        </img>
                    </Col>
                    <Col>
                        <img src={HKTech300}
                             className="inset-0 scale-75 mx-auto"
                             alt="HKTech300" loading="lazy">
                        </img>
                    </Col>
                    <Col>
                        <img src={HKSTP}
                             className="inset-0 scale-75 mx-auto"
                             alt="HKSTP" loading="lazy">
                        </img>
                    </Col>
                </Row>
            </Container>
        </section>

    );
  }
  
  export default UseCases;