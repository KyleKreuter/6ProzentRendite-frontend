import React from 'react';
import {ArrowRightIcon} from "@heroicons/react/24/solid/index.js";

const CTASection = ({onCTAClick}) => {
    return (
        <div className="w-full bg-gradient-to-br from-pastel-blue via-pastel-cyan to-light-green py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col items-center gap-8 text-center">
                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Bereit, deinen perfekten ETF zu finden?
                    </h2>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
                        Starte jetzt und erhalte in wenigen Minuten personalisierte ETF-Empfehlungen,
                        die perfekt zu deinem Anlageprofil passen.
                    </p>

                    {/* Benefits List */}
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-text-secondary">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-light-green rounded-full"></div>
                            <span>100% kostenlos</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-pastel-cyan rounded-full"></div>
                            <span>Keine Registrierung</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-pastel-blue rounded-full"></div>
                            <span>Sofortige Ergebnisse</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={onCTAClick}
                        className="px-10 py-5 bg-gradient-to-r from-pastel-blue to-pastel-cyan text-white rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:scale-105 transform transition-all duration-200">
                        Jetzt kostenlos starten
                        <ArrowRightIcon className="size-6"/>
                    </button>

                    {/* Trust Badge */}
                    <p className="text-sm text-text-secondary">
                        Bereits von über 10.000+ Anlegern genutzt
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
