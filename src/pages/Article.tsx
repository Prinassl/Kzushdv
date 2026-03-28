import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { ChevronLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Статья не найдена</h1>
        <Link to="/blog" className="text-peach-600 hover:text-peach-700 font-medium">
          ← Вернуться в блог
        </Link>
      </div>
    );
  }

  return (
    <article className="pt-32 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link 
        to="/blog" 
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-peach-600 transition-colors mb-8"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Назад в блог
      </Link>
      
      <div className="text-sm text-peach-600 font-medium mb-4">{article.date}</div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
        {article.title}
      </h1>
      
      <div 
        className="prose prose-lg prose-peach max-w-none text-gray-700 leading-relaxed
        prose-h2:text-2xl prose-h2:font-bold prose-h2:text-gray-900 prose-h2:mt-10 prose-h2:mb-4
        prose-p:mb-6 prose-a:text-peach-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
        prose-strong:text-gray-900 prose-strong:font-semibold"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="mt-16 pt-8 border-t border-gray-100 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Готовы попробовать свободный интернет?</h3>
        <a 
          href="https://t.me/persik_vpnbot?start=utm_SEO" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-peach-500 hover:bg-peach-600 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          Подключить PersikVPN
        </a>
      </div>
    </article>
  );
}
