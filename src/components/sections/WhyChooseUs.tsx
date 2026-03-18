import { motion } from 'framer-motion';

const cards = [
  {
    title: 'NSR10, CCP-14',
    text: 'Cumplimos con NSR10, CCP-14, ACI318 y ACI439 para garantizar empalmes Tipo 2 certificados.',
  },
  {
    title: 'ACI318 y ACI439',
    text: 'Pruebas de tracción según ACI 439. Resultado garantizado por muestra ensayada.',
  },
  {
    title: 'Servicio Integral',
    text: 'Llevamos la máquina al sitio, instalamos y verificamos. Todo en una sola visita.',
  },
  {
    title: 'Servicio en Obra',
    text: 'Llevamos la máquina al sitio. Nuestro equipo instala y verifica in situ.',
  },
  {
    title: 'Sin Tercio Medio',
    text: 'No depende del tercio medio. Permite continuidad estructural en zonas críticas.',
  },
  {
    title: 'Mejora Fluencia',
    text: 'Descongestionamiento de barras mejora la fluencia del hormigón en el elemento.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative bg-[#101418] py-[89px] md:py-[144px] overflow-hidden">
      <div className="container-lg grid grid-cols-1 gap-[55px] md:[grid-template-columns:minmax(0,1.618fr)_minmax(0,1fr)]">
        {/* COL 1 — Content */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-primary text-[18px]">
            <span>¿POR QUÉ F MAX RD?</span>
          </div>

          <h2 className="font-heading text-[28px] md:text-[52px] font-bold text-white leading-[1.3]">
            Solución Estructural que Cumple las Normas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[21px] mt-2">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                className="bg-[#1C2024] border border-white/10 p-[34px] flex flex-col gap-[21px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-white text-lg">{card.title}</h3>
                <div className="flex items-start gap-2">
                  <span className="text-primary text-sm leading-none mt-[6px]">●</span>
                  <p className="text-white/70 font-body text-base leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-primary font-body text-[18px] mt-4">
            ¿Necesitas empalmes mecánicos certificados? ¡Contáctanos hoy!
          </p>
        </motion.div>

        {/* COL 2 — Image grid */}
        <div className="hidden md:flex flex-col justify-center" style={{ paddingTop: '144px' }}>
        <div className="flex items-center justify-center">
        <div
          className="grid gap-[13px]"
          style={{
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            aspectRatio: '1 / 1',
            width: '104%',
          }}
        >
          {/* Position 1 — top left: invisible */}
          <div className="rounded-sm bg-transparent" />

          {/* Position 2 — top right: first image */}
          <div className="overflow-hidden rounded-sm">
            <img
              src="/images/why-choose-1.webp"
              alt="F MAX RD en obra"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Position 3 — bottom left: second image */}
          <div className="overflow-hidden rounded-sm">
            <img
              src="/images/why-choose-2.webp"
              alt="F MAX RD empalme"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Position 4 — bottom right: invisible */}
          <div className="rounded-sm bg-transparent" />
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
