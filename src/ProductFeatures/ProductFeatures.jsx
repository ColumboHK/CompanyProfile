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

import GroupSettings from "../Assets/GroupSettings.png";
import SubGroup from "../Assets/SubGroup.png";
import GroupEvent from "../Assets/GroupEvent.png";
import Messaging from "../Assets/Messaging.png";
import Profile from "../Assets/Profile.png";

const ProductFeatures = () => {
    return (
        <section className="bg-cyan-50">
            <div className="px-12 pt-40 mx-auto flex">
                <div className="px-12 pt-40 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Various settings of groups and subgroups
                    </h1>
                    <p className="mb-4 pt-4 text-slate-500">
                        When creating a new community, you can specify the name, description, and purpose of the community. 
                        <br/>
                        You can also set the group's visibility, whether it's public or private, and decide who can join the group.
                        <br/>
                        You can also set criteria for membership, such as age, gender, location, interests, or any other relevant factors.
                    </p>
                </div>
                <img src={GroupSettings} className="object-scale-down pt-4 max-h-full mx-auto object-left"
                        alt="Group Settings" loading="lazy">
                </img>
            </div>
            
            <div className="px-12 pt-12 mx-auto flex">
                <img src={SubGroup} className="object-scale-down pt-4 max-h-full mx-auto object-left"
                    alt="Sub-groups" loading="lazy">
                </img>
                <div className="px-12 pt-40 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Manage the group members by subgroups.
                    </h1>
                    <p className="mb-4 pt-4 text-slate-500">
                        The app also allows you to organize community events and activities. 
                        <br/>
                        You can create events and invite specific subgroups to participate, ensuring that everyone who is interested in the activity is informed.
                        <br/>
                        You can also track attendance and manage sign-ups through the app, making event management much easier.
                    </p>
                </div>
            </div>
            
            <div className="px-12 pt-12 mx-auto flex">
                <div className="px-12 pt-40 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Post events and tweets among different subgroups.
                    </h1>
                    <p className="mb-4 pt-4 text-slate-500">
                        The app provides public spaces for your community, such as discussion forums or chat rooms, where members can connect and engage with each other. 
                        <br/>
                        These spaces allow members to share ideas, ask questions, and offer support to one another, building a sense of community and belonging.
                    </p>
                </div>
                <img src={GroupEvent} className="object-scale-down pt-4 max-h-full mx-auto object-left"
                        alt="Group Event" loading="lazy">
                </img>
            </div>
            
            <div className="px-12 pt-12 mx-auto flex">
                <img src={Messaging} className="object-scale-down pt-4 max-h-full mx-auto object-left"
                    alt="Messaging" loading="lazy">
                </img>
                <div className="px-12 pt-40 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Messaging system by groups and subgroups.
                    </h1>
                    <p className="mb-4 pt-4 text-slate-500">
                        One of the key features of the messaging system is the ability to assign permissions and subgroups to your messages.  
                        <br/>
                        This means that you can choose who has access to your messages by specifying which subgroups or individuals can see them.
                        <br/>
                        For example, you could create a message that is only visible to members of a certain age group, or a message that is only visible to members who have a particular interest.
                    </p>
                </div>
            </div>
            
            <div className="px-12 pt-12 mx-auto flex">
                <div className="px-12 pt-40 text-xl">
                    <h1 className="px-12 text-[2.5rem] font-bold leading-tight capitalize">
                        Create your profiles with specific tags that allows you to be recognized.
                    </h1>
                    <p className="mb-4 pt-4 text-slate-500">
                        You can establish your identity within the communities you join and connect with others who share similar interests.
                    </p>
                </div>
                <img src={Profile} className="object-scale-down max-h-full mx-auto object-left"
                        alt="User Profile" loading="lazy">
                </img>
            </div>
        </section>
    );
  }
  
  export default ProductFeatures;