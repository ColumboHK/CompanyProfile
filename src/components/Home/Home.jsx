import React, { Component } from "react";
// Using react-boostrap for a gridded layout
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import TypeWriter from "./TypeWriter";
import CityUHK from "../../Assets/CityUHK.svg";
import HKTech300 from "../../Assets/HKTech300.png";
import HKSTP from "../../Assets/HKSTP.png";
import UseCases from "../UseCases/UseCases";
import TeamPhoto from "../../Assets/TeamPhoto.jpg";
import Meixuan from "../../Assets/Meixuan.jpg";
import Yue from "../../Assets/Yue.jpg";
import Vincent from "../../Assets/Vincent.jpg";
import ProductOverview from "../../Assets/ProductOverview.png";
import Group from "../../Assets/Group.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  return (
    <section className="bg-cyan-50">
        {/* pt-20 means padding-top with 80px
            px-0 means padding-left: 0px, padding-right: 0px*/}
        <Container fluid className={"no-gutters mx-0 px-4 pt-32 bg-cyan-50"}>
            <Row>
                {/* Within Col, we can add the following parameter
                xs=6, which means 6 parts of screen on small screen
                md=8, which means 8 parts of screen on medium screen */}
                <Col sm={6} style={{display:'inline-block', justifyContent:'left'}}>
                    <div style={{display:'flex', justifyContent:'left'}} className="py-10">
                        <span data-aos="fade-right" data-aos-once="true" 
                                className="ftext-base text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400 font-semibold uppercase aos-init aos-animate">
                        Sign Up Today
                        </span>
                    </div>
                    <div style={{display:'flex', justifyContent:'left'}}>
                        <h2 data-aos="fade-right" data-aos-once="true" 
                            className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 aos-init aos-animate">
                            Welcome aboard! Immerse yourself in vibrant communities with
                            {/* <strong className="main-name italic"> Columbo!</strong> */}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400"> Columbo!</span>
                        </h2>
                    </div>
                </Col>
                {/* fontFamily contains: serif, sans-serif, cursive, fantasy, system-ui, ui-serif, ui-sans-serif, ui-monospace, ui-rounded */}
                <Col sm={6} style={{display:'flex', justifyContent:'left', fontSize:"25px", fontWeight:"bold", fontStyle:"italic", fontFamily:"cursive"}}>
                    <div style={{ padding: 150, textAlign: "left" }}>
                        {/* This is where the typewriter goes */}
                        <TypeWriter />  
                    </div>
                </Col>
            </Row>
            <br /><br />
            <div style={{display:'inline-block'}}>
                <a class="text-sm text-center rounded-full hover:shadow-md 
                          hover:shadow-[#0c66ee]/50 transition duration-300 
                          max-w-full px-8 py-4 bg-gradient-to-r from-[#468ef9] 
                          to-[#0c66ee] border border-[#0c66ee] text-white"
                    href="/ProductFeatures">
                        Get Started
                </a>
            </div>
            <div style={{display:'inline-block'}}>
                <a class="text-sm text-center rounded-full hover:shadow-md 
                          hover:shadow-[#0c66ee]/50 transition duration-300 
                          max-w-full px-6 py-4 bg-inherit text-gradient border 
                          border-[#0c66ee] flex items-center justify-center text-black"
                    href="/Registration">
                        Join Us!
                </a>
            </div>
        </Container>
        <div className="px-12 py-16 flex">
            <img src={ProductOverview} className="object-scale-down max-h-full mx-auto object-left"
                    alt="Product Overview">
            </img>
            <div className="px-12 pt-40">
                <h2 className="">
                    Connect with your world through community power
                </h2>
                {/* <br/> */}
                <h2 className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
                    Build, Organize, Provide!
                </h2>
            </div>
        </div>
        <div className="px-12 py-16 flex">
            <div className="px-12 pt-40 text-xl">
                <ul className="list-disc">
                    <li>Recognize your real-world connections by groups</li>
                    <li>Power community building</li>
                    <li>Organize community events</li>
                    <li>Provide public spaces</li>
                    <li>Boost the communications of communities</li>
                </ul>
            </div>
            <img src={Group} className="object-scale-down max-h-full mx-auto object-left"
                    alt="Group Functions">
            </img>
        </div>
        <div fluid className="top-auto bottom-0 left-0 right-0 w-full relative pointer-events-none overflow-hidden"
                style={{ height: "70px" }}>
                <svg
                    className="relative bottom-0 overflow-hidden bg-gradient-to-r from-purple-100 to-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-cyan-50 fill-current"
                        // points="2560 0 2560 100 0 100"
                        points="0 0 0 100 2560 0"
                    ></polygon>
                </svg>
        </div>
        {/* <div style={{display:'flex', justifyContent:'left',
                         backgroundImage: `url(${TeamPhoto})`, height: 600}} className="py-10 bottom-0 left-0 right-0 top-0 w-full h-full bg-center bg-cover overflow-hidden">
                <h1 data-aos="fade-right" data-aos-once="true" 
                    className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 aos-init aos-animate">
                    Our Team
                </h1>
            </div> */}
        <Container fluid className="mx-0 px-4 bg-cyan-50">
            <h1 data-aos="fade-right" data-aos-once="true" 
                className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 aos-init aos-animate">
                Our Team
            </h1>
            <Row className="">
                <Col className="flex">
                    <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img data-aos="fade-up" data-aos-once="true" data-aos-duration='100' src={Meixuan}
                            className="aos-init aos-animate"
                            style={{ width: "60%", height: "60%", justifyContent: 'center' }}
                            alt="Meixuan">
                        </img>
                    </div>
                    <div className="item-body py-48 px-12">
                        <h3 className="bg-clip-text text-stone-950 font-semibold uppercase aos-init aos-animate">Li Meixuan,</h3>
                        <h3 className="bg-clip-text text-stone-950 font-semibold uppercase aos-init aos-animate">Jade 李美璇</h3>
                        <br />
                        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">Co-Founder</h4>
                    </div>
                </Col>
                <Col className="flex">
                    <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img data-aos="fade-up" data-aos-once="true" data-aos-duration='100' src={Vincent}
                            className="aos-init aos-animate"
                            style={{ width: "60%", height: "60%", justifyContent: 'center' }}
                            alt="Vincent">
                        </img>
                    </div>
                    <div className="item-body py-48 px-12">
                        <h3 className="bg-clip-text text-stone-950 font-semibold uppercase aos-init aos-animate">Sun Pao-Sheng,</h3>
                        <h3 className="bg-clip-text text-stone-950 font-semibold uppercase aos-init aos-animate">Vincent孫寶勝</h3>
                        <br />
                        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">Co-Founder</h4>
                    </div>
                </Col>
            </Row>
        </Container>
        <div fluid className="top-auto bottom-0 left-0 right-0 w-full relative pointer-events-none overflow-hidden"
                style={{ height: "70px" }}>
                <svg
                    className="relative bottom-0 overflow-hidden bg-gradient-to-r from-purple-100 to-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-cyan-50 fill-current"
                        points="2560 0 2560 100 0 0"
                        // points="0 0 0 100 2560 0"
                    ></polygon>
                </svg>
        </div>
        <Container fluid className="no-gutters mx-0 px-4 bg-cyan-50">
            <div style={{display:'flex', justifyContent:'left'}} className="py-10">
                <h1 data-aos="fade-up" data-aos-once="true" data-aos-duration='100'
                    className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 aos-init aos-animate">
                    Our Partners/Connections
                </h1>
            </div>
            <Row className="">
                <Col className="content-center">
                    <img data-aos="fade-up" data-aos-once="true" data-aos-duration='100' src={CityUHK}
                         className="inset-0 scale-75 py-28 mx-auto aos-init aos-animate"
                         alt="CityUHK">
                    </img>
                    <p className="text-center font-bold italic">
                        City University of Hong Kong
                    </p>
                </Col>
                <Col className="content-center">
                    <img data-aos="fade-up" data-aos-once="true" data-aos-duration='100' src={HKTech300}
                         className="inset-0 scale-75 mx-auto aos-init aos-animate"
                         alt="HKTech 300">
                    </img>
                    <p className="text-center font-bold italic">
                    HKTech 300
                    </p>
                </Col>
                <Col className="content-center">
                    <img data-aos="fade-up" data-aos-once="true" data-aos-duration='100' src={HKSTP}
                         className="inset-0 scale-75 py-24 mx-auto aos-init aos-animate"
                         alt="HKSTP">
                    </img>
                    <p className="text-center font-bold italic">
                    HKSTP
                    </p>
                </Col>
            </Row>
        </Container>
        <div fluid className="top-auto bottom-0 left-0 right-0 w-full relative pointer-events-none overflow-hidden"
                style={{ height: "70px" }}>
                <svg
                    className="relative bottom-0 overflow-hidden bg-gradient-to-r from-purple-100 to-purple-500"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-cyan-50 fill-current"
                        // points="2560 0 2560 100 0 100"
                        points="0 0 0 100 2560 0"
                    ></polygon>
                </svg>
        </div>
    </section>
  );
}

export default Home;
