import React from "react";
export default function Main(){
    return (
        <main id="main">
            <h1 id="main-title">Fun facts about React</h1>
            <ul id="main-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <img src={require("../images/react-icon-large.png")} id="react-body-img" alt={"react-logo"}/>
        </main>
    )
}