import React from 'react';
import { Helmet } from 'react-helmet-async';

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
}

export function WebsiteSchema({ 
  name = "TechVision Blog", 
  url = "https://techvision.com.br" 
}: WebsiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  author: string;
  url?: string;
}

export function ArticleSchema({ 
  title, 
  description, 
  image = 'https://picsum.photos/1200/630', 
  datePublished, 
  author,
  url = window.location.href 
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    url,
    publisher: {
      '@type': 'Organization',
      name: 'TechVision Blog',
      logo: {
        '@type': 'ImageObject',
        url: 'https://techvision.com.br/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}