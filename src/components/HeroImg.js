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
        <p>I am a software engineer based in Douglasville, Georgia.</p>
        <h1>Hi, I'm Rodney</h1>
        <div>
          <Link to='/projects' className="btn">Projects</Link>
          <Link to='/contact' className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
