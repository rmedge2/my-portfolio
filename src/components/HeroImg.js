import './HeroImg.css';
import React from 'react';
import IntroImg from "../assets/complete-guide.jpg"
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-img' src={IntroImg} alt="IntroImg" />
      </div>
      <div className='content'>
        <p>I AM A FREELANCER</p>
        <h1>Full-Stack Developer</h1>
        <div>
          <Link to='/projects' className="btn">Projects</Link>
          <Link to='/contact' className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
