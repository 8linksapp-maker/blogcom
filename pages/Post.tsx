import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { getPostBySlug } from '../data';
import { SEOHead } from '../components/SEOHead';
import { ArticleSchema } from '../components/SchemaOrg';
import { Calendar, ArrowLeft, Share2, User } from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

const Post: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;

  if (!post) {
    return <Navigate to="/404" />;
  }

  // Construct current URL for canonical and OpenGraph
  const currentUrl = `${window.location.origin}/post/${post.slug}`;

  return (
    <>
      <SEOHead 
        title={post.title} 
        description={post.excerpt}
        type="article"
        image={post.image}
        url={currentUrl}
        publishedTime={post.date}
        author={post.author}
      />
      <ArticleSchema 
        title={post.title}
        description={post.excerpt}
        image={post.image}
        datePublished={post.date}
        author={post.author}
        url={currentUrl}
      />
      
      <article className="bg-white min-h-screen pb-20">
        {/* Post Header */}
        <header className="relative py-20 bg-slate-50 border-b border-gray-100">
           <Container className="max-w-4xl">
             <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
               <ArrowLeft className="h-4 w-4 mr-2" />
               Voltar para home
             </Link>
             
             <div className="flex items-center space-x-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {post.category}
                </span>
             </div>

             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
               {post.title}
             </h1>

             <p className="text-xl text-gray-600 leading-relaxed mb-8">
               {post.excerpt}
             </p>

             <div className="flex items-center justify-between border-t border-gray-200 pt-8">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-bold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">Autor</p>
                  </div>
                </div>
                
                <div className="hidden sm:flex items-center space-x-6 text-gray-500 text-sm">
                   <div className="flex items-center">
                     <Calendar className="h-4 w-4 mr-2" />
                     {new Date(post.date).toLocaleDateString('pt-BR')}
                   </div>
                </div>
             </div>
           </Container>
        </header>

        {/* Cover Image */}
        {post.image && (
          <Container className="max-w-5xl -mt-10 mb-16 relative z-10">
             <img 
               src={post.image} 
               alt={post.title} 
               className="w-full h-auto rounded-2xl shadow-xl"
             />
          </Container>
        )}

        {/* Post Content */}
        <Container className="max-w-3xl">
           <div className="prose prose-lg prose-blue mx-auto prose-img:rounded-xl prose-headings:font-bold prose-headings:text-slate-900 text-gray-700">
             {/* Using dangerouslySetInnerHTML strictly for this mock data demonstration */}
             <div dangerouslySetInnerHTML={{ __html: post.content }} />
           </div>

           {/* Share Section */}
           <div className="mt-16 pt-8 border-t border-gray-200">
             <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-6 rounded-xl">
               <span className="font-bold text-gray-900 mb-4 sm:mb-0">Gostou deste artigo? Compartilhe!</span>
               <div className="flex space-x-4">
                 <Button variant="outline" className="flex items-center bg-white">
                   <Share2 className="h-4 w-4 mr-2" /> Twitter
                 </Button>
                 <Button variant="outline" className="flex items-center bg-white">
                   <Share2 className="h-4 w-4 mr-2" /> LinkedIn
                 </Button>
               </div>
             </div>
           </div>
        </Container>
      </article>
    </>
  );
};

export default Post;