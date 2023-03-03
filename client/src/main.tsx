import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './assets/GlobalStyles/index.css'
import GlobalContextProvider from './Context/GlobalContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </GlobalContextProvider>
)
