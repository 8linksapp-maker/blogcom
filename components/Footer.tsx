import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Github, Twitter, Linkedin } from 'lucide-react';
import { Container } from './ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Cpu className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">TechVision</span>
              </div>
              <p className="text-gray-400 text-sm">
                Explorando as fronteiras da tecnologia, IA e desenvolvimento de software.
              </p>
            </div>

            {/* Links 1 */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Categorias</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/category/inteligencia artificial" className="hover:text-primary transition-colors">Inteligência Artificial</Link></li>
                <li><Link to="/category/tecnologia" className="hover:text-primary transition-colors">Tecnologia</Link></li>
              </ul>
            </div>

            {/* Links 2 */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Institucional</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-primary transition-colors">Sobre nós</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contato</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/terms" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Fique atualizado</h3>
              <p className="text-gray-400 text-sm mb-4">Receba as novidades mais recentes diretamente no seu email.</p>
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary placeholder-gray-500"
                />
                <button className="bg-primary hover:opacity-90 text-white font-medium py-2 rounded-lg transition-all">
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 TechVision Blog. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};