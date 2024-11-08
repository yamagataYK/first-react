import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/pages/index.css'
import App from './pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
