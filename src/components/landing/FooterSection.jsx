import React from 'react';
import CompanyNameComponent from "@/components/logo/CompanyNameComponent.jsx";

const FooterSection = () => {

    const quickLinks = [
        {name: 'Startseite', href: '#hero'},
        {name: 'Wie es funktioniert', href: '#how-it-works'},
        {name: 'Features', href: '#features'},
        {name: 'FAQ', href: '#faq'}
    ];

    const productLinks = [
        {name: 'ETF-Matcher', href: '#matcher'},
        {name: 'Portfolio-Analyse', href: '#portfolio'},
        {name: 'Marktdaten', href: '#market'},
        {name: 'Blog', href: '#blog'}
    ];

    const companyLinks = [
        {name: 'Über uns', href: '#about'},
        {name: 'Karriere', href: '#jobs'},
        {name: 'Nachhaltigkeit', href: '#sustainability'},
        {name: 'Presse', href: '#press'}
    ];

    const legalLinks = [
        {name: 'Impressum', href: '#imprint'},
        {name: 'Datenschutz', href: '#privacy'},
        {name: 'AGB', href: '#terms'},
        {name: 'Cookie-Einstellungen', href: '#cookies'}
    ];

    return (
        <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="mb-4 text-2xl">
                            <CompanyNameComponent />
                        </div>
                        <p className="text-gray-400 text-sm mb-4">
                            Dein intelligenter ETF-Matcher für optimale Anlageentscheidungen.
                            Finde die perfekten ETFs für dein Portfolio.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Media Icons (Placeholder) */}
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pastel-blue transition-colors duration-200">
                                <span className="text-sm">in</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pastel-cyan transition-colors duration-200">
                                <span className="text-sm">X</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-light-green transition-colors duration-200">
                                <span className="text-sm">YT</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Navigation</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-gray-400 hover:text-pastel-cyan transition-colors duration-200 text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Produkt</h4>
                        <ul className="space-y-2">
                            {productLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-gray-400 hover:text-pastel-cyan transition-colors duration-200 text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-white">Unternehmen</h4>
                        <ul className="space-y-2">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="text-gray-400 hover:text-pastel-cyan transition-colors duration-200 text-sm">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Legal Links */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                            {legalLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-gray-400 hover:text-pastel-cyan transition-colors duration-200">
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-sm text-gray-400">
                            © {new Date().getFullYear()} 6ProzentRendite. Alle Rechte vorbehalten.
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-6 text-xs text-gray-500 text-center md:text-left">
                        <p>
                            Risikohinweis: Die auf dieser Website bereitgestellten Informationen stellen keine
                            Anlageberatung dar. ETF-Investments sind mit Risiken verbunden. Die Wertentwicklung
                            in der Vergangenheit ist kein verlässlicher Indikator für zukünftige Ergebnisse.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
