import React from "react";
import LogoIcon from "../images/Logo.jpg";
import "./LogoComponent.css";

function Logo(){
    return <div className="logo">
       <img src={LogoIcon} alt="Logo"/>
    </div>
};

export default Logo;