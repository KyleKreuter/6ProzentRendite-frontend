import React, {useState} from 'react';
import RiskLevelComponent from "@/components/matcher/risk/RiskLevelComponent.jsx";
import SectorPreferenceComponent from "@/components/matcher/sector/SectorPreferenceComponent.jsx";
import {CpuChipIcon} from "@heroicons/react/24/solid/index.js";

const EtfMatcherComponent = () => {
    const [riskValue, setRiskValue] = useState("LOW")
    return (
        <div className={"w-full h-full px-4 py-4 bg-pastel-cyan/10 flex items-center justify-center"}>
            <div
                className={"w-full bg-white rounded-lg flex items-center justify-center px-4 py-8 flex-col gap-16 max-w-[900px]"}>
                <div className={"flex flex-col gap-2 items-center justify-center"}>
                    <p className={"text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-light-green to-pastel-blue"}>Teste
                        unseren ETF-Matcher</p>
                    <p className={"text-sm text-text-secondary text-center"}>Gib deine Präferenzen an und schaue, wie
                        unser ETF-Matcher funktioniert</p>
                </div>
                <RiskLevelComponent onRiskValueChange={(riskValue) => setRiskValue(riskValue)}/>
                <SectorPreferenceComponent
                    icon={
                        <div className={"w-10 h-10 bg-sky-200 rounded-md flex items-center justify-center text-sky-600"}>
                            <CpuChipIcon className={"size-8"}/>
                        </div>}
                    headline={"Technologie"}
                    color={{bg: "bg-sky-200", text: "text-sky-600"}}
                />
            </div>
        </div>
    );
};

export default EtfMatcherComponent;