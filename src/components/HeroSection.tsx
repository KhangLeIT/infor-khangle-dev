import React, { useEffect, useState } from 'react';
import CustomImage from './CustomImage';

const HeroSection: React.FC = () => {
    const images: string[] = [
        '/img/gallery/cvAVT.jpg'
    ];

    const openMyCV = () => {
        const urlCV = 'HTTPS://VN.JOBOKO.COM/XEM-CV/LE-TAN-KHANG-733144176572DEED-2837093'
        window.open(urlCV, '_blank');
    }
    const openEmail = () => {
        const email = 'khang1512.it2001@gmail.com';
        window.location.href = `mailto:${email}`;
    }
    const openFacebook = () => {
        const idFace = 'KhangLeIT';
        window.open(`https://facebook.com/${idFace}`, '_blank');
    }

    const [animationClass, setAnimationClass] = useState<string>('');

    useEffect(() => {
        setAnimationClass('slide-in');
        const timer = setTimeout(() => setAnimationClass(''), 500);
        return () => clearTimeout(timer);
    }, []);

    return (

        <div className="section hero">
            <div className="col typography">
                <div className={animationClass}>
                    <h1 className="title">Who I Am?</h1>
                    <p className="info">
                        KhangLeIT, My name is Le Tan Khang <br /> I graduate in December 2023
                        <br />I am an  <b> Web/App Developer</b>
                    </p>
                    <div className='buttons'>
                        <button className="btn-category" onClick={openMyCV}>Watching CV</button>
                    </div>
                </div>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt="90%" mw='100%' />
                ))}
            </div>
            <div className={animationClass}>
            <button className="btn-category" onClick={openEmail}>Contact Email</button>
            <button className="btn-category" onClick={openFacebook}>Contact Facebook</button>
            </div>
        </div>

    );
};

export default HeroSection;
