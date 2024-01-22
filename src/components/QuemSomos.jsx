import BgQuemSomos from '../assets/images/pexels-photo-776336.jpeg';

const QuemSomos = () => {
    return (
        <div className="max-h-[40vh] flex items-center mx-auto mt-12" id="quem-somos">
            {/* 60% de conteúdo de texto */}
            <div className="w-full md:w-3/5 py-12 md:p-8 mt-16 md:mt-4 p-8">
                <h2 className="w-full md:text-2xl h2-bold mb-4 text-dark-4">Quem somos</h2>
                <hr className="border w-[200px] border-original/90 mt-4 mb-4" />
                <p className='text-dark-4 text-justify py-4'>
                    A Original Ads nasce de uma necessidade de conectar marcas com seus clientes, atuando principalmente no segmento
                    de Inventário de mídia, com um potencial superior a 40B de impressões/mês e produção de Podcasts.
                </p>
                <p className='text-dark-4 text-justify py-4'>
                    Atuamos em parceria com publishers premium que possuem alta qualidade de inventário e formatos. Contamos com
                    inventário Display, Vídeo, Native Ads, CTV, Parallax e Áudio.
                </p>
                <p className='text-dark-4 text-justify py-4'>A Original Ads está conectada de forma direta aos Top 15 portais da Comscore.</p>
            </div>

            {/* 40% de imagem de background */}
            <div className="hidden md:block md:mr-0 w-2/5 bg-cover bg-center max-h-fit">
                <img src={BgQuemSomos} alt="BG Quem Somos - Original Ads" className="overflow-hidden" />
            </div>
        </div>
    )
}

export default QuemSomos