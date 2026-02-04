import React from 'react';
import { Container } from '../components/ui/Container';
import { SEOHead } from '../components/SEOHead';

const Privacy: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Política de Privacidade"
        description="Política de privacidade do TechVision Blog."
      />
      <Container className="py-16">
        <div className="max-w-3xl mx-auto prose prose-blue text-gray-600">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
          
          <p>
            A sua privacidade é importante para nós. É política do TechVision Blog respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site TechVision Blog, e outros sites que possuímos e operamos.
          </p>
          
          <h3>1. Informações que coletamos</h3>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          
          <h3>2. Uso de Dados</h3>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>
          
          <h3>3. Cookies</h3>
          <p>
            Utilizamos cookies para analisar o tráfego e melhorar sua experiência. Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
          </p>

          <p className="mt-8 text-sm">
            Esta política é efetiva a partir de <strong>Janeiro de 2024</strong>.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Privacy;