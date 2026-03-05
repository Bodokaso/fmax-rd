import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <section id="proyectos" className="py-[120px] bg-white">
      <div className="container-std">
        {/* Title row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-[20px] md:gap-[40px] mb-[50px]">
          <div>
            <div className="flex items-center gap-2 text-secondary text-[18px] mb-3">
              <span>⚡</span>
              <span>PROYECTOS</span>
            </div>
            <h2 className="font-heading text-[28px] md:text-[40px] font-bold text-dark leading-[48px]">
              Nuestros Proyectos Más Recientes
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-body-text text-base md:text-right max-w-[300px]">
              Empalmes aplicados en obras civiles reales. Resultados verificables y
              certificados.
            </p>
            <button className="btn-primary">Ver Todos los Proyectos</button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={`/images/project-${project.id}.jpeg`}
                alt={project.title}
                className="w-full h-[280px] object-cover group-hover:brightness-110 transition duration-300"
              />
              <div className="bg-secondary text-white p-4">
                <p className="text-sm opacity-80 mb-1">
                  {project.date} — {project.location}
                </p>
                <div className="w-8 h-px bg-white/30 my-2" />
                <h3 className="font-heading font-semibold text-lg">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
