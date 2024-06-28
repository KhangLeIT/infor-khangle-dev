
import React, { useEffect, useState } from 'react';
import { projectsList } from '../Data/ProjectData';
import ProjectCard from '../components/ProjectCard';
import { Category } from '../Data/SkillData';


const Projects: React.FC = () => {
    const skills: string[] = ['Reactjs', 'React Native', 'Java', 'C# .Net', 'Nodejs', 'Android']
    const projects = projectsList;
    const [selectedCategory, setSelectedCategory] = useState<Category>('all');
    const [animationClass, setAnimationClass] = useState<string>('');

    const filteredSkills = selectedCategory === 'all' ? projects : projects.filter(project => project.type === selectedCategory);

    useEffect(() => {
        setAnimationClass('slide-in');
        const timer = setTimeout(() => setAnimationClass(''), 320);
        return () => clearTimeout(timer);
    }, [selectedCategory]);

    return (
        <div className="previous-searches section">
            <div className="previous-searches-container">
                {skills.map((skill, index) => (
                    <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="search-item">
                        {skill}
                    </div>
                ))}
            </div>
            <div className="buttons">

                <button
                    className={selectedCategory === 'all' ? 'btn-category active' : 'btn-category'}
                    onClick={() => setSelectedCategory('all')}
                >
                    All
                </button>
                <button
                    className={selectedCategory === 'web' ? 'btn-category active' : 'btn-category'}
                    onClick={() => setSelectedCategory('web')}
                >
                    Web
                </button>
                <button
                    className={selectedCategory === 'app' ? 'btn-category active' : 'btn-category'}
                    onClick={() => setSelectedCategory('app')}
                >
                    App
                </button>
            </div>
            <div className={animationClass}>
            <div className="recipes-container">
                
                {filteredSkills.map((skill, index) => (
                    <div key={index}>
                        <ProjectCard key={index} project={skill} />

                    </div>
                ))}
                

            </div>
            </div>


        </div>
    );
};

export default Projects;