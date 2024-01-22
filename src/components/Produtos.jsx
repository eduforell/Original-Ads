
import Consultoria from './Consultoria';
import Inventario from './Inventario';
import Podcast from './Podcast';

const Produtos = () => {
    return (
        <div className="flex">
            {/* Lado escuro (30%) com imagem de fundo */}
            <div className="hidden md:block md:mr-0 w-1/5 bg-dark-4/10">

            </div>

            {/* Lado branco (70%) */}
            <div className="w-full md:w-4/5 py-12 md:p-8 mt-16 md:mt-4 p-8 overflow-hidden relative">
                <Inventario />
                <Podcast />
                <Consultoria />
            </div>
        </div>
    )
}

export default Produtos