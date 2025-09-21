import React from 'react';
import {ShieldCheckIcon} from "@heroicons/react/24/outline/index.js";
import {BuildingOffice2Icon} from "@heroicons/react/24/solid/index.js";

const RISK_COLORS = {
    "LOW": {
        bg: "bg-green-200",
        text: "text-green-600",
        display: "Sehr niedrig"

    },
    "LOW_AVE": {
        bg: "bg-sky-200",
        text: "text-sky-600",
        display: "Niedrig"
    },
    "MEDIUM": {
        bg: "bg-amber-200",
        text: "text-amber-600",
        display: "Mittel"
    },
    "HIGH_AVE": {
        bg: "bg-red-200",
        text: "text-red-600",
        display: "Hoch"
    },
    "HIGH": {
        bg: "bg-red-200",
        text: "text-red-600",
        display: "Sehr hoch"
    },
}

const ETFCard = ({etf}) => {
    return (
        <div
            className={"w-full rounded-lg border-pastel-blue border-2 flex items-center justify-center flex-col gap-4"}>
            <div className={"bg-pastel-cyan/20 flex flex-col p-4 w-full gap-2"}>
                <div className={"flex items-center justify-between w-full"}>
                    <div className={"flex items-center justify-center gap-2"}>
                        <div className={"rounded-lg border bg-white border-pastel-cyan px-2 py-1 text-xs"}>
                            {etf.fundSymbol}
                        </div>
                        <div
                            className={`flex gap-1 items-center justify-center rounded-lg border bg-white border-pastel-cyan px-2 py-1 text-xs ${RISK_COLORS[etf.risk].bg} ${RISK_COLORS[etf.risk].text}`}>
                            <ShieldCheckIcon className={"stroke-2 size-4"}/>
                            <p>{RISK_COLORS[etf.risk].display}</p>
                        </div>
                    </div>
                    <div
                        className={"rounded-lg border-pastel-cyan border px-2 py-1 text-xs flex items-center justify-center gap-1 text-fuchsia-600 bg-white"}>
                        <BuildingOffice2Icon className={"size-4 stroke-2"}/>
                        <p>{etf.size}</p>
                    </div>
                </div>
                <div className={"flex items-center justify-between w-full"}>
                    <div>
                        <p className={"font-semibold"}>{etf.fundShortName}</p>
                        <p className={"text-sm"}>{etf.fundCategory}</p>
                    </div>
                    <p className={"font-semibold text-sm"}>${etf.totalNetAssets}M</p>
                </div>
                <div className={"flex items-center justify-between w-full bg-light-green/20 rounded-lg px-4 py-2"}>
                    <p className={"text-sm font-semibold"}>YTD Rendite</p>
                    <p className={"text-green-600 font-semibold"}>{etf.returnYTD}%</p>
                </div>
                <div className={"flex items-center justify-between w-full bg-white/80 rounded-lg px-4 py-2"}>
                    <p className={"text-sm font-semibold"}>% Jährliche Kosten</p>
                    <p className={"font-semibold"}>{etf.costsPerYear}%</p>
                </div>
            </div>
        </div>
    );
};

export default ETFCard;