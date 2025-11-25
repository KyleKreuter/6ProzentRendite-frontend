import React from 'react';
import {AdjustmentsHorizontalIcon, ChartBarIcon, SparklesIcon} from "@heroicons/react/24/outline/index.js";

const HowItWorksSection = () => {
    const steps = [
        {
            icon: <AdjustmentsHorizontalIcon className="size-12"/>,
            title: "1. Präferenzen angeben",
            description: "Wähle dein Risikoprofil und deine bevorzugten Sektoren wie Technologie, Gesundheit oder Energie aus.",
            color: "from-lime-400 to-green-400"
        },
        {
            icon: <SparklesIcon className="size-12"/>,
            title: "2. Intelligente Analyse",
            description: "Unser Algorithmus durchsucht tausende ETFs und findet die besten Matches basierend auf deinen Angaben.",
            color: "from-pastel-cyan to-pastel-blue"
        },
        {
            icon: <ChartBarIcon className="size-12"/>,
            title: "3. Ergebnisse erhalten",
            description: "Erhalte personalisierte ETF-Empfehlungen mit detaillierten Informationen zu Performance, Kosten und Zusammensetzung.",
            color: "from-pastel-blue to-purple-400"
        }
    ];

    return (
        <div className="w-full bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center gap-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-center">
                        So funktioniert's
                    </h2>
                    <p className="text-lg text-text-secondary text-center max-w-2xl">
                        In nur drei einfachen Schritten zu deinen personalisierten ETF-Empfehlungen
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-4 relative">
                            {/* Connector Line (hidden on mobile, shown between cards on desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[calc(50%+3.5rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"/>
                            )}

                            {/* Icon Container */}
                            <div className={`relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                                {step.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold mt-2">
                                {step.title}
                            </h3>
                            <p className="text-text-secondary">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection;
