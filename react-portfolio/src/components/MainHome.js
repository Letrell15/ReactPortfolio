import React from "react"
import HeadShot from "../images/HeadShot.jpg"
import '../styles/MainHome.css'

export default function MainHome() {
    return (
        <div id="main">
            <div className="img">
                <img src={HeadShot} style={{borderRadius: "264.5px", width: "300px", height: "300px"}} />
            </div>

            <div className="info">
                <p id="name">Alandre Davis</p>
                <p id="name-title">UI/UX Designer</p>
                <button>See More</button>
            </div>
        </div>
        
    )
}