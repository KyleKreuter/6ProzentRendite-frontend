import { StrictMode } from 'react'
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
import FooterSection from "@/components/landing/FooterSection.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={new QueryClient()}>
          <div>
              <NavBarComponent/>
              <HeroTextComponent/>
              <EtfMatcherComponent/>
              <SocialProofSection/>
              <FeaturesSection/>
              <HowItWorksSection/>
              <CTASection/>
              <FooterSection/>
          </div>
      </QueryClientProvider>
  </StrictMode>,
)
