import React from 'react';
import {CheckBadgeIcon, ChartBarSquareIcon, UsersIcon, BanknotesIcon} from "@heroicons/react/24/solid/index.js";

const SocialProofSection = () => {
    const stats = [
        {
            icon: <UsersIcon className="size-8"/>,
            value: "10.000+",
            label: "Aktive Nutzer",
            color: "from-pastel-blue to-pastel-cyan"
        },
        {
            icon: <ChartBarSquareIcon className="size-8"/>,
            value: "1.500+",
            label: "ETFs analysiert",
            color: "from-pastel-cyan to-light-green"
        },
        {
            icon: <BanknotesIcon className="size-8"/>,
            value: "€50M+",
            label: "Vermögen optimiert",
            color: "from-light-green to-lime-400"
        },
        {
            icon: <CheckBadgeIcon className="size-8"/>,
            value: "98%",
            label: "Zufriedenheitsrate",
            color: "from-lime-400 to-green-400"
        }
    ];

    const testimonials = [
        {
            name: "Anna M.",
            role: "Privatanlegerin",
            text: "Der ETF-Matcher hat mir geholfen, endlich den Überblick über meine Anlagemöglichkeiten zu bekommen. Super einfach zu bedienen!"
        },
        {
            name: "Thomas K.",
            role: "Berufseinsteiger",
            text: "Als Anfänger war ich überfordert mit der ETF-Auswahl. Dieses Tool hat mir in Minuten passende Optionen gezeigt."
        },
        {
            name: "Lisa S.",
            role: "Portfoliomanagerin",
            text: "Nutze den Matcher für erste Recherchen. Die Übersicht über Sektoren und Risikoklassen ist sehr hilfreich."
        }
    ];

    return (
        <div className="w-full bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Statistics */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 text-center">
                            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-lg`}>
                                {stat.icon}
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pastel-blue to-light-green">
                                    {stat.value}
                                </p>
                                <p className="text-sm text-text-secondary">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Section */}
                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-center">
                            Was unsere Nutzer sagen
                        </h2>
                        <p className="text-lg text-text-secondary text-center max-w-2xl">
                            Tausende Anleger vertrauen bereits auf unseren ETF-Matcher
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-3 gap-6 w-full">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 flex flex-col hover:shadow-md transition-shadow duration-200 h-full">
                                {/* Quote Icon */}
                                <div className="text-5xl text-pastel-blue/30 font-serif leading-none">
                                    "
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-text-secondary italic -mt-4 mb-4">
                                    {testimonial.text}
                                </p>

                                {/* Author - always at bottom */}
                                <div className="flex flex-col gap-1 mt-auto">
                                    <p className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-text-secondary">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProofSection;
