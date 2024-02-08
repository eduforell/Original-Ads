import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="home-container">
      <div className="flex flex-col justify-center items-center mt-[200px] px-4">
        <h2 className="h2-bold">404</h2>
        <p className="semi-bold">Página não Encontrada</p>
        <p className="text-center">
          Parece que você se perdeu. Não se preocupe, <Link to="/" className='text-original hover:text-blue-600'>clique aqui</Link> para retornar ao
          nosso site.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
