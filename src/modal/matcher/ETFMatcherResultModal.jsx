import React from 'react';
import DefaultModal from "@/modal/DefaultModal.jsx";
import ETFCard from "@/modal/matcher/components/ETFCard.jsx";

const ETFMatcherResultModal = ({onExit}) => {
    return (
        <DefaultModal title={"Deine ETF-Empfehlung"}
                      subtitle={"Basierend auf deiner angegebenen Präferenzen, ist hier eine Auswahl an passenden ETFs. Diese kannst du dir in deinem Profil speichern und mit weiteren Sektoren weiter individualisieren."}
                      onExit={() => onExit && onExit()}>
            <div className={"flex gap-4"}>
                <ETFCard etf={{
                    fundSymbol: "AAAA",
                    fundShortName: "Short Name AAAA Fund",
                    fundCategory: "Technology",
                    totalNetAssets: 163,
                    risk: "HIGH",
                    size: "Low Volume",
                    returnYTD: 8.8,
                    _52wLow: 178.21,
                    _52wHigh: 352.21,
                    _50dAve: 250.04,
                    costsPerYear: 1.14,
                    matchToFoci: 98
                }}/> <ETFCard etf={{
                fundSymbol: "DASK",
                fundShortName: "Short Name SAK Fund",
                fundCategory: "Base",
                totalNetAssets: 22,
                risk: "MEDIUM",
                size: "High Volume",
                returnYTD: 1.2,
                _52wLow: 54.21,
                _52wHigh: 79.21,
                _50dAve: 78.04,
                costsPerYear: 0.20,
                matchToFoci: 87
            }}/>
            </div>
        </DefaultModal>
    );
};

export default ETFMatcherResultModal;