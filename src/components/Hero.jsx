import HeroBG from '../assets/images/hero-original.jpg'

const scrollToNossosProdutos = () => {
    const nossosProdutosElement = document.getElementById('nossos-produtos');

    if (nossosProdutosElement) {
        nossosProdutosElement.scrollIntoView({
            behavior: 'smooth',
        });
    }
};

const Hero = () => {
    return (
        <div className="home-container">
            <img src={HeroBG} className='hero-img mb-16 xs:mb-0' />
            <div className='hero-content'>

                <h2 className="h2-bold text-original-black">
                    Solução tecnológica para Programmatic<br />Deals e Projetos Especiais
                </h2>
                <p className='text-original-black'>Original Ads</p>
                <hr className="border w-[200px] border-original/100  mt-4 mb-4" />
                <div className='flex flex-row gap-6'>
                    <button className='bg-original-black text-white w-[150px] h-[40px] md:w-[220px] md:h-[60px] rounded hover:border hover:invert hover:outline-1 hover:bg-transparent'>
                        <h4 className='text-sm md:h4-bold'>Fazer um orçamento</h4>
                    </button>
                    <button onClick={scrollToNossosProdutos} className='outline-1 border border-original-black text-original-black w-[150px] h-[40px] md:w-[220px] md:h-[60px] rounded hover:text-white hover:bg-original-black'>
                        <h4 className='text-sm md:h4-bold'>Nossos Produtos</h4>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero