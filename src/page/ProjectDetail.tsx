// src/ProjectDetail.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectsList } from '../Data/ProjectData';

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projectsList.find((p) => p.idProject === parseInt(id || '', 10));

    const openDemo = (url: string) => {
        if (url.length <= 1 || (!url || url === '#')) {
            alert('No demo link available for this project.');
            return;
        }
        window.open(url, '_blank');
    }
    const [animationClass, setAnimationClass] = useState<string>('');

    useEffect(() => {
        setAnimationClass('slide-in');
        const timer = setTimeout(() => setAnimationClass(''), 500);
        return () => clearTimeout(timer);
    }, []);


    if (!project) {
        return <div>Project not found</div>;
    }
    return (
        <div>
            <div className={animationClass}>
                <h1 className="title">{project.title}</h1>
            </div>
            <div className="section improve-skills">

                <div className="col img">
                    <img src={'../' + project.image} alt="" />
                </div>
                <div className="col typography">

                    {project.infor.map((item, index) => (
                        <p className="skill-item" key={index}>{item}</p>
                    ))}
                    <div className={animationClass}>
                        <button className="btn-category" onClick={() => openDemo(project.linkDemo)} >Watching Demo</button>
                    </div>
                </div>

            </div>
            <div className={animationClass}>
                {project.linkBE && project.linkBE !== '#' ? (
                    <div className="buttons">
                        <button className="btn-category" onClick={() => openDemo(project.linkBE)} > Watching Backend</button>
                        <button className="btn-category" onClick={() => openDemo(project.linkFE)} > Watching Frontend</button>
                    </div>

                ) : (
                    <div className="buttons">
                        <button className="btn-category" onClick={() => openDemo(project.linkFE)}>Watching code</button>
                    </div>
                )}</div>
            <div className="col gallery">
                {project.imgProject.map((src, index) => (
                    <div key={index}>
                        <hr style={{ marginTop: '40px', marginBottom: '20px', fontWeight: 'bold' }} />
                        <h2 style={{ marginTop: '40px', marginBottom: '20px', fontWeight: 'bold' }}>{src.about[0]}</h2>
                        <div className="section improve-skills">

                            <div className="col img">
                                <img
                                    src={"../img/imgProject/" + src.url}
                                    alt=""
                                />
                            </div>
                            <div className="col typography">

                                {src.about.map((item, index) => (
                                    <p className="skill-item" key={index}>{item}</p>
                                ))}

                            </div>
                        </div>
                    </div>

                ))}
            </div>



        </div>


    );
};

export default ProjectDetail;
