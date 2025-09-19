import React from 'react';
import LogoComponent from "./logo/LogoComponent.jsx";
import CompanyNameComponent from "./logo/CompanyNameComponent.jsx";

const NavBarComponent = () => {
    return (
        <div className={"h-16 flex items-center justify-between px-4"}>
            <div className={"flex items-center justify-center gap-4"}>
                <LogoComponent/>
                <CompanyNameComponent/>
            </div>
            <div>
                <button
                    className={"rounded-lg border px-2 py-1 border-pastel-blue hover:border-pastel-cyan hover:cursor-pointer transform transition-all duration-200"}>
                    <p className={"text-sm"}>Login</p>
                </button>
            </div>
        </div>
    );
};

export default NavBarComponent;