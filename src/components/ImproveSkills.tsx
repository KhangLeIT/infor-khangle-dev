import React, { useState, useEffect } from 'react';
import { Category, skillsList } from '../Data/SkillData';


const ImproveSkills: React.FC = () => {
    const skills = skillsList
    const [selectedCategory, setSelectedCategory] = useState<Category>('all');
    const [animationClass, setAnimationClass] = useState<string>('');

    const filteredSkills = selectedCategory === 'all' ? skills : skills.filter(skill => skill.category === selectedCategory);

    useEffect(() => {
        setAnimationClass('slide-in');
        const timer = setTimeout(() => setAnimationClass(''), 500);
        return () => clearTimeout(timer);
    }, [selectedCategory]);

    return (
        <div>
            <div>
            <div className="col typography">
                <h1 className="title">My Skills</h1>
            </div>
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
                {filteredSkills.map((skill, index) => (
                    <div key={index}>
                        <button className="btn-blue">{skill.title}</button>

                        <div className="section improve-skills">
                            <div className="col img">
                                <img src={skill.img} alt={skill.title} />
                            </div>
                            <div className="col typography">
                                <h1 className="title">{skill.title}</h1>
                                {skill.items.map((item, idx) => (
                                    <p className="skill-item" key={idx}>{item}</p>
                                ))}
                                <button className="btn"> Experience {skill.experience} y</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImproveSkills;
