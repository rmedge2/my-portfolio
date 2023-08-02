import React from 'react'
import "./Footer.css"
import { FaHome, FaMailBulk, FaPhone } from 'react-icons/fa'

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
                    About the company
                </div>
            </div>
        </div>
    )
}

export default Footer