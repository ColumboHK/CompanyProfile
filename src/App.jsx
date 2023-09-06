import React, { useState, useEffect } from "react";
import logo from './Assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Home from "./components/Home/Home";
import PreLoader from "./components/PreLoader";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/About/About";
import Registration from "./components/Registration/Registration";
import UseCases from "./components/UseCases/UseCases";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import Error from "./components/errorPage";
import Footer from "./components/Footer";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    HashRouter
} from "react-router-dom";

const App = () => {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <HashRouter>
            <PreLoader load={load} />
            <div className="">
                <NavBar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/about" element={<About />} /> */}
                    {/* <Route path="*" element={<Navigate to="/"/>} /> */}
                    <Route path="/registration" element={<Registration />} />
                    <Route path="/usecases" element={<UseCases />} />
                    <Route path="/productfeatures" element={<ProductFeatures />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </div>
        
        </HashRouter>
    );
}

export default App;
