import { motion } from 'framer-motion';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section id="servicios" className="relative pt-[120px] pb-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[400px] z-0 bg-[#1a1a1a]" />

      <div className="container-std relative z-10">
        {/* Title area */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 mb-[50px]">
          <div className="max-w-full md:max-w-[550px]">
            <div className="flex items-center gap-2 text-primary text-[18px] mb-3">
              <span>⚡</span>
              <span>SERVICIOS</span>
            </div>
            <h2 className="font-heading text-[28px] md:text-[40px] font-bold text-white leading-[48px]">
              Empalmes Mecánicos para Cada Tipo de Estructura
            </h2>
          </div>

          <p className="hidden md:block text-white/70 text-base max-w-[300px]">
            Soluciones certificadas para todo tipo de elemento estructural.
          </p>

          <button className="btn-primary">Ver Servicios</button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white p-[30px] flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl">{service.icon}</span>
              <h3 className="font-heading font-bold text-dark text-xl">{service.title}</h3>
              <div className="w-full h-px bg-gray-100" />
              <p className="text-body-text font-body text-base">{service.description}</p>
              <div className="mt-auto">
                <div className="flex items-center gap-2 bg-dark text-white px-[27px] py-[20px] font-heading font-semibold text-[18px] hover:brightness-110 transition cursor-pointer mt-4">
                  Saber Más →
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
