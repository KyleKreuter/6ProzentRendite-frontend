import React from 'react';
import DefaultModal from "@/modal/DefaultModal.jsx";
import ETFCard from "@/modal/matcher/components/ETFCard.jsx";

const ETFMatcherResultModal = ({onExit}) => {
    return (
        <DefaultModal title={"Deine ETF-Empfehlung"}
                      subtitle={"Basierend auf deiner angegebenen Präferenzen, ist hier eine Auswahl an passenden ETFs. Diese kannst du dir in deinem Profil speichern und mit weiteren Sektoren weiter individualisieren."}
                      onExit={() => onExit && onExit()}>
            <div className={"flex gap-4 flex-col"}>
                <ETFCard etf={{
                    fundSymbol: "AAAA",
                    fundShortName: "Short Name AAAA Fund",
                    fundCategory: "Base",
                    totalNetAssets: 163,
                    risk: "LOW",
                    size: "High Volume",
                    returnYTD: -1.2,
                    _52wLow: 54.21,
                    _52wHigh: 79.21,
                    _50dAve: 78.04,
                    costsPerYear: 1.14,
                    matchToFoci: 0.98
                }}/>
            </div>
        </DefaultModal>
    );
};

export default ETFMatcherResultModal;