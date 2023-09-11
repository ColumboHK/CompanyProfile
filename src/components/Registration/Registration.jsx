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
        <section className="bg-cyan-50">
            <h1 className="px-12 text-[2.5rem] font-semibold leading-normal capitalize sm:pr-8 xl:pr-10 pt-32">
                Registration
            </h1>
            <Container fluid className={"no-gutters px-0 py-12 justify-center align-center"}>
                <div className="px-12">
                    <div className="pb-2 flex" style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <label className="font-semibold pr-20">
                            First Name
                        </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                          focus:border-blue-500 block w-25 p-2.5 dark:bg-slate-300 dark:border-gray-600 
                                          dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                               type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name" required/>
                    </div>
                    <div className="pb-2 flex" style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <label className="font-semibold pr-20">
                            Last Name
                        </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                          focus:border-blue-500 block w-25 p-2.5 dark:bg-slate-300 dark:border-gray-600 
                                          dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               type="text" value={lastName} onChange = {(e) => handleInputChange(e)} id="lastName" placeholder="Last Name"/>
                    </div>
                    <div className="pb-2 flex" style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <label className="font-semibold pr-28">
                            Email
                        </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                          focus:border-blue-500 block w-25 p-2.5 dark:bg-slate-300 dark:border-gray-600 
                                          dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               type="text" value={email} onChange = {(e) => handleInputChange(e)} id="email" placeholder="Email"/>
                    </div>
                    <div className="pb-2 flex" style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <label className="font-semibold pr-20">
                            Password
                        </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                          focus:border-blue-500 block w-25 p-2.5 dark:bg-slate-300 dark:border-gray-600 
                                          dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               type="text" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Password"/>
                    </div>
                    <div className="pb-2 flex" style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <label className="font-semibold pr-4">
                            Confirm Password
                        </label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                          focus:border-blue-500 block w-25 p-2.5 dark:bg-slate-300 dark:border-gray-600 
                                          dark:placeholder-gray-500 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                               type="text" value={confirmPassword} onChange = {(e) => handleInputChange(e)} id="confirmPassword" placeholder="Confirm Password"/>
                    </div>
                    <div className="pb-2 flex" style={{ justifyContent: 'center', alignItems: 'center'}}>
                        <button onClick={()=>handleSubmit()} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
                            Register
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
  }
  
  export default Registration;