// CustomImage.tsx
import React from 'react';

interface CustomImageProps {
    imgSrc: string;
    pt: string;
    mw:string;
}

const CustomImage: React.FC<CustomImageProps> = ({ imgSrc, pt, mw}) => {
    return (
        <div className="custom-image" style={{paddingTop: pt, maxWidth: mw}}>
            <img src={imgSrc} alt="" />
        </div>
    );
};

export default CustomImage;
