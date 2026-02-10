import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './containers/home'
import { myGlobalStyles as GlobalStyles } from './styles/globalstyles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
