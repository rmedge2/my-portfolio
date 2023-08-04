import React from 'react'
import "./Footer.css"
import {  FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Douglasville, GA</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        +1 (678) 852-7809</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        rodneyedgejr@gmail.com</h4>
                    </div>
                </div>

                <div className='right'>
                    <h4>About the software developer</h4>
                    <p>This is Rodney Edge, Jr. I am the owner of this portfolio and I like new projects.</p>
                    <div className='social'>
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer