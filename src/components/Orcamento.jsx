import PlusSign from '../assets/icons/plus.svg'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Orcamento = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target.closest('form');

        try {
            await emailjs.sendForm('service_x27359p', 'template_zvzh6rp', form, 'Yk2U5_s-Kbo3wAJpZ');
            setEnviado(true);
            form.reset();
        } catch (error) {
            console.log('Falha ao enviar solicitação:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="bg-original-dark1 flex flex-col md:flex-row items-center justify-center h-[280px] md:h-[180px] gap-4">

                <div className="w-full md:w-1/5 px-4 ">
                    <h2 className=" text-white">Inscreva-se em nossa newsletter</h2>
                </div>
                <div className="w-full md:w-3/5 relative px-4">
                    <input
                        type="email"
                        name="email_from"
                        autoComplete="email"
                        className={`w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-original transition-all ${isFocused ? 'border-original' : ''}`}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        disabled={enviado}
                    />
                    <label
                        htmlFor="email_from"
                        className={`absolute left-8 top-3 transition-all ${isFocused ? 'text-original scale-75 -translate-y-3' : 'text-gray-500 text-base'
                            }`}
                    >
                        E-mail
                    </label>

                </div>
                <div className="w-full md:w-1/5 px-4">
                    <button type="button" onClick={handleSubmit} disabled={enviado} className="bg-original text-dark-3 hover:bg-original-h py-4 px-8 rounded-[32px] flex flex-row items-center justify-center gap-2">
                        {enviado ? (
                            <>
                                Obrigado
                            </>

                        ) : (
                            <>
                                <img src={PlusSign} width={16} />
                                Enviar
                            </>
                        )}

                    </button>
                </div>

            </div>
        </form>
    )
}

export default Orcamento