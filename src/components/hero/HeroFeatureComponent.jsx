import React from 'react';

const HeroFeatureComponent = ({icon, text, pillClassName, textClassName}) => {
    return (
        <div className={`flex items-center gap-2 py-1 px-3 rounded-full ${pillClassName && pillClassName}`}>
            {icon} <p className={textClassName}>{text}</p>
        </div>
    );
};

export default HeroFeatureComponent;