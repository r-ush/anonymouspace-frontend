import React from "react";
import logofull from "../../assets/logofull.svg";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="nav">
            <img className="logo" src={logofull} alt="logo" />
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://google.com"
                className="downloadapk"
            >
                Download Apk
            </a>
        </div>
    );
};

export default Navbar;
