import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'

const raiz = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// O build pre-renderiza cada rota dentro do #root. Quando esse HTML ja esta
// la, criar uma raiz nova jogaria fora o conteudo que o Google acabou de ler.
if (raiz.hasChildNodes()) {
  hydrateRoot(raiz, app)
} else {
  createRoot(raiz).render(app)
}
