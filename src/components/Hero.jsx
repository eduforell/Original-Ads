import HeroBG from '../assets/images/hero-original.jpg'
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'

const scrollToNossosProdutos = () => {
    const nossosProdutosElement = document.getElementById('nossos-produtos');

    if (nossosProdutosElement) {
        nossosProdutosElement.scrollIntoView({
            behavior: 'smooth',
        });
    }
};

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const isMobile = window.innerWidth <= 767;

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

    const handleMobileOrNot = () => {
        if (isMobile) {
            window.location.href = '/solicitar-orcamento';
        } else {
            openModal();
        }
    };

    return (
        <>
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
                        <div className="flex min-h-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[280px] md:max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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

            <div className="home-container">
                <img src={HeroBG} className='hero-img mb-16 xs:mb-0' />
                <div className='hero-content'>

                    <h2 className="h1-hero mt-[480px] md:mt-[280px] text-original-black">
                        Solução tecnológica para Programmatic<br />Deals e Projetos Especiais
                    </h2>
                    <p className='text-original-black'>Original Ads</p>
                    <hr className="border w-[200px] border-original/100  mt-4 mb-4" />
                    <div className='flex flex-row gap-6'>
                        <button onClick={handleMobileOrNot} className='bg-original-black text-white w-[150px] h-[40px] md:w-[220px] md:h-[60px] rounded hover:border hover:invert hover:outline-1 hover:bg-transparent'>
                            <h4 className='text-sm md:h4-bold'>Fazer um orçamento</h4>
                        </button>
                        <button onClick={scrollToNossosProdutos} className='outline-1 border border-original-black text-original-black w-[150px] h-[40px] md:w-[220px] md:h-[60px] rounded hover:text-white hover:bg-original-black'>
                            <h4 className='text-sm md:h4-bold'>Nossos Produtos</h4>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero