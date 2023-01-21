import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import './lib/i18n'

const rootNode = document.getElementById('root')

ReactDOM.createRoot(rootNode).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
