import React from 'react';

const HeroTextComponent = () => {
    return (
        <div className={"flex items-center justify-center py-8 px-4 flex-col gap-4"}>
            <p className={"text-4xl md:text-5xl max-w-[600px] text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-light-green to-pastel-blue"}>Finde
                ETFs - individuell nach Deinen Bedürfnissen</p>
            <p className={"text-text-secondary max-w-[700px] text-center"}>
                Finde ETFs, die zu deinem Lifestyle und deiner Risikobereitschaft passen. Unser intelligentes
                ETF‑Matching analysiert hunderte ETFs und stellt die perfekte, maßgeschneiderte Auswahl für dich
                zusammen.
            </p>
        </div>
    );
};

export default HeroTextComponent;