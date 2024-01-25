import Globo from '../assets/images/inventario/globo.png';
import Uol from '../assets/images/inventario/uol.png';
import Terra from '../assets/images/inventario/terra.png';
import R7 from '../assets/images/inventario/r7.png';
import Abril from '../assets/images/inventario/abril.png';
import EditoraGlobo from '../assets/images/inventario/editora-globo.png';
import Webmedia from '../assets/images/inventario/webmedia.png';
import OLX from '../assets/images/inventario/olx.png';
import Deezer from '../assets/images/inventario/deezer.png';
import Gameloft from '../assets/images/inventario/gameloft.png';
import DailyMotion from '../assets/images/inventario/dailymotion.png';
import ClimaTempo from '../assets/images/inventario/climatempo.png';
import InfoMoney from '../assets/images/inventario/infomoney.png';
import SuaMusica from '../assets/images/inventario/sua-musica.png';
import GloboPlay from '../assets/images/inventario/globoplay.png';
import LG from '../assets/images/inventario/lg.png';
import YouTube from '../assets/images/inventario/youtube.png';
import iCarros from '../assets/images/inventario/icarros.png';
import Pluto from '../assets/images/inventario/pluto.png';
import CNN from '../assets/images/inventario/cnn.png';
import Folha from '../assets/images/inventario/folha.png';
import Estadao from '../assets/images/inventario/estadao.png';
import Ubisoft from '../assets/images/inventario/ubisoft.png';
import Vagas from '../assets/images/inventario/vagas.png';


const inventario = [
    { id: 1, titulo: 'Globo', logo: Globo },
    { id: 2, titulo: 'Uol', logo: Uol },
    { id: 3, titulo: 'Terra', logo: Terra },
    { id: 4, titulo: 'R7', logo: R7 },
    { id: 5, titulo: 'Abril', logo: Abril },
    { id: 6, titulo: 'EditoraGlobo', logo: EditoraGlobo },
    { id: 7, titulo: 'Webmedia', logo: Webmedia },
    { id: 8, titulo: 'OLX', logo: OLX },
    { id: 9, titulo: 'Deezer', logo: Deezer },
    { id: 10, titulo: 'Gameloft', logo: Gameloft },
    { id: 11, titulo: 'DailyMotion', logo: DailyMotion },
    { id: 12, titulo: 'ClimaTempo', logo: ClimaTempo },
    { id: 13, titulo: 'InfoMoney', logo: InfoMoney },
    { id: 14, titulo: 'SuaMusica', logo: SuaMusica },
    { id: 15, titulo: 'GloboPlay', logo: GloboPlay },
    { id: 16, titulo: 'LG', logo: LG },
    { id: 17, titulo: 'YouTube', logo: YouTube },
    { id: 18, titulo: 'iCarros', logo: iCarros },
    { id: 19, titulo: 'Pluto', logo: Pluto },
    { id: 20, titulo: 'CNN', logo: CNN },
    { id: 21, titulo: 'Folha', logo: Folha },
    { id: 22, titulo: 'Estadao', logo: Estadao },
    { id: 23, titulo: 'Ubisoft', logo: Ubisoft },
    { id: 24, titulo: 'Vagas', logo: Vagas },
];

const Inventario = () => {
    return (
        <>
            <div className="bg-white pb-12">
                <div className="w-full py-12 md:p-8 mt-16 md:mt-4 p-8">
                    <h2 className="w-full md:text-2xl h2-bold mb-4 text-original-black">Inventário Premium</h2>
                    <hr className="border w-[200px] border-original/90 mt-4 mb-4" />
                    <p className="text-dark-4 text-justify py-4">
                        Acesso aos principais Portais, Sites e Plataformas com atuação no Brasil, alguns exemplos abaixo:
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 px-8">
                    {inventario.map((item) => (
                        <div key={item.id} className="py-4 border border-gray-900 rounded-[4px]">
                            <div className="flex justify-center items-center">
                                <img
                                    src={item.logo}
                                    alt={`Logo ${item.titulo}`}
                                    width={110}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Inventario