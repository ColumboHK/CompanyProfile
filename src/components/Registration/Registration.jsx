import { React, useState,} from "react";
// Using react-boostrap for a gridded layout
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Registration = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

    return (
        <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <Container fluid className={"no-gutters mx-0 px-0 pt-28"}>
                <div className="">
                    <Container fluid className={"no-gutters mx-0 px-0"}>
                        <h1 className="heading font-mono font-bold mx-28">
                            Registration
                        </h1>
                    </Container>
                    <Container className="pt-12">
                        <div>
                            <label className="">
                                First Name
                            </label>
                            <input className="" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                        </div>
                        <div>
                            <label className="">
                                Last Name
                            </label>
                            <input className="" type="text" value={lastName} onChange = {(e) => handleInputChange(e)} id="lastName" placeholder="Last Name"/>
                        </div>
                        <div>
                            <label className="">
                                Email
                            </label>
                            <input className="" type="text" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="Email"/>
                        </div>
                        <div>
                            <label className="">
                                Password
                            </label>
                            <input className="" type="text" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Password"/>
                        </div>
                        <div>
                            <label className="">
                                Confirm Password
                            </label>
                            <input className="" type="text" value={confirmPassword} onChange = {(e) => handleInputChange(e)} id="confirmPassword" placeholder="Confirm Password"/>
                        </div>
                    </Container>
                    <Container className="">
                        <div>
                            <button onClick={()=>handleSubmit()} type="submit" className="">
                                Register
                            </button>
                        </div>
                    </Container>
                </div>
            </Container>
        </section>
    );
  }
  
  export default Registration;