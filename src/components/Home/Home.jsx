import React, { Component, useEffect } from "react";
// Using react-boostrap for a gridded layout
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import TypeWriter from "./TypeWriter";
import CityUHK from "../../Assets/CityUHK.jpg";
import HKTech300 from "../../Assets/HKTech300.jpg";
import HKSTP from "../../Assets/HKSTP.jpg";
import UseCases from "../UseCases/UseCases";
import TeamPhoto from "../../Assets/TeamPhoto.jpg";
import Meixuan from "../../Assets/Meixuan.jpg";
import Yue from "../../Assets/Yue.jpg";
import Vincent from "../../Assets/Vincent.jpg";
import ProductOverview from "../../Assets/ProductOverview.jpg";
import Group from "../../Assets/Group.jpg";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(() => {
        AOS.init();
        // AOS.refresh();
    }, []);

    return (
    // <section className="bg-cyan-50 px-24">
        <div>
            {/* pt-20 means padding-top with 80px
                px-0 means padding-left: 0px, padding-right: 0px*/}
            <Container fluid className={"no-gutters mx-0 px-4 pt-32 pb-24 bg-[#D4E1F1]"}>
                <Row>
                    {/* Within Col, we can add the following parameter
                    xs=6, which means 6 parts of screen on small screen
                    md=8, which means 8 parts of screen on medium screen */}
                    <Col sm={6} style={{display:'inline-block', justifyContent:'left'}}>
                        <div style={{display:'flex', justifyContent:'left'}} className="py-10">
                            <span className="ftext-base text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400 font-semibold uppercase aos-init aos-animate">
                                Sign Up Today
                            </span>
                        </div>
                        <div className="font-serif" style={{display:'flex', justifyContent:'left'}}>
                            <h2 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 aos-init aos-animate">
                                Welcome aboard! Immerse yourself in vibrant communities with
                                {/* <strong className="main-name italic"> Columbo!</strong> */}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400"> Columbo!</span>
                            </h2>
                        </div>
                    </Col>
                    {/* fontFamily contains: serif, sans-serif, cursive, fantasy, system-ui, ui-serif, ui-sans-serif, ui-monospace, ui-rounded */}
                    <Col sm={6} style={{display:'flex', justifyContent:'left', fontSize:"25px", fontWeight:"bold", fontStyle:"italic", fontFamily:"cursive"}}>
                        <div className="font-serif" style={{ padding: 150, textAlign: "left" }}>
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
                            to-[#0c66ee] border border-[#0c66ee] text-white font-bold"
                        href="/ProductFeatures">
                            Get Started
                    </a>
                </div>
                <div style={{display:'inline-block'}}>
                    <a class="text-sm text-center rounded-full hover:shadow-md 
                            hover:shadow-[#0c66ee]/50 transition duration-300 
                            max-w-full px-6 py-4 bg-inherit text-gradient border 
                            border-[#0c66ee] flex items-center justify-center text-black font-bold"
                        href="/Registration">
                            Join Us!
                    </a>
                </div>
            </Container>
            <div className="bg-[#E7EFF8]">
                <div className="px-12 py-16 flex" data-aos="fade-left">
                    <img src={ProductOverview} className="object-scale-down mx-auto object-left"
                            style={{ width: "60%", height: "60%" }}
                            alt="Product Overview" loading="lazy">
                    </img>
                    <div className="px-8 pt-56">
                        <h2 className="">
                            Connect with Your World Through Community Power:
                        </h2>
                        {/* <br/> */}
                        <h2 className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">
                            Build, Organize, Provide!
                        </h2>
                    </div>
                </div>
                {/* <div fluid className="top-auto bottom-0 left-0 right-0 w-full relative pointer-events-none overflow-hidden"
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
                </div> */}
            </div>
            <div className="bg-[#D4E1F1]">
                <div className="px-12 pt-16 flex" data-aos="fade-right">
                    <div className="pt-56 text-xl">
                        <ul className="list-disc">
                            <li>Recognize your <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">real-world connections</span> by groups</li>
                            <li>Power community building</li>
                            <li>Organize community events</li>
                            <li>Provide public spaces</li>
                            <li>Boost the communications of communities</li>
                        </ul>
                    </div>
                    <img src={Group} className="object-scale-down mx-auto object-left"
                            style={{ width: "60%", height: "60%" }}
                            alt="Group Functions">
                    </img>
                </div>
            </div>
            {/* <div fluid className="top-auto bottom-0 left-0 right-0 w-full relative pointer-events-none overflow-hidden"
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
            </div> */}
            {/* <div style={{display:'flex', justifyContent:'left',
                            backgroundImage: `url(${TeamPhoto})`, height: 600}} className="py-10 bottom-0 left-0 right-0 top-0 w-full h-full bg-center bg-cover overflow-hidden">
                    <h1 data-aos="fade-right" data-aos-once="true" 
                        className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 aos-init aos-animate">
                        Our Team
                    </h1>
                </div> */}
            <Container fluid className="mx-0 px-4 pt-12 bg-[#E7EFF8]">
                <div data-aos="fade-right">
                    <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 aos-init aos-animate">
                        Our Team
                    </h1>
                </div>
                <div className="flex">
                    <div className="" data-aos="fade-up">
                        <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <img src={Meixuan}
                                className="aos-init aos-animate"
                                style={{ width: "80%", height: "80%", justifyContent: 'center', objectFit: "contain" }}
                                alt="Meixuan" loading="lazy">
                            </img>
                        </div>
                        <div className="item-body py-12" style={{ justifyContent: "center", textAlign: "center"}}>
                            <h3 className="bg-clip-text text-stone-950 font-semibold uppercase aos-init aos-animate">Li Meixuan Jade</h3>
                            <h3 className="bg-clip-text text-stone-950 font-semibold uppercase aos-init aos-animate">李美璇</h3>
                            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">Co-Founder</h4>
                        </div>
                    </div>
                    <div className="" data-aos="fade-down">
                        <div className="" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={Vincent}
                                className="aos-init aos-animate"
                                style={{ width: "80%", height: "80%", justifyContent: 'center', objectFit: "contain" }}
                                alt="Vincent" loading="lazy">
                            </img>
                        </div>
                        <div className="item-body py-12" style={{ justifyContent: "center", textAlign: "center"}}>
                            <h3 className="bg-clip-text text-stone-950 font-semibold uppercase aos-init aos-animate">Sun Pao-Sheng Vincent</h3>
                            <h3 className="bg-clip-text text-stone-950 font-semibold uppercase aos-init aos-animate">孫寶勝</h3>
                            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">Co-Founder</h4>
                        </div>
                    </div>
                </div>
            </Container>
            {/* <div fluid className="top-auto bottom-0 left-0 right-0 w-full relative pointer-events-none overflow-hidden"
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
            </div> */}
            <Container fluid className="no-gutters mx-0 bg-[#D4E1F1] pt-16">
                <div data-aos="fade-up" style={{display:'flex', justifyContent:'left'}} className="py-10">
                    <h1 className="text-[2.5rem] sm:text-5xl xl:text-6xl font-bold leading-tight capitalize sm:pr-8 xl:pr-10 aos-init aos-animate">
                        Our Partners/Connections
                    </h1>
                </div>
                <Row className="" data-aos="fade-right">
                    <Col className="content-center">
                        <img src={CityUHK}
                            className="inset-0 mx-auto aos-init aos-animate"
                            style={{ width: "60%", height: "60%", justifyContent: 'center' }}
                            alt="CityUHK" loading="lazy">
                        </img>
                        <p className="pt-12 text-center font-bold font-serif">
                            City University of Hong Kong
                        </p>
                    </Col>
                    <Col className="content-center">
                        <img src={HKTech300}
                            className="inset-0 mx-auto aos-init aos-animate"
                            style={{ width: "60%", height: "60%", justifyContent: 'center' }}
                            alt="HKTech 300" loading="lazy">
                        </img>
                        <p className="pt-12 text-center font-bold font-serif">
                        HKTech 300
                        </p>
                    </Col>
                    <Col className="content-center">
                        <img src={HKSTP}
                            className="inset-0 mx-auto aos-init aos-animate"
                            style={{ width: "60%", height: "60%", justifyContent: 'center' }}
                            alt="HKSTP" loading="lazy">
                        </img>
                        <p className="pt-12 text-center font-bold font-serif">
                        HKSTP
                        </p>
                    </Col>
                </Row>
            </Container>
            {/* <div fluid className="top-auto bottom-0 left-0 right-0 w-full relative pointer-events-none overflow-hidden"
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
            </div> */}
        </div>
        // </section>
    );
}

export default Home;
