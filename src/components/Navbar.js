import React from "react";
export default function Navbar() {
    return (
        <div id="navbar">
            <div id="nav-logo">
                <img src={require("../images/react-icon-small.png")} alt={"react logo"}/>
                <h2>ReactFacts</h2>
            </div>
            <h3 id="nav-name">React Course - Project 1</h3>
        </div>

    )
}