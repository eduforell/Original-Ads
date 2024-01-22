import './globals.css'
import CTAMediaKit from './components/CTAMediaKit'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NossosClientes from './components/NossosClientes'
import NossosProdutos from './components/NossosProdutos'
import Orcamento from './components/Orcamento'
import QuemSomos from './components/QuemSomos'
import Produtos from './components/Produtos'
import Copyright from './components/Copyright'

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <QuemSomos />
        <NossosClientes />
        <NossosProdutos />
        <Produtos />
        <Orcamento />
        <CTAMediaKit />
        <Footer />
        <Copyright />
      </main>
    </>
  )
}

export default App
