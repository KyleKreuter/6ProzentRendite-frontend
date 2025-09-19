import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBarComponent from "./components/NavBarComponent.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
        <NavBarComponent/>
    </div>
  </StrictMode>,
)
