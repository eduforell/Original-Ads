import PelasPistas from '../assets/images/podcast/pelas-pistas.png';
import Agro360 from '../assets/images/podcast/agro-360.png';
import Rolezica from '../assets/images/podcast/rolezica.png';
import PodVir from '../assets/images/podcast/podvir.png';
import NaMedida from '../assets/images/podcast/na-medida.png';
import Wikipod from '../assets/images/podcast/wikipod.png';
import BeAFounder from '../assets/images/podcast/be-a-founder.png';
import BolaPresa from '../assets/images/podcast/bola-presa.png';


const podcasts = [
    { id: 1, titulo: 'PelasPistas', logo: PelasPistas },
    { id: 2, titulo: 'Agro360', logo: Agro360 },
    { id: 3, titulo: 'Rolezica', logo: Rolezica },
    { id: 4, titulo: 'Feminino', logo: PodVir },
    { id: 5, titulo: 'Feminino', logo: NaMedida },
    { id: 6, titulo: 'Feminino', logo: Wikipod },
    { id: 7, titulo: 'Feminino', logo: BeAFounder },
    { id: 8, titulo: 'Feminino', logo: BolaPresa },

];

const Podcast = () => {
    return (
        <>
            <div className="bg-white pb-12">
                <div className="w-full py-12 md:p-8 mt-16 md:mt-4 p-8">
                    <h2 className="w-full md:text-2xl h2-bold mb-4 text-original-black">Podcasts</h2>
                    <hr className="border w-[200px] border-original/90 mt-4 mb-4" />
                    <p className="text-dark-4 text-justify py-4">
                        Em todos estes shows, podem ser trabalhados:
                    </p>
                    <div className='flex flex-col md:flex-row w-full'>
                        <ul className='pl-6 md:mr-10'>
                            <li className='list-disc'>Branded Podcasts</li>
                            <li className='list-disc'>Host Read</li>
                            <li className='list-disc'>Spot</li>
                        </ul>
                        <ul className='pl-6 md:mr-10'>
                            <li className='list-disc'>Product Placements dentro do estúdio</li>
                            <li className='list-disc'>Personalização de estúdio para marca</li>
                            <li className='list-disc'>QR-Code em tela para redirecionamento</li>
                        </ul>
                        <ul className='pl-6 md:mr-10'>
                            <li className='list-disc'>Criação de quadros</li>
                            <li className='list-disc'>Cortes patrocinados</li>
                            <li className='list-disc'>Projetos especiais</li>
                        </ul>
                    </div>
                    <p className='pt-5'>
                        E todos conteúdos nativos, gerando uma imersão extremamente valiosa para a marca.
                    </p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-8 gap-6 px-8">
                    {podcasts.map((categoria) => (
                        <div key={categoria.id} className="w-24 h-24 md:w-32 md:h-32 border border-gray-900 rounded-[6px]">
                            <img src={categoria.logo} alt={`Logo ${categoria.titulo}`} className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Podcast