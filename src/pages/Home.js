import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/contact");
    }

    return <div>
        <button type="button" onClick={handleClick}>
           Contact
        </button>
    </div>
};

export default Home;