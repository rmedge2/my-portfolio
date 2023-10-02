import { Link } from "react-router-dom"
import "./AboutContent.css"
import BASS from "../assets/Bass_Face.JPEG"
import Headshot from "../assets/Headshot.JPG"

import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am I?</h1>
                <p>
                    I am a full stack developer with front-end knowledge in React. I am daily striving to improve my ability to create responsive and secure websites for myself and for my clients.
                </p>
                <Link to='/contact'>
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={Headshot} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={BASS} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent