import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBarComponent from "@/components/navbar/NavBarComponent.jsx";
import HeroTextComponent from "@/components/hero/HeroTextComponent.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
        <NavBarComponent/>
        <HeroTextComponent/>
    </div>
  </StrictMode>,
)
