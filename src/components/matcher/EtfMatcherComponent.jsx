import React, {useState} from 'react';
import RiskLevelComponent from "@/components/matcher/risk/RiskLevelComponent.jsx";

const EtfMatcherComponent = () => {
    const [riskValue, setRiskValue] = useState("LOW")
    return (
        <div className={"w-full h-full px-4 py-4 bg-pastel-cyan/10 flex items-center justify-center"}>
            <div className={"w-full bg-white rounded-lg flex items-center justify-center px-4 py-8 flex-col gap-4 max-w-[900px]"}>
                <div className={"flex flex-col gap-2 items-center justify-center"}>
                    <p className={"text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-light-green to-pastel-blue"}>Teste unseren ETF-Matcher</p>
                    <p className={"text-sm text-text-secondary text-center"}>Gib deine Präferenzen an und schaue, wie unser ETF-Matcher funktioniert</p>
                </div>
                <RiskLevelComponent onRiskValueChange={(riskValue) => setRiskValue(riskValue)}/>
            </div>
        </div>
    );
};

export default EtfMatcherComponent;