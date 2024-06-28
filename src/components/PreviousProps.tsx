import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

interface PreviousProps {
    // Define props if any
}

const PreviousProps: React.FC<PreviousProps> = (props) => {
    const skills: string[] = ['Reactjs', 'React Native', 'Java', 'C# .Net', 'Nodejs']
    const sdks: string[] = ['VS Code', 'Vs Studio', 'Eclipse', 'Netbean', 'Android studio']
    const database: string[] = ['MySQL', 'SQL Server', 'Firebase', 'Mongodb', '000Webhost']
    const ol: string[] = ['Vercel', 'Render', 'Github', 'Cloud', 'ChatGPT']

    const [animationClass, setAnimationClass] = useState<string>('');



    return (
        <div className="previous-searches section">
            <h2>All My Skills </h2>
            <div className="previous-searches-container">
                {skills.map((skill, index) => (
                    <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="search-item">
                        {skill}
                    </div>
                ))}
            </div>
            <div className="previous-searches-container">
                {sdks.map((skill, index) => (
                    <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="search-item">
                        {skill}
                    </div>
                ))}
            </div>
            <div className="previous-searches-container">
                {database.map((skill, index) => (
                    <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="search-item">
                        {skill}
                    </div>
                ))}
            </div>
            <div className="previous-searches-container">
                {ol.map((skill, index) => (
                    <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="search-item">
                        {skill}
                    </div>
                ))}
            </div>

            <h2>My Address </h2>

            <div className={animationClass}>
                <div>
                    <div className="section improve-skills">   
                    <div className="col img">
                                <img src='/img/gallery/cvAVT.jpg' />
                            </div>            
                        <div className="col typography">
                            <h1 className="title">Information</h1>                     
                            <p className="skill-item" > Full Name: Le Tan Khang</p>     
                            <p className="skill-item" > Birthday: 15/12/2001</p>   
                            <p className="skill-item" > Email: khang1512.it2001@gmail.com</p>   
                            <p className="skill-item" > Phone: 0788949502</p>  
                            <p className="skill-item" > Github: github.com/KhangLeIT</p>
                            <p className="skill-item" > Zalo: 0788949502</p>                            
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default PreviousProps;
