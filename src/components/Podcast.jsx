import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Globo from '../assets/images/globo.png';
import Terra from '../assets/images/terra.png';
import UOL from '../assets/images/uol.webp';
import R7 from '../assets/images/r7.png';
import VIX from '../assets/images/vix.png';
import PurePeople from '../assets/images/pure-people.svg';

const categorias = [
    { id: 1, titulo: 'Portais', logos: [Globo, Terra, UOL, R7] },
    { id: 2, titulo: 'Feminino', logos: [VIX, PurePeople] },
];

const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2, // Altere o número de cards visíveis conforme necessário
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768, // Médio
            settings: {
                slidesToShow: 1, // Ajuste para 3 cards por vez em telas médias
            },
        },
        {
            breakpoint: 480, // Pequeno
            settings: {
                slidesToShow: 1, // Mantenha 1 card por vez em telas pequenas
            },
        },
    ],
};

const Podcast = () => {
    return (
        <>
            <div className="w-full md:w-3/5 py-12 md:p-8 mt-16 md:mt-4 p-8">
                <h2 className="w-full md:text-2xl h2-bold mb-4 text-dark-4">Podcast</h2>
                <hr className="border w-[200px] border-original/90 mt-4 mb-4" />
                <p className='text-dark-4 text-justify py-4'>Lorem ipsum dolor sit amet consectetur. Neque neque imperdiet scelerisque dapibus. Est cras purus.</p>
            </div>
            <Slider {...settings}>
                {categorias.map((categoria) => (
                    <div key={categoria.id} className="px-12">
                        <div className=" min-w-[240px] md:max-w-[260px] p-6 border border-gray-900 rounded-[10px]">
                            <h3 className="text-dark-3 text-lg text-center">{categoria.titulo}</h3>
                            <hr className="my-2 border-t border-gray-900" />
                            <div className="flex flex-col justify-center items-center gap-4 mt-5">
                                {categoria.logos.map((logo, index) => (
                                    <img key={index} src={logo} alt={`Logo ${categoria.titulo} ${index + 1}`} className="mx-2" width={80} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default Podcast