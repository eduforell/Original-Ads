
const Copyright = () => {
    let currentYear = new Date().getFullYear();

    return (
        <p className="text-sm text-original text-center py-2">Original Ads &copy; {currentYear} - Todos os Direitos Reservados.</p>
    )
}

export default Copyright