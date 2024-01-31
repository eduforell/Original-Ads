import Logo from '../assets/images/logo-originalads.png';
import MenuIcon from '../assets/icons/menu.svg';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50"
                    onClick={toggleMobileMenu}
                />
            )}
            <nav className="topbar">
                <div className="flex items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-10" alt="Original Ads Logo" />
                    </a>
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <img src={MenuIcon} className="w-10 h-10" alt="Menu Original Ads" />
                    </button>
                </div>
                {/* Aqui adicionamos o menu mobile */}
                {isMobileMenuOpen && (
                    <div className="bg-original z-30">
                        {/* Adicione aqui os itens do menu mobile */}
                        <ul className='absolute bg-original w-full p-2 left-0'>
                            <li className='relative mb-2'>
                                <a href="https://originalads.com.br/" className="block py-2 px-3 font-bold text-original-black rounded">
                                    Voltar para Home
                                </a>
                            </li>
                        </ul>
                        {/* ... */}
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar