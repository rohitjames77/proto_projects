import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainForm from './form.jsx'
import WelcomePage from './welcomePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MainForm /> */}
    <WelcomePage />
  </StrictMode>,
)
