import React from 'react';
import DefaultModal from "@/modal/DefaultModal.jsx";
import ETFCard from "@/modal/matcher/components/ETFCard.jsx";
import {useETFs} from "@/hooks/useETFs.js";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/16/solid/index.js";


const ETFMatcherResultModal = ({onExit, foci, compositionRisk}) => {
    const {data, isLoading} = useETFs(foci, compositionRisk);
    const pageSize = 2;
    const [page, setPage] = React.useState(0);
    const [showAd, setShowAd] = React.useState(true);
    const [countdown, setCountdown] = React.useState(10);

    React.useEffect(() => {
        if (!showAd) return;

        const interval = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setShowAd(false);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [showAd]);

    const total = Math.min(data?.etfs.length, 6);
    const pageCount = Math.max(1, Math.ceil(total / pageSize));
    const start = page * pageSize;
    const visibleETFs = data?.etfs.slice(start, start + pageSize);

    const canPrev = page > 0;
    const canNext = page < pageCount - 1;

    const goPrev = () => {
        if (canPrev) setPage(p => p - 1);
    };
    const goNext = () => {
        if (canNext) setPage(p => p + 1);
    };

    return (
        <DefaultModal
            title={showAd ? "Werbung" : "Deine ETF-Empfehlung"}
            subtitle={showAd
                ? "Ein kurzer Hinweis von unserem Partner"
                : "Basierend auf deiner angegebenen Präferenzen, ist hier eine Auswahl an passenden ETFs. Diese kannst du dir in deinem Profil speichern und mit weiteren Sektoren weiter individualisieren."}
            onExit={() => onExit && onExit()}>

            {showAd ? (
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-2xl overflow-hidden rounded-2xl shadow-lg">
                        <iframe
                            width="100%"
                            height="360"
                            src="https://www.youtube.com/embed/ALrxQhEaQcg?autoplay=1&mute=1"
                            title="Trade Republic Werbung"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <div className="mt-4 flex flex-col items-start gap-2 w-full">
                        <a
                            href="https://traderepublic.com/de-de"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pastel-blue hover:underline font-medium"
                        >
                            Trade Republic
                        </a>
                        <p className="text-sm text-gray-600">
                            Mit Trade Republic kannst du deine ETFs kaufen. Wir sind nur eine Filterungsplattform. Trade
                            Republic ist ein ausgezeichneter Broker für Kleinanleger.
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                            {countdown > 1 ? "Weiter in " + countdown + " Sekunden" : "Weiter in " + countdown + " Sekunde"}
                        </p>
                    </div>
                </div>
            ) : (
                <>
                    <div className={"grid grid-cols-2 gap-4"}>
                        {!isLoading && visibleETFs.map((etf, idx) => (
                            <ETFCard key={`${etf.fundSymbol}-${start + idx}`} etf={etf}/>
                        ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                        <button
                            type="button"
                            onClick={goPrev}
                            disabled={!canPrev}
                            className={`px-3 py-2 rounded border text-sm ${
                                canPrev ? "border-gray-300 text-gray-800 hover:bg-gray-50"
                                    : "border-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            <ArrowLeftIcon className={"size-4"}/>
                        </button>

                        <div className="flex items-center gap-2">
                            {Array.from({length: pageCount}).map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setPage(i)}
                                    className={`h-2.5 w-2.5 rounded-full ${
                                        i === page ? "bg-pastel-blue" : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                    aria-label={`Seite ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={goNext}
                            disabled={!canNext}
                            className={`px-3 py-2 rounded border text-sm ${
                                canNext ? "border-gray-300 text-gray-800 hover:bg-gray-50"
                                    : "border-gray-200 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            <ArrowRightIcon className={"size-4"}/>
                        </button>
                    </div>
                </>
            )}

        </DefaultModal>
    );
};

export default ETFMatcherResultModal;