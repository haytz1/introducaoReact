import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Formulario from './formulario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Formulario />
  </StrictMode>,
)
