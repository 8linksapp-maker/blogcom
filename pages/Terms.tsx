import React from 'react';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../components/SEOHead';

const Terms: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Termos de Uso"
        description="Termos de uso do TechVision Blog."
      />
      <Container className="py-16">
        <div className="max-w-3xl mx-auto prose prose-blue text-gray-600">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
          
          <h3>1. Termos</h3>
          <p>
            Ao acessar ao site TechVision Blog, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
          </p>
          
          <h3>2. Uso de Licença</h3>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site TechVision Blog , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 
          </p>
          <ul>
            <li>modificar ou copiar os materiais; </li>
            <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </li>
            <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site TechVision Blog; </li>
          </ul>
          
          <h3>3. Isenção de responsabilidade</h3>
          <p>
            Os materiais no site da TechVision Blog são fornecidos 'como estão'. TechVision Blog não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Terms;