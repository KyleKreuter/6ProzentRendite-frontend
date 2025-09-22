import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBarComponent from "@/components/navbar/NavBarComponent.jsx";
import HeroTextComponent from "@/components/hero/HeroTextComponent.jsx";
import EtfMatcherComponent from "@/components/matcher/EtfMatcherComponent.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <QueryClientProvider client={new QueryClient()}>
          <div>
              <NavBarComponent/>
              <HeroTextComponent/>
              <EtfMatcherComponent/>
          </div>
      </QueryClientProvider>
  </StrictMode>,
)
