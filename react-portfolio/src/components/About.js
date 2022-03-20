import React from "react"
import dunkPhoto from "../images/TwoDunk.jpg"
import gradPhoto from "../images/Graduation.PNG"
import "../styles/About.css"

export default function About() {
    return (
        <div className="about">
            <div className="card">
                <h1>About</h1>
                <p>Hometown: Florence, SC</p>
                <p>College: Johnson C. Smith University (Basketball Player and Computer Science Major)</p>
                <p>Current Location: Charlotte, NC</p>
            </div>
            <div className="card-photo">
                <img src={dunkPhoto} style={{width: "431px", height: "313px"}} alt="" />
            </div>


            <div className="card-photo">
                <img src={gradPhoto} style={{width: "431px", height: "313px"}} alt="" />
            </div>
            <div className="card">
                <h1>Skills</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Angular</li>
                    <li>React</li>
                    <li>Boostrap</li>
                </ul>
            </div>

            <div className="big-card">
                <h1>Experience</h1>

                <h2>Ethical Hacker/Penetration Tester</h2>
                <p>Bank of America, Sept. 2020- Nov. 2021</p>

                <h2>Front End Developer (UI)</h2>
                <p>Bank of America, Jan. 2019- May 2020</p>

                <h2>Java Developer</h2>
                <p>Genesis10, Nov. 2018-Jan. 2019</p>

                <h2>.NET Developer</h2>
                <p>AGDATA, Apr. 2018-Jun. 2018</p>

            </div>
        </div>
    )
}