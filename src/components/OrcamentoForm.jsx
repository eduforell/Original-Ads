import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useState } from 'react'

const OrcamentoForm = () => {
    const navigate = useNavigate();
    const [sending, setSending] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm('service_x27359p', 'template_du300br', e.target, 'Yk2U5_s-Kbo3wAJpZ');
            setSending(true);
            setEnviado(true);
        } catch (error) {
            console.log('Falha ao enviar solicitação:', error);
        }
    };

    return (
        <>
            <div className="home-container">
                <div className="mt-2">
                    {enviado ? (
                        <>
                            <p className="text-center text-gray-500 py-6">
                                Obrigado, seu pedido de orçamento foi recebido e em breve retornaremos seu contato.
                            </p>
                            <div className='flex items-center justify-center py-2'>
                                <button
                                    type="button"
                                    className="min-w-[100px] outline outline-1 bg-transparent justify-center items-center rounded-md border px-4 py-2 text-sm font-medium text-original-black hover:bg-gray-900 hover:outline-none hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={() => navigate(-1)}
                                >
                                    Retornar ao Site
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className='h3-bold text-center py-6'>Orcamento</h2>
                            <form onSubmit={handleSubmit}>
                                <div className='py-4'>
                                    <input
                                        type="text"
                                        name="from_name"
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Nome"
                                    />
                                </div>
                                <div className='py-4'>
                                    <input
                                        type="email"
                                        name="email_from"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="E-mail"
                                    />
                                </div>
                                <div className='py-4'>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder='Mensagem / Orçamento'
                                    />
                                </div>
                                <div className="mt-4 flex flex-row gap-4 items-end justify-end">
                                    <button
                                        type="submit"
                                        className={`min-w-[100px] outline outline-1 ${sending
                                            ? 'bg-gray-300 cursor-not-allowed'
                                            : 'bg-gray-900 hover:bg-original'
                                            } inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium text-white focus:outline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                                    >
                                        {sending ? 'Enviando...' : 'Enviar'}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>

            </div>
        </>
    )
}

export default OrcamentoForm