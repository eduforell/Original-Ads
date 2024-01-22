import Logo from '../assets/images/1500x512-logo-black.png';
import MenuIcon from '../assets/icons/menu.svg';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="topbar bg-white dark:bg-black">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
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
                <div className="hidden w-full md:flex md:w-auto md:ml-auto md:items-center space-x-4">
                    <ul className="font-medium flex flex-col md:flex-row px-8 md:space-x-4">
                        <li>
                            <a href="#quem-somos" className="block py-2 px-3 text-white bg-white rounded md:bg-transparent md:text-white md:p-0" aria-current="page">
                                Quem Somos
                            </a>
                        </li>
                        <li>
                            <a href="#nossos-produtos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">
                                Nossos Produtos
                            </a>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="inline-flex items-center p-4 w-30 h-10 justify-center text-sm text-original-dark rounded-[24px] border border-solid hover:bg-original"
                    >
                        <p>Solicite um orçamento</p>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar