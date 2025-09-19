import React from 'react';

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
const RiskLevelPill = ({riskLevel}) => {
    return (
        <div className={`rounded-full px-2 py-1 text-sm ${RISK_COLORS[riskLevel].bg} ${RISK_COLORS[riskLevel].text}`}>
            {RISK_COLORS[riskLevel].display}
        </div>
    );
};

export default RiskLevelPill;