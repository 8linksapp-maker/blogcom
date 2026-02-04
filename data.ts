import { Post } from './types';

export const posts: Post[] = [
  {
    id: '1',
    slug: 'o-futuro-da-ia-generativa',
    title: 'O Futuro da IA Generativa no Desenvolvimento',
    excerpt: 'Como as ferramentas de IA estão transformando a produtividade dos desenvolvedores e o que esperar para os próximos anos.',
    content: `
      <h2>A Revolução da IA no Código</h2>
      <p>A inteligência artificial generativa tem mudado radicalmente a forma como escrevemos software. Ferramentas como o Copilot e o ChatGPT não são apenas assistentes, mas parceiros de pair programming.</p>
      <br>
      <h3>Impacto na Produtividade</h3>
      <p>Estudos mostram que desenvolvedores que utilizam IA conseguem concluir tarefas até 55% mais rápido. Isso permite que o foco saia da sintaxe repetitiva para a arquitetura e solução de problemas complexos.</p>
    `,
    category: 'Inteligencia Artificial',
    author: 'Roberto Da silva',
    date: '2023-10-25',
    image: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '2',
    slug: 'react-server-components',
    title: 'Entendendo React Server Components',
    excerpt: 'Um mergulho profundo na nova arquitetura do React e como ela melhora a performance das suas aplicações web.',
    content: `
      <h2>O que são Server Components?</h2>
      <p>React Server Components (RSC) permitem que componentes sejam renderizados exclusivamente no servidor, reduzindo o bundle enviado para o cliente.</p>
    `,
    category: 'Tecnologia',
    author: 'Roberto Da silva',
    date: '2023-11-02',
    image: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    slug: 'impacto-ia-sociedade',
    title: 'O Impacto da IA na Sociedade Moderna',
    excerpt: 'Analisando os desafios éticos e as mudanças no mercado de trabalho causadas pela automação.',
    content: '<p>A automação impulsionada pela IA está redefinindo indústrias inteiras...</p>',
    category: 'Inteligencia Artificial',
    author: 'Roberto Da silva',
    date: '2024-01-15',
    image: 'https://picsum.photos/800/400?random=3'
  },
  {
    id: '4',
    slug: 'tendencias-web-2024',
    title: 'Tendências de Desenvolvimento Web para 2026',
    excerpt: 'O que esperar do ecossistema JavaScript e das novas APIs da plataforma web.',
    content: '<p>O ecossistema web continua evoluindo em um ritmo acelerado...</p>',
    category: 'Tecnologia',
    author: 'Roberto Da silva',
    date: '2024-01-20',
    image: 'https://picsum.photos/800/400?random=4'
  }
];

export const getPostBySlug = (slug: string) => posts.find(p => p.slug === slug);
export const getPostsByCategory = (category: string) => posts.filter(p => p.category.toLowerCase() === category.toLowerCase());
export const getAllCategories = () => Array.from(new Set(posts.map(p => p.category)));
