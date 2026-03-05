import { motion } from 'framer-motion';

const features = [
  'Continuidad estructural real incluso en zonas críticas',
  'Compatible con NSR10, CCP-14, ACI318 y ACI439',
  'Sin modificar el acero de refuerzo',
  'Ideal para espacios confinados y solapes insuficientes',
];

const About = () => {
  return (
    <section id="nosotros" className="py-[120px] bg-white">
      <div className="container-std grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
        {/* COL 1 — image placeholder */}
        <img src="/images/about.jpg" alt="Empalme mecánico F MAX RD" className="w-full h-[300px] md:h-[520px] object-cover rounded-sm" />

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
            En la ejecución de obras civiles es frecuente encontrar barras de acero con
            longitudes insuficientes, cortes imprecisos o arranques cortos que no permiten
            realizar empalmes por traslape de forma adecuada. El empalme mecánico extruido
            Tipo 2 ha sido diseñado para resolver eficazmente estas condiciones en obra,
            permitiendo la unión directa de las barras sin modificar el acero de refuerzo.
            Al tratarse de un sistema de unión por extrusión mecánica, se mantienen intactas
            las propiedades físico-químicas y mecánicas del acero, garantizando una conexión
            confiable y un comportamiento estructural adecuado.
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
