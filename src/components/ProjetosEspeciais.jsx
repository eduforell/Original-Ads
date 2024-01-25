import GrupoFatos from '../assets/images/projetos/grupo-fatos.png';
import Youtube from '../assets/images/projetos/youtube.png';
import Instagram from '../assets/images/projetos/instagram.png';
import Tiktok from '../assets/images/projetos/tiktok.png';
import Facebook from '../assets/images/projetos/facebook.png';

const projetos = [
    { id: 1, titulo: 'GrupoFatos', logo: GrupoFatos },
    { id: 2, titulo: 'Youtube', logo: Youtube },
    { id: 3, titulo: 'Instagram', logo: Instagram },
    { id: 4, titulo: 'Tiktok', logo: Tiktok },
    { id: 5, titulo: 'Facebook', logo: Facebook },
];

const ProjetosEspeciais = () => {
    return (
        <>
            <div className="bg-white pb-1">
                <div className="mb-20">
                    <div className="w-full md:w-3/5 py-12 md:p-8 mt-16 md:mt-4 p-8">
                        <h2 className="w-full md:text-2xl h2-bold mb-4 text-original-black">Projetos Especiais</h2>
                        <hr className="border w-[200px] border-original/90 mt-4 mb-4" />
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-center justify-center p-8">
                        {/* GrupoFatos ocupa 2 colunas e 2 linhas */}
                        <div className="md:2/4 flex items-center justify-center">
                            <img src={projetos[0].logo} alt={`Logo 1`} className="max-w-full mb-2 lg:max-w-full lg:max-h-full" />
                        </div>

                        {/* Demais imagens ocupam 2 colunas e 2 linhas */}
                        <div className="md:2/4 flex flex-col 2xl:flex-row gap-4 mx-auto">
                            <div className='flex flex-col md:flex-row gap-4 mx-auto'>
                                <img src={projetos[1].logo} alt={`Logo 2`} className='py-4 md:max-w-[200px] md:max-h-[200px] lg:max-w-[250px] lg:max-h-[250px] 2xl:max-w-[360px] 2xl:max-h-[360px]' />
                                <img src={projetos[2].logo} alt={`Logo 3`} className='py-4 md:max-w-[200px] md:max-h-[200px] lg:max-w-[250px] lg:max-h-[250px]' />
                            </div>
                            <div className='flex flex-col md:flex-row gap-4 mx-auto'>
                                <img src={projetos[3].logo} alt={`Logo 4`} className='py-4 md:max-w-[200px] md:max-h-[200px] lg:max-w-[250px] lg:max-h-[250px]' />
                                <img src={projetos[4].logo} alt={`Logo 5`} className='py-4 md:max-w-[200px] md:max-h-[200px] lg:max-w-[250px] lg:max-h-[250px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjetosEspeciais