import React from 'react';
import { useParams } from 'react-router-dom';
import { getPostsByCategory } from '../data';
import { PostCard } from '../components/PostCard';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/ui/Container';
import { Tag } from 'lucide-react';

const Category: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const categoryName = slug ? decodeURIComponent(slug) : '';
  const posts = getPostsByCategory(categoryName);

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <>
      <SEOHead 
        title={`Categoria: ${capitalize(categoryName)}`}
        description={`Artigos sobre ${categoryName} no TechVision Blog.`}
      />
      
      <div className="bg-slate-50 border-b border-gray-200 py-16">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-6">
              <Tag className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize">{categoryName}</h1>
            <p className="text-xl text-gray-600">
              Explorando todos os nossos conteúdos sobre {categoryName}.
            </p>
          </div>
        </Container>
      </div>

      <div className="py-16">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
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
          ) : (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-400">Nenhum post encontrado nesta categoria.</h2>
              <p className="mt-4 text-gray-500">Tente buscar por outra categoria ou volte para a home.</p>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default Category;