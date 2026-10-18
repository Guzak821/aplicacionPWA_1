import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Registrar el Service Worker de la PWA
import { registerSW } from 'virtual:pwa-register'
const updateSW = registerSW({ onNeedRefresh() {} })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)