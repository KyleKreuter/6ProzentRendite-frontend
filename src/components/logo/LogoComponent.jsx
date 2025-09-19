import React from 'react';
import {ArrowTrendingUpIcon} from "@heroicons/react/24/solid/index.js";

const LogoComponent = () => {
    return (
        <div className={"w-8 h-8 rounded-lg bg-gradient-to-r from-gradient-dark-green to-gradient-light-green flex items-center justify-center p-1"}>
            <ArrowTrendingUpIcon className={"text-white"}/>
        </div>
    );
};

export default LogoComponent;