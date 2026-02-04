import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { WebsiteSchema } from '../components/SchemaOrg';
import { PostCard } from '../components/PostCard';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { posts } from '../data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const allPosts = posts;

  return (
    <>
      <SEOHead 
        title="Home"
        description="TechVision - O seu blog sobre tecnologia, inovação e inteligência artificial."
      />
      <WebsiteSchema />
      
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-gray-200 py-16 md:py-24">
        <Container>
           <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                Explorando o <span className="text-primary">Futuro</span> da<br /> Tecnologia.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Artigos profundos sobre desenvolvimento de software, inteligência artificial e o ecossistema tech.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
                  Ler Artigos
                </Button>
                <Link to="/about">
                  <Button variant="outline">
                    Sobre Nós
                  </Button>
                </Link>
              </div>
           </div>
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-white">
        <Container>
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Últimas Publicações</h2>
              <p className="text-gray-500 mt-2">Fique por dentro das novidades</p>
            </div>
            <Link to="/" className="hidden md:flex items-center text-primary font-medium hover:text-blue-700">
              Ver todos <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map(post => (
              <PostCard 
                key={post.id}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={new Date(post.date).toLocaleDateString('pt-BR')}
                image={post.image}
              />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Button className="w-full">
              Ver todos os artigos
            </Button>
          </div>
        </Container>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-900 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se a +10.000 desenvolvedores</h2>
            <p className="text-gray-300 text-lg mb-8">
              Receba artigos exclusivos, tutoriais e novidades sobre IA e desenvolvimento web.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Digite seu email profissional" 
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <Button type="submit" variant="primary" className="py-3 px-8">
                Inscrever-se
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;