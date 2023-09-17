import React from "react";
// Using react-boostrap for a gridded layout
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Conferences from "../../Assets/Conferences.jpg";
import MemberEngagement from "../../Assets/MemberEngagement.jpg";

const UseCases = () => {
    return (
        <section className="bg-[#F2F6FB] px-24 bg-opacity-80 pb-12 ">
            <div className="px-12 pt-32 mx-auto flex bg-[#D4E1F1]">
                <div className="px-12 pt-40 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Conferences
                    </h1>
                    <p className="mb-4 pt-4 px-12 text-slate-500 text-justify">
                        Conferences bring together professionals from various fields, and a social app enables <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">networking, idea exchange, and research collaboration</span> is in urgent need. Our app <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">fosters engagement</span> through interactive features like live polling, Q&A sessions, and discussion forums, facilitating knowledge sharing and meaningful interactions.
                    </p>
                </div>
                <img src={Conferences} className="object-scale-down pt-4 mx-auto object-left"
                        style={{ width: "50%", height: "50%" }}
                        alt="Conferences" loading="lazy">
                </img>
            </div>
            
            <div className="px-12 pt-12 mx-auto flex bg-[#E7EFF8]">
                <img src={MemberEngagement} className="object-scale-down pt-4 mx-auto object-left"
                    style={{ width: "50%", height: "50%" }}
                    alt="Sub-groups" loading="lazy">
                </img>
                <div className="px-12 pt-16 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Increase member engagement
                    </h1>
                    <li className="font-bold px-12">For alumni network</li>
                    <p className="mb-4 px-12 pt-4 text-slate-500 text-justify">
                        Our app allows alumni to <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">stay connected</span> and engaged with their alma mater and fellow graduates. It provides a platform for <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">networking, sharing updates, and fostering a sense of community</span> among alumni.
                    </p>
                    <li className="font-bold px-12 ">For small & medium sized business and non-profit communities</li>
                    <p className="mb-4 px-12 pt-4 text-slate-500 text-justify">
                        Our app provides a platform for non-profit organizations to build and <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">engage a community of supporters, volunteers, and beneficiaries.</span> It fosters connections, encourages participation, and creates a sense of belonging among individuals who share a common cause.
                    </p>
                </div>
            </div>
        </section>

    );
  }
  
  export default UseCases;