import React, {useRef} from 'react';
import HeroSection from '@/components/landing/HeroSection.jsx';
import HowItWorksSection from '@/components/landing/HowItWorksSection.jsx';
import FeaturesSection from '@/components/landing/FeaturesSection.jsx';
import SocialProofSection from '@/components/landing/SocialProofSection.jsx';
import FAQSection from '@/components/landing/FAQSection.jsx';
import CTASection from '@/components/landing/CTASection.jsx';
import FooterSection from '@/components/landing/FooterSection.jsx';

/**
 * Landing Page Example - Zeigt alle B2C SaaS Komponenten
 *
 * Diese Seite demonstriert, wie die verschiedenen Landing Page Komponenten
 * zusammen verwendet werden, um eine vollständige Produkterklärung zu erstellen.
 */
const LandingPageExample = () => {
    const matcherRef = useRef(null);

    const scrollToMatcher = () => {
        // Hier würde man zum ETF-Matcher scrollen oder eine Navigation auslösen
        matcherRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="w-full">
            {/* Hero Section - Erster Eindruck mit Hauptbotschaft */}
            <HeroSection onCTAClick={scrollToMatcher} />

            {/* How It Works - Erklärt den Prozess in 3 Schritten */}
            <HowItWorksSection />

            {/* Features - Zeigt die Hauptvorteile des Produkts */}
            <FeaturesSection />

            {/* Social Proof - Statistiken und Testimonials */}
            <SocialProofSection />

            {/* FAQ - Beantwortet häufige Fragen */}
            <FAQSection />

            {/* Final CTA - Letzter Call-to-Action */}
            <CTASection onCTAClick={scrollToMatcher} />

            {/*
                Hier würde der eigentliche ETF-Matcher eingefügt werden
                Beispiel:
                <div ref={matcherRef}>
                    <EtfMatcherComponent />
                </div>
            */}

            {/* Footer - Mit Easter Egg (Hover über Logo für Raketen-Animation) */}
            <FooterSection />
        </div>
    );
};

export default LandingPageExample;
