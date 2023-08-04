import React from 'react'
import "./WorkCard.css"
import pro1 from "../assets/Netflix-and-Grill.png"
import { NavLink } from 'react-router-dom'

const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className="project-container">
            <div className='project-card'>
                <img src={pro1} alt="image"/>
                <h2 className="project-title">Title</h2>
                <div className='pro-details'>
                    <p>This is text</p>
                </div>
                <div className='pro-btns'>
                    <NavLink to="https://rmedge2.github.io/netflix-and-grill/" className='btn'>View</NavLink>
                    <NavLink to="https://github.com/rmedge2/netflix-and-grill" className='btn'>Source</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard