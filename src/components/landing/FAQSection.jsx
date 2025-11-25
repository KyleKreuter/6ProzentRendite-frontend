import React, {useState} from 'react';
import {ChevronDownIcon} from "@heroicons/react/24/outline/index.js";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Was ist ein ETF?",
            answer: "Ein ETF (Exchange Traded Fund) ist ein börsengehandelter Indexfonds, der die Wertentwicklung eines Index wie dem DAX oder S&P 500 nachbildet. ETFs bieten eine einfache Möglichkeit, breit diversifiziert in viele Aktien oder Anleihen zu investieren."
        },
        {
            question: "Wie funktioniert der ETF-Matcher?",
            answer: "Unser ETF-Matcher analysiert deine Angaben zu Risikoprofil und Sektorpräferenzen. Basierend darauf durchsucht unser Algorithmus unsere Datenbank von über 1.500 ETFs und präsentiert dir die besten Matches mit detaillierten Informationen zu Performance, Kosten und Zusammensetzung."
        },
        {
            question: "Ist der Service wirklich kostenlos?",
            answer: "Ja, unser ETF-Matcher ist vollständig kostenlos nutzbar. Es gibt keine versteckten Gebühren und keine Registrierung erforderlich. Wir verdienen durch Affiliate-Partnerschaften mit ausgewählten Brokern, wenn Nutzer über unsere Links ein Depot eröffnen."
        },
        {
            question: "Wie aktuell sind die ETF-Daten?",
            answer: "Unsere ETF-Daten werden täglich aktualisiert. Performance-Kennzahlen, TER (Gesamtkostenquote) und andere relevante Informationen werden automatisch von vertrauenswürdigen Datenquellen bezogen, um dir stets aktuelle Informationen zu bieten."
        },
        {
            question: "Kann ich die empfohlenen ETFs direkt kaufen?",
            answer: "Der ETF-Matcher ist ein reines Informations- und Vergleichstool. Wir bieten keine Kaufmöglichkeit direkt an, aber wir verlinken zu Partner-Brokern, bei denen du die ETFs handeln kannst. Die finale Anlageentscheidung liegt immer bei dir."
        },
        {
            question: "Ist die Nutzung eine Anlageberatung?",
            answer: "Nein, unser ETF-Matcher ist kein Ersatz für eine professionelle Anlageberatung. Wir bieten lediglich ein Tool zur Information und zum Vergleich von ETFs. Für individuelle Anlageberatung solltest du einen zertifizierten Finanzberater konsultieren."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-center">
                        Häufig gestellte Fragen
                    </h2>
                    <p className="text-lg text-text-secondary text-center max-w-2xl">
                        Hier findest du Antworten auf die wichtigsten Fragen zum ETF-Matcher
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-pastel-blue transition-colors duration-200">
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors duration-200">
                                <span className="font-semibold text-gray-900">
                                    {faq.question}
                                </span>
                                <ChevronDownIcon
                                    className={`size-5 text-pastel-blue transition-transform duration-200 flex-shrink-0 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-200 ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}>
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                    <p className="text-text-secondary">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA at bottom */}
                <div className="mt-12 text-center">
                    <p className="text-text-secondary mb-4">
                        Hast du weitere Fragen?
                    </p>
                    <button className="px-6 py-3 border-2 border-pastel-blue text-pastel-blue rounded-lg font-semibold hover:bg-pastel-blue/10 transition-all duration-200">
                        Kontaktiere uns
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
