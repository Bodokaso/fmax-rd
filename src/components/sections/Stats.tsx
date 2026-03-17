import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../hooks/useCountUp';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const stats = [
  { value: 10, suffix: '%', label: 'Ahorro en Acero' },
  { value: 100, suffix: '%', label: 'Normativas locales e internacionales cumplidas' },
];


const Stats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [ctaCooldown, setCtaCooldown] = useState(false);

  return (
    <section className="relative pt-[89px] md:pt-[120px] pb-0">
      {/* Dark background block */}
      <div
        className="absolute top-0 left-0 w-full bg-[#101418] z-0"
        style={{ height: '600px' }}
      />

      <div className="relative z-10 container-std">
        {/* Stats bar */}
        <div
          ref={ref}
          className="relative flex items-center w-full mb-[34px] md:mb-[55px] py-[20px]"
        >
          <div className="flex-1 flex flex-col items-center text-center pr-[21px] md:pr-[55px]">
            <div className="flex items-end gap-1 mb-2">
              <span className="font-heading font-bold text-white leading-none text-[36px] md:text-[60px]">
                10%-15%
              </span>
            </div>
            <p className="text-white/70 font-body text-sm md:text-base mt-2 max-w-[120px] md:max-w-none text-center">{stats[0].label}</p>
          </div>
          <div className="w-px h-[60px] bg-white/20 shrink-0" />
          <div className="flex-1 flex flex-col items-center text-center pl-[21px] md:pl-[55px]">
            <div className="flex items-end gap-1 mb-2">
              <span className="font-heading font-bold text-white leading-none text-[36px] md:text-[60px]">
                {useCountUp(stats[1].value, 2000, inView)}{stats[1].suffix}
              </span>
            </div>
            <p className="text-white/70 font-body text-sm md:text-base mt-2 max-w-[120px] md:max-w-none text-center">{stats[1].label}</p>
          </div>
        </div>

        {/* CTA Grid */}
        <div id="contacto" className="bg-white grid grid-cols-1 md:grid-cols-2 items-center md:pr-[40px]">
          {/* COL 1 — image + phone overlay */}
          <div className="relative w-full min-h-[280px] md:min-h-[525px]">
            <img src="/images/stats-cta.webp" alt="F MAX RD equipo" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 flex items-center gap-[13px] p-[13px] md:p-[20px] bg-secondary w-full md:w-[320px] min-h-[80px] md:h-[100px] z-10">
              <div className="w-[60px] h-[60px] rounded-full bg-primary flex items-center justify-center shrink-0">
                <FaPhone className="text-dark text-lg" />
              </div>
              <div>
                <h3 className="text-white font-heading font-bold text-base">Teléfonos</h3>
                <div className="flex flex-col gap-1">
                  <a href="tel:+18294707193" className="text-white hover:text-primary transition font-body text-sm">
                    (829) 470-7193
                  </a>
                  <a href="tel:+18292594180" className="text-white hover:text-primary transition font-body text-sm">
                    (829) 259-4180
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COL 2 — CTA text */}
          <div className="flex flex-col justify-center gap-[13px] md:gap-[21px] p-[34px] md:py-10 md:pl-[55px]">
            <h2 className="font-heading text-[28px] md:text-[40px] font-bold text-dark leading-tight">
              Llámanos o Escríbenos!
            </h2>

            <p className="text-body-text text-[16px] md:text-[20px] font-body">
              Llevamos nuestra máquina directamente a tu obra. Cotiza con nosotros para
              columnas, muros, puentes, cimentaciones, hormigón celular o alquiler de planta eléctrica.
            </p>

            <a
              href={ctaCooldown ? undefined : "https://wa.me/18294707193?text=Hola%20F%20MAX%20RD%2C%20me%20interesa%20solicitar%20una%20cotizaci%C3%B3n."}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (!ctaCooldown) {
                  setCtaCooldown(true);
                  setTimeout(() => setCtaCooldown(false), 30000);
                }
              }}
              className={`btn-primary mt-2 inline-flex items-center gap-[13px] ${ctaCooldown ? 'opacity-70 cursor-not-allowed pointer-events-none' : ''}`}
            >
              <FaWhatsapp className="text-green-500 text-xl" />
              {ctaCooldown ? 'Enviado ✓' : 'Solicitar Cotización'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
