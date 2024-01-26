import PlusSign from '../assets/icons/plus.svg'
import { useState } from 'react';

const Orcamento = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="bg-original-dark1 flex flex-col md:flex-row items-center justify-center h-[280px] md:h-[180px] gap-4">
            <div className="w-full md:w-1/5 px-4 ">
                <h2 className=" text-white">Inscreva-se em nossa newsletter</h2>
            </div>
            <div className="w-full md:w-3/5 relative px-4">
                <input
                    type="text"
                    id="email"
                    className={`w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:border-original transition-all ${isFocused ? 'border-original' : ''
                        }`}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <label
                    htmlFor="email"
                    className={`absolute left-8 top-3 transition-all ${isFocused ? 'text-original scale-75 -translate-y-3' : 'text-gray-500 text-base'
                        }`}
                >
                    E-mail
                </label>
            </div>
            <div className="w-full md:w-1/5 px-4">
                <button className="bg-original text-dark-3 hover:bg-original-h py-4 px-8 rounded-[32px] flex flex-row items-center justify-center gap-2">
                    <img src={PlusSign} width={16} />
                    Enviar
                </button>
            </div>
        </div>
    )
}

export default Orcamento