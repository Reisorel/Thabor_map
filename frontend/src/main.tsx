import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/lato/latin-400.css'
import '@fontsource/lato/latin-700.css'
import './index.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
