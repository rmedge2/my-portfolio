import React from 'react';
import './WorkCard.css';
import WorkCard from './WorkCard';
import ProjectCardData from './WorkCardData';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {ProjectCardData.map((val, ind) => {
                return (
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work