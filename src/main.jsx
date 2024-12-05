import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ArbitrationRules from './components/ArbitrationRules/ArbitrationRules.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ArbitrationRules/> */}
  </StrictMode>,
)
