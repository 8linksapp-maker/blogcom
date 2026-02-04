import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';

const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead title="Página não encontrada" description="Erro 404" />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mt-4">Página não encontrada</h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link 
          to="/" 
          className="mt-8 px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
        >
          Voltar para Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;