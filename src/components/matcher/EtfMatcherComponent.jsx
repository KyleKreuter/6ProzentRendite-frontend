import React, {useState} from 'react';
import RiskLevelComponent from "@/components/matcher/risk/RiskLevelComponent.jsx";
import SectorPreferenceComponent from "@/components/matcher/sector/SectorPreferenceComponent.jsx";
import {CpuChipIcon, CurrencyDollarIcon, HeartIcon, LightBulbIcon} from "@heroicons/react/24/solid/index.js";
import Modal from "@/modal/Modal.jsx";
import ETFMatcherResultModal from "@/modal/matcher/ETFMatcherResultModal.jsx";

const EtfMatcherComponent = () => {
    const [riskValue, setRiskValue] = useState("MEDIUM")
    const [sectors, setSectors] = useState({})
    const [etfMatcherResultModalOpen, setEtfMatcherResultModalOpen] = useState(false)

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
                                className={"w-10 h-10 bg-lime-200 rounded-md flex items-center justify-center text-lime-600"}>
                                <CpuChipIcon className={"size-8"}/>
                            </div>}
                        headline={"Technologie"}
                        color={{bg: "bg-lime-200", text: "text-lime-600"}}
                        onWeightChange={(weight) => {
                            setSectors((prev) => ({ ...prev, TECHNOLOGY: weight }));
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
                            setSectors((prev) => ({ ...prev, HEALTHCARE: weight }));
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
                            setSectors((prev) => ({ ...prev, ENERGY: weight }));
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
                            setSectors((prev) => ({ ...prev, FINANCIAL: weight }));
                        }}
                    />
                </div>
                <button
                    className={"w-full p-4 flex items-center justify-center border border-pastel-blue rounded-lg hover:cursor-pointer hover:border-pastel-cyan transform transition-all duration-200"}
                    onClick={() => setEtfMatcherResultModalOpen(true)}>Passende ETFs anzeigen
                </button>
            </div>
            <Modal isOpen={etfMatcherResultModalOpen} onClickOutside={() => setEtfMatcherResultModalOpen(false)}>
                <ETFMatcherResultModal onExit={() => setEtfMatcherResultModalOpen(false)} compositionRisk={riskValue} foci={sectors}/>
            </Modal>
        </div>
    );
};

export default EtfMatcherComponent;