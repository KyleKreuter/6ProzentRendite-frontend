import React from 'react';
import HeroFeatureComponent from "@/components/hero/HeroFeatureComponent.jsx";
import {GlobeEuropeAfricaIcon, ShieldCheckIcon} from "@heroicons/react/24/outline/index.js";

const HeroTextComponent = () => {
    return (
        <div className={"flex items-center justify-center py-8 px-4 flex-col gap-4"}>
            <p className={"text-4xl md:text-5xl max-w-[600px] text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-light-green to-pastel-blue"}>Finde
                ETFs - individuell nach Deinen Bedürfnissen</p>
            <p className={"text-text-secondary max-w-[700px] text-center"}>
                Finde ETFs, die zu deinem Lifestyle und deiner Risikobereitschaft passen. Unser intelligentes
                ETF‑Matching analysiert hunderte ETFs und stellt die perfekte, maßgeschneiderte Auswahl für dich
                zusammen.
            </p>
            <div className={"flex items-center justify-center gap-8"}>
                <HeroFeatureComponent text={"Risikoeinschätzung"} icon={<ShieldCheckIcon className={"size-4 stroke-2 text-amber-600"}/>} pillClassName={"bg-amber-200"} textClassName={"text-amber-600"}/>
                <HeroFeatureComponent text={"Sektor-Filter"} icon={<GlobeEuropeAfricaIcon className={"size-4 stroke-2 text-sky-600"}/>} pillClassName={"bg-sky-200"} textClassName={"text-sky-600"}/>
                <HeroFeatureComponent text={"Langfristige Gewinne"} icon={<ShieldCheckIcon className={"size-4 stroke-2 text-fuchsia-600"}/>} pillClassName={"bg-fuchsia-200"} textClassName={"text-fuchsia-600"}/>
            </div>
        </div>
    );
};

export default HeroTextComponent;