import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

export default function Blog() {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">Блог PersikVPN</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Полезные статьи о VPN, безопасности в сети и обходе блокировок.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="p-6 flex flex-col flex-1">
              <div className="text-sm text-peach-600 font-medium mb-2">{article.date}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                <Link to={`/blog/${article.slug}`} className="hover:text-peach-500 transition-colors">
                  {article.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-6 flex-1 line-clamp-3">{article.excerpt}</p>
              <Link 
                to={`/blog/${article.slug}`}
                className="inline-flex items-center text-peach-600 font-medium hover:text-peach-700 transition-colors"
              >
                Читать статью →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
