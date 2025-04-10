import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CDA from './CDA.jsx'

createRoot(document.getElementById('root')).render(
  <CDA/>
)
