import React from "react"
import '../styles/Header.css'
import logo from "../images/react-logo.png"

function Header() {
    return (
        <header>
            <img src={logo} width="50px" />

            <div id="home">Home</div>
            <div>About</div>
            <div>Projects</div>
            <div>Contact</div>
        </header>
    )
}

export default Header;