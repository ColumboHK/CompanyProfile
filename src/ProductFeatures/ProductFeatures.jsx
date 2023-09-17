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

import GroupSettings from "../Assets/GroupSettings.jpg";
import SubGroup from "../Assets/SubGroup.jpg";
import GroupEvent from "../Assets/GroupEvent.jpg";
import Messaging from "../Assets/Messaging.jpg";
import Profile from "../Assets/Profile.jpg";

const ProductFeatures = () => {
    return (
        <section className="bg-cyan-50 px-24 pb-12">
            <div className="px-12 pt-40 mx-auto flex">
                <div className="px-12 pt-40 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Various settings of groups and subgroups
                    </h1>
                    <p className="mb-4 pt-4 px-12 text-slate-500 text-justify">
                        When creating a new community, you can specify the name, description, and purpose of the community. You can also set the <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">group's visibility</span>
                        , whether it's public or private, and decide who can join the group. You can also set <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">criteria for membership</span>, such as age, gender, location, interests, or any other relevant factors.
                    </p>
                </div>
                <img src={GroupSettings} className="object-scale-down pt-4 mx-auto object-left"
                        style={{ width: "50%", height: "50%" }}
                        alt="Group Settings" loading="lazy">
                </img>
            </div>
            
            <div className="px-12 pt-12 mx-auto flex">
                <img src={SubGroup} className="object-scale-down pt-4 mx-auto object-left"
                    style={{ width: "50%", height: "50%" }}
                    alt="Sub-groups" loading="lazy">
                </img>
                <div className="px-12 pt-40 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Manage the group members by subgroups
                    </h1>
                    <p className="mb-4 px-12 pt-4 text-slate-500 text-justify">
                        The app also allows you to <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">organize community events and activities</span>. You can create events and invite specific subgroups to participate, ensuring that everyone who is interested in the activity is informed. You can also track attendance and manage sign-ups through the app, making event management much easier.
                    </p>
                </div>
            </div>
            
            <div className="px-12 pt-12 mx-auto flex">
                <div className="px-12 pt-40 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Post events and tweets among different subgroups
                    </h1>
                    <p className="mb-4 px-12 pt-4 text-slate-500 text-justify">
                        The app provides <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">public spaces</span> for your community, such as discussion forums or chat rooms, where members can connect and engage with each other. These spaces allow members to share ideas, ask questions, and offer support to one another, building a sense of community and belonging.
                    </p>
                </div>
                <img src={GroupEvent} className="object-scale-down pt-4 mx-auto object-left"
                        style={{ width: "50%", height: "50%" }}
                        alt="Group Event" loading="lazy">
                </img>
            </div>
            
            <div className="px-12 pt-12 mx-auto flex">
                <img src={Messaging} className="object-scale-down pt-4 mx-auto object-left"
                    style={{ width: "50%", height: "50%" }}
                    alt="Messaging" loading="lazy">
                </img>
                <div className="px-12 pt-40 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Messaging system by groups and subgroups
                    </h1>
                    <p className="mb-4 pt-4 px-12 text-slate-500 text-justify">
                        One of the key features of the messaging system is the ability to <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">assign permissions and subgroups</span> to your messages. You could create a message that is <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">only visible to</span> members of a certain age group, or a message that is <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">only visible to</span> members who have a particular interest.
                    </p>
                </div>
            </div>
            
            <div className="px-12 pt-12 mx-auto flex">
                <div className="px-12 pt-56 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Establish personal profiles by social identities
                    </h1>
                    <p className="mb-4 pt-4 px-12 text-slate-500 text-justify">
                        <li >Create your profiles <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">with specific tags</span> that allows you to be recognized</li>
                        <li><span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">Establish your identity</span> by the communities you join</li>
                        <li>Connect with others who share similar interests</li>
                    </p>
                </div>
                <img src={Profile} className="object-scale-down max-h-full mx-auto object-left"
                        style={{ width: "50%", height: "50%" }}
                        alt="User Profile" loading="lazy">
                </img>
            </div>
        </section>
    );
  }
  
  export default ProductFeatures;