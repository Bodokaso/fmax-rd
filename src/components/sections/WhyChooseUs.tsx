import { motion } from 'framer-motion';

const cards = [
  {
    title: 'NSR2010 y CCP-14',
    text: 'Cumplimos con las normas colombianas y latinoamericanas de construcción estructural.',
  },
  {
    title: 'ACI318 y ACI439',
    text: 'Estándares internacionales que garantizan la calidad y seguridad del empalme.',
  },
  {
    title: '550 MPa Garantizados',
    text: 'Cada empalme tipo 2 supera el esfuerzo mínimo requerido por normativa.',
  },
  {
    title: 'Servicio en Obra',
    text: 'Llevamos la máquina al sitio. Nuestro equipo instala y verifica in situ.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#101418] py-[120px] overflow-hidden md:min-h-[907px]">
      {/* Background images — desktop only */}
      <div
        className="absolute right-0 top-0 w-1/2 h-full hidden md:grid gap-2 p-2 z-0"
        style={{ gridTemplateRows: '1fr 1fr' }}
      >
        <img src="/images/why-choose-1.jpg" alt="F MAX RD en obra" className="w-full h-full object-cover" />
        <img src="/images/why-choose-2.jpg" alt="F MAX RD empalme" className="w-full h-full object-cover" />
      </div>

      {/* Spinning badge — desktop only */}
      <div
        className="hidden md:flex absolute z-20"
        style={{ right: 'calc(50% - 57px)', top: '50%', transform: 'translateY(-50%)' }}
      >
        <motion.div
          className="w-[115px] h-[115px] rounded-full bg-primary flex items-center justify-center cursor-pointer"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <span className="text-dark text-2xl font-bold">→</span>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="relative z-10 container-lg grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[60px] items-center">
        {/* COL 1 */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-primary text-[18px]">
            <span>⚡</span>
            <span>¿POR QUÉ F MAX RD?</span>
          </div>

          <h2 className="font-heading text-[28px] md:text-[40px] font-bold text-white leading-[48px]">
            Solución Estructural que Cumple las Normas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className="border border-white/10 p-[25px] flex flex-col gap-3"
                style={{ minHeight: '209px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-2xl">⚡</span>
                <h3 className="font-heading font-bold text-white text-lg">{card.title}</h3>
                <p className="text-white/70 font-body text-base">{card.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-primary font-body text-[18px] mt-4">
            ¿Necesitas empalmes mecánicos certificados? ¡Contáctanos hoy!
          </p>
        </motion.div>

        {/* COL 2 — image fills bg behind it (desktop only) */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
};

export default WhyChooseUs;
