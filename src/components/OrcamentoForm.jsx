import { useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

const OrcamentoForm = () => {
    const navigate = useNavigate();
    const [state, handleSubmit] = useForm("xzbnebpy");

    return (
        <>
            <div className="home-container">
                <div className="mt-2">
                    {state.succeeded ? (
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
                            <form onSubmit={handleSubmit} className='px-6'>
                                <div className='py-4'>
                                    <input
                                        type="text"
                                        name="name"
                                        id='name'
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Nome"
                                    />
                                    <ValidationError
                                        prefix="name"
                                        field="name"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className='py-4'>
                                    <input
                                        type="email"
                                        name="email"
                                        id='email'
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="E-mail"
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className='py-4'>
                                    <textarea
                                        name="message"
                                        id='message'
                                        rows={6}
                                        className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder='Mensagem / Orçamento'
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className="mt-4 flex flex-row gap-4 items-end justify-end">
                                    <button
                                        type="button"
                                        className="min-w-[100px] outline outline-1 bg-transparent inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium text-original-black hover:bg-gray-900 hover:outline-none hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={() => navigate(-1)}
                                    >
                                        Retornar ao Site
                                    </button>
                                    <button
                                        type="button"
                                        className={`min-w-[100px] outline outline-1 ${state.submitting
                                            ? 'bg-gray-300 cursor-not-allowed'
                                            : 'bg-gray-900 hover:bg-original'
                                            } inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium text-white focus:outline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
                                        onClick={handleSubmit}
                                    >
                                        {state.submitting ? 'Enviando...' : 'Enviar'}
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