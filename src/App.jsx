import './globals.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import AltLayout from './pages/AltLayout'
import MainLayout from './pages/MainLayout'
import OrcamentoForm from './components/OrcamentoForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/solicitar-orcamento"
            element={<OrcamentoForm />}
          />
          <Route
            path="/politica-de-privacidade"
            element={<PoliticaPrivacidade />}
          />
        </Route>

        <Route element={<AltLayout />}>
          <Route
            path="/politica-de-privacidade"
            element={<PoliticaPrivacidade />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
