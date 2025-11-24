import React from 'react';
import {
    BoltIcon,
    ChartPieIcon,
    ShieldCheckIcon,
    CurrencyEuroIcon,
    ClockIcon,
    UserGroupIcon
} from "@heroicons/react/24/outline/index.js";

const FeaturesSection = () => {
    const features = [
        {
            icon: <BoltIcon className="size-8"/>,
            title: "Blitzschnelle Analyse",
            description: "Erhalte in Sekunden personalisierte ETF-Empfehlungen aus tausenden Optionen.",
            bgColor: "bg-amber-100",
            textColor: "text-amber-600"
        },
        {
            icon: <ChartPieIcon className="size-8"/>,
            title: "Diversifizierung",
            description: "Optimiere dein Portfolio mit breit gestreuten ETFs für maximale Risikostreuung.",
            bgColor: "bg-blue-100",
            textColor: "text-blue-600"
        },
        {
            icon: <ShieldCheckIcon className="size-8"/>,
            title: "Risikoanpassung",
            description: "Finde ETFs, die perfekt zu deinem individuellen Risikoprofil passen.",
            bgColor: "bg-green-100",
            textColor: "text-green-600"
        },
        {
            icon: <CurrencyEuroIcon className="size-8"/>,
            title: "Kostenübersicht",
            description: "Vergleiche TER (Gesamtkostenquote) und finde die kostengünstigsten ETFs für dich.",
            bgColor: "bg-purple-100",
            textColor: "text-purple-600"
        },
        {
            icon: <ClockIcon className="size-8"/>,
            title: "Aktuelle Daten",
            description: "Profitiere von stets aktuellen Performance-Daten und Marktinformationen.",
            bgColor: "bg-cyan-100",
            textColor: "text-cyan-600"
        },
        {
            icon: <UserGroupIcon className="size-8"/>,
            title: "Benutzerfreundlich",
            description: "Intuitive Bedienung - keine Vorkenntnisse erforderlich, für alle geeignet.",
            bgColor: "bg-pink-100",
            textColor: "text-pink-600"
        }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-center">
                        Warum unser ETF-Matcher?
                    </h2>
                    <p className="text-lg text-text-secondary text-center max-w-2xl">
                        Entdecke die Vorteile, die unsere intelligente ETF-Auswahl so besonders machen
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4 border border-gray-100">
                            {/* Icon */}
                            <div className={`w-16 h-16 ${feature.bgColor} rounded-lg flex items-center justify-center ${feature.textColor}`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl font-semibold">
                                    {feature.title}
                                </h3>
                                <p className="text-text-secondary">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
