import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"
import HeadShot from "../images/HeadShot.jpg"
import '../styles/MainHome.css'

export default function MainHome() {

    const github = <FontAwesomeIcon icon="fa-brands fa-github" />

    return (
        <div id="main">
            <div className="img">
                <img src={HeadShot} style={{borderRadius: "264.5px", width: "300px", height: "300px"}} alt="" />
            </div>

            <div className="info">
                {github}
                <p id="name">Alandre Davis</p>
                <p id="name-title">UI/UX Designer</p>
                <Link to="/about" class="checkoutLink">
                    <button>See More</button>
                </Link>
            </div>
        </div>
        
    )
}