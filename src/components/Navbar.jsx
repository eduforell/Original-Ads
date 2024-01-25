import Logo from '../assets/images/1500x512-logo-black.png';
import MenuIcon from '../assets/icons/menu.svg';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

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
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-30" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto ">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="z-50 w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-8 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg text-white font-medium leading-6 text-lode-purple text-center"
                                    >
                                        Solicitar Orcamento
                                    </Dialog.Title>
                                    <div className="flex justify-center items-center mt-6">
                                        <input placeholder='E-mail' className='text-original-black w-full outline p-2 rounded-[12px]' />
                                    </div>
                                    <div className="flex justify-center text-center mt-4 mb-4">
                                        <textarea placeholder='Informe o que deseja' className='w-full outline p-2 rounded-[12px]' />
                                    </div>
                                    <div className="mt-8 flex justify-between gap-4">
                                        <button
                                            type="button"
                                            className="outline-1 border border-original-black text-original-black w-full h-[42px] rounded hover:text-white hover:bg-original-black"
                                            onClick={closeModal}
                                        >
                                            Cancelar
                                        </button>
                                        <button className='bg-original-black text-white w-full h-[42px] rounded hover:border hover:invert hover:outline-1 hover:bg-transparent'>
                                            <h4 className='text-sm md:h4-bold'>Enviar</h4>
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
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
                    <div className="hidden w-full md:flex md:w-auto md:ml-auto md:items-center">
                        <ul className="font-medium flex flex-col md:flex-row px-8 md:space-x-4">
                            <li>
                                <a href="#quem-somos" className="font-helvetica block py-2 px-3 font-bold text-original-black rounded">
                                    Quem Somos
                                </a>
                            </li>
                            <li>
                                <a href="#nossos-produtos" className="block py-2 px-3 font-bold text-original-black rounded">
                                    Nossos Produtos
                                </a>
                            </li>
                        </ul>

                        <button
                            type='button'
                            className="inline-flex items-center p-4 w-30 h-10 justify-center text-sm text-original-black rounded-[24px] border border-solid border-original-black hover:bg-original"
                            onClick={openModal}
                        >
                            <p>Solicite um orçamento</p>
                        </button>
                        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='relative z-50'>
                            <Dialog.Panel>
                                <Dialog.Title>Deactivate account</Dialog.Title>
                                <Dialog.Description>
                                    This will permanently deactivate your account
                                </Dialog.Description>

                                <p>
                                    Are you sure you want to deactivate your account? All of your data
                                    will be permanently removed. This action cannot be undone.
                                </p>

                                <button onClick={() => setIsOpen(false)}>Deactivate</button>
                                <button onClick={() => setIsOpen(false)}>Cancel</button>
                            </Dialog.Panel>
                        </Dialog>
                    </div>
                </div>
                {/* Aqui adicionamos o menu mobile */}
                {isMobileMenuOpen && (
                    <div className="bg-original z-30">
                        {/* Adicione aqui os itens do menu mobile */}
                        <ul className='absolute bg-original w-full p-2 left-0'>
                            <li className='relative mb-2'>
                                <a href="#quem-somos" className="block py-2 px-3 font-bold text-original-black rounded">
                                    Quem Somos
                                </a>
                            </li>
                            <li className='relative mb-2'>
                                <a href="#nossos-produtos" className="block py-2 px-3 font-bold text-original-black rounded">
                                    Nossos Produtos
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