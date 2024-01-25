import PlusSign from '../assets/icons/plus.svg'

const CTAMediaKit = () => {
    return (
        <div className="bg-original-dark flex flex-col items-center justify-center h-[300px]">
            <h2 className="h2-semibold text-white py-6">Baixe nosso media kit</h2>
            <a href="#" download>
                <button className="bg-original text-dark-3 py-4 px-8 rounded-[32px] flex flex-row items-center gap-2">
                    <img src={PlusSign} width={16} /> Baixar
                </button>
            </a>
        </div>
    )
}

export default CTAMediaKit