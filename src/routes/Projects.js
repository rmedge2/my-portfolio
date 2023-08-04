import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'


const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Projects" text="Some of my works during my coding journey"/>
      <Work/>
      <Footer />
    </div>
  )
}

export default Projects