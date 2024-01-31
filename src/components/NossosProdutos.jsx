import BgNossosProdutos from '../assets/images/nossos-produtos.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const NossosProdutos = () => {
    return (
        <>
            <div className="flex items-center mx-auto mt-[80px] md:mt-0 flex-col sm:flex-row mb-10 md:mb-0" id="nossos-produtos">
                {/* 40% de imagem de background */}
                <div className="w-full md:w-2/5 p-10">
                    <h2 className="w-full md:text-2xl h2-bold mb-4 text-original-black">Nossos Produtos</h2>
                    <p className='uppercase font-medium'>O que podemos viabilizar via Original Ads</p>
                    <hr className="border w-[200px] border-original/90 mt-4 mb-4" />
                    <ul className="py-4 px-4">
                        <li className="list-disc py-2">Indicação de Audiências (1st / 3rd Party) e Inventário (Lista de Publishers ou Black Lists)</li>
                        <li className="list-disc py-2">Segmentação (Geo-Localização, Demográfico, Contextual, Devices, etc)</li>
                        <li className="list-disc py-2">Perfomance KPIs (VTR e Viewability)</li>
                        <li className="list-disc py-2">Projetos Especiais (Podcasts, Videocasts, DOOH, Produção de vídeos virais, Branded Posts, Stories, Shorts, etc)</li>
                    </ul>
                </div>
                {/* 60% de conteúdo de texto */}
                <div className="w-full md:w-3/5 flex items-center justify-center">
                    <Zoom>
                        <img src={BgNossosProdutos} alt="Nossos Produtos - Original Ads" className="overflow-hidden" />
                    </Zoom>
                </div>
            </div>
        </>
    )
}

export default NossosProdutos