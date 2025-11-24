import { StrictMode, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBarComponent from "@/components/navbar/NavBarComponent.jsx";
import HeroTextComponent from "@/components/hero/HeroTextComponent.jsx";
import EtfMatcherComponent from "@/components/matcher/EtfMatcherComponent.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import FeaturesSection from "@/components/landing/FeaturesSection.jsx";
import SocialProofSection from "@/components/landing/SocialProofSection.jsx";
import CTASection from "@/components/landing/CTASection.jsx";
import HowItWorksSection from "@/components/landing/HowItWorksSection.jsx";
import FAQSection from "@/components/landing/FAQSection.jsx";
import FooterSection from "@/components/landing/FooterSection.jsx";

const App = () => {
    const matcherRef = useRef(null);

    const scrollToMatcher = () => {
        matcherRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div>
            <NavBarComponent/>

            {/* Hero Section */}
            <div id="hero">
                <HeroTextComponent/>
            </div>

            {/* ETF Matcher */}
            <div id="matcher" ref={matcherRef}>
                <EtfMatcherComponent/>
            </div>

            {/* How It Works Section */}
            <div id="how-it-works">
                <HowItWorksSection/>
            </div>

            {/* Features Section */}
            <div id="features">
                <FeaturesSection/>
            </div>

            {/* Social Proof Section */}
            <SocialProofSection/>

            {/* FAQ Section */}
            <div id="faq">
                <FAQSection/>
            </div>

            {/* CTA Section */}
            <CTASection onCTAClick={scrollToMatcher}/>

            {/* Footer */}
            <FooterSection/>
        </div>
    );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={new QueryClient()}>
          <App/>
      </QueryClientProvider>
  </StrictMode>,
)
