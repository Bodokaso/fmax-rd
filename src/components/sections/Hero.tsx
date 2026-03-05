import { motion } from 'framer-motion';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[600px] md:min-h-[706px] pt-[100px] pb-[140px]">
      {/* Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img src="/images/hero-bg.jpeg" alt="F MAX RD construcción" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgb(16,20,24) 0%, rgba(16,20,24,0.69) 55%, rgba(16,20,24,0.03) 84%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-lg h-full flex flex-col justify-center">
        <div className="max-w-full md:max-w-[800px]">
          <motion.h1
            className="font-heading text-[40px] md:text-[70px] leading-tight md:leading-[77px] font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            EMPALME MECÁNICO TIPO 2 EXTRUIDO
          </motion.h1>

          <motion.p
            className="mt-[20px] mb-[40px] md:mb-[65px] max-w-[600px] text-white text-[16px] md:text-[20px] font-body leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Los conectores mecánicos te ahorrarán hasta un 10% del acero.
            Unión directa de barras sin modificar el acero de refuerzo.
            Solución eficiente, segura y compatible con normativas vigentes.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="btn-primary" onClick={() => scrollTo('proyectos')}>
              Ver Proyectos
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contacto')}>
              Contáctanos
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
