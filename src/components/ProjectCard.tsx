import React, { useEffect, useState } from 'react';
import CustomImage from './CustomImage';
import { Projects } from '../Data/ProjectData';

interface ProjectCardProps {
  project: Projects;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [animationClass, setAnimationClass] = useState<string>('');

  useEffect(() => {
    setAnimationClass('slide-in');
    const timer = setTimeout(() => setAnimationClass(''), 500);
    return () => clearTimeout(timer);
}, [animationClass]);


  return (
    <div className={animationClass}>
    <div className="recipe-card">
      <CustomImage imgSrc={project.image} pt="100%" mw='100%' />
      <div className="recipe-card-info">
        <img className="auther-img" src={project.imgCategory} alt="" />
        <p className="recipe-title">{project.title}</p>
        <p className="recipe-desc">{project.name} </p>
        <div className='buttons'>
           <a className="btn-category" href={`/project/${project.idProject}`} >
          VIEW PROJECT
        </a>
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
