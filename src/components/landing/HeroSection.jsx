import React from 'react';
import {ArrowRightIcon} from "@heroicons/react/24/solid/index.js";

const HeroSection = ({onCTAClick}) => {
    return (
        <div className="w-full bg-gradient-to-br from-pastel-blue/20 via-pastel-cyan/10 to-light-green/20 py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8 text-center">
                {/* Main Headline */}
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pastel-blue to-light-green">
                    Finde den perfekten ETF für dein Portfolio
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
                    Nutze unseren intelligenten ETF-Matcher, um in wenigen Minuten personalisierte
                    ETF-Empfehlungen basierend auf deinem Risikoprofil und Präferenzen zu erhalten.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <button
                        onClick={onCTAClick}
                        className="px-8 py-4 bg-gradient-to-r from-pastel-blue to-pastel-cyan text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        Jetzt ETFs finden
                        <ArrowRightIcon className="size-5"/>
                    </button>
                    <button className="px-8 py-4 border-2 border-pastel-blue text-pastel-blue rounded-lg font-semibold hover:bg-pastel-blue/10 transition-all duration-200">
                        Mehr erfahren
                    </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-8 mt-8 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-light-green rounded-full"></div>
                        <span>Kostenlos testen</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-pastel-cyan rounded-full"></div>
                        <span>Keine Registrierung nötig</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-pastel-blue rounded-full"></div>
                        <span>1.000+ ETFs analysiert</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
