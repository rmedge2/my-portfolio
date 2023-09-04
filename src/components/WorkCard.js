import React from 'react'
import "./WorkCard.css"
// import pro1 from "../assets/Netflix-and-Grill.png"
import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
        <div className="project-container">
            <div className='project-card'>
                <h2 className="project-title">{props.title}</h2>
                <img src={props.imgsrc} alt="image"/>
                <div className='project-details'>
                    <p>{props.text}</p>
                </div>
                <div className='pro-btns2'>
                    <NavLink to={props.site} className='btn'>Site</NavLink>
                    <NavLink to={props.repo} className='btn'>Github</NavLink>
                </div>
            </div>
        </div>
  )
}

export default WorkCard