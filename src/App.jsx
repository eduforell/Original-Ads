import './globals.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import MainLayout from './pages/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
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
