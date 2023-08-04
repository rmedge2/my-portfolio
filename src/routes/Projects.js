import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import WorkCard from '../components/WorkCard'


const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Projects" text="Some of my works during my coding journey"/>
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Projects