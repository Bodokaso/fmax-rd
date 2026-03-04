import { motion } from 'framer-motion';

const features = [
  'Continuidad Estructural Real',
  'Compatible con NSR2010 y CCP-14',
  'Sin modificar el acero de refuerzo',
  'Ideal para zonas críticas y confinadas',
];

const About = () => {
  return (
    <section id="nosotros" className="py-[120px] bg-white">
      <div className="container-std grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
        {/* COL 1 — image placeholder */}
        <div className="bg-gray-300 w-full h-[300px] md:h-[520px] rounded-sm" />

        {/* COL 2 — content */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-[10px] text-secondary text-[18px]">
            <span className="text-secondary">⚡</span>
            <span>SOBRE NOSOTROS</span>
          </div>

          <h2 className="font-heading text-[32px] md:text-[40px] font-bold leading-[48px] text-dark">
            Empalme Mecánico Confiable para Obras Civiles
          </h2>

          <p className="text-body-text text-[20px] font-body">
            Resolvemos problemas de barras cortas, cortes imprecisos y arranques
            insuficientes. Nuestro sistema de extrusión mecánica mantiene intactas las
            propiedades del acero.
          </p>

          <div className="grid grid-cols-2 gap-3 my-2">
            {features.map((feat) => (
              <div key={feat} className="flex items-start gap-2">
                <span className="text-primary">⚡</span>
                <span className="font-body text-dark font-medium text-base">{feat}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-2">
            <button className="btn-dark">Ver Más</button>
            <div className="bg-[#EEF3F6] p-5 rounded">
              <h3 className="text-[36px] font-bold text-secondary font-heading">550</h3>
              <div className="flex gap-1 my-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-primary">⭐</span>
                ))}
              </div>
              <p className="text-body-text text-sm">MPa mínimo garantizado</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
