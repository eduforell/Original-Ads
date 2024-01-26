import Logo from '../assets/images/logo-originalads.png';
import MenuIcon from '../assets/icons/menu.svg';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const initialState = {
        name: '',
        email: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLoading) {
            return;
        }
        // Aqui você pode adicionar a lógica para enviar o e-mail usando uma API, por exemplo.
        console.log('Dados do formulário:', formData);
        // Resetar o formulário após o envio
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        setIsLoading(true);

        setTimeout(() => {
            setIsFormSubmitted(true);
            setFormData(initialState); // Redefine os campos do formulário
            setIsLoading(false);
        }, 1000);
    };

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
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                                    >
                                        {isFormSubmitted ? ('Solicitação Enviada') : ('Solicite um orçamento')}

                                    </Dialog.Title>
                                    <div className="mt-2">
                                        {isFormSubmitted ? (
                                            <>
                                                <p className="text-center text-gray-500 py-6">
                                                    Obrigado, seu pedido de orçamento foi recebido e em breve retornaremos seu contato.
                                                </p>
                                                <div className='flex items-center justify-center py-2'>
                                                    <button
                                                        type="button"
                                                        className="min-w-[100px] outline outline-1 bg-transparent justify-center items-center rounded-md border px-4 py-2 text-sm font-medium text-original-black hover:bg-gray-900 hover:outline-none hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        Fechar formulário
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <form onSubmit={handleSubmit}>
                                                <div className='py-4'>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                        placeholder="Nome"
                                                        value={formData.name} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className='py-4'>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        autoComplete="email"
                                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                        placeholder="E-mail"
                                                        value={formData.email} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className='py-4'>
                                                    <textarea
                                                        name="message"
                                                        rows={3}
                                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder='Mensagem / Orçamento'
                                                        value={formData.message} onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="mt-4 flex flex-row gap-4 items-end justify-end">
                                                    <button
                                                        type="button"
                                                        className="min-w-[100px] outline outline-1 bg-transparent inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium text-original-black hover:bg-gray-900 hover:outline-none hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                        onClick={closeModal}
                                                    >
                                                        Cancelar
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className={`min-w-[100px] outline outline-1 ${isLoading
                                                            ? 'bg-gray-300 cursor-not-allowed'
                                                            : 'bg-gray-900 hover:bg-original'
                                                            } inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium text-white focus:outline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                                                        onClick={handleSubmit}
                                                    >
                                                        {isLoading ? 'Enviando...' : 'Enviar'}
                                                    </button>
                                                </div>
                                            </form>
                                        )}
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