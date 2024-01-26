
import Hero from '../components/Hero'
import QuemSomos from '../components/QuemSomos'
import NossosClientes from '../components/NossosClientes'
import NossosProdutos from '../components/NossosProdutos'
import Produtos from '../components/Produtos'
import Orcamento from '../components/Orcamento'
import CTAMediaKit from '../components/CTAMediaKit'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

const Home = () => {
    return (
        <>
            <Hero />
            <QuemSomos />
            <NossosClientes />
            <NossosProdutos />
            <Produtos />
            <Orcamento />
            <CTAMediaKit />
            <Footer />
            <Copyright />
        </>
    )
}

export default Home