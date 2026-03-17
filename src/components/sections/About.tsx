import { motion } from 'framer-motion';

const features = [
  'Continuidad estructural real incluso en zonas críticas',
  'Compatible con NSR10, CCP-14, ACI318 y ACI439',
  'Sin modificar el acero de refuerzo',
  'Ideal para espacios confinados y solapes insuficientes',
];

const About = () => {
  return (
    <section id="nosotros" className="py-[89px] md:py-[144px] bg-white">
      <div className="container-std grid grid-cols-1 gap-[34px] md:[grid-template-columns:minmax(0,1fr)_minmax(0,1.618fr)] md:gap-[55px] items-center">
        {/* COL 1 — image */}
        <img src="/images/about.jpg" alt="Empalme mecánico F MAX RD" className="w-full h-[250px] md:h-[520px] object-cover rounded-sm" />

        {/* COL 2 — content */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-[10px] text-secondary text-[18px]">
            
            <span>NUESTRO SERVICIO</span>
          </div>

          <h2 className="font-heading text-[28px] md:text-[52px] font-bold text-dark mt-[13px]">
            Empalme Mecánico Confiable para Obras Civiles
          </h2>

          <p className="text-body-text text-[20px] font-body mt-[21px]">
            En la ejecución de obras civiles es frecuente encontrar barras de acero con
            longitudes insuficientes, cortes imprecisos o arranques cortos que no permiten
            realizar empalmes por traslape de forma adecuada. El empalme mecánico extruido
            Tipo 2 ha sido diseñado para resolver eficazmente estas condiciones en obra,
            permitiendo la unión directa de las barras sin modificar el acero de refuerzo.
            Al tratarse de un sistema de unión por extrusión mecánica, se mantienen intactas
            las propiedades físico-químicas y mecánicas del acero, garantizando una conexión
            confiable y un comportamiento estructural adecuado.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[13px] my-[21px]">
            {features.map((feat) => (
              <div key={feat} className="flex items-center gap-2">
                <span className="text-primary">●</span>
                <span className="font-body text-dark font-medium text-base">{feat}</span>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
