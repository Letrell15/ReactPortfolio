import React from "react"
import '../styles/Header.css'
import logo from "../images/react-logo.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <img src={logo} width="50px" alt="" />

                <div id="home">
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
            <div>Projects</div>
            <div>Contact</div>
        </header>
    )
}

export default Header;