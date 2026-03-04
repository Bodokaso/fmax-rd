import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section id="contacto" className="bg-[#1756B5] py-[80px]" style={{ minHeight: '397px' }}>
      <div className="container-std">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Top row */}
          <div className="flex justify-between items-center gap-[20px] mb-[20px]">
            <div style={{ maxWidth: '480px' }}>
              <p className="text-white text-[18px] font-body mb-2">
                ¿Listo para trabajar con nosotros?
              </p>
              <a
                href="mailto:fmaxrd@gmail.com"
                className="text-white font-body block hover:text-primary transition"
                style={{ fontSize: '38px', fontWeight: 500 }}
              >
                fmaxrd@gmail.com
              </a>
            </div>

            <h2
              className="font-heading font-bold text-white"
              style={{ fontSize: '70px', lineHeight: 1 }}
            >
              Contáctanos
            </h2>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20 my-[20px]" />

          {/* Bottom row */}
          <div className="flex justify-between items-center gap-[20px]">
            <p className="text-white font-body text-[20px]" style={{ maxWidth: '600px' }}>
              Empalmes mecánicos certificados para obras civiles. Eficientes, seguros y
              compatibles con normativas vigentes.
            </p>

            <a href="mailto:fmaxrd@gmail.com" className="btn-primary shrink-0">
              ⚡ Escríbenos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
