import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog';

const Blog = () => {
  return (
    <section className="py-[60px] md:py-[120px] bg-white">
      <div className="container-std">
        {/* Title row */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-[50px]">
          <div className="max-w-full md:max-w-[60%]">
            <div className="flex items-center gap-2 text-secondary text-[18px] mb-3">
              <span>⚡</span>
              <span>BLOG</span>
            </div>
            <h2 className="font-heading text-[28px] md:text-[40px] font-bold text-dark leading-[48px]">
              Últimas Tendencias en Construcción Estructural
            </h2>
          </div>
          <button className="btn-primary shrink-0 self-start md:self-auto">
            Ver Todos los Artículos
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-white border border-gray-100 hover:shadow-md transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-300 w-full h-[240px]" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-secondary/10 text-secondary text-sm font-heading font-semibold px-3 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-body-text text-sm">📅</span>
                    <span className="text-body-text text-sm">{post.date}</span>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-dark text-xl mb-2 hover:text-secondary transition">
                  {post.title}
                </h3>
                <p className="text-body-text font-body text-base">{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
