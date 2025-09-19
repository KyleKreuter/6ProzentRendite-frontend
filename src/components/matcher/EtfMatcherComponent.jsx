import React from 'react';

const EtfMatcherComponent = () => {
    return (
        <div className={"w-full h-full px-4 py-4 bg-pastel-cyan/10"}>
            <div className={"w-full bg-white rounded-lg flex items-center justify-center px-4 py-8 flex-col gap-4"}>
                <div className={"flex flex-col gap-2 items-center justify-center"}>
                    <p className={"text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-light-green to-pastel-blue"}>Teste unseren ETF-Matcher</p>
                    <p className={"text-sm text-text-secondary"}>Gib deine Präferenzen an und schaue, wie unser ETF-Matcher funktioniert</p>
                </div>

            </div>
        </div>
    );
};

export default EtfMatcherComponent;