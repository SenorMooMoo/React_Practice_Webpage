import Main from "./components/Main"
import Navbar from "./components/Navbar"

import React from "react";
import './style.css';

export default function App(){
    return (
        <div id="container">
            <Navbar />
            <Main />
        </div>
    )
}