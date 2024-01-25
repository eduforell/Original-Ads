import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AccorHotels from '../assets/images/clientes/accorhotels.png';
import Ajinomoto from '../assets/images/clientes/AJINOMOTO.png';
import BetoCarreiro from '../assets/images/clientes/BETOCARREIRO.png';
import CoriMedia from '../assets/images/clientes/corimedia.png';
import Heineken from '../assets/images/clientes/HEINEKEN.png';
import MediaSmart from '../assets/images/clientes/MEDIASMART.png';
import Microsoft from '../assets/images/clientes/MICROSOFT.png';
import RTB from '../assets/images/clientes/RTB.png';
import Volkswagen from '../assets/images/clientes/volkswagen.png';

const clientes = [
    { id: 1, logo: AccorHotels, nome: 'AccorHotels' },
    { id: 2, logo: Ajinomoto, nome: 'Ajinomoto' },
    { id: 3, logo: BetoCarreiro, nome: 'BetoCarreiro' },
    { id: 4, logo: CoriMedia, nome: 'CoriMedia' },
    { id: 5, logo: Heineken, nome: 'Heineken' },
    { id: 6, logo: MediaSmart, nome: 'MediaSmart' },
    { id: 7, logo: Microsoft, nome: 'Microsoft' },
    { id: 8, logo: RTB, nome: 'RTB' },
    { id: 9, logo: Volkswagen, nome: 'Volkswagen' },
];

const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5, // Número de logos visíveis ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1980,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                initialSlide: 4
            },
        },
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 3
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            },
        },
    ],
};

// const carouselSettings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     slidesToScroll: 1,
//     autoplay: true,
//     responsive: [
//         {
//             breakpoint: 1200, // large devices
//             settings: {
//                 slidesToShow: 5,
//             },
//         },
//         {
//             breakpoint: 992, // md devices
//             settings: {
//                 slidesToShow: 3,
//             },
//         },
//         {
//             breakpoint: 768, // sm devices
//             settings: {
//                 slidesToShow: 2,
//             },
//         },
//         {
//             breakpoint: 576, // xs devices
//             settings: {
//                 slidesToShow: 1,
//             },
//         },
//     ],
// };

const NossosClientes = () => {

    return (
        <div className="flex items-center bg-original-black z-0 md:mt-[-40px] relative py-6 ">
            <div className="w-2/6 mx-auto items-center justify-center">
                <h2 className="text-xl h3-semibold text-white ml-6">Nossos Clientes</h2>
            </div>
            <div className="w-4/6">
                <Slider {...carouselSettings} arrows={false}>
                    {clientes.map((cliente) => (
                        <div key={cliente.id} className="flex items-center justify-center">
                            <img
                                src={cliente.logo}
                                alt={cliente.nome}
                                className="max-h-full object-contain"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default NossosClientes