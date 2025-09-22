import React from 'react';
import {ShieldCheckIcon, StarIcon} from "@heroicons/react/24/outline/index.js";
import {BuildingOffice2Icon, ChartBarIcon, SparklesIcon} from "@heroicons/react/24/solid/index.js";

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

    const percentage = ((etf._50dAve - etf._52wLow) / (etf._52wHigh - etf._52wLow)) * 100;

    return (
        <div
            className={"w-full rounded-lg border-gray-300 border-2 flex items-center justify-center flex-col gap-4"}>
            <div className={"bg-sky-300/10 flex flex-col p-4 w-full gap-2"}>
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
                        <p className={"text-sm"}>{etf.fundCategory ? etf.fundCategory : "N/A"}</p>
                    </div>
                    <p className={"font-semibold text-sm"}>${etf.totalNetAssets}M</p>
                </div>
                <div className={"flex items-center justify-between w-full bg-light-green/20 rounded-lg p-2"}>
                    <p className={"text-sm font-semibold"}>YTD Rendite</p>
                    <p className={"text-green-600 font-semibold"}>{etf.returnYTD}%</p>
                </div>
                <div className={"flex items-center justify-between w-full bg-white/80 rounded-lg p-2"}>
                    <p className={"text-sm font-semibold"}>% Jährliche Kosten</p>
                    <p className={"font-semibold"}>{etf.costsPerYear}%</p>
                </div>
                <div
                    className={"rounded-lg bg-pastel-cyan/20 p-2 flex flex-col gap-2 justify-center w-full text-text-secondary"}>
                    <div className={"flex items-center justify-between w-full"}>
                        <div className={"flex items-center justify-center gap-1"}>
                            <ChartBarIcon className={"size-4 text-pastel-cyan"}/>
                            <p className={"text-xs"}>52-Wochen Trend</p>
                        </div>
                        <p className={"text-xs"}>${etf._52wLow} - ${etf._52wHigh}</p>
                    </div>
                    <div className="w-full px-8">
                        <div className="relative h-2 rounded-full bg-white">
                            <div
                                className={"absolute left-0 top-0 h-2 rounded-full bg-gradient-to-r from-pastel-cyan to-pastel-blue"}
                                style={{width: `${percentage}%`}}
                            />
                            <div
                                className="absolute top-1/2 w-3 h-3 -translate-y-1/2 -translate-x-3 rounded-full border-2 border-blue-500 bg-white"
                                style={{left: `${percentage}%`}}
                            />
                        </div>

                        <div className="flex items-center justify-between w-full text-xs mt-2">
                            <div className="text-red-500 text-center">
                                <p className={"font-semibold"}>52W-Low</p>
                                <p className={"text-text-secondary"}>${etf._52wLow}</p>
                            </div>
                            <div className="text-blue-500 text-center">
                                <p className={"font-semibold"}>Aktuell</p>
                                <p className={"text-text-secondary"}>${etf._50dAve}</p>
                            </div>
                            <div className="text-green-500 text-center">
                                <p className={"font-semibold"}>52W-High</p>
                                <p className={"text-text-secondary"}>${etf._52wHigh}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex items-center justify-between w-full p-4"}>
                <div className={"flex items-center justify-center gap-1"}>
                    <SparklesIcon className={"size-4 text-pastel-blue"}/>
                    <p className={"text-sm font-semibold"}>Match-Wert</p>
                </div>
                <p className={"text-pastel-blue font-semibold"}>{etf.matchToFoci}%</p>
            </div>
            <hr className={"border-gray-300 stroke-2 w-[95%]"}/>
            <div className={"flex items-center justify-start gap-1 p-4 w-full"}>
                <StarIcon className={"size-4 stroke-2 text-amber-400 hover:fill-amber-400 hover:cursor-pointer"}/>
                <p className={"text-sm"}>Speichern</p>
            </div>
        </div>
    );
};

export default ETFCard;