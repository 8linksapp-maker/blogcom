import React from 'react';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../components/SEOHead';

const About: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Sobre Nós"
        description="Conheça a equipe e a missão do TechVision Blog."
      />
      <Container className="py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sobre o TechVision</h1>
          
          <div className="prose prose-lg prose-blue text-gray-600">
            <p className="lead text-xl mb-6">
              O TechVision Blog nasceu da necessidade de traduzir a complexidade do mundo tecnológico em conteúdo acessível, profundo e relevante.
            </p>
            
            <p className="mb-6">
              Nossa missão é explorar as fronteiras da inovação, focando especialmente em Inteligência Artificial e desenvolvimento de software de alta performance. Acreditamos que o conhecimento deve ser compartilhado para impulsionar a comunidade.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Nossa Equipe</h2>
            
            <div className="flex items-center gap-6 mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <img 
                src="https://picsum.photos/100/100?random=10" 
                alt="Roberto Da silva" 
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Roberto Da Silva</h3>
                <p className="text-primary font-medium">Especialista em IA</p>
                <p className="text-sm text-gray-500 mt-2">
                  Engenheiro de software com mais de 10 anos de experiência, apaixonado por machine learning e arquitetura de sistemas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;