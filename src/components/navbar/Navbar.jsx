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
                href="https://drive.google.com/file/d/16PRllTm81TJir_p7tJuTsV6bvB-D7GhU/view"
                className="downloadapk"
            >
                Download Apk
            </a>
        </div>
    );
};

export default Navbar;
