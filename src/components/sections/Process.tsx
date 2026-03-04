import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Evaluación en Obra',
    text: 'Identificamos las barras con discontinuidad ya instaladas en el elemento estructural.',
  },
  {
    num: '02',
    title: 'Posicionamiento del Empalme',
    text: 'Se coloca el conector F-MAX a manera de camisa sobre las barras a unir.',
  },
  {
    num: '03',
    title: 'Extrusión Mecánica',
    text: 'La máquina FP65 (220V, 3KW) aplica presión controlada sobre las marcas blancas del conector.',
  },
  {
    num: '04',
    title: 'Control de Calidad',
    text: 'Se verifica la deformación con calibrador (pie de rey) según los rangos de la TABLA 1.',
  },
];

const Process = () => {
  return (
    <section className="py-[120px] bg-white">
      <div className="container-std grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[60px]">
        {/* COL 1 */}
        <div>
          <div className="bg-gray-300 w-full h-[300px] mb-6" />

          <div className="flex items-center gap-2 text-secondary text-[18px] mb-3">
            <span>⚡</span>
            <span>PROCESO DE APLICACIÓN</span>
          </div>

          <h2 className="font-heading text-[28px] md:text-[40px] font-bold text-dark leading-[48px]">
            ¿Cómo Se Instala el Empalme?
          </h2>

          <p className="text-body-text text-[20px] mt-4 mb-6">
            Nuestro equipo opera la máquina directamente en obra. El proceso es rápido,
            preciso y verificable.
          </p>

          <button className="btn-primary">Ver Proyectos</button>
        </div>

        {/* COL 2 — steps */}
        <div className="relative">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gray-200" />

          <motion.div
            className="absolute left-[23px] top-0 w-px bg-primary origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            style={{ height: '100%' }}
          />

          <div className="flex flex-col gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                className="flex items-start gap-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="w-[46px] h-[46px] rounded-full bg-primary shrink-0 flex items-center justify-center">
                  <span className="font-heading font-bold text-dark text-sm">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-dark text-xl">{step.title}</h3>
                  <p className="text-body-text font-body mt-1">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
