import React, {useState} from 'react';
import RiskLevelComponent from "@/components/matcher/risk/RiskLevelComponent.jsx";
import SectorPreferenceComponent from "@/components/matcher/sector/SectorPreferenceComponent.jsx";
import {CpuChipIcon, CurrencyDollarIcon, HeartIcon, LightBulbIcon} from "@heroicons/react/24/solid/index.js";

const EtfMatcherComponent = () => {
    const [riskValue, setRiskValue] = useState("MEDIUM")
    const [sectors, setSectors] = useState([])

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
                <div className={"flex items-center justify-center gap-4 flex-wrap w-full md:grid md:grid-cols-2"}>

                    <SectorPreferenceComponent
                        icon={
                            <div
                                className={"w-10 h-10 bg-sky-200 rounded-md flex items-center justify-center text-sky-600"}>
                                <CpuChipIcon className={"size-8"}/>
                            </div>}
                        headline={"Technologie"}
                        color={{bg: "bg-sky-200", text: "text-sky-600"}}
                        onWeightChange={(weight) => {
                            setSectors([...sectors, {
                                "TECHNOLOGY": weight
                            }])
                        }}
                    />
                    <SectorPreferenceComponent
                        icon={
                            <div
                                className={"w-10 h-10 bg-green-200 rounded-md flex items-center justify-center text-green-600"}>
                                <HeartIcon className={"size-8"}/>
                            </div>}
                        headline={"Gesundheit"}
                        color={{bg: "bg-green-200", text: "text-green-600"}}
                        onWeightChange={(weight) => {
                            setSectors([...sectors, {
                                "HEALTHCARE": weight
                            }])
                        }}
                    />
                    <SectorPreferenceComponent
                        icon={
                            <div
                                className={"w-10 h-10 bg-amber-200 rounded-md flex items-center justify-center text-amber-600"}>
                                <LightBulbIcon className={"size-8"}/>
                            </div>}
                        headline={"Energie"}
                        color={{bg: "bg-amber-200", text: "text-amber-600"}}
                        onWeightChange={(weight) => {
                            setSectors([...sectors, {
                                "FINANCIAL": weight
                            }])
                        }}
                    />
                    <SectorPreferenceComponent
                        icon={
                            <div
                                className={"w-10 h-10 bg-fuchsia-200 rounded-md flex items-center justify-center text-fuchsia-600"}>
                                <CurrencyDollarIcon className={"size-8"}/>
                            </div>}
                        headline={"Finanzen"}
                        color={{bg: "bg-fuchsia-200", text: "text-fuchsia-600"}}
                        onWeightChange={(weight) => {
                            setSectors([...sectors, {
                                "FINANCIAL": weight
                            }])
                        }}
                    />
                </div>
                <div className={"w-full p-4 flex items-center justify-center border border-pastel-blue rounded-lg hover:cursor-pointer hover:border-pastel-cyan transform transition-all duration-200"}>
                    <button>Passende ETFs anzeigen</button>
                </div>
            </div>
        </div>
    );
};

export default EtfMatcherComponent;