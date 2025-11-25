import React from 'react';
import CompanyNameComponent from "@/components/logo/CompanyNameComponent.jsx";


const NavBarComponent = () => {
    return (
        <div className={"h-16 flex items-center justify-between px-4"}>
                <CompanyNameComponent/>
        </div>
    );
};

export default NavBarComponent;