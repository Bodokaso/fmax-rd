import { motion } from 'framer-motion';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-[706px] pt-[100px] pb-[140px]">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#2a2a2a] w-full h-full">
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
        <div className="max-w-[800px]">
          <motion.h1
            className="font-heading text-[70px] leading-[77px] font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            EMPALME MECÁNICO TIPO 2 EXTRUIDO
          </motion.h1>

          <motion.p
            className="mt-[20px] mb-[65px] max-w-[600px] text-white text-[20px] font-body leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Solución estructural eficiente para obras civiles. Unión directa de barras sin
            modificar el acero de refuerzo. Ahorra hasta un 10% del acero.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
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
