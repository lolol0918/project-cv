import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CVBuilder from './CVBuilder.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CVBuilder></CVBuilder>
  </StrictMode>,
)
