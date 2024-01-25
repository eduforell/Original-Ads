import Inventario from "./Inventario"
import Podcast from "./Podcast"
import ProjetosEspeciais from './ProjetosEspeciais'


const Produtos = () => {
    return (
        <div className="flex flex-col produtos-bg">

            {/* Seu card branco aqui */}
            <div className="p-8 rounded">
                {/* Conteúdo do card */}
                <Inventario />
            </div>
            <div className="p-8 rounded">
                {/* Conteúdo do card */}
                <Podcast />
            </div>
            <div className="p-8 rounded">
                {/* Conteúdo do card */}
                <ProjetosEspeciais />
            </div>
        </div>
    )
}

export default Produtos