import React from "react";
import "./Menu.css"
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import Contact from "../pages/Contact";

import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";

class Menu extends React.Component {
    render() {
        return <div>
            <BrowserRouter>
                <ul className="ui_menu">
                    <li className="ui_li"><a href="#/home">Home</a></li>
                    <li className="ui_li"><a href="#/about">About</a></li>
                    <li className="ui_li"><NavLink to="service">Service</NavLink></li>
                    <li className="ui_li"><Link to="contact">Contact</Link></li>
                    <li className="ui_li"><Link to="contact">Products</Link></li>
                </ul>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    }

};

export default Menu;