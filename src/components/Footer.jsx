import LogoOriginal from '../assets/images/logo-originalads.png'
import Linkedin from '../assets/icons/linkedin-logo.svg'
import whatsapp from '../assets/icons/whatsapp-logo.svg'
import instagram from '../assets/icons/instagram-logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className=" text-dark-3 py-8 mb-8">
            <div className="max-w-screen-xl mx-auto flex flex-col px-10 md:px-0 md:flex-row items-start justify-items-start md:justify-between md:items-center">
                {/* Logo à esquerda */}
                <div className="mb-4 md:mb-0 px-4">
                    <img src={LogoOriginal} alt="Logo Original Ads" className="h-12" />
                </div>

                {/* Colunas de links à direita */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-left">
                    {/* Coluna 1 */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold mb-2 w-[160px]">Contato</h4>
                        <a href="https://wa.me/5511993050613" className="text-original-dark hover:text-original">+55 11 993050613</a>
                        <a href="mailto:" className="original-dark hover:text-original">comercial@originalads.com.br</a>
                        <div className="flex flex-row gap-4">
                            <a href="https://wa.me/5511993050613" className="text-original-dark hover:text-original flex items-center space-x-2">
                                <img src={whatsapp} width={26} />
                            </a>
                            <a href="https://www.linkedin.com/company/originalcast/" className="text-gray-300 hover:text-original flex items-center space-x-2">
                                <img src={Linkedin} width={32} />
                            </a>
                            <a href="#" className="text-original-dark hover:text-original flex items-center space-x-2">
                                <img src={instagram} width={30} />
                            </a>

                        </div>
                    </div>

                    {/* Coluna 2 */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold mb-2 w-[160px]">Extra</h4>
                        <Link to='/politica-de-privacidade' className="text-original-dark hover:text-original">Política de Privacidade</Link>
                        <a href="#" className="text-original-dark hover:text-original">Link 2</a>
                        <a href="#" className="text-original-dark hover:text-original">Link 3</a>
                    </div>

                    {/* Coluna 3 */}
                    <div className="flex flex-col gap-2">
                        <h4 className="text-lg font-semibold mb-2 w-[160px]">Extra</h4>
                        <a href="#" className="text-original-dark hover:text-original">Link 1</a>
                        <a href="#" className="text-original-dark hover:text-original">Link 2</a>
                        <a href="#" className="text-original-dark hover:text-original">Link 3</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer