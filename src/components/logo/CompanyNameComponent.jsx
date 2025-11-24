import React from 'react';

const CompanyNameComponent = () => {
    return (
        <span className="relative inline-block cursor-pointer group font-semibold">
            {/* Base gradient */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-dark-green to-light-green transition-opacity duration-[400ms] group-hover:opacity-0">
                6ProzentRendite
            </span>
            {/* Hover gradient - positioned absolutely on top */}
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-light-green to-dark-green opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100">
                6ProzentRendite
            </span>
        </span>
    );
};

export default CompanyNameComponent;