import React from "react";
// Using react-boostrap for a gridded layout
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import AdvancedCommunityMangement1 from "../Assets/Advanced_Community_Management1.png";
import AdvancedCommunityMangement2 from "../Assets/Advanced_Community_Management2.png";
import AdvancedCommunityMangement3 from "../Assets/Advanced_Community_Management3.png";
import AdvancedCommunityMangement4 from "../Assets/Advanced_Community_Management4.png";
import AIRecommendationSystem1 from "../Assets/AI_Rec_System1.png";
import AIRecommendationSystem2 from "../Assets/AI_Rec_System2.png";

const ProductFeatures = () => {
    return (
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <Container fluid className={"no-gutters mx-0 px-0 pt-28"}>
                <h1 style={{ paddingBottom: 15 }} className="heading font-mono font-bold mx-28">
                    Product Features
                </h1>
                
                <Row className="align-items-center py-0 my-0">
                    <h3 className="flex justify-center pt-32">
                        Advanced Community Management
                    </h3>
                    <Col className="content-center md:text-center">
                        <img src={AdvancedCommunityMangement1}
                             className="inset-0 scale-50 mx-auto"
                             alt="ACM1">
                        </img>
                    </Col>
                    <Col className="flex">
                        <ul className="relative md:text-justify text-sm">
                            <h2 className="flex md content-center text-left">
                                Create your community with specifications
                            </h2>
                            <li>When creating a new community, you can specify the name, description, and purpose of the community.</li>
                            <li>You can also set the group's visibility, whether it's public or private, and decide who can join the group.</li>
                            <li>You can also set criteria for membership, such as age, gender, location, interests, or any other relevant factors.</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="align-items-center py-0 my-0">
                    <Col className="content-center md:text-center">
                        <img src={AdvancedCommunityMangement2}
                             className="inset-0 scale-50 mx-auto"
                             alt="ACM2">
                        </img>
                    </Col>
                    <Col className="flex">
                        <ul className="relative md:text-justify text-sm">
                            <h2 className="flex md content-center text-left">
                                Provide public spaces for your community
                            </h2>
                            <li>The app provides public spaces for your community, such as discussion forums or chat rooms, where members can connect and engage with each other.</li>
                            <li>These spaces allow members to share ideas, ask questions, and offer support to one another, building a sense of community and belonging.</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="align-items-center py-0 my-0">
                    <Col className="content-center md:text-center">
                        <img src={AdvancedCommunityMangement3}
                             className="inset-0 scale-50 mx-auto"
                             alt="ACM3">
                        </img>
                    </Col>
                    <Col className="flex">
                        <ul className="relative md:text-justify text-sm">
                            <h2 className="flex md content-center text-left">
                            Advanced messaging system that allows you to send your message to a specific group of people
                            </h2>
                            <li>The app features an advanced messaging system that allows you to communicate with other members of the communities you join.</li>
                            <li>The messaging system offers a range of features that enable you to customize your messaging experience, control who can send and receive messages, and ensure that your messages are delivered to the right people.</li>
                            <li>One of the key features of the messaging system is the ability to assign permissions and subgroups to your messages.</li>
                            <li>This means that you can choose who has access to your messages by specifying which subgroups or individuals can see them.</li>
                            <li>For example, you could create a message that is only visible to members of a certain age group, or a message that is only visible to members who have a particular interest.</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="align-items-center py-0 my-0">
                    <Col className="content-center md:text-center">
                        <img src={AdvancedCommunityMangement4}
                             className="inset-0 scale-50 mx-auto"
                             alt="ACM4">
                        </img>
                    </Col>
                    <Col className="flex">
                        <ul className="relative md:text-justify text-sm">
                            <h2 className="flex md content-center text-left">
                                Create your community with specifications
                            </h2>
                            <li>When creating a new community, you can specify the name, description, and purpose of the community.</li>
                            <li>You can also set the group's visibility, whether it's public or private, and decide who can join the group.</li>
                            <li>You can also set criteria for membership, such as age, gender, location, interests, or any other relevant factors.</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="align-items-center py-0 my-0">
                    <h3 className="flex justify-center pt-32">
                        AI-Based Recommendation System
                    </h3>
                    <Col className="content-center md:text-center">
                        <img src={AIRecommendationSystem1}
                             className="inset-0 scale-50 mx-auto"
                             alt="AIRS1">
                        </img>
                    </Col>
                    <Col className="flex">
                        <ul className="relative md:text-justify text-sm">
                            <h2 className="flex md content-center text-left">
                                Create your profiles with specific tags that allows you to be recognized
                            </h2>
                            <li>By creating a profile with specific tags, you can establish your identity within the communities you join and connect with others who share similar interests.</li>
                            <li>This can help you build deeper relationships with other members and foster a sense of community and belonging.</li>
                            <li>The app's emphasis on real-name connections further reinforces this sense of community, encouraging users to build more authentic and meaningful connections with others.</li>
                        </ul>
                    </Col>
                </Row>
                <Row className="align-items-center py-0 my-0">
                    <Col className="content-center md:text-center">
                        <img src={AIRecommendationSystem2}
                             className="inset-0 scale-50 mx-auto"
                             alt="AIRS2">
                        </img>
                    </Col>
                    <Col className="flex">
                        <ul className="relative md:text-justify text-sm">
                            <h2 className="flex md content-center text-left">
                                Recommend highly-correlated groups or individuals to you according to your profile
                            </h2>
                            <li>The app features a recommendation system that suggests highly-correlated groups or individuals to you based on your profile.</li>
                            <li>The recommendation system uses algorithms to analyze your profile information, such as your interests, hobbies, and location, and identifies other users or groups that share similar characteristics.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
  }
  
  export default ProductFeatures;