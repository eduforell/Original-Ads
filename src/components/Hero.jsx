import VideoBg from '../assets/images/pexels-rostislav-uzunov-10613972-1080p-1.mp4'

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
            <video src={VideoBg} autoPlay loop muted />
            <div className='hero-content'>
                <p className='text-white'>Label text copy small</p>
                <h2 className="text-12 md:h2-bold text-white">
                    Lorem ipsum dolor sit amet consectetur.<br /> Dictumst lest sit amet consectuer
                </h2>
                <hr className="border w-[200px] border-original/90 mt-4 mb-4" />
                <div className='flex flex-row gap-6'>
                    <button className='bg-light-1 text-dark-2 w-[150px] h-[40px] md:w-[220px] md:h-[60px] rounded'>
                        <h4 className='text-sm md:h4-bold'>Fazer um orçamento</h4>
                    </button>
                    <button onClick={scrollToNossosProdutos} className='outline-1 border border-light-1 text-light-1 w-[150px] h-[40px] md:w-[220px] md:h-[60px] rounded'>
                        <h4 className='text-sm md:h4-bold'>Nossos Produtos</h4>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero