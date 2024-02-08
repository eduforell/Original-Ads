import './globals.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import AltLayout from './pages/AltLayout'
import MainLayout from './pages/MainLayout'
import OrcamentoForm from './components/OrcamentoForm';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Route>

        <Route element={<AltLayout />}>
          <Route
            path="/politica-de-privacidade"
            element={<PoliticaPrivacidade />}
          />
          <Route
            path="/solicitar-orcamento"
            element={<OrcamentoForm />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
