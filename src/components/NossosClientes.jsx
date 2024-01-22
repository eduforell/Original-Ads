import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cliente1 from '../assets/images/cliente1.webp';
import Cliente2 from '../assets/images/cliente2.webp';
import Cliente3 from '../assets/images/cliente3.webp';
import Cliente4 from '../assets/images/cliente4.webp';
import Cliente5 from '../assets/images/cliente5.webp';
import Cliente6 from '../assets/images/cliente6.webp';

const clientes = [
    { id: 1, logo: Cliente1, nome: 'Cliente 1' },
    { id: 2, logo: Cliente2, nome: 'Cliente 2' },
    { id: 3, logo: Cliente3, nome: 'Cliente 3' },
    { id: 4, logo: Cliente4, nome: 'Cliente 4' },
    { id: 5, logo: Cliente5, nome: 'Cliente 5' },
    { id: 6, logo: Cliente6, nome: 'Cliente 6' },
];

const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Número de logos visíveis ao mesmo tempo
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const NossosClientes = () => {

    return (
        <div className="flex items-center bg-original-bg z-0 mt-20 relative">
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
                                className="max-h-full object-contain filter brightness-0 invert"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default NossosClientes